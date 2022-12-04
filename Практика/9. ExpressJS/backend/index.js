// Импортируем пакет cors
import cors from 'cors';

// Импортируем пакет express 
import express from 'express';

import bodyParser from 'body-parser';

// Создаём приложение
const app = express();
// Назначаем порт
const port = 4444;

// Используем пакет CORS (без него не выполнятся запросы)
app.use(cors());
// Используем пакет bodyParser (без него нельзя будет получить body в запросе)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

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

let posts = [];

// Отслеживаем post запрос на сервер
app.post('/posts', (req, res) => {

  // Если данные не отправлены возращаем код 400
  if (!req.body) return res.sendStatus(400);

  try {

    // Парсим данные в JSON
    let post = req.body;
    // Добавляем в массив
    posts.push(post);
    // Отправляем добавленный пост в качестве ответа
    res.send(post); // (не будет ответа от сервера если не написать)
  }
  catch {
    // В случае ошибки отправляем код 500
    res.sendStatus(500);
  }

});

// Отслеживаем get запрос на сервер
app.get('/posts', (req, res) => {

  // Определяем тело ответа 
  res.json(posts);

});

// Назначаем слушателя
app.listen(port, () => {
  // Выводим в консоль состояние сервера
  console.log(`Сервер запущен: http://localhost:${port}`);
});