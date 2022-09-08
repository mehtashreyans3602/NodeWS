let a = 10;
let b = 20;
let c = a + b;
let msg = "Summation: " + c;
if(c == 30){
    msg += "<br>Sum is 30";
}
else{
    msg += "<br>Sum is not 30";
}
const http = require('http');
http.createServer(function (req,res){
    res.writeHead(200,{'Content-Type':"text/html"});
    //res.end can only be used once.
    res.end(msg);
}).listen(3000);
console.log("Server is Running at: http://127.0.0.1:3000");