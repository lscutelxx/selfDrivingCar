class Car { // определение класса Car
    constructor(x, y, width, height) { // Функция конструктор которая получает аргументы (x, y, ширина и высота)
        this.x = x; // Car.x = x Ключ x в объекте Car будет равен параметру x переданному в функцию конструктор
        this.y = y;
        this.width = width;
        this.height = height;

        this.speed = 0; // скорость
        this.acceleration = 0.2; // ускорение
        this.maxSpeed = 3;
        this.friction = 0.05; // Трение
        this.angle = 0; // Угол

        this.controls = new Controls();
    }

    update() {
        this.#move();

    }

    #move() {
        if (this.controls.forward) {
            this.speed += this.acceleration;
        }
        if (this.controls.reverse) {
            this.speed -= this.acceleration;
        }

        if (this.speed > this.maxSpeed) {
            this.speed = this.maxSpeed;
        }
        if (this.speed < -this.maxSpeed/2) {
            this.speed = -this.maxSpeed/2;
        }

        if (this.speed > 0) {
            this.speed -= this.friction;
        }
        if (this.speed < 0) {
            this.speed += this.friction;
        }
        if (Math.abs(this.speed) < this.friction ) {
            this.speed = 0;
        }

        if (this.speed != 0) {
            const flip = this.speed > 0 ? 1 : -1;
            if (this.controls.left) {
                this.angle += 0.03 * flip;
            }
            if (this.controls.right) {
                this.angle -= 0.03 * flip;
            }
        }

        this.x -= Math.sin(this.angle) * this.speed;
        this.y -= Math.cos(this.angle) * this.speed;
    }

    draw(ctx) { //Метод draw
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(-this.angle);

        ctx.beginPath(); // Начать рисовать
        ctx.rect( // Определяем прямоугольник
             - this.width / 2,
             - this.height / 2,
            this.width,
            this.height,
        );
        ctx.fill(); //Заполнить область

        ctx.restore();
    }
}