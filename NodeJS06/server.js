const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {

    let filePath = "./public";

    if (req.url === "/") {
        filePath += "/index.html";
    } else {
        filePath += req.url;
    }

    const ext = path.extname(filePath);

    let contentType = "text/html";

    switch(ext){
        case ".css":
            contentType = "text/css";
            break;

        case ".js":
            contentType = "text/javascript";
            break;
    }

    fs.readFile(filePath, (err, content) => {

        if(err){
            res.writeHead(404);
            res.end("Archivo no encontrado");
            return;
        }

        res.writeHead(200, {
            "Content-Type": contentType
        });

        res.end(content);
    });
});

server.listen(3000, () => {
    console.log("Servidor iniciado");
    console.log("http://localhost:3000");
});