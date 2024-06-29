var http = require("http");

http.createServer((request, response) => {
        response.writeHead(200, {"content-Type": "text/plain"});
    
        response.end("<h1>Hello Node!!!!</h1>\n");
    }).listen(3000);
    console.log("Server is runing on port http://localhost:3000")

    
