// this is just an accessory cell

// we declare a variable that will 

// the next cell will run OK 
// for the first time
// and fail for the second time

let failure_toggle = 1

new Promise(
    function (resolve, reject) {

        // make it work or fail every other time
        failure_toggle = !failure_toggle;

        // a promise must use resolve or reject exactly once
        // depending on successful or not
        if (failure_toggle) {
            // in case of failure, do not wait
            reject(1);
        } else {
            // in case of success, wait for 1 s
            setTimeout(() => resolve(1), 500);
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
        console.log(result);
        return result * 3;
    }
);