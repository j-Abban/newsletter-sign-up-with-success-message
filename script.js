const myForm = document.querySelector("#myForm");
const dissmiss = document.querySelector("#dissmiss");
const email = document.querySelector("#email");
const errorText = document.querySelector("#errorText");
const container = document.querySelector(".container");
const successCard = document.querySelector(".success-card");
const emailText = document.querySelector("#emailtext");
const submitButton = document.querySelector(".submit-button");

myForm.addEventListener("submit", function(event){
    event.preventDefault();

    if (ValidateEmail(email.value)) {
        submitButton.innerHTML = "Loading...";
        email.disabled = true;
        submitButton.disabled = true;

        setTimeout(() => {
            container.style.display = "none";
            successCard.style.display = "block";
            emailText.innerHTML = email.value;
        }, 3000);
    } else {
        errorText.style.display = "block";
        email.classList.add("error");
    }
});
