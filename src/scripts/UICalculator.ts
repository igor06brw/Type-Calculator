

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
    generateOutput(value: string) {
        this.output = document.createElement('output');
        this.output.name = 'Display Result'
        this.output.textContent = value;
        this.output.id = 'outputResult';
        this.output.className = "output";
        this.template.appendChild(this.output);
    }

    displayButtons() {
        this.generateButton('AC', 'clean', 'clear', 'button button--action button--clear');
        this.generateButton(' ', ' ', ' ', 'button blank');
        this.generateButton(' ', ' ', ' ', 'button blank');
        this.generateButton('/', 'divide' , 'divide', 'button button--operator button--divide');

        this.generateButton('7', 'button7', '7', 'button button--7');
        this.generateButton('8', 'button8', '8', 'button button--8');
        this.generateButton('9', 'button9', '9', 'button button--9');
        this.generateButton('x', 'multiply', 'multiple', 'button button--operator button--multiple');

        this.generateButton('4', 'button4', '4', 'button button--4');
        this.generateButton('5', 'button5', '5', 'button button--5');
        this.generateButton('6', 'button6', '6', 'button button--6');
        this.generateButton('-', 'substraction', 'substrace', 'button button--operator button--substrace');

        this.generateButton('1', 'button1', '1', 'button button--1');
        this.generateButton('2', 'button2', '2', 'button button--2');
        this.generateButton('3', 'button3', '3', 'button button--3');
        this.generateButton('+', 'addition', 'add', 'button button--operator button--addition');

        this.generateButton('0', 'button0', '0', 'button button--0');

        this.generateButton('.', 'decimal', 'decimal', 'button button--decimal');
        this.generateButton('=', 'equal', 'equal', 'button button--action button--equal');
        
    }
    displayOutput() {
        this.generateOutput('');
    }
    displayApp() {
        this.generateTemplate();
        this.displayOutput();
        this.displayButtons();
    }
}
