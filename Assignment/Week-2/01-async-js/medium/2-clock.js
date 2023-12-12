// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?
// Can you make it so that it updates every second, and shows time in the following formats - 
//  - HH:MM::SS (Eg. 13:45:23)
//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)



// import { timeUp } from "../easy/1-counter.js";
let date = new Date();
function timeUp(){
    console.log(date.toLocaleTimeString());
    date.setSeconds(date.getSeconds() + 1);
    return date.toLocaleTimeString;
}
setInterval(timeUp, 1000);

// D:\Work\100xDevs Cohort 2.0\100xDevs-cohort2-0-1\Assignment\Week-2\01-async-js\medium>node 2-clock.js
// 9:44:57 pm
// 9:44:57 pm
// 9:44:57 pm
// 9:44:57 pm
// 9:44:57 pm
// ^C