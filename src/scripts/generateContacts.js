
import {createFakeContact} from '../utils/createFakeContact'; // Припускаємо, що createFakeContact знаходиться в тому ж директорії

async function generateContacts(numContacts) {
    try {
        // Читаємо існуючі дані з файлу
        const data = await fs.readFile('src/db/db.json', 'utf8');
        const existingContacts = JSON.parse(data);

        // Створюємо нові контакти
        const newContacts = [];
        for (let i = 0; i < numContacts; i++) {
            newContacts.push(createFakeContact());
        }

        // Об'єднуємо існуючі та нові контакти
        const allContacts = [...existingContacts, ...newContacts];

        // Записуємо оновлені дані у файл
        await fs.writeFile('src/db/db.json', JSON.stringify(allContacts, null, 2));
        console.log(`Додано ${numContacts} нових контактів`);
    } catch (error) {
        console.error('Помилка при генерації та збереженні контактів:', error);
    }
}

export default generateContacts;