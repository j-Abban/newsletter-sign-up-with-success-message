const regexEmail = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;

const email = document.getElementById("email")
const submit = document.getElementById("but")
const submit2 = document.getElementById("but2")
const emailText = document.querySelector("#emailText")
const body = document.querySelector("body")
function validacao(input){
    emailText.innerHTML = email.value;
    const formInput = input.parentElement;
    if(input.value === "" || input.value === undefined){
        formInput.classList.add("erro")
    }
    else if(!input.value.match(regexEmail)){
        formInput.classList.add("erro");
    }
    else{
        formInput.classList.remove("erro");
        body.classList.add("active")
    }
}
submit2.addEventListener('click' , function(){
    body.classList.remove("active")
})
submit.addEventListener('click', (event) => {
    event.preventDefault(); 
    validacao(email);
});