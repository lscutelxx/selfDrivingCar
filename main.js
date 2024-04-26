const canvas = document.getElementById('myCanvas'); // Полученние элемента канвас

canvas.width = 200; // Задаем ширину

const ctx = canvas.getContext('2d'); // Получение контекста рисования
const road = new Road(canvas.width/2, canvas.width * 0.9);
const car = new Car(road.getLaneCenter(1), 100, 30, 50); // Создание нового экземпляра класса машины


animate();

function animate() {
    car.update(); // Вызываем метод update

    canvas.height = window.innerHeight; //Задаем высоту канвасу

    ctx.save();
    ctx.translate(0, -car.y + canvas.height * 0.7);

    road.draw(ctx);
    car.draw(ctx); // Рисование машины с использованием контекста рисования

    ctx.restore();
    requestAnimationFrame(animate); // Запускаем animate() много раз в секунду
}