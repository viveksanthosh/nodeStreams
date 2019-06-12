const { Readable } = require('stream');

let read = new Readable({
    highWaterMark: 5,
    read(size){
        console.log(this)
    }
})

let count =65;
let interval = setInterval(()=> {
    read.push(String.fromCharCode(count++))
    if(count >75)
        clearInterval(interval)
    console.log('pushed ', count)
}, 200);


setInterval(()=> {
    let buffer =  read.read(1);
    if(buffer)
    console.log('read -> ',buffer.toString('utf8')  )
    }, 2000);
