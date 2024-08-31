import fs from 'fs';
import { faker } from '@faker-js/faker';

// Константа для создания фейкового контакта
export const createFakeContact = () => ({
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  phone: faker.phone.number(),
  email: faker.internet.email(),
  job: faker.person.jobTitle(),
});

// Функция для записи контактов в файл
async function writeContacts(data, filePath = 'src/db/db.json') {
  if (!Array.isArray(data)) {
    throw new Error('Переданные данные должны быть массивом');
  }

  try {
    // Проверка существования файла и создание, если его нет
    await fs.promises.access(filePath, fs.constants.F_OK);
    console.log('Файл уже существует. Будет перезаписан.');
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.log('Файл не найден. Создается новый.');
    } else {
      console.error('Произошла ошибка при проверке файла:', error);
    }
  }

  try {
    const json = JSON.stringify(data, null, 2);
    await fs.promises.writeFile(filePath, json);
    console.log('Контакты успешно записаны в файл');
  } catch (error) {
    console.error('Ошибка при записи контактов:', error);
  }
}

// Функция для чтения контактов из файла или генерации фейковых
async function readContacts(filePath = 'src/db/db.json') {
  try {
    const data = await fs.promises.readFile(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    if (error instanceof SyntaxError) {
      console.error('Ошибка при парсинге JSON:', error);
      // Можно попробовать восстановить данные или сгенерировать новые
    } else {
      console.error('Ошибка при чтении файла:', error);
    }

    
  }
}

export default { writeContacts, readContacts };




