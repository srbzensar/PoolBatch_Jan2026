// Base class or Parent class or Super class
class BaseTest {
    constructor(name) {
        this.name = name;
    }

    start() {
        console.log(`Starting test: ${this.name}`);
    }
}

// Derived class or Child class or Sub class
class LoginTest extends BaseTest {
    validateLogin() {
        console.log(`Validating login for test: ${this.name}`);
    }
}

// usage
const test = new LoginTest('Login Test');
test.start(); // Output: Starting test: Login Test
test.validateLogin(); // Output: Validating login for test: Login Test

// Challenge:
// Create a Page class with a method open(url) that logs "Opening <url>".
// Create a LoginPage class that extends Page and adds a method login() that logs "Logging in...".
