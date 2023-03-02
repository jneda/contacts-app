const contactsList = document.querySelector("#contacts-list");
window.addEventListener("load", loadContacts);

async function loadContacts() {
  console.log("Loading contacts...");
  try {
    const response = await fetch("http://localhost:3000/api/contacts");
    const contacts = await response.json();
    const contactsHTML = contacts.reduce((html, contact) => {
      return (
        html +
        `<li>
          #${contact.id} - ${contact.firstName} ${contact.lastName}: ${contact.email}
        </li>`
      );
    }, "");
    contactsList.innerHTML = contactsHTML;
  } catch (err) {
    console.error(err.message);
  }
}
