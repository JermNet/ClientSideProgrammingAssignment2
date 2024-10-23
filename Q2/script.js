function validateEmail(event) {
    //What this does is cancel the default event for the button to prevent it from submiting the form
    event.preventDefault();

    const emailInput = document.getElementById("emailInput");
    const emailError = document.getElementById("emailError");
    //Standard regex for checking emails
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const email = emailInput.value.trim();

    if(email === '') {
        emailError.textContent = "Your email cannot be empty!";
        emailError.style.display = "block";
    }
    //Checks against the regex
    else if (!emailRegex.test(email)) {
        emailError.textContent = "Not a valid email format!";
        emailError.style.display = "block";
    }
    else {
        emailError.style.display = "none";

        alert("Thank you for entering your email!");
    }
}