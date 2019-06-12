const http = require('http');
const fs = require('fs');


http.createServer((req, res) => {
    console.log(req.method)
    console.log(req.url)

    if (req.method === 'GET' && req.url.includes('/upload')) {
        fs.createReadStream('./upload.html').pipe(res);
        return;
    }
    req.on('data', data => {
        console.log(data.toString('utf-8'));
        console.log('data')
    })
    req.on('end', () => {
        res.end();
    })
}).listen(8080, () => console.log('started'))
