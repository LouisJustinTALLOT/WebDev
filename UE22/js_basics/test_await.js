failure_toggle = 0

async function foo() {
    // make it work or fail every other time
    failure_toggle = !failure_toggle;

    // a promise must use resolve or reject exactly once
    // depending on successful or not
    if (failure_toggle) {
        // in case of failure, do not wait
        throw 1; // Equivalent to reject(1);
    } else {
        // in case of success, wait for 1 s
        return await new Promise(
            (resolve, reject) => {
                setTimeout(() => resolve(1), 3000)
            }
        );
    }
}

// Call the function as promise
foo().then(
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