const { Readable } = require('stream');

const delay = time => new Promise(r => setTimeout(r, time))

let stream = new Readable({
    highWaterMark: 3,
    read(size) {
        let a = this;
        console.log('here')
    }
})

let count = 65;
let interval = setInterval(()=> {
    stream.push(String.fromCharCode(count++))
    if(count >75)
        clearInterval(interval)
    console.log('pushed ', count)
}, 2000);


const  reader = async () => {
    let data = stream.read(1);
    if (!data)
        return;
    console.log('data -> ', data.toString('utf-8'))
    await delay(4000);
    reader();
}

delay(4000).then(reader);

delay(100000).then(console.log)