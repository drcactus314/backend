const http = require("http");
const fs = require("fs");
const { readFile, appendFile, writeFile, rename, unlink } = require("fs/promises"); // імортуємо модуль для обробки файлів з промісами чи обіцянками

const fileName = "newFile.txt";
const contentToAdd = "Some message";

async function appendToFile(fileName, data) {
  try {
    await appendFile(fileName, data, { flag: "w" });
    console.log(`Appended to file ${fileName} successfully`);
  } catch (error) {
    console.error("Error while appending to file", error.message);
  }
}
async function writeToFile(fileName, data) {
  try {
    await writeFile(fileName, data);
    console.log(`Wrote to file ${fileName} successfully`);
  } catch (error) {
    console.error("Error while appending to file", error.message);
  }
}

// async function readJewelryFile(){
//     try {
//         const data = await readFile('jewelry.txt');  //За допомогою цього методу ми можемо читати наші файлі асинхронно
//         console.log(data.toString()); // а це шлях до нашого тексту і потім вертаємо вміст нашого файлу

//     } catch (error) {
//         console.error("Error while reading a file", error.message); //метод обробки помилок, щоб переконатись, що ми можемо контролювати належним чином ситуацію. Це також не дасть програмі зупинитись
//     }
// }

// fs.open(fileName, 'a', (err, file)=>{ /*Викликаємо метод, беручи існуюючий файл, флег який ми використовуємо означає, що ми хочемо додати щось в цей файл. І коли ми прочитали цей файл ми хочемо записати щось своє. */
//     if(err)throw err;
//     fs.write(file, contentToAdd, (err, data)=>{
//         console.log("Content added to a file");

//         if(err)throw err;
//         console.log("Added succesfully");
//         fs.close(file, (err)=>{
//             if (err)throw err;
//             console.log('File closed');

//         })

//     })
// })

async function renameFile(from, to ){
    try {
         await rename(from, to); 
         console.log('File renamed');
    } catch (error) {
        console.error("Error while appending to file", error.message); 
    }
}
// renameFile('newFile.txt', 'newFile.js');

async function unlinkFile(fileName){
    try {
         await unlink(fileName); 
         console.log('File deleted');
    } catch (error) {
        console.error("Error while deleting to file", error.message); 
    }
} 
unlinkFile('love.js');

http
  .createServer(function (req, res) {
    try {
      fs.readFile("jewelry.txt", (err, data) => {
        res.writeHead(200, { "Content-type": "text/html" });
        res.write(data);
        return res.end();
      });
    } catch (err) {}
  })
  .listen(8080);
