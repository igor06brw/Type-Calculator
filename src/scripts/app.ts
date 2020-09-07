import { UICalculator } from "./UICalculator";

window.onload = () => {
    const app: HTMLElement = document.getElementById('app');
    const UICalc = new UICalculator(app);
    UICalc.displayButtons();
    UICalc.generateOutput();
}