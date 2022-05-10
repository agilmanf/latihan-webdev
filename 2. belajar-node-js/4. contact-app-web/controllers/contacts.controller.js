const contacts = require("../models/contacts.json");
const fs = require("fs");

const dirPath = "./models";
const dataPath = "./models/contacts.json";

const loadContacts = () => {
  return contacts;
};

const findContact = (nama) => {
  return contacts.find((contact) => contact.nama === nama);
};

const saveContact = (contact) => {
  checkDataPath();

  const contacts = loadContacts();
  contacts.push(contact);

  fs.writeFileSync(dataPath, JSON.stringify(contacts));
};

const checkDataPath = () => {
  // Check apakah folder sudah dibuat
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
  }

  // Check apakah file contact.json sudah dibuat
  if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, "[]", "utf-8");
  }
};

module.exports = {
  loadContacts,
  findContact,
  saveContact,
};
