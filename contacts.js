const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "db", "contacts.json");

// Citeste toate contactele
async function listContacts(params) {
  const data = await fs.readFile(contactsPath, "utf-8");
  return JSON.parse(data);
}

// Gaseste un contact dupa ID
async function getContactById(contactId) {
  const contacts = await listContacts();
  return contacts.find((contact) => contact.id === contactId);
}

// Sterge un contact dupa ID
async function removeContact(contactId) {
  const contacts = await listContacts();
  const filtered = contacts.filter((contact) => contact.id !== contactId);
  await fs.writeFile(contactsPath, JSON.stringify(filtered, null, 2));
  return filtered;
}

// Adauga un contact nou
async function addContact(name, email, phone) {
  const contacts = await listContacts();
  const newContact = {
    id: Date.now().toString(),
    name,
    email,
    phone,
  };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return newContact;
}

// Exporta functiile
module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
