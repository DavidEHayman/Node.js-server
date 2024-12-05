const http = require('http');
const PORT = 8000;
var dt = require('./index');

http.createServer(function (req, res) {
    res.write('hello world js\n');

    res.end();

}).listen(PORT, () => {
    console.log(`This is the current data and time ${dt.myDataTime()}`);
});