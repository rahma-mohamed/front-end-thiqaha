function validateForm() {
    // Get form inputs
    var username = document.getElementById("username").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    // Check if inputs are empty
    if (username == "" || phone == "" || email == "" || password == "" || confirmPassword == "") {
        alert("Please fill in all fields.");
        return false;
    }

    // Check if password and confirm password match
    if (password != confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    // Check if phone number is valid
    var phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        alert("Please enter a valid phone number.");
        return false;
    }

    // Check if email is valid
    var emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // If all validations pass, submit the form
    return true;
}