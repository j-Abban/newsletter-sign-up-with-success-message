const myForm = document.querySelector("#myForm")
const dissmissButton = document.querySelector("#dissmiss-button")
const email = document.querySelector("#email")
const errorText = document.querySelector("#errorMessage")
const container = document.querySelector(".container")
const successCard = document.querySelector(".success-card")
const emailText = document.querySelector("#emailText")
const submitButton = document.querySelector(".submit-button")

myForm.addEventListener("submit", function (event) {
    event.preventDefault()

    if (validateEmail(email.value)) {
        submitButton.innerHTML = "Loading..."
        email.disabled = true
        submitButton.disabled = true

        setTimeout(() => {
            container.style.display = "none"
            successCard.style.display = "block"
            emailText.innerHTML = email.value
        }, 3000);
    } else {
        errorText.style.display = "block"
        email.classList.add('error')
    }
})

dissmissButton.addEventListener("click", function () {
    errorText.style.display = "none"
    email.classList.remove("error")
    container.style.display = "flex"
    successCard.style.display = "none"
    submitButton.innerHTML = "Subscribe to monthly newsletter"
    email.disabled = false
    submitButton.disabled = false
})

const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}