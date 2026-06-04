// Expanded guest list with duplicates for testing
const guests = [
  {"name": "Adrian", "table": 6, "map": "images/Tischplan_highlight6.png"},
  {"name": "Alice", "table": 12, "map": "images/Tischplan_highlight12.png"},
  {"name": "Amelia", "table": 9, "map": "images/Tischplan_highlight9.png"},
  {"name": "Andrea G.", "table": 1, "map": "images/Tischplan_highlight1.png"},
  {"name": "Andrea T.", "table": 13, "map": "images/Tischplan_highlight13.png"},
  {"name": "Angelo", "table": 11, "map": "images/Tischplan_highlight11.png"},
  {"name": "Anika", "table": 11, "map": "images/Tischplan_highlight11.png"},
  {"name": "Anna-Maria", "table": 12, "map": "images/Tischplan_highlight12.png"},
  {"name": "Annabel", "table": 3, "map": "images/Tischplan_highlight3.png"},
  {"name": "Armin", "table": 5, "map": "images/Tischplan_highlight5.png"},
  {"name": "Arthur", "table": 11, "map": "images/Tischplan_highlight11.png"},
  {"name": "Aurelia", "table": 3, "map": "images/Tischplan_highlight3.png"},
  {"name": "Benedikt", "table": 9, "map": "images/Tischplan_highlight9.png"},
  {"name": "Binia", "table": 10, "map": "images/Tischplan_highlight10.png"},
  {"name": "Bruni", "table": 9, "map": "images/Tischplan_highlight9.png"},
  {"name": "Carla", "table": 3, "map": "images/Tischplan_highlight3.png"},
  {"name": "Chris", "table": 10, "map": "images/Tischplan_highlight10.png"},
  {"name": "Christel", "table": 5, "map": "images/Tischplan_highlight5.png"},
  {"name": "Christian", "table": 2, "map": "images/Tischplan_highlight2.png"},
  {"name": "Christine", "table": 4, "map": "images/Tischplan_highlight4.png"},
  {"name": "Christl", "table": 9, "map": "images/Tischplan_highlight9.png"},
  {"name": "Claudia", "table": 4, "map": "images/Tischplan_highlight4.png"},
  {"name": "Daniel", "table": 8, "map": "images/Tischplan_highlight8.png"},
  {"name": "Darko", "table": 2, "map": "images/Tischplan_highlight2.png"},
  {"name": "Elif", "table": 5, "map": "images/Tischplan_highlight5.png"},
  {"name": "Elsbeth", "table": 2, "map": "images/Tischplan_highlight2.png"},
  {"name": "Enrico", "table": 13, "map": "images/Tischplan_highlight13.png"},
  {"name": "Eric", "table": 13, "map": "images/Tischplan_highlight13.png"},
  {"name": "Eva J.S.", "table": 4, "map": "images/Tischplan_highlight4.png"},
  {"name": "Eva G.", "table": 6, "map": "images/Tischplan_highlight6.png"},
  {"name": "Felix (DJ)", "table": 1, "map": "images/Tischplan_highlight1.png"},
  {"name": "Felix E.", "table": 12, "map": "images/Tischplan_highlight12.png"},
  {"name": "Fiona", "table": 3, "map": "images/Tischplan_highlight3.png"},
  {"name": "Florian", "table": 7, "map": "images/Tischplan_highlight7.png"},
  {"name": "Franzi", "table": 2, "map": "images/Tischplan_highlight2.png"},
  {"name": "Friederike", "table": 10, "map": "images/Tischplan_highlight10.png"},
  {"name": "Gabe", "table": 11, "map": "images/Tischplan_highlight11.png"},
  {"name": "Gabor", "table": 5, "map": "images/Tischplan_highlight5.png"},
  {"name": "Hans", "table": 4, "map": "images/Tischplan_highlight4.png"},
  {"name": "Heiko", "table": 12, "map": "images/Tischplan_highlight12.png"},
  {"name": "Ildikó", "table": 4, "map": "images/Tischplan_highlight4.png"},
  {"name": "Ilona", "table": 13, "map": "images/Tischplan_highlight13.png"},
  {"name": "Isabel", "table": 3, "map": "images/Tischplan_highlight3.png"},
  {"name": "Isabelle", "table": 12, "map": "images/Tischplan_highlight12.png"},
  {"name": "Jan", "table": 13, "map": "images/Tischplan_highlight13.png"},
  {"name": "Jérôme", "table": 10, "map": "images/Tischplan_highlight10.png"},
  {"name": "Jiangning", "table": 6, "map": "images/Tischplan_highlight6.png"},
  {"name": "Johannes", "table": 3, "map": "images/Tischplan_highlight3.png"},
  {"name": "Jonah", "table": 7, "map": "images/Tischplan_highlight7.png"},
  {"name": "Jonathan", "table": 2, "map": "images/Tischplan_highlight2.png"},
  {"name": "Jörg", "table": 2, "map": "images/Tischplan_highlight2.png"},
  {"name": "Julia", "table": 7, "map": "images/Tischplan_highlight7.png"},
  {"name": "Julia B.", "table": 8, "map": "images/Tischplan_highlight8.png"},
  {"name": "Julia W.", "table": 8, "map": "images/Tischplan_highlight8.png"},
  {"name": "Jutta", "table": 5, "map": "images/Tischplan_highlight5.png"},
  {"name": "Katharina", "table": 4, "map": "images/Tischplan_highlight4.png"},
  {"name": "Katrin", "table": 12, "map": "images/Tischplan_highlight12.png"},
  {"name": "Killian", "table": 3, "map": "images/Tischplan_highlight3.png"},
  {"name": "Kim", "table": 11, "map": "images/Tischplan_highlight11.png"},
  {"name": "Lara", "table": 11, "map": "images/Tischplan_highlight11.png"},
  {"name": "Laura", "table": 10, "map": "images/Tischplan_highlight10.png"},
  {"name": "Leonie", "table": 2, "map": "images/Tischplan_highlight2.png"},
  {"name": "Levin", "table": 9, "map": "images/Tischplan_highlight9.png"},
  {"name": "Luca", "table": 7, "map": "images/Tischplan_highlight7.png"},
  {"name": "Lucas", "table": 13, "map": "images/Tischplan_highlight13.png"},
  {"name": "Lukas", "table": 3, "map": "images/Tischplan_highlight3.png"},
  {"name": "Marcel", "table": 2, "map": "images/Tischplan_highlight2.png"},
  {"name": "Marco", "table": 6, "map": "images/Tischplan_highlight6.png"},
  {"name": "Marie", "table": 9, "map": "images/Tischplan_highlight9.png"},
  {"name": "Markus", "table": 7, "map": "images/Tischplan_highlight7.png"},
  {"name": "Mathias", "table": 10, "map": "images/Tischplan_highlight10.png"},
  {"name": "Maya", "table": 6, "map": "images/Tischplan_highlight6.png"},
  {"name": "Michael", "table": 5, "map": "images/Tischplan_highlight5.png"},
  {"name": "Michi F.", "table": 8, "map": "images/Tischplan_highlight8.png"},
  {"name": "Michi S.", "table": 3, "map": "images/Tischplan_highlight3.png"},
  {"name": "Miral", "table": 11, "map": "images/Tischplan_highlight11.png"},
  {"name": "Mustafa", "table": 1, "map": "images/Tischplan_highlight1.png"},
  {"name": "Myriam", "table": 10, "map": "images/Tischplan_highlight10.png"},
  {"name": "Nadia", "table": 10, "map": "images/Tischplan_highlight10.png"},
  {"name": "Natasha", "table": 13, "map": "images/Tischplan_highlight13.png"},
  {"name": "Nelly", "table": 5, "map": "images/Tischplan_highlight5.png"},
  {"name": "Nico", "table": 3, "map": "images/Tischplan_highlight3.png"},
  {"name": "Nicola", "table": 7, "map": "images/Tischplan_highlight7.png"},
  {"name": "Nicole", "table": 6, "map": "images/Tischplan_highlight6.png"},
  {"name": "Nina", "table": 1, "map": "images/Tischplan_highlight1.png"},
  {"name": "Noah", "table": 6, "map": "images/Tischplan_highlight6.png"},
  {"name": "Odysseas", "table": 11, "map": "images/Tischplan_highlight11.png"},
  {"name": "Oliver G.", "table": 1, "map": "images/Tischplan_highlight1.png"},
  {"name": "Oliver S.", "table": 12, "map": "images/Tischplan_highlight12.png"},
  {"name": "Oscar", "table": 13, "map": "images/Tischplan_highlight13.png"},
  {"name": "Patricia", "table": 7, "map": "images/Tischplan_highlight7.png"},
  {"name": "Patrick", "table": 1, "map": "images/Tischplan_highlight1.png"},
  {"name": "Philipp", "table": 8, "map": "images/Tischplan_highlight8.png"},
  {"name": "Richard", "table": 9, "map": "images/Tischplan_highlight9.png"},
  {"name": "Robert", "table": 4, "map": "images/Tischplan_highlight4.png"},
  {"name": "Roman", "table": 6, "map": "images/Tischplan_highlight6.png"},
  {"name": "Sabrina", "table": 9, "map": "images/Tischplan_highlight9.png"},
  {"name": "Sigi", "table": 5, "map": "images/Tischplan_highlight5.png"},
  {"name": "Sophia", "table": 8, "map": "images/Tischplan_highlight8.png"},
  {"name": "Stefan", "table": 7, "map": "images/Tischplan_highlight7.png"},
  {"name": "Sylwester", "table": 9, "map": "images/Tischplan_highlight9.png"},
  {"name": "Tabea", "table": 6, "map": "images/Tischplan_highlight6.png"},
  {"name": "Thomas", "table": 4, "map": "images/Tischplan_highlight4.png"},
  {"name": "Tim", "table": 12, "map": "images/Tischplan_highlight12.png"},
  {"name": "Tina", "table": 5, "map": "images/Tischplan_highlight5.png"},
  {"name": "Tobias", "table": 1, "map": "images/Tischplan_highlight1.png"},
  {"name": "Tomás", "table": 13, "map": "images/Tischplan_highlight13.png"},
  {"name": "Ursula", "table": 2, "map": "images/Tischplan_highlight2.png"},
  {"name": "Valerie", "table": 8, "map": "images/Tischplan_highlight8.png"},
  {"name": "Vincent", "table": 13, "map": "images/Tischplan_highlight13.png"},
  {"name": "Volker", "table": 5, "map": "images/Tischplan_highlight5.png"},
  {"name": "Waldemar", "table": 4, "map": "images/Tischplan_highlight4.png"},
  {"name": "Waner", "table": 8, "map": "images/Tischplan_highlight8.png"},
  {"name": "Yanna", "table": 6, "map": "images/Tischplan_highlight6.png"},
  {"name": "Yueheng", "table": 11, "map": "images/Tischplan_highlight11.png"},
];





function findTable() {
  const inputName = document.getElementById('nameInput').value.trim().toLowerCase();
  const namePickerContainer = document.getElementById('namePickerContainer');
  const nameButtonsList = document.getElementById('nameButtonsList');
  const resultContainer = document.getElementById('resultContainer');
  
  // Clear previous results
  nameButtonsList.innerHTML = "";
  namePickerContainer.classList.add('hidden');
  resultContainer.classList.add('hidden');
  
  if (!inputName) {
    alert("Bitte geben Sie einen Namen ein");
    return;
  }

  // 1. Find all partial matches
  const matchingGuests = guests.filter(g => g.name.toLowerCase().includes(inputName));

  // 2. If there's an exact case-insensitive match, prefer it and auto-select
  const exactMatches = matchingGuests.filter(g => g.name.toLowerCase() === inputName);

  if (exactMatches.length === 1) {
    // A single exact match -> show immediately
    displayFinalResult(exactMatches[0]);
    return;
  }

  if (matchingGuests.length === 0) {
    // No match found
    resultContainer.classList.remove('hidden');
    document.getElementById('tableNum').innerText = "Name nicht gefunden. Bitte überprüfe die Rechtschreibung. Name not found. Please check your spelling.";
    document.getElementById('mapImg').style.display = "none";
    return;
  }

  // If multiple exact matches exist (duplicate full names), show those choices;
  // otherwise fall back to showing all partial matches
  const choices = exactMatches.length > 1 ? exactMatches : matchingGuests;

  // Multiple matches found -> Show choice buttons
  namePickerContainer.classList.remove('hidden');
  
  choices.forEach(guest => {
    const button = document.createElement('button');
    button.className = 'name-select-btn';
    button.innerText = guest.name;
    // When clicked, show this specific guest's map
    button.onclick = function() {
      namePickerContainer.classList.add('hidden'); // Hide the choices
      displayFinalResult(guest);
    };
    nameButtonsList.appendChild(button);
  });
}

// Separate function to handle displaying the table and map
function displayFinalResult(guest) {
  const resultContainer = document.getElementById('resultContainer');
  const tableNum = document.getElementById('tableNum');
  const mapImg = document.getElementById('mapImg');
  
  resultContainer.classList.remove('hidden');
  tableNum.innerText = `${guest.name}, deine Tischnummer ist ${guest.table}`;
  mapImg.src = guest.map;
  mapImg.style.display = "block";
}

// Allow pressing Enter in the input to trigger the search
const nameInputEl = document.getElementById('nameInput');
if (nameInputEl) {
  nameInputEl.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      findTable();
    }
  });
}
