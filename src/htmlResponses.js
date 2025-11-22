const fs = require('fs');

const index = fs.readFileSync(`${__dirname}/../hosted/client.html`);
const css = fs.readFileSync(`${__dirname}/../hosted/style.css`);
const bundle = fs.readFileSync(`${__dirname}/../hosted/bundle.js`);

const serveFile = (res, file, contentType) => {

};

const getIndex = (req, res) => {

};

const getCSS = (req, res) => {

};

const getBundle = (req, res) => {

};

module.exports = {
    getIndex,
    getCSS,
    getBundle
};