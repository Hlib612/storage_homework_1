const form = document.querySelector("#form_js");
const nameInput = document.querySelector("#name");
const surnameInput = document.querySelector("#surname");
const phoneInput = document.querySelector("#phone");
const emailInput = document.querySelector("#email");
const sendButton = document.querySelector("#button_js");

const FORMDATA = "form-data";

  console.log(localStorage);
const onSubmitForm = (event) => {
  event.preventDefault();
  console.log(event.target);
  console.log(event.target.elements);



const formData = {
  name: nameInput.value,
  surname: surnameInput.value,
  phone: phoneInput.value,
  email: emailInput.value,
}

if(localStorage.length === 0){
localStorage.setItem(`contact ${formData.name}`, JSON.stringify(formData));
} else{
localStorage.setItem(`contact ${formData.name}`, JSON.stringify(formData));
}
form.reset();
  localStorage.removeItem(FORMDATA)
}

const oninputChange = (event) => {
console.log(event.target.value);
const formData = {
  name: nameInput.value,
  surname: surnameInput.value,
  phone: phoneInput.value,
  email: emailInput.value,
}
formData[event.target.name] = event.target.value;
console.log(formData);
 localStorage.setItem(FORMDATA , JSON.stringify(formData));
}

sendButton.addEventListener("click" , onSubmitForm);
form.addEventListener("input" , oninputChange);