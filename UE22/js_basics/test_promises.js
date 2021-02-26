// this is just an accessory cell

// we declare a variable that will 

// the next cell will run OK 
// for the first time
// and fail for the second time

let failure_toggle = 1
console.log("le début");

let my_prom = new Promise(
    function (resolve, reject) {

        // make it work or fail every other time
        failure_toggle = !failure_toggle;

        // a promise must use resolve or reject exactly once
        // depending on successful or not
        if (failure_toggle) {
            // in case of failure, do not wait
            console.log("on appelle reject(1)");
            reject(1);
        } else {
            // in case of success, wait for 1 s
            console.log("on appelle resolve(1) avec un timeout");
            setTimeout(() => resolve(1), 2000);
        }
    }
).then(
    // first argument to then is in case of success (resolve is used)
    (result) => {
        console.log(result);
        return result * 2;
    },
    // second is for the cases where reject is called
    (result) => console.log(`error with ${result}`)
).then(
    function (result) {
        console.log("on est dans le deuxième then");
        console.log(result);
        return result * 3;
    }
);