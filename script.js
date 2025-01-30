// Контейнер для QR-кода
const qrCodeContainer = document.getElementById('qr-code');
const url = 'https://top-tests.uz/'; // Убедитесь, что этот URL корректен

// Функция генерации QR-кода
function generateQRCode(data) {
  if (!data || data.trim() === '') {
    console.error('Некорректный URL или данные!');
    alert('Некорректный URL или данные!');
    return;
  }

  try {
    // Очистка контейнера перед генерацией нового QR-кода
    qrCodeContainer.innerHTML = '';
    new QRCode(qrCodeContainer, {
      text: data,
      width: 128,
      height: 128
    });

    console.log('QR-код успешно создан!');
  } catch (error) {
    console.error('Ошибка при создании QR-кода:', error);
    alert('Ошибка при создании QR-кода: ' + error.message);
  }
}

// Проверка URL перед генерацией QR-кода
if (url && url.trim() !== '') {
  generateQRCode(url);
}

// Расчёт цены и оплата
document.getElementById('calculate-button').addEventListener('click', function (event) {
  event.preventDefault();

  const file = document.getElementById('file-upload').files[0];
  const paperSize = document.getElementById('paper-size').value;
  const color = document.getElementById('color').value;

  if (!file) {
    alert('Пожалуйста, выберите файл!');
    return;
  }

  let price = 0;

  // Установка цены в зависимости от размера бумаги
  if (paperSize === 'A4') {
    price = 1000; // Цена за лист A4
  } else if (paperSize === 'A3') {
    price = 2000; // Цена за лист A3
  }

  // Доплата за цветную печать
  if (color === 'color') {
    price += 500;
  }

  document.getElementById('price').textContent = price + ' сум';
  document.getElementById('price-section').style.display = 'block';
});

// Оплата заказа
document.getElementById('pay-button').addEventListener('click', function () {
  alert('Оплата прошла успешно. Ваш заказ принят в обработку!');
  document.getElementById('confirmation').style.display = 'block';
  document.getElementById('price-section').style.display = 'none';
});
