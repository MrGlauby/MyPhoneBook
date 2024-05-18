// FormValidation Werte Formular aus!

//1.  getFormData - Sammelt die Daten aus den Eingabefeldern und packt sie in ein Objekt!
const getFormData = () => {
  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;

  // implentierung der PürfungsFunktion des users
  const validationError = validateFormData(name, address, phone, email);
  if (validationError) {
    alert(validationError);
    return null;
  }

  return {
    name: name,
    address: address,
    phone: phone,
    email: email,
  };
};

//Objekt mit den Feldern, die im Formular ausgefüllt werden müssen.
const fields = {
  name: "Namen",
  address: "Adresse",
  phone: "Telefonnummer",
  email: "E-Mail-Adresse",
};

// Eingaben vom User Überprüfen!
const validateFormData = (name, address, phone, email) => {
  if (!name.trim()) {
    return `Bitte geben Sie einen ${fields.name} ein.`;
  }
  if (!address.trim()) {
    return `Bitte geben Sie eine ${fields.address} ein.`;
  }
  if (!phone.trim()) {
    return `Bitte geben Sie eine ${fields.phone} ein.`;
  }
  if (!email.trim()) {
    return `Bitte geben Sie eine ${fields.email} ein.`;
  }
  return null;
};

// erstellt ein DOM-Element für die Kontaktinformationen basierend auf den übergebenen Formulardaten.
const createContactCard = () => {
  const formData = getFormData();
  const contactCard = document.createElement("div");

  contactCard.classList.add("contact-card");
  contactCard.innerHTML = `
    <div class="contact-info">
      <p>Name: ${formData.name}</p>
      <p>Adresse: ${formData.address}</p>
      <p>Telefonnummer: ${formData.phone}</p>
      <p>E-Mail Adresse: ${formData.email}</p>
    </div>
  `;
  return contactCard;
};



//Erstellt ein neues Kindelement -> contactCard, und fügt dieses neue Element "contactContainerID" hinzu.
const addContactToContainer = (contactCard) => {
  const contactContainerID = document.getElementById("contactContainerID");
  contactContainerID.appendChild(contactCard);
};

// Die Funktion addContactToContainer erstellt eine neue Kontaktkarte und fügt diese dem Container hinzu, der die Kontaktinformationen enthält.
const addContact = (event) => {
  event.preventDefault();
  // const newContact = getFormData();
  const contactCard = createContactCard(getFormData);
  addContactToContainer(contactCard); // addContactToContainer - erneut aufgerufen, um die erstellte Kontaktkarte dem Kontaktcontainer hinzuzufügen

  event.target.reset();
};

const addContactButton = document.getElementById("addContact");
addContactButton.addEventListener("click", addContact);

const displayContacts = () => {
  const contactContainerID = document.getElementById("contactList");
  contactContainerID.innerHTML = "";

  contactList.forEach((contact) => {
    const contactCard = document.createElement("div");
    contactCard.innerHTML = `
        <p>Name: ${contact.name}</p>
        <p>Adresse: ${contact.address}</p>
      `;
    contactContainer.appendChild(contactCard);
  });
};

// Annahme: Du hast bereits Kontakte in einem Array (z.B., contactList)
// const contactList = [
//   {
//     name: "Peter Petersilie",
//     address: "123 Main St",
//     number: "190767676",
//     email: "peter@gmail.com",
//   },

//   {
//     name: "Körper Klaus",
//     address: "Mond Str. 4",
//     number: "65464644",
//     email: "klaus@gmail.com",
//   },
// ];
