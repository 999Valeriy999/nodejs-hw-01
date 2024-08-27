import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {};

console.log(await getAllContacts());

const fs = require('fs');
const { PATH_DB } = require('../constants/contacts');

fs.readFile(PATH_DB, (err, data) => {
  if (err) throw err;
  const contacts = JSON.parse(data);
  console.log(contacts);
});
