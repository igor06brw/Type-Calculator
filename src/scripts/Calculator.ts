export class Calculator {
    prevValue: number;
    totalCurrent: number = 0;


    calculate(currentValue: any) {
        switch(currentValue) {
            case '+': {
                console.log(this.prevValue);
                this.addition(this.prevValue);
                console.log('add!')
                break;
            }
            default: {
                this.savePrevValue(currentValue);
                break;
            }
        }
    }
    addition(currentValue: number) {
        this.totalCurrent = this.totalCurrent + currentValue;
        console.log(this.totalCurrent);
    }
    savePrevValue(currentValue: any) {
        this.prevValue = Number(currentValue);
        console.log(this.prevValue);
    }
    
}