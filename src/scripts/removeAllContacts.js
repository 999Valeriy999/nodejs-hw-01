import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {};

removeAllContacts();

const fs = require('fs');
const { PATH_DB } = require('../constants/contacts');

fs.writeFile(PATH_DB, JSON.stringify([], null, 2), (err) => {
  if (err) throw err;
  console.log('All contacts removed successfully!');
});
