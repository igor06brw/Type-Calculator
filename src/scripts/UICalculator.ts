export class UICalculator {
    app: HTMLElement;
    button: HTMLButtonElement;
    output: HTMLOutputElement;


    constructor(app: HTMLElement) {
        this.app = app;
    }
    generateButton(value: string, id: string, name: string, HTMLClass: string) {
        this.button = document.createElement('button');
        this.button.type = 'button';
        this.button.textContent = value;
        this.button.id = id;
        this.button.name = name; 
        this.button.className = HTMLClass;
        this.app.appendChild(this.button);
    }
    generateOutput() {
        this.output = document.createElement('output');
        this.output.name = 'Display Result'
        this.output.textContent = "1342 + 5943";
        this.output.id = 'outputResult';
        this.output.className = "output";
        this.app.appendChild(this.output);
    }

    displayButtons() {
        for(let i = 0; i <= 9; i++) {
            this.generateButton(String(i), 'button' + i, String(i), 'button digit');
        }
        this.generateButton('-', 'substraction', 'substrace', 'button operator');
        this.generateButton('+', 'addition', 'add', 'button operator');
        this.generateButton('*', 'multiply', 'multiple', 'button operator');
        this.generateButton('/', 'divide' , 'divide', 'button operator');

        this.generateButton('=', 'equal', 'equal', 'button action');
        this.generateButton('AC', 'clean', 'clear', 'button action');
        
        this.generateButton('.', 'decimal', '.', 'button decimal');
    }
}
