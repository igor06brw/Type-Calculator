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
        this.firstNumber = firstNumber + secondNumber;
        console.log(this.firstNumber);
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