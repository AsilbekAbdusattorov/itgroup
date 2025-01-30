const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3000;

// Конфигурация для загрузки файла
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

app.use(express.static('public'));
app.use(express.json());

// Эндпоинт для загрузки файла
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('Ошибка при загрузке файла.');
  }
  res.send({ message: 'Файл успешно загружен!', fileName: req.file.filename });
});

app.listen(port, () => {
  console.log(`Сервер работает на: http://localhost:${port}`);
});
