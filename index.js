// Get DOM elements 
const medicineNameInput = document.getElementById('medicine-name'); 
const medicineDetails = document.getElementById('medicine-details');
const orderButton = document.getElementById('order');
const ordersSection = document.getElementById('orders');

// API URL
const apiURL = 'https://api.example.com/medicines';


// Function to fetch medicine details
async function getMedicineDetails(name) {

  // API request 
  const response = await fetch(apiURL + '?medicine=' + name);
  
  // Parse response data
  const details = await response.json(); 
  
  // Display details  
  displayMedicineDetails(details);

}

// Display medicine details  
function displayMedicineDetails(details) {

  medicineDetails.innerText = '';
  
  // Add medicine details to DOM
  const name = document.createElement('div');
  name.innerText = details.name;
  medicineDetails.appendChild(name);
  
  // Other details
  medicineDetails.appendChild(/*...other details...*/);

}


// Event listener for search form submit  
searchForm.addEventListener('submit', event => {

  event.preventDefault();
  
  // Get entered medicine name
  const name = medicineNameInput.value; 
  
  getMedicineDetails(name);

});


// Handle order button click
orderButton.addEventListener('click', () => {

  // Send order request to API 
  
  // Display order in orders section
  
});