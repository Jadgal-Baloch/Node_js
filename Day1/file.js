const fs = require('fs');
const { copyFile } = require('fs/promises');

// sync...

// fs.writeFileSync('./test.txt'  , 'Hello world');



// Async...


fs.writeFile('./test.txt'  , 'Hello world i am Async' , (err) => {});


// const fs = require('fs');

// const result = fs.readFileSync('./content.txt', 'utf-8');
// console.log(result);


const result = fs.readFile('./contect.txt', 'utf-8' , (err,result) => {
    if (err) {
        console.log("Error" , err);

        
        
    }
    else{
        console.log(result);
    }
});


fs.appendFileSync("./Time.txt" , `${Date.now()} hey dear\n`);


// copyFile


fs.cpSync('./test.txt' , './copy.txt');

// unlink   === delete
 
fs.unlinkSync('./copy.txt');