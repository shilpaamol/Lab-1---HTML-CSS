/*
DOM Selection:
    Get references to all form elements
    Store them in variables for easy access
Validation Functions:
    1. validateName() - Check if name contains only letters (no numbers or special characters)
    2. validateEmail() - Check if email format is valid (contains @ and domain)
    3. validateMessage() - Check if message is at least 20 and at max 40 characters long
    4. showError() - Display error message below the field
    5. clearError() - Remove error message when field is valid
    6. clearForm() - Clear all form fields after successful submission
Real-time Character Counter:
    Display "X characters" below message textarea
    Update counter as user types
    Change color to red if below 20 or above 40 characters
    Change color to green if 20 or more, but below 40 characters
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

// Get references to all form elements and Store them in variables for easy access
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

// Real-time Character Counter:
// Update message/counter as "x characters" as user types.
formMessage.addEventListener("keyup", function () {
    const msgCharCount = formMessage.value.length;
    formMsgCharCount.textContent = (`${msgCharCount} characters`);

    // Change message color to red if below 20 or above 40 characters,
    //  else change color to green
    const countError = (msgCharCount < 20 || msgCharCount > 40)
    formMessage.style.color =  countError ? "red" : "green";
    formMsgCharCount.style.color =  countError ? "red" : "green";
});

// Form Submission.
// Prevent page reload when form is submitted
form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!validateInputs()) {
        console.log("Please fix errors before submitting the form.");
        return;
    }

    // if all validations are successful submit the form and clear (reset) it
    form.submit();
    alert("The form submitted sucessfully.");

    // chache the "first name" before resetting the from.
    const firstName = formFirstName.value;

    form.reset();

    // Show personalized message on successful form Submission
    // Message should disappear automatically after 3 seconds
    elem = document.createElement("div");
    elem.id = 'myID';
    elem.innerHTML = `Thank you ${firstName}! I will contact you soon!`;
    form.appendChild(elem);
    setTimeout(function () { elem.innerHTML = ""; }, 3000);
});

// Check if name contains only letters (no numbers or special characters)
function validateName() {
    let retVal = true;
    formFirstNameErr.textContent = "";
    formLastNameErr.textContent = "";

    const errorNonAlpha = "Use letters: \"a\" to \"z\" or \"A\" to \"Z\".";
    const errorEmptyStr = "Cannot be empty.";

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
    formEmailErr.textContent = "";

    const email = formEmail.value;
    if (email.length === 0) {
        formEmailErr.textContent = "Cannot be empty.";
        return false;
    }

    const atSymbol = email.indexOf('@');
    const dot = email.lastIndexOf('.');
    if (atSymbol > 0 && dot > atSymbol) {
        return true;
    }
    formEmailErr.textContent = "Enter valid email.";
    return false;
}

function validateMessage() {
    formMessageErr.textContent = "";

    if (formMessage.value.length < 20) {
        formMessageErr.textContent = "Must contain at least 20 characters";
        return false;
    }
    else if (formMessage.value.length > 40) {
        formMessageErr.textContent = "Must contain at max 40 characters";
        return false;
    }
    return true;
}

// Validate inputs one by one.
// If validation of one of the inputs fails, we still need to continue
// validating the rest of the inputs so that ueer sees all errors at once.
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