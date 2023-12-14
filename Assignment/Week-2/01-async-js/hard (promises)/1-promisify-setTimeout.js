/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

// function wait(n) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Done");
//         }, (n));
//     });
// }
console.log("Program Started");
function wait(n) {
    let pr = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Completed");
        }, (n));
    });
    return pr;
}

wait(2000).then(
    (value) => {
        console.log("Execution after promise!: ",value);
    }
)