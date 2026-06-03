// Expanded guest list with duplicates for testing
const guests = [
  { name: "Nicbro Seeverse", table: 3, map: "https://placehold.co/400x300/e3f2fd/0d47a1?text=Map:+Table+3+Highlighted" },
  { name: "Alice Cooper", table: 1, map: "https://placehold.co/400x300/e8f5e9/1b5e20?text=Map:+Table+1+Highlighted" },
  { name: "John Doe", table: 5, map: "https://placehold.co/400x300/fbe9e7/d84315?text=Map:+Table+5+Highlighted" },
  { name: "John Wayne", table: 2, map: "https://placehold.co/400x300/fff3e0/e65100?text=Map:+Table+2+Highlighted" },
  { name: "Bob Jones", table: 4, map: "https://placehold.co/400x300/f3e5f5/4a148c?text=Map:+Table+4+Highlighted" }
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
    alert("Please enter a name");
    return;
  }

  // 1. Use .filter() instead of .find() to get ALL matching guests
  const matchingGuests = guests.filter(g => g.name.toLowerCase().includes(inputName));
  
  if (matchingGuests.length === 0) {
    // No match found
    resultContainer.classList.remove('hidden');
    document.getElementById('tableNum').innerText = "Name not found. Please check spelling.";
    document.getElementById('mapImg').style.display = "none";
  } 
  else if (matchingGuests.length === 1) {
    // Exactly one match found -> Show table immediately
    displayFinalResult(matchingGuests[0]);
  } 
  else {
    // Multiple matches found -> Show choice buttons
    namePickerContainer.classList.remove('hidden');
    
    matchingGuests.forEach(guest => {
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
}

// Separate function to handle displaying the table and map
function displayFinalResult(guest) {
  const resultContainer = document.getElementById('resultContainer');
  const tableNum = document.getElementById('tableNum');
  const mapImg = document.getElementById('mapImg');
  
  resultContainer.classList.remove('hidden');
  tableNum.innerText = `${guest.name}, you are at Table ${guest.table}`;
  mapImg.src = guest.map;
  mapImg.style.display = "block";
}
