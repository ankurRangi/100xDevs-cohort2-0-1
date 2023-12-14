/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

const start = new Date().getTime();
function waitOneSecond() {
    return new Promise( (resolve) => {
        setTimeout(() => {
            resolve("waitOneSecond")
        }, 1000);
    });
}

function waitTwoSecond() {
    return new Promise( (resolve) => {
        setTimeout(() => {
            resolve("waitTwoSecond")
        }, 2000);
    });
}

function waitThreeSecond() {
    return new Promise( (resolve) => {
        setTimeout(() => {
            resolve("waitThreeSecond")
        }, 3000);
    });
}

function calculateTime() {
    Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()])
        .then((values) => {
            console.log(values);
            const end = new Date().getTime();
            console.log("Time Taken: ", (end-start)/1000);
        }
    );

}
calculateTime();


// Output:
// [ 'waitOneSecond', 'waitTwoSecond', 'waitThreeSecond' ]
// Time Taken:  3.018