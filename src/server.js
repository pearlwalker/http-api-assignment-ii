const http = require('http');
const htmlHandler = require('./htmlResponses.js');
const jsonHandler = require('./jsonResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const urlStruct = {
  '/': htmlHandler.getIndex,
  '/style.css': htmlHandler.getCSS,
  '/bundle.js': htmlHandler.getBundle,
  '/getUsers': jsonHandler.getUsers,
  '/addUser': jsonHandler.addUser,
  notReal: jsonHandler.notReal,
};

const parseBody = (req, res) => {
  const body = [];

  req.on('error', (err) =>{
    console.dir(err);
    res.status = 400;
    res.end();
  });

  req.on('data', (chunk) => {
    body.push(chunk);
  });
};

const onRequest = (req, res) => {
  const protocol = req.connection.encrypted ? 'https' : 'http';
  const parsedUrl = new URL(req.url, `${protocol}://${req.headers.host}`);
  console.log(req.method)
  if (urlStruct[parsedUrl.pathname]) {
    urlStruct[parsedUrl.pathname](req, res);
  } else {
    urlStruct.notReal(req, res);
  }
};

http.createServer(onRequest).listen(port, () => {
  console.log(`Listening on 127.0.0.1:${port}`);
});
