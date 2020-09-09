export class Calculator {
    firstNumber: number;
    operator: string;
    secondNumber: number;
    totalCurrent: string = '';
    prevOperator: string = '';

    
    checkIsNaN(param: any) {
        if(isNaN(Number(param))) {
            this.operator = String(param);
            return this.assignDigits(param)
        } else {
            if(this.firstNumber !== undefined ) {
                this.assignDigits(param)
                // this.secondNumber = this.firstNumber;
                // this.firstNumber = Number(param);
            } else if(this.firstNumber === undefined) {
                this.assignDigits(param)
                // this.firstNumber = Number(param);
            }
        }
        // if(this.firstNumber && this.operator && this.secondNumber !== undefined){
        //     console.log('calculate');
        //     this.doCalculate(this.firstNumber, this.operator, this.secondNumber);             
        // } 
        if(this.operator == 'clear') {
            this.cleanAllMemory();
        }
        console.log(this.firstNumber, this.operator, this.secondNumber);
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
    

    assignDigits(value: any) {
        // if(this.firstNumber === undefined && this.operator === undefined) {
        //     this.totalCurrent += value;
        // }
        // if(this.operator !== undefined && this.firstNumber !== undefined) {
        //     this.totalCurrent += value;
        //     console.log(this.operator == this.prevOperator);
        //     console.log(this.operator, this.prevOperator);
            
        //     if(this.operator !== undefined && this.secondNumber !== undefined ) {
        //         this.firstNumber = Number(this.totalCurrent);
        //         this.totalCurrent = '';
        //         this.doCalculate(this.firstNumber, this.operator, this.secondNumber);
        //         console.log('calculate'); 
        //     }  
        //     if(this.operator !== undefined && this.secondNumber === undefined) {
        //         this.secondNumber = this.firstNumber;
        //         this.firstNumber = Number(this.totalCurrent);
        //         this.totalCurrent = '';
        //         console.log('calculate');
        //         this.doCalculate(this.firstNumber, this.operator, this.secondNumber);  
        //     }  
        // }
        // if(this.firstNumber === undefined && this.operator !== undefined ) {
        //     this.prevOperator = this.operator
        //     this.firstNumber = Number(this.totalCurrent);
        //     this.totalCurrent = '';
        //     console.log(this.firstNumber);
        // }
        if(this.firstNumber === undefined) {
            if(this.operator !== undefined && this.secondNumber === undefined) {
                console.log('this.operator !== undefined && this.secondNumber === undefined');
                this.prevOperator = this.operator;
                this.secondNumber = Number(this.totalCurrent);
                this.totalCurrent = '';
                return this.secondNumber;
            }
            if(this.operator !== undefined && this.secondNumber !== undefined && this.firstNumber === undefined) {
                if(this.prevOperator != this.operator) {
                    console.log('this.prevOperator != this.operator');
                    this.firstNumber = Number(this.totalCurrent);
                    this.totalCurrent = '';
                    this.doCalculate(this.firstNumber, this.prevOperator, this.secondNumber);
                    return;
                }
                return this.totalCurrent += value;
            }
            this.totalCurrent += value;
            console.log('first if: ', this.totalCurrent);
            return;
        }
    }

    cleanAllMemory() {
        this.secondNumber = undefined;
        this.operator = undefined;
        this.firstNumber = undefined;
    }
    cleanMemory() {
        this.prevOperator = this.operator;
        this.operator = undefined;
        this.firstNumber = undefined;
    }
    addition(firstNumber, secondNumber) {
        this.secondNumber = secondNumber + firstNumber;
        this.cleanMemory()
        console.log(this.secondNumber);
    }
    substraction(firstNumber: number, secondNumber: number) {
        this.secondNumber = secondNumber - firstNumber;
        this.cleanMemory()
        console.log(this.secondNumber);
    }
    multiply(firstNumber: number, secondNumber: number) {
        this.secondNumber = secondNumber * firstNumber;
        this.cleanMemory()
        console.log(this.secondNumber);
    }
    divide(firstNumber: number, secondNumber: number) {
        this.secondNumber = secondNumber / firstNumber;
        this.cleanMemory()
        console.log(this.secondNumber);
    }
}