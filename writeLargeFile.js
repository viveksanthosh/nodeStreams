const fs = require('fs');

const writeStream = fs.createWriteStream('./bigFile.txt');

for(let i = 0; i < 100000;i++){
    let randomCharacter = String.fromCharCode(65 + Math.floor(((Math.random() *1000) % 26 )))
    console.log('left ', 100000 - i)
writeStream.write(randomCharacter);
}
writeStream.end();