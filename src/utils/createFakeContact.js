import { promises as fs } from 'fs'; // Импортируем модуль `fs` с поддержкой промисов
import { faker } from '@faker-js/faker';

// Константа для создания фейкового контакта
export const createFakeContact = () => ({
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  phone: faker.phone.number(),
  email: faker.internet.email(),
  job: faker.person.jobTitle(),
});
