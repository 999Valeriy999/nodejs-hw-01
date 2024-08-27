import { PATH_DB } from '../constants/contacts.js';

export const removeLastContact = async () => {};

removeLastContact();

const fs = require('fs');
const { PATH_DB } = require('../constants/contacts');

fs.readFile(PATH_DB, (err, data) => {
  if (err) throw err;
  const contacts = JSON.parse(data);
  contacts.pop();
  fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), (err) => {
    if (err) throw err;
    console.log('Last contact removed successfully!');
  });
});
