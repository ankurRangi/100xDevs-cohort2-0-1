// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file. Example below;

// hello     world    my    name   is       raman
// *After the program runs, the output should be*
// hello world my name is raman

const fs = require("fs");

function readFileAsync(duration){
    let pr = new Promise( (resolve, reject) => {
        fs.readFile("datafile.txt", "utf-8", (err, data) => {
            console.log(data);
            data = data.replace(/ +(?= )/g,'');
            fs.writeFile("datafile.txt", data, (err) => {
                if (err) 
                    console.log(err); 
                else { 
                console.log(fs.readFileSync("datafile.txt", "utf-8")); 
                } 
            })
            resolve("Resolved");
            reject(new Error('Some Error, Please check')); // Automatically ignored if no error in promise
        });
    });
    return pr;
}

async function main(){
    const res = await readFileAsync();
    console.log(res);
}

main();
// Add spaces in datfile.txt before running the file.