const fs = require("fs/promises");
const path = require("path");
// const { nanoid } = require("nanoid");
// import { nanoid } from "nanoid";
const contactsPath = path.join(__dirname, "db/contacts.json");

async function listContacts() {
  try {
    const data = JSON.parse(await fs.readFile(contactsPath, "utf8"));
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
}

async function getContactById(contactId) {
  try {
    const data = JSON.parse(await fs.readFile(contactsPath, "utf8"));
    const contactByID = await data.find((item) => item.id === contactId);
    console.log(contactByID);
  } catch (error) {
    console.log(error.message);
  }
}

async function removeContact(contactId) {
  try {
    const data = JSON.parse(await fs.readFile(contactsPath, "utf8"));
    const filteredList = await data.filter((item) => item.id !== contactId);
    await fs.writeFile(contactsPath, JSON.stringify(filteredList));
    const newList = JSON.parse(await fs.readFile(contactsPath, "utf8"));
    console.log(newList);
  } catch (error) {
    console.log(error.message);
  }
}

async function addContact(name, email, phone) {
  try {
    const data = JSON.parse(await fs.readFile(contactsPath, "utf8"));
    const newContact = { id: "12", name, email, phone };
    const newList = [...data, newContact];
    await fs.writeFile(contactsPath, JSON.stringify(newList));
    const newData = JSON.parse(await fs.readFile(contactsPath, "utf8"));
    console.log(newData);
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
