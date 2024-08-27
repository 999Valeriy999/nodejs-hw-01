import { faker } from "@faker-js/faker";

export const createFakeContact = () => ({
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  phone: faker.phone.number(),
  email: faker.internet.email(),
  job: faker.person.jobTitle(),
});

const { faker } = require('@faker-js/faker');

function createFakeContact() {
  return {
    name: faker.name.fullName(),
    phone: faker.phone.number(),
    email: faker.internet.email(),
  };
}

module.exports = { createFakeContact };