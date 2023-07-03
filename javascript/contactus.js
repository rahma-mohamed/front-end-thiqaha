const form = document.querySelector('form');
const fullName = document.querySelector('input[name="fullName"]');
const emailAddress = document.querySelector('input[name="emailAddress"]');
const message = document.querySelector('textarea[name="message"]');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const fullNameValue = formData.get('fullName');
  const emailAddressValue = formData.get('emailAddress');
  const messageValue = formData.get('message');
  console.log(fullNameValue, emailAddressValue, messageValue);
  // You can replace the console.log with your own code to send the form data to a server or perform any other action.
});