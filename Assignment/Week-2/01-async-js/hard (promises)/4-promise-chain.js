/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
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
    waitOneSecond().then( (value)=> {
        console.log(value);
    });
    waitTwoSecond().then( (value)=> {
        console.log(value);
    });
    waitThreeSecond().then( (value)=> {
        console.log(value);
        const end = new Date().getTime();
        console.log("Time Taken: ", (end-start)/1000);
    });


}

calculateTime();

// Output:
// waitOneSecond
// waitTwoSecond
// waitThreeSecond
// Time Taken:  3.002

// On comparing the time:
// 3-Promise-all.js >> 4-promise-chain.js
//            3.019 >> 3.006

// Promise.all() is taking slightly more time than individually calling the promises.