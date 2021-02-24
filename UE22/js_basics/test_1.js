let a = 10;

// conditional if 
if (a == 10) {
    console.log("YES 10");
} else if (a == 12) {
    // 
} else {
    console.log('non')
}

while (a >= 5) {
    console.log(a);
    a -= 3;
}

switch (a) {
    case 0:
        console.log("ZERO");
        break;
    case 10:
        console.log("TEN");
        break;
    case 20:
        console.log("TWENTY");
        break;
    default:
        console.log("NONE");
}

console.log('a = ', a)
console.log()

for (let i=0; i<5; i++) {
    console.log(i);
}
console.log()

let n = 10;
console.log(typeof(n))

let s = "hello world";
console.log(typeof(s))
console.log()

// there is a form of parallel assignment 
// similar to what Python offers

let [py, thon] = [10, 20];

console.log(py + thon)
console.log()


function foo() {
    // this local declaration 
    // hides the global variable
    let a = "local";
    console.log("in foo():", a);
}

console.log("in global context:", a);
foo()
console.log()

let y = "outermost";
{ 
    let y = "intermediate";
    { 
        let y = "innermost";
        console.log("level 2", y);
    }
    console.log("level 1", y);
}
console.log("level 0", y);

console.log()
function spam(x, y) {
    console.log(x, '+', y, '=', x+y);
}

spam(10, 20)

console.log()
function egg(x, y) {
    console.log('x is a ', typeof(x));
    console.log(x, '+', y, '=', x+y);
}

// like in Python, function arguments
// are not statically typed
egg('abc', 'def')
