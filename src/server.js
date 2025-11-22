const http = require('http');
const htmlHandler = require('./htmlResponses.js');
const jsonHandler = require('./jsonResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const urlStruct = {
    '/': htmlHandler.getIndex,
    '/style.css': htmlHandler.getCSS,
    '/bundle.js': htmlHandler.getBundle,
    notFound: jsonHandler.notReal,
};

const onRequest = (req, res) => {
    const protocol = req.connection.encrypted ? 'https' : 'http';
    const parsedUrl = new URL(req.url, `${protocol}://${req.headers.host}`);

    if(urlStruct[parsedUrl.pathname]) {
        urlStruct[parsedUrl.pathname](req, res);
    } else {
        urlStruct.notReal(req, res);
    };
};

http.createServer(onRequest).listen(port, () => {
    console.log(`Listening on 127.0.0.1:${port}`);
});