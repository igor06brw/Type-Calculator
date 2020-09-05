class UICalculator {
    app: HTMLElement;
    button: HTMLButtonElement;


    constructor(app: HTMLElement) {
        this.app = app;
    }
    generateDigitButton() {
            this.button = document.createElement('button');
            this.button.type = 'button';
            this.button.textContent = 'Button';
            this.app.appendChild(this.button);
    }
}

window.onload = () => {
    const app: HTMLElement = document.getElementById('app');
    const calc = new UICalculator(app);
    calc.generateDigitButton();
}
