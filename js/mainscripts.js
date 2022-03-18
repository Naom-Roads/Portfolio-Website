import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyAVvfuWg9b0MrHzgRSzrTWJLx43H8wthmU",
    authDomain: "portfolio-69fb5.firebaseapp.com",
    projectId: "portfolio-69fb5",
    storageBucket: "portfolio-69fb5.appspot.com",
    messagingSenderId: "128564275176",
    appId: "1:128564275176:web:a76ef12edcd9dfa4cce65d",
    measurementId: "G-REG8HSEPH7"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


var contactModal = document.getElementById('contact')
contactModal.addEventListener('show.bs.modal', function (event) {
    // Button that triggered the modal
    var button = event.relatedTarget
    // Extract info from data-bs-* attributes
    var recipient = button.getAttribute('data-bs-whatever')
    // If necessary, you could initiate an AJAX request here
    // and then do the updating in a callback.
    //
    // Update the modal's content.
    var contactTitle = contactModal.querySelector('.modal-title')
    var modalBodyInput = contactModal.querySelector('.modal-body input')

    contactTitle.textContent = 'New message to ' + recipient
    modalBodyInput.value = recipient
})


// function sendEmail(name, email, body) ({
//
//                     })







// (function () {
//     let form = document.querySelector("#contact-form");
//     let emailInput = document.querySelector("#email");
//     let passwordInput = document.querySelector("#password");
//
//     function showErrorMessage(input, message) {
//         let container = input.parentElement;
//
//         let error = container.querySelector(".error-message");
//         if (error) {
//             container.removeChild(error);
//         }
//
//         // Adds Error Message if message is not empty
//
//         if (message) {
//             let error = document.createElement("div");
//             error.classList.add('error-message');
//             error.innerText = message;
//             container.appendChild(error);
//         }
//     }
//
//     function validateEmail() {
//         let value = emailInput.value;
//
//         if (!value) {
//             showErrorMessage(emailInput, 'Email is a required field.');
//             return false;
//         }
//
//         if (value.indexOf('@') === -1) {
//             showErrorMessage(emailInput, 'You must enter a valid email address.');
//             return false;
//         }
//
//         showErrorMessage(emailInput, null);
//         return true;
//     }
//
//
//     function validatePassword() {
//         let value = passwordInput.value;
//
//         if (!value) {
//             showErrorMessage(passwordInput, 'The password needs to be at least 8 characters long.');
//             return false;
//         }
//
//         showErrorMessage(passwordInput, null);
//         return true;
//     }
//
//     function validateForm() {
//         let isValidEmail = validatePassword();
//         let isValidPassword = validatePassword();
//
//         emailInput.input.addEventListener('input', validateEmail);
//         passwordInput.addEventListener('input', validatePassword);
//         return isValidEmail && isValidPassword;
//     }
//
//     form.addEventListener('submit', (e) => {
//         e.preventDefault();
//         if (validateForm()) {
//             alert('Success!');
//         }
//     });
// })();

