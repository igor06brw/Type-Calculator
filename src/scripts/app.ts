import { UICalculator } from "./UICalculator";
import { Calculator } from "./Calculator";
import '../styles/main.scss';

const app: HTMLElement = document.getElementById('app');
const UICalc = new UICalculator(app);
const calculator = new Calculator();

window.onload = () => {
    UICalc.displayApp();
    const output: HTMLElement = document.getElementById('outputResult');

    app.addEventListener('click', (event) => {
        calculator.checkIsNaN((<HTMLButtonElement>event.target).name);
        console.log(output.textContent += (<HTMLButtonElement>event.target).name);
    })
    
}

