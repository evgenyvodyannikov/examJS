// Импортируем необходимые пакеты
import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

// Импортируем модель
import postModel from './models/post.js'

// Создаём приложение
const app = express();
// Назначаем порт
const port = 4444;

// Используем пакет CORS (без него не выполнятся запросы)
app.use(cors());
// Используем пакет bodyParser (без него нельзя будет получить body в запросе)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


mongoose.set('strictQuery', true);
mongoose
  .connect("mongodb+srv://student_rez:ARSGJYZj8Sbekcbk@cluster0.rbt9re3.mongodb.net/?retryWrites=true&w=majority")
  .then(() => console.log("База данных подключена"))
  .catch((err) => console.log("Ошибка подключения:", err));

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

// Отслеживаем post запрос на сервер
app.post('/posts', async (req, res) => {

  // Если данные не отправлены возращаем код 400
  if (!req.body) return res.sendStatus(400);

  try {
    // создаем новый документ
    let newDoc = new postModel({
      title: req.body.title,
      text: req.body.text,
      description: req.body.description,
    });

    // сохраняем документ в БД, та в свою очередь
    // вернет нам созданный объект (включая его id)
    let newPost = await newDoc.save();
  
    // Отправляем созданные пост в качестве ответа
    res.json(newPost); // (не будет ответа от сервера если не написать)
  }
  catch {
    // В случае ошибки отправляем код 500
    res.sendStatus(500);
  }

});

// Отслеживаем get запрос на сервер
app.get('/posts', async (req, res) => {

  let posts = await postModel.find();
  // Определяем тело ответа 
  res.json(posts);

});

// Назначаем слушателя
app.listen(port, () => {
  // Выводим в консоль состояние сервера
  console.log(`Сервер запущен: http://localhost:${port}`);
});