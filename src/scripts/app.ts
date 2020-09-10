import { UICalculator } from "./UICalculator";
import { Calculator } from "./Calculator";

const app: HTMLElement = document.getElementById('app');
const UICalc = new UICalculator(app);
const calculator = new Calculator();

window.onload = () => {
    UICalc.displayApp();
    // UICalc.displayButtons();
    // UICalc.generateOutput();

    app.addEventListener('click', (event) => {
        calculator.checkIsNaN((<HTMLButtonElement>event.target).name);
    })
}

