(function () {
    let form = document.querySelector("#contact-form");
    let emailInput = document.querySelector("#email");
    let passwordInput = document.querySelector("#password");

    function showErrorMessage(input, message) {
        let container = input.parentElement;

        let error = container.querySelector(".error-message");
        if (error) {
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

    function validateEmail() {
        let value = emailInput.value;

        if (!value) {
            showErrorMessage(emailInput, 'Email is a required field.');
            return false;
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

        showErrorMessage(passwordInput, null);
        return true;
    }

    function validateForm() {
        let isValidEmail = validatePassword();
        let isValidPassword = validatePassword();

        emailInput.input.addEventListener('input', validateEmail);
        passwordInput.addEventListener('input', validatePassword);
        return isValidEmail && isValidPassword;
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (validateForm()) {
            alert('Success!');
        }
    });
})();

