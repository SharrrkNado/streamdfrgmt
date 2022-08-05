const http = require('http');
const fs = require('fs');
const lineReader = require('node:readline');

const server = http.createServer((req, res) => {


    if (req.url === '/') {
        console.log(`request incomming from ${req.url}`);
        res.writeHead(200, {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:4200'
        });

        const stream = fs.createReadStream(`${__dirname}/mockdata.json`, { highWaterMark: 2, encoding: 'utf-8', });
        // stream.on('data',(chunk)=>{
        //     console.log('--');
        //     console.log(chunk);
        // })
        stream.pipe(res);
    }

    if (req.url === '/wobbel') {
        console.log(`request incomming from ${req.url}`);
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write('wobbel')
        res.end();
    }



    // const rl = lineReader.createInterface({
    //     input: fs.createReadStream(`${__dirname}/mockdata.json`)
    // });
    // rl.on('line', (line) => {
    //     console.log(line);
    //     res.write(line)
    // })
    // rl.on('close',()=>{
    //     console.log('close');
    //     res.end();
    // })
});
server.listen(3001);
console.log('server listening on 3001')