class UICalculator {
    app: HTMLElement;
    button: HTMLButtonElement;


    constructor(app: HTMLElement) {
        this.app = app;
    }
    generateButton(value: string, id: string, name: string) {
        this.button = document.createElement('button');
        this.button.type = 'button';
        this.button.textContent = value;
        this.button.id = id
        this.button.name = name; 
        this.app.appendChild(this.button);
    }
    displayButtons() {
        for(let i = 0; i <= 9; i++) {
            this.generateButton(String(i), 'button' + i, String(i));
        }
        this.generateButton('-', 'substraction', 'minus');
        this.generateButton('+', 'addition', 'plus');
        this.generateButton('*', 'multiply', 'multiple');
        this.generateButton('/', 'divide' , 'divide');
    }
}

window.onload = () => {
    const app: HTMLElement = document.getElementById('app');
    const calc = new UICalculator(app);
    calc.displayButtons();

    const result =  1 + 1 * 2;
    console.log(result);
}
