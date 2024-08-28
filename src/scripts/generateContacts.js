import { PATH_DB } from '../constants/contacts.js';

const generateContacts = async (number) => {};

generateContacts(5);

const fs = require('fs');
const { createFakeContact } = require('../utils/createFakeContact');
const { PATH_DB } = require('../constants/contacts.js');
const NUM_CONTACTS = 10; // Кількість контактів для генерації

const contacts = Array.from({ length: NUM_CONTACTS }, createFakeContact);

fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), (err) => {
  if (err) throw err;
  console.log('Contacts generated successfully!');
});
