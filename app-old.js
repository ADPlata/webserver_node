
const { Console } = require('console');
const http = require('http');


http.createServer( (req, res) => {

    //console.log(req);

    // res.writeHead(200, {'Content-Type': 'application-json'})
    // res.write(JSON.stringify({
    //     persona: 'David',
    //     profesion: 'desarrollador' }
    //     ));
    
    res.write('Hola Mundo!');
    res.end();
})
.listen(9090);


