export class Calculator {
    prevValue: number;
    totalCurrent: number = 0;


    calculate(currentValue: any) {
        switch(currentValue) {
            case '+': {
                this.addition(this.prevValue);
                break;
            };
            case '-': {
                this.substraction(this.prevValue);
                break;
            };
            case '*': {
                this.multiply(this.prevValue);
                break;
            };
            case '/': {
                this.divide(this.prevValue);
                break;
            };
            default: {
                this.savePrevValue(currentValue);
                break;
            };
        }
    }
    addition(currentValue: number) {
        this.totalCurrent += currentValue;
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
    savePrevValue(currentValue: any) {
        this.prevValue = Number(currentValue);
    }
}