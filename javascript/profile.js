// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;
    const phone = document.querySelector('#phone').value;
    const imei = document.querySelector('#imei').value;
    const address = document.querySelector('#address').value;
  
    // TODO: Save changes to user profile
  }
  
  // Add event listener to form submit button
  const form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubmit);