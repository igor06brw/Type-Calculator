import { UICalculator } from "./UICalculator";
import { Calculator } from "./Calculator";
import '../styles/main.scss';

const app: HTMLElement = document.getElementById('app');
const UICalc = new UICalculator(app);
const calculator = new Calculator();

window.onload = () => {
    UICalc.displayButtons();
    UICalc.generateOutput();

    app.addEventListener('click', (event) => {
        calculator.checkIsNaN((<HTMLButtonElement>event.target).name);
    })
}

