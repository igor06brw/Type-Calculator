export class Calculator {
    prevValue: number;
    nextValue: number;


    savePrevValue() {
        this.prevValue = this.nextValue;
    }
    displaySomething(value: any) {
        this.savePrevValue();
        this.nextValue = Number(value);
        console.log(this.nextValue, this.prevValue);
    }
}