export class Calculator {
    firstNumber: number;
    operator: string;
    secondNumber: number;
    totalCurrent: number;

    
    checkIsNaN(param: any) {
        if(isNaN(Number(param))) {
            this.operator = String(param);
            console.log(this.operator);
        } else {
            if(this.firstNumber !== undefined ) {
                this.secondNumber = this.firstNumber;
                this.firstNumber = Number(param);
            } else if(this.firstNumber === undefined) {
                this.firstNumber = Number(param);
            }
        }
        console.log(this.firstNumber, this.operator, this.secondNumber);


        if(this.firstNumber && this.operator && this.secondNumber !== undefined){
            console.log('calculate');
            this.doCalculate(this.firstNumber, this.operator, this.secondNumber);     
            console.log('')         
        } 
    }
    doCalculate(firstNumber: number, operator: string, secondNumber: number) {
        switch(operator) {
            case 'add': {
                this.addition(firstNumber, secondNumber);
                break;
            };
            case 'substrace': {
                this.substraction(firstNumber, secondNumber);
                break;
            };
            case 'multiple': {
                this.multiply(firstNumber, secondNumber);
                break;
            };
            case 'divide': {
                this.divide(firstNumber, secondNumber);
                break;
            };
            default: {
                console.log('LEL XD')
                break;
            };
        }
    }

    cleanMemory() {
        this.operator = undefined;
        this.firstNumber = undefined
    }
    addition(firstNumber, secondNumber) {
        this.secondNumber = firstNumber + secondNumber;
        this.cleanMemory()
        console.log(this.secondNumber);
    }
    substraction(firstNumber: number, secondNumber: number) {
        this.secondNumber = firstNumber - secondNumber;
        this.cleanMemory()
        console.log(this.secondNumber);
    }
    multiply(firstNumber: number, secondNumber: number) {
        this.secondNumber = firstNumber * secondNumber;
        this.cleanMemory()
        console.log(this.secondNumber);
    }
    divide(firstNumber: number, secondNumber: number) {
        this.secondNumber = secondNumber / firstNumber;
        this.cleanMemory()
        console.log(this.secondNumber);
    }
}