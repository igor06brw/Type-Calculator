export class UICalculator {
    app: HTMLElement;
    button: HTMLButtonElement;
    template: HTMLDivElement;
    output: HTMLOutputElement;


    constructor(app: HTMLElement) {
        this.app = app;
    }
    generateTemplate() {
        this.template = document.createElement('div');
        this.template.className = 'main-template';
        this.app.appendChild(this.template);
        
    }
    generateButton(value: string, id: string, name: string, HTMLClass: string) {
        this.button = document.createElement('button');
        this.button.type = 'button';
        this.button.textContent = value;
        this.button.id = id;
        this.button.name = name; 
        this.button.className = HTMLClass;
        this.template.appendChild(this.button);
    }
    generateOutput() {
        this.output = document.createElement('output');
        this.output.name = 'Display Result'
        this.output.textContent = "1342 + 5943";
        this.output.id = 'outputResult';
        this.output.className = "output";
        this.template.appendChild(this.output);
    }

    displayButtons() {
        this.generateButton('AC', 'clean', 'clear', 'button action');
        this.generateButton(' ', ' ', ' ', 'button operator');
        this.generateButton(' ', ' ', ' ', 'button operator');
        this.generateButton('/', 'divide' , 'divide', 'button operator');

        this.generateButton('7', 'button7', '7', 'button button--7');
        this.generateButton('8', 'button8', '8', 'button button--8');
        this.generateButton('9', 'button9', '9', 'button button--9');
        this.generateButton('*', 'multiply', 'multiple', 'button operator');

        this.generateButton('4', 'button4', '4', 'button button--4');
        this.generateButton('5', 'button5', '5', 'button button--5');
        this.generateButton('6', 'button6', '6', 'button button--6');
        this.generateButton('-', 'substraction', 'substrace', 'button operator');

        this.generateButton('1', 'button1', '1', 'button button--1');
        this.generateButton('2', 'button2', '2', 'button button--2');
        this.generateButton('3', 'button3', '3', 'button button--3');
        this.generateButton('+', 'addition', 'add', 'button operator');

        this.generateButton('0', 'button0', '0', 'button button--0');

        this.generateButton('.', 'decimal', 'decimal', 'button decimal');
        this.generateButton('=', 'equal', 'equal', 'button action');
        
    }
    displayOutput() {
        this.generateOutput();
    }
    displayApp() {
        this.generateTemplate();
        this.generateOutput();
        this.displayButtons();
        
    }
}
