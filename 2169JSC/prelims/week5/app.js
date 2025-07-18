const http = require('http'); // Import Node.js core module

// modules
const rootModule = require('./modules/root_module');
const aboutModule = require('./modules/about_module');
const contactModule = require('./modules/contact_module');
const galleryModule = require('./modules/gallery_module');
const notFoundModule = require('./modules/not_found_module');
const footerModule = require('./modules/footer_module');
let username = "John Smith";

// create web server
const server = http.createServer(function (req, res) { 
    // check the URL of the current request
    if (req.url == '/') {

        // set response header 
        res.writeHead(200, {'Content-Type' : 'text/html'});
        // set response content
        res.write('<html><body><h1>Welcome to my Node.js Application.</h1></body></html>');
        res.write(rootModule.rootMessage(username));
        res.end();
    } else if (req.url == '/about') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><body><h1>This is the About page.</h1></body></html>');
        res.write(aboutModule.aboutMessage(username));
        res.end();
    } else if (req.url == '/contact') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><body><h1>This is the Contact page.</h1></body></html>');
        res.write(contactModule.contactMessage(username));
        res.end();
    } else if (req.url == '/gallery') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><body><h1>This is the Gallery Page.</h1></body></html>');
        res.write(galleryModule.galleryMessage(username));
        res.end();
    } else if (req.url == '/footer') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><body><h1>This is the Footer Page.</h1></body></html>');
        res.write(footerModule.footerMessage(username));
        res.end();
    } else if (req.url == '/not_found') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><body><h1>Invalid request!.</h1></body></html>');
        res.write(notFoundModule.notFoundMessage());
        res.end();
    } else {
        res.end('Invalid Request!');
    }
}); 

server.listen(5000); //6 - listen for any incoming requests

console.log("Node.js web server at port 5000 running..");