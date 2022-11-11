const http = require("http");

const hostname = "127.0.0.1";
const port = 4343;

const server = http.createServer((request, response) => {

    const url = request.url;

    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    
    switch(url){
        case "/":
            response.end('Home page');
            break;

        case "/home":
            response.end('Home page');
            break;

        case "/contact":
            response.end('Contact us page');
            break;

        case "/about-us":
            response.end('About Us us page');
            break;
        default:
            response.statusCode = 404;
            response.end("ERROR 404: Page not found");

    }


   
 
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
  });


