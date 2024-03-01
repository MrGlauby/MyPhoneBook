


const getFormData = () => {
  const name = document.getElementById('name').value;
  const address = document.getElementById('address').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;


  return {
    name: name,
    address: address,
    phone: phone,
    email: email
  };
};

const newContact = getFormData();




const createContactCard = (newContact) => {
  const contactCard = document.createElement('div');
  contactCard.classList.add('contact-card');
  contactCard.innerHTML = `
    <div class="contact-info">
      <p>Name: ${newContact.name}</p>
      <p>Adresse: ${newContact.address}</p>
      <p>Telefonnummer: ${newContact.phone}</p>
      <p>E-Mail Adresse: ${newContact.email}</p>
    </div>
  `;
  return contactCard;
};








const addContactToContainer = (contactCard) => {
  const contactContainer = document.getElementById('contactContainer');
  contactContainer.appendChild(contactCard);
};

const addContact = (event) => {
  event.preventDefault();

  const contactCard = createContactCard(newContact);
  addContactToContainer(contactCard);

  event.target.reset();
};

const addContactButton = document.getElementById('addContact');
addContactButton.addEventListener('click', addContact);

const form = document.querySelector('form');
form.addEventListener('submit', addContact);
