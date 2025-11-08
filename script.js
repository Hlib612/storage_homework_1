const form = document.querySelector("#form_js");
const nameInput = document.querySelector("#name");
const surnameInput = document.querySelector("#surname");
const phoneInput = document.querySelector("#phone");
const emailInput = document.querySelector("#email");
const sendButton = document.querySelector("#button_js");
const contactList = document.querySelector("#contact_list_js");

const FORMDATA = "form-data";

const contactsLIst = [];

const createItem = () => {
  const formData = {
    name: nameInput.value,
    surname: surnameInput.value,
    phone: phoneInput.value,
    email: emailInput.value,
  };


  contactList.insertAdjacentHTML(
    "beforeend",
    `<li class="visual_contact" id="visual_contact_js">
            <h3 id="visual_contact_name">${formData.name}</h3>
            <p id="visual_contact_phone">${formData.phone}</p>
            <p id="visual_contact_surname">${formData.surname}</p>
            <p id="visual_contact_email">${formData.email}</p>
        </li>`
  );

  contactsLIst.push(

    {
      name: nameInput.value,
    surname: surnameInput.value,
    phone: phoneInput.value,
    email: emailInput.value,
    }
  )

 const markupList = contactsLIst.map(contact => {
        return `<li class="visual_contact" id="visual_contact_js">
            <h3 id="visual_contact_name">${contact.name}</h3>
            <p id="visual_contact_phone">${contact.phone}</p>
            <p id="visual_contact_surname">${contact.surname}</p>
            <p id="visual_contact_email">${contact.email}</p>
        </li>`;
    });
    
    console.log(markupList);
    const murkup = markupList.join(" ");
    console.log(murkup);
    // todoList.innerHTML = murkup;



    // `<li class="visual_contact" id="visual_contact_js">
    //         <h3 id="visual_contact_name">${formData.name}</h3>
    //         <p id="visual_contact_phone">${formData.phone}</p>
    //         <p id="visual_contact_surname">${formData.surname}</p>
    //         <p id="visual_contact_email">${formData.email}</p>
    //     </li>`
  
};

const showList = () => {
  let refreshedContactsList = localStorage.getItem("contactsLIst");
  console.log(refreshedContactsList);
  contactList.insertAdjacentHTML("afterbegin", refreshedContactsList);
};

showList();

console.log(localStorage);
const onSubmitForm = (event) => {
  event.preventDefault();
  let refreshedContactsList = localStorage.getItem("contactsLIst");
  if(nameInput.value === "" || phoneInput.value === ""){
 return 
      }

if (localStorage.getItem("contactsLIst")) {
    contactsLIst.push(refreshedContactsList);
    createItem();
    localStorage.setItem("contactsLIst", contactsLIst);
  } else {
    createItem();
    localStorage.setItem("contactsLIst", contactsLIst);
  }

  form.reset();
  localStorage.removeItem(FORMDATA);
  // console.log();
  
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
