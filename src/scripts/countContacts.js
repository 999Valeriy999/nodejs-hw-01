import { PATH_DB } from '../constants/contacts.js';
import { readContactsFromFile } from '../utils/fileOperations.js';

export const countContacts = async () => {
  const existingContacts = await readContactsFromFile(PATH_DB);
  const total = existingContacts.length; 
  return total;
};

console.log(await countContacts());  
