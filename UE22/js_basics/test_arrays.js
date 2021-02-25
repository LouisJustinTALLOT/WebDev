// arrays can be heterogeous
let array1 = [1, "two"]

// you can also create an
// empty instance explicitly
let array2 = new Array()

// insert at the end
array2.push(3)
array2.push("four")
array2.push(5)
console.log(array2)

// and get it back
array2.pop()

// use the concat method
let array = array1.concat(array2)
console.log(array)

// and NOT addition, 
// it does NOT work like in Python
console.log(array1 + array2)

console.log("longueur ", array.length)

console.log(array[3])

// searching; >=0 means it is found
console.log(array.indexOf(3))

// otherwise -1
console.log(array.indexOf("absent"))

for (let x of array1) {
    console.log(x);
}
console.log()
for (let i in array) {
    console.log(i, ' ', array[i]);
}

console.log()

let ref1 = [["shared", "data"], "unshared"];
console.log(ref1)

// slice() works like Python's [:]
// so it's a shallow copy
let ref2 = ref1.slice();
console.log(ref2);

// changing data from ref2 
ref2[0][0] = "from 2 - deep"
ref2[1] = "from 2 - shallow"
console.log(ref2);

// impacts ref1 but not on first level
// because it is a shallow copy
console.log(ref1)

console.log();
// les maps
let map = new Map();

map.set('key1', 'value1');
map.set(1000, 'value1000');
console.log(map);

console.log(map.get(1000));

console.log()


