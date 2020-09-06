class UICalculator {
    app: HTMLElement;
    button: HTMLButtonElement;


    constructor(app: HTMLElement) {
        this.app = app;
    }
    generateButton(value: string, id: string, name: string, HTMLClass: string) {
        this.button = document.createElement('button');
        this.button.type = 'button';
        this.button.textContent = value;
        this.button.id = id;
        this.button.name = name; 
        this.button.className = HTMLClass;
        this.app.appendChild(this.button);
    }
    displayButtons() {
        for(let i = 0; i <= 9; i++) {
            this.generateButton(String(i), 'button' + i, String(i), 'button digit');
        }
        this.generateButton('-', 'substraction', 'minus', 'button operator');
        this.generateButton('+', 'addition', 'plus', 'button operator');
        this.generateButton('*', 'multiply', 'multiple', 'button operator');
        this.generateButton('/', 'divide' , 'divide', 'button operator');

        this.generateButton('=', 'equal', 'result', 'button action');
        this.generateButton('AC', 'clean', 'reset', 'button action');
        
        this.generateButton('.', 'decimal', 'decimal', 'button decimal');
    }
}

window.onload = () => {
    const app: HTMLElement = document.getElementById('app');
    const calc = new UICalculator(app);
    calc.displayButtons();
}
