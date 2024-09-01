export async function generateContacts(numContacts, filePath = 'src/db/db.json') {
    try {
      // Считываем существующие контакты
      const existingContacts = await readContacts(filePath);
  
      // Генерируем новые контакты
      const newContacts = Array.from({ length: numContacts }, () => createFakeContact());
  
      // Добавляем новые контакты к существующим
      const updatedContacts = [...existingContacts, ...newContacts];
  
      // Записываем обновленные контакты в файл
      await writeContacts(updatedContacts, filePath);
  
      console.log(`Добавлено ${numContacts} новых контактов в файл ${filePath}`);
    } catch (error) {
      console.error('Ошибка при добавлении новых контактов:', error);
    }
  }
