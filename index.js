// API URL
let info = []
document.addEventListener('DOMContentLoaded', function() {
  fetch('http://localhost:3000/drugs')
      .then(response => response.json())
      .then(drugs => {
          info = drugs
          drugDetails(info[0])
      })
});


// Function to fetch medicine details
 async function drugDetails(name) {

  const drugDetails = document.getElementById('drugDetails')
  drugDetails.innerHTML = `
  <h3>${name.name}</h3>
  <p>${name.usage}</p>
  <p${name.type}"></p>
  <p>${name.sideEffects}</p>
  `;
}

// Display medicine details  
function displayDrugDetails() {

  let searchForm = document.querySelector('input')
  searchForm.addEventListener('submit', () => {
        // Get entered medicine name
    const name = medicineNameInput.value; 
    
    drugDetails(name)
})
}

// Event listener for search form submit  


// Handle order button click
orderButton.addEventListener('click', () => {

  // Send order request to API 
  
  // Display order in orders section
  
});