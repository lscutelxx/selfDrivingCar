const canvas = document.getElementById('myCanvas'); // Полученние элемента канвас

canvas.width = 200; // Задаем ширину

const ctx = canvas.getContext('2d'); // Получение контекста рисования
const car = new Car(100, 100, 30, 50); // Создание нового экземпляра класса машины
car.draw(ctx); // Рисование машины с использованием контекста рисования

animate();

function animate() {
    car.update(); // Вызываем метод update

    canvas.height = window.innerHeight; //Задаем высоту канвасу
    car.draw(ctx);
    requestAnimationFrame(animate); // Запускаем animate() много раз в секунду
}