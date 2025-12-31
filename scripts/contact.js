/*
DOM Selection:
    Get references to all form elements
    Store them in variables for easy access
Validation Functions:
    1. validateName() - Check if name contains only letters (no numbers or special characters)
    2. validateEmail() - Check if email format is valid (contains @ and domain)
    3. validateMessage() - Check if message is at least 20 characters long
    4. showError() - Display error message below the field
    5. clearError() - Remove error message when field is valid
    6. clearForm() - Clear all form fields after successful submission
Real-time Character Counter:
    Display "X/20 characters" below message textarea
    Update counter as user types
    Change color to red if below 20 characters
    Change color to green if 20 or more characters
Form Submission:
    Prevent page reload when form is submitted (hint: event.preventDefault())
    Validate all required fields
    If errors exist: Show all error messages
    If valid: Show success message and clear form
Success Message:
    Show personalized message: "Thank you [First Name]! I will contact you soon!"
    Message should disappear automatically after 3 seconds
    Use setTimeout() for automatic disappearance
*/

// DOM Selection:
// Get references to all form elements
// Store them in variables for easy access
const form = document.getElementById("idContactMeForm");
const formFirstName = document.getElementById("idFirstName");
const formFirstNameErr = document.getElementById("idFirstNameErr");
const formLastName = document.getElementById("idLastName");
const formLastNameErr = document.getElementById("idLastNameErr");
const formEmail = document.getElementById("idEmail");
const formEmailErr = document.getElementById("idEmailErr");
const formPhone = document.getElementById("idPhone");
const formSubject = document.getElementById("idSubject");
const formMessage = document.getElementById("idMessage");
const formMessageErr = document.getElementById("idMessageErr");
const formMsgCharCount = document.getElementById("idMessageCharCount");
const formSubmitBtn = document.getElementById("idSubmitButton");
const formResetBtn = document.getElementById("idResetButton");

// Validation Functions:
// 4. showError() - Display error message below the field
// 5. clearError() - Remove error message when field is valid
// 6. clearForm() - Clear all form fields after successful submission

// Real-time Character Counter:
// Update message/counter as "x/20 characters" as user types
formMessage.addEventListener("keyup", function () {
    const msgCharCount = formMessage.value.length;
    formMsgCharCount.textContent = (`${msgCharCount}/20 characters`);

    // Change message color to red if below 20 characters, else change color to green
    formMessage.style.color = (msgCharCount < 20) ? "red" : "green";
});

// Form Submission:
// Prevent page reload when form is submitted (hint: event.preventDefault())
form.addEventListener("submit", function (event) {
    event.preventDefault();

    // if all validations are successful submit the form and clear it
    if (validateInputs()) {
        alert("The form submitted sucessfully.");
        form.submit();
    }
    else {
        console.log("Please fix errors before submitting the form.");
    }
});

// Check if name contains only letters (no numbers or special characters)
function validateName() {
    let retVal = true;
    formFirstNameErr.textContent = "";
    formLastNameErr.textContent = "";

    const errorNonAlpha = "Please use only letters: \"a\" to \"z\" or \"A\" to \"Z\".";
    const errorEmptyStr = "This field cannot be empty.";

    const regExp = /[a-zA-Z]/; // We are allowing ASCII alpha characters only

    // validate first name
    if (formFirstName.value.length === 0) {
        formFirstNameErr.textContent = errorEmptyStr;
        retVal &= false;
    }
    else if (!regExp.test(formFirstName.value)) {
        formFirstNameErr.textContent = errorNonAlpha;
        retVal &= false;
    }

    // validate last name
    if (formLastName.value.length === 0) {
        formLastNameErr.textContent = errorEmptyStr;
        retVal &= false;
    }
    else if (!regExp.test(formLastName.value)) {
        formLastNameErr.textContent = errorNonAlpha;
        retVal &= false;
    }

    return retVal;
}

function validateEmail() {
    let retVal = true;
    formEmailErr.textContent = "";

    const errorNonAlpha = "Please use only letters: \"a\" to \"z\" or \"A\" to \"Z\".";
    const errorEmptyStr = "This field cannot be empty.";

    const regExp = /[a-zA-Z]/; // We are allowing ASCII alpha characters only

    if (formEmail.value.length === 0) {
        formEmailErr.textContent = errorEmptyStr;
        retVal &= false;
    }
    /*else if (!regExp.test(formEmail.value)) {
        formEmailErr.textContent = errorNonAlpha;
        retVal &= false;
    }
    return retVal;*/
    return retVal;
}

function validateMessage() {
    formMessageErr.textContent = "";
    if (formMessage.value.length < 20) {
        formMessageErr.textContent = "The message must contain at least 20 characters";
        return false;
    }
    return true;
}

function validateInputs() {
    let retVal = true;
    if (!validateName()) {
        retVal &= false;
    }

    if (!validateEmail()) {
        retVal &= false;
    }

    if (!validateMessage()) {
        retVal &= false;
    }

    return retVal;
}
// Validate all required fields
// If errors exist: Show all error messages
// If valid: Show success message and clear form

// Success Message:
// Show personalized message: "Thank you [First Name]! I will contact you soon!"
// Message should disappear automatically after 3 seconds
// Use setTimeout() for automatic disappearance