const addContactBtn = document.getElementById('addContactBtn');
const contactsList = document.getElementById('contactsList')
const contactNameInput = document.getElementById('nameInput');
const contactPhoneInput = document.getElementById('phoneInput');
const contactAgeInput = document.getElementById('ageInput');
const contactTemplete = document.getElementById('contactTemplete').innerHTML;


contactsList.addEventListener('click', onAddDelBtnClick);
addContactBtn.addEventListener('click', onAddContactButtonClick);


function onDelBtnClick(e){
  if(e.className === "delBtn"){
    e.parentNode.remove(e); //e.parentNode.remove(this); e.parentNode.parentNode.removeChild(contactList) с td
  }
}

function onAddDelBtnClick(){
  onDelBtnClick(event.target);
}

function submitContact() {
  const contact = {
    name: contactNameInput.value,
    phone: contactPhoneInput.value,
    age: contactAgeInput.value
  }
  addContact(contact);
  resetContactForm();
}

function onAddContactButtonClick() {
  submitContact();
}

function addContact(contact){
  const contactTr = document.createElement('tr');
  contactTr.innerHTML = contactTemplete
    .replace('{{name}}', contact.name)
    .replace('{{phone}}', contact.phone)
    .replace('{{age}}', contact.age);

  contactsList.appendChild(contactTr);
}

function resetContactForm() {
  contactNameInput.value = '';
  contactPhoneInput.value = '';
  contactAgeInput.value = '';
}

