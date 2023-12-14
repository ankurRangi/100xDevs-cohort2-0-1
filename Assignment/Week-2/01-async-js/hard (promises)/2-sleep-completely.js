/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

console.log("Started");
// sleepAsync uses promise and does the halt async wise
function sleepAsync (seconds) {
    return new Promise( (resolve) => {
        setTimeout( () => {
            const str = "Halted for " + (seconds/1000) + " seconds.";
            resolve(str);
        }, (seconds));
    });
}

function sleepSync (seconds) {
        setTimeout( () => {
            console.log("Halted for " + (seconds/1000) + " seconds.");
        }, (seconds));
}

sleepSync(3000);