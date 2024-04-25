class Controls { // класс Controls
    constructor() {
        this.forward = false; // Вперед
        this.left = false; // Лево
        this.right = false; // Право
        this.reverse = false; // Назад

        this.#addKeyboardListenners(); //Частная функция прослушивания
    }

    #addKeyboardListenners() { // Определение метода
        document.onkeydown = (event) => { // Нажатие клавиши
            switch(event.key) {
                case 'ArrowLeft':
                    this.left = true;
                    break;
                case 'ArrowRight':
                    this.right = true;
                    break;
                case 'ArrowUp':
                    this.forward = true;
                    break;
                case 'ArrowDown':
                    this.reverse = true;
                    break;
            }
        }
        document.onkeyup = (event) => { // ОТпускание клавиши
            switch(event.key) {
                case 'ArrowLeft':
                    this.left = false;
                    break;
                case 'ArrowRight':
                    this.right = false;
                    break;
                case 'ArrowUp':
                    this.forward = false;
                    break;
                case 'ArrowDown':
                    this.reverse = false;
                    break;
            }
        }
    }
}