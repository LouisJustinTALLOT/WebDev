let bond = {
    first_name: "James",
    last_name: "Bond"
}

console.log(`my name is ${bond.last_name}`);

// check for a key
console.log('first_name' in bond)

// so we can use this to iterate over an object's contents
for (key in bond) {
    console.log(key, ':', bond[key])
}

console.log()
let [a1, a2] = [100, 200];
console.log(`a1 now is ${a1}, a2 is ${a2}`)

console.log()

let example_obj = {
    name: "doe",
    phone: '0123456',
    other: 'some stuff'
};

let { name, phone } = { ...example_obj };

console.log(`name now is ${name}, phone is ${phone}`)

console.log();

class Person {
    constructor(first, last) {
        this.first_name = first;
        this.last_name = last;
    }
}

let person = new Person("John", "Doe")

console.log(typeof (person))

console.log()

// on an array
function side_effect(arg) {
    arg[1] *= 1000;
}

let list = [0, 1, 2];
side_effect(list);
console.log(list);

console.log()
// same with objects
function change_object(obj) {
    obj.first_name = 'BOOM';
}

let person2 = new Person('John Doe')
change_object(person2)
console.log(person2)

// just display arguments
function foo(x, y, z) {
    console.log(`x=${x}, y=${y}, z=${z}`);
}
// works fine, of course
console.log(foo(1, 2, 3));
// works fine TOO !
console.log(foo(1, 2));
// and this one AS WELL
console.log(foo(1, 2, 3, 4));
console.log();

// equivalent to Python's 
// def bar(x, y, *args):

function bar(x, y, ...arguments) {
    // display what we receive
    console.log(`x=${x}, y=${y}`);
    console.log(`arguments=${arguments}`);
    // the arguments object can be iterated on
    for (let arg of arguments) {
        console.log(arg);
    }
}

// with this call, the 2 extra args are captured 
bar(1, 2, 3, 4)