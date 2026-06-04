#!/usr/bin/env python3
"""Convert a CSV with Name and Table columns into a JavaScript guests array."""

from __future__ import annotations

import argparse
import csv
import json
import re
from pathlib import Path
from typing import Any


def build_guest(row: dict[str, str], name_column: str, table_column: str, image_dir: str) -> dict[str, Any]:
    name = row[name_column].strip()
    table_text = row[table_column].strip()

    try:
        table = int(table_text)
    except ValueError:
        table = table_text

    return {
        "name": name,
        "table": table,
        "map": f"{image_dir}/Tischplan_highlight{table_text}.png",
    }


def convert_csv_to_js(csv_path: Path, name_column: str, table_column: str, image_dir: str) -> str:
    with csv_path.open(newline="", encoding="utf-8-sig") as handle:
        reader = csv.DictReader(handle)
        if reader.fieldnames is None:
            raise ValueError("CSV file has no header row.")

        missing = [column for column in (name_column, table_column) if column not in reader.fieldnames]
        if missing:
            raise ValueError(
                f"Missing required column(s): {', '.join(missing)}. Found: {', '.join(reader.fieldnames)}"
            )

        guests = []
        for row in reader:
            if not row.get(name_column, "").strip() and not row.get(table_column, "").strip():
                continue
            guests.append(build_guest(row, name_column, table_column, image_dir))

    lines = ["const guests = ["]
    for guest in guests:
        lines.append(f"  {json.dumps(guest, ensure_ascii=False)},")
    lines.append("];\n")
    return "\n".join(lines)


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("csv_file", type=Path, help="Input CSV file path")
    parser.add_argument("-o", "--output", type=Path, help="Optional output .js file")
    parser.add_argument("--name-column", default="Name", help="CSV column for guest names")
    parser.add_argument("--table-column", default="Table", help="CSV column for table numbers")
    parser.add_argument(
        "--image-dir",
        default="images",
        help="Directory that contains the table map images",
    )
    parser.add_argument(
        "--script-file",
        type=Path,
        help="Optional path to a JavaScript file whose `const guests = [...]` block will be replaced by the generated array",
    )
    args = parser.parse_args()

    js = convert_csv_to_js(args.csv_file, args.name_column, args.table_column, args.image_dir)

    if args.script_file:
        script_path: Path = args.script_file
        if not script_path.exists():
            raise SystemExit(f"Script file does not exist: {script_path}")

        content = script_path.read_text(encoding="utf-8")
        # Pattern to match `const guests = [ ... ];` including multiline content
        pattern = re.compile(r"const\s+guests\s*=\s*\[.*?\];", re.DOTALL)

        if not pattern.search(content):
            # If no guests block found, prepend the generated array
            new_content = js + "\n" + content
            backup_path = script_path.with_name(script_path.name + ".bak")
            backup_path.write_text(content, encoding="utf-8")
        else:
            # Backup the original script
            backup_path = script_path.with_name(script_path.name + ".bak")
            backup_path.write_text(content, encoding="utf-8")
            new_content = pattern.sub(js, content, count=1)

        script_path.write_text(new_content, encoding="utf-8")
        print(f"Replaced guests array in {script_path} (backup at {backup_path})")
    else:
        if args.output:
            args.output.write_text(js, encoding="utf-8")
        else:
            print(js, end="")


if __name__ == "__main__":
    main()
