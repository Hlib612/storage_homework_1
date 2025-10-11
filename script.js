const form = document.querySelector("#form_js");
const nameInput = document.querySelector("#name");
const surnameInput = document.querySelector("#surname");
const phoneInput = document.querySelector("#phone");
const emailInput = document.querySelector("#email");
const sendButton = document.querySelector("#button_js");
const contactList = document.querySelector("#contact_list_js");

const FORMDATA = "form-data";

const contactLIst =[];

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
  };

  if (localStorage.length === 0) {
    localStorage.setItem(`contact ${formData.name}`, JSON.stringify(formData));
      contactList.insertAdjacentHTML(
    "beforeend",
    `<li class="visual_contact" id="visual_contact_js">
            <h3 id="visual_contact_name">${formData.name}</h3>
            <p id="visual_contact_phone">${formData.phone}</p>
        </li>`
  );
  } else {
    localStorage.setItem(`contact ${formData.name}`, JSON.stringify(formData));
      contactList.insertAdjacentHTML(
    "beforeend",
    `<li class="visual_contact" id="visual_contact_js">
            <h3 id="visual_contact_name">${formData.name}</h3>
            <p id="visual_contact_phone">${formData.phone}</p>
        </li>`
  );
  }

  contactLIst.push()

// console.log(localStorage.getItem(`contact ${formData.name}`))
  // localStorage.getItem(`contact ${formData.name}`);
  form.reset();
  localStorage.removeItem(FORMDATA);
};

const oninputChange = (event) => {
  console.log(event.target.value);
  const formData = {
    name: nameInput.value,
    surname: surnameInput.value,
    phone: phoneInput.value,
    email: emailInput.value,
  };
  formData[event.target.name] = event.target.value;
  console.log(formData);
  localStorage.setItem(FORMDATA, JSON.stringify(formData));
};

// const createContact = (event) =>{
//     localStorage.getItem()
// }

sendButton.addEventListener("click", onSubmitForm);
form.addEventListener("input", oninputChange);
