function outer() {
    let outerVar = "I am from outer function";

    function inner() {
        let innerVar = "I am from inner function";
        console.log(innerVar); // Accessing inner function variable
        console.log(outerVar); // Accessing outer function variable
    }
    inner();
    console.log(outerVar); // Accessing outer function variable
    // console.log(innerVar); // Error: innerVar is not defined
}

outer();
// inner(); // Error: inner is not defined
