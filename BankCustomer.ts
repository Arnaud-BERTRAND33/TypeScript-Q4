import  assert  from  'assert';

class BankCustomer {

    private name: string;
    private pin: string;

    constructor(name: string, pin: string) {
        this.name = name;
        this.pin = pin;
    }

     getName(): void {
        console.log(`${this.name}`);
     }

     verifyPinInput(pin: string): void {
        if (this.pin === pin) {
            console.log("true");
        } else {
            console.log("false");
        }
     }
}

const customer = new BankCustomer('John Doe', '3579');
assert.equal(typeof customer.getName, 'function');
assert.equal(typeof customer.verifyPinInput, 'function');
assert.equal(customer.getName(), 'John Doe');
assert.ok(customer.verifyPinInput('3579'));