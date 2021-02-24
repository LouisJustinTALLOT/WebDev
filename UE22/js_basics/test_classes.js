//  les classes en JS

class Vector {
    // just like Python's __init__
    // NO NEED to pass 'self' in JavaScript
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }


    // same for a regular method 
    display() {
        console.log(`[Vector x=${this.x} y=${this.y}]`)
    }
}

let vector = new Vector(10, 20)
vector.display()

console.log()


// class Temperature {
//     constructor(kelvin) {
//         this.kelvin = kelvin; // Call "set kelvin(kelvin)"
//     }

//     get kelvin() {
//         return this._kelvin;
//     }

//     set kelvin(kelvin) {
//         if (kelvin < 0) {
//             console.log("negative");
//             return
//         }
//         this._kelvin = kelvin;
//     }

//     display() {
//         console.log(`Temperature `)
//     }
// }

class Temperature {
    constructor(temp_value) {
        this.kelvin = temp_value;
        // "set kelvin(temp_value)" will be called
    }

    get kelvin() {
        return this._kelvin;
    }

    set kelvin(temp_value) {
        if (temp_value < 0) {
            console.log("negative");
            return;
            // this.kelvin will be undefined
        }
        this._kelvin = temp_value;

        // we must use the hidden variable this._kelvin
        // that will store the value entered 
        // and will be returned when we ask for this.kelvin
        // thanks to the get kevin() function
        
        // otherwise, set kelvin(temp_value) is called again
        // and we have an infinite loop

    }
}

let temp = new Temperature(10);
console.log(temp.kelvin)
console.log(temp._kelvin)
console.log()

console.log(1, "two", [3, "four"])
console.log()



// it may be tempting to write
console.log(`vector = ${vector}`)
// but it is better like this
console.log("vector = ", vector)
console.log()

// les exceptions en js
try {
    // referring to an unknown variable
    unknown;
} catch (err) {
    console.log(`OOPS name=${err.name}, message=${err.message}`);
}
