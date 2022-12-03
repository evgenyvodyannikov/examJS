
// Импортируем пакет cors
import cors from 'cors'

// Импортируем пакет express 
import express from 'express'

// Создаём приложение
const app = express()
// Назначаем порт
const port = 4444
 
// Отключаем CORS - Обязательно сверху
app.use(cors());

// Отслеживаем get запрос на сервер
app.get('/', (req, res) => {
  // Отправляем ответ 
  res.send('Hello World!')
})

// Отслеживаем get запрос на сервер
app.get('/users', (req, res) => {
    // Отправляем ответ 
    res.send('Hello World!')
  })

// Назначаем слушателя
app.listen(port, () => {
  // Выводим в консоль состояние сервера
  console.log(`Сервер запущен: http://localhost:${port}`)
})