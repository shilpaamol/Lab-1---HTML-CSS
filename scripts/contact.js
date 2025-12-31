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
const formLastName = document.getElementById("idLastName");
const formEmail = document.getElementById("idEmail");
const formPhone = document.getElementById("idPhone");
const formSubject = document.getElementById("idSubject");
const formMessage = document.getElementById("idMessage");
const formMsgCharCount = document.getElementById("idMessageCharCount");
const formSubmitBtn = document.getElementById("idSubmitButton");
const formResetBtn = document.getElementById("idResetButton");

// Validation Functions:
// 1. validateName() - Check if name contains only letters (no numbers or special characters)
// 2. validateEmail() - Check if email format is valid (contains @ and domain)
// 3. validateMessage() - Check if message is at least 20 characters long
// 4. showError() - Display error message below the field
// 5. clearError() - Remove error message when field is valid
// 6. clearForm() - Clear all form fields after successful submission

// Real-time Character Counter:
// Update counter "x/20 characters" as user types
formMessage.addEventListener("keyup", function(){
    const text = formMessage.value;
    const count = text.length;
    formMsgCharCount.textContent = (`${count}/20 characters`);

    // Change message color to red if below 20 characters, else change color to green
    formMessage.style.color = (count < 20) ? "red" : "green";
});

// Form Submission:
// Prevent page reload when form is submitted (hint: event.preventDefault())
form.addEventListener("submit", function(event){
    event.preventDefault();

    // if all validations are successful submit the form and clear it
    if (validateInputs())
    {
        console.log("Form submitted via JavaScript after performing all validations.");
        form.submit();
    }
    else
    {
        console.log("Please fix errors before submitting the form.");
    }
});

function validateInputs()
{
    return true;
}
// Validate all required fields
// If errors exist: Show all error messages
// If valid: Show success message and clear form

// Success Message:
// Show personalized message: "Thank you [First Name]! I will contact you soon!"
// Message should disappear automatically after 3 seconds
// Use setTimeout() for automatic disappearance

// SOME TESTING CODE
formSubmitBtn.addEventListener("click", function(){
    alert("The Submit button was pressed");
});

