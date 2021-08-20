(function () {
    let form = document.querySelector("#contact-form");
    let emailInput = document.querySelector("#email"); 
    let passwordInput = document.querySelector("#password"); 

    function showErrorMessage(input, message) {
        let container = input.parentElement; 

        let error = container.querySelector(".error-message"); 
        if(error) {
            container.removeChild(error); 
        }

     // Adds Error Message if message is not empty
     
     if (message) {
         let error = document.createElement("div"); 
         error.classList.add('error-message'); 
         error.innerText = message; 
         container.appendChild(error); 
      }
    }

funtion validateEmail() {
    let value = emaillInput.value; 

if(!value) {
    showErrorMessage(emailInput, 'Email is a required field.'); 
    return false;  
 }    
}

if (value.indexOf('@') === -1) {
    showErrorMessage(emailInput, 'You must enter a valid email address.');
    return false; 
}

showErrorMessage(emailInput, null);
return true;

}

function validatePassword() {
    let value = passwordInput.value;

    if (!value) {
        showErrorMessage(passwordInput, 'The password needs to be at least 8 characters long.');
        return false; 
    }

    function validateEmail() {
        let isValidEmail = validatePassword(); 
        let isValidPassword = validatePassword();
        return isValidEmail() && isValidPassword(); 
    }

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (validateForm()) {
        alert('Success!')
    }
}); 

emailInput.input.addEventListener('input', validEmail);
passwordInput.addEventListener('input', validatePassword);

})();


}