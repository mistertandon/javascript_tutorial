var test = 1;

function functionHoisting() {

    //function Hoisting, test is re-defined and re-declared
    
    test = 10;
    function test() { }

    console.log(test); // 10

    return;
}

functionHoisting();

console.log(test); // 1