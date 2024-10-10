function validateAndSubmit() {  
    const formData = {};  
    let isValid = true;  
  
    // Helper function for cleaner validation  
    function validateField(className, fieldName, validator, errorId) {  
      const input = document.querySelector(`.${className}`);  
      const value = input.value.trim();  
      const errorSpan = document.getElementById(errorId);  
  
      if (validator(value)) {  
        formData[fieldName] = value;  
        errorSpan.textContent = '';  
      } else {  
        errorSpan.textContent = `Invalid ${fieldName}`;  
        isValid = false;  
      }  
    }  
  
    // Validate each field  
    validateField('firstNameLabel', 'first_name', value => value !== '', 'firstNameError');  
    validateField('lastNameLabel', 'last_name', value => value !== '', 'lastNameError');  
    validateField('emailLabel', 'email', value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value), 'emailError');  
    validateField('phoneNumberLabel', 'phone_number', value => value.length >= 10, 'phoneNumberError'); //Simplified phone validation  
    validateField('passwordLabel', 'password', value => value.length >= 8, 'passwordError');  
  
    if (isValid) {  
      console.log(formData);  
      // Clear form data after successful submission  
      clearFormData(); 
      alert("Success") ;
    }  
}  

function clearFormData() {  
  // Select all input fields (adjust selector if needed)  
  const inputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], input[type="password"]');  
  inputs.forEach(input => input.value = '');  

  //Clear error messages (optional, but good practice)  
  const errorSpans = document.querySelectorAll('.error-message'); // Assuming you have a class 'error-message' on your error spans. Adjust as needed.  
  errorSpans.forEach(span => span.textContent = '');  
}  


const regButton = document.querySelector(".registerButton1");  
regButton.addEventListener("click", validateAndSubmit);

const scrollToCTA = () => document.querySelector(".callToActionSec").scrollIntoView({ behavior: "smooth" });  
document.querySelector(".joinButton").addEventListener("click", scrollToCTA);  
document.querySelector(".registerButton").addEventListener("click", scrollToCTA);

  
