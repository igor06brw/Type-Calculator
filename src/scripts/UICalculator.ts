class UICalculator {
    app: HTMLElement;
    button: HTMLButtonElement;
    digit: number;


    constructor(app: HTMLElement) {
        this.app = app;
    }
    generateDigitButton(value: number) {
            this.button = document.createElement('button');
            this.button.type = 'button';
            this.button.textContent = String(value);
            this.app.appendChild(this.button);
    }
    displayButtons() {
        for(let i = 0; i <= 9; i++) {
            this.generateDigitButton(i);
        }
    }
}

window.onload = () => {
    const app: HTMLElement = document.getElementById('app');
    const calc = new UICalculator(app);
    calc.displayButtons();
}
