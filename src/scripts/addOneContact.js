import { PATH_DB } from '../constants/contacts.js';

export const addOneContact = async () => {};

addOneContact();

const fs = require('fs');
const { createFakeContact } = require('../utils/createFakeContact');
const { PATH_DB } = require('../constants/contacts');

fs.readFile(PATH_DB, (err, data) => {
  if (err) throw err;
  const contacts = JSON.parse(data);
  contacts.push(createFakeContact());
  fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), (err) => {
    if (err) throw err;
    console.log('Contact added successfully!');
  });
});
