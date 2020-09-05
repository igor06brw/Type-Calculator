class UICalculator {
    app: HTMLElement;
    button: HTMLButtonElement;


    constructor(app: HTMLElement) {
        this.app = app;
    }
    generateDigitButton() {
            this.button = document.createElement('button');
            this.button.type = 'button';
            this.button.textContent = "button";
            this.app.appendChild(this.button);
    }
    displayButtons() {
        for(let i = 0; i <= 9; i++) {
            this.generateDigitButton();
        }
    }
}

window.onload = () => {
    const app: HTMLElement = document.getElementById('app');
    const calc = new UICalculator(app);
    calc.displayButtons();
}
