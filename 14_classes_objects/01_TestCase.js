class TestCase {

    constructor(name, status) {
        this.name = name;
        this.status = status;
    }

    printResult() {
        console.log(`Test case: ${this.name}, Status: ${this.status}`);
    }

}

const loginTest = new TestCase('Login Test', 'Passed');
loginTest.printResult(); // Output: Test case: Login Test, Status: Passed

const signupTest = new TestCase('Signup Test', 'Failed');
signupTest.printResult(); // Output: Test case: Signup Test, Status: Failed
