
// Импортируем пакет cors
import cors from 'cors';

// Импортируем пакет express 
import express from 'express';

// Создаём приложение
const app = express();
// Назначаем порт
const port = 4444;
 
// Используем пакет CORS
app.use(cors());

// Отслеживаем get запрос на сервер
app.get('/', (req, res) => {
  // Отправляем ответ 
  res.send('Hello World!');
});

// Отслеживаем get запрос на сервер
app.get('/users', (req, res) => {
    
  // Определяем тело ответа 
    res.json({
      name: 'Anton',
      location: 'NY',
    });
    
});

// Назначаем слушателя
app.listen(port, () => {
  // Выводим в консоль состояние сервера
  console.log(`Сервер запущен: http://localhost:${port}`);
});