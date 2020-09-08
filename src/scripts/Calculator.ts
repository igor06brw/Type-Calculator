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
                this.secondNumber = Number(param);
                console.log(this.secondNumber, "secondNumber");
            }
            this.firstNumber = Number(param);
            console.log(this.firstNumber, "firstNumber");
        }
    }
    doCalculate(firstNumber: number, operator: string, secondNumber: number) {
        switch(operator) {
            case '+': {
                this.addition(firstNumber, secondNumber);
                break;
            };
            // case '-': {
            //     this.substraction(this.prevValue);
            //     break;
            // };
            // case '*': {
            //     this.multiply(this.prevValue);
            //     break;
            // };
            // case '/': {
            //     this.divide(this.prevValue);
            //     break;
            // };
            // default: {
            //     console.log('LEL XD')
            //     break;
            // };
        }
    }
    addition(firstNumber, secondNumber) {
        this.totalCurrent = firstNumber + secondNumber;
        console.log(this.totalCurrent);
    }
    substraction(currentValue: number) {
        this.totalCurrent -= currentValue;
        console.log(this.totalCurrent);
    }
    multiply(currentValue: number) {
        this.totalCurrent *= currentValue;
        console.log(this.totalCurrent);
    }
    divide(currentValue: number) {
        this.totalCurrent /= currentValue;
        console.log(this.totalCurrent);
    }
}