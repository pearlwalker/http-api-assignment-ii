const respondJSON = (req, res, status, object) => {
    const content = JSON.stringify(object);

    res.writeHead(status, {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(content, 'utf8'),
    });
    res.end();
};

const notFound = (req, res) => {
    const responseJSON = {
        message: 'The page you are looking for was NOT found.',
        id: 'notFound',
    };

    respondJSON(req, res, 404, responseJSON);
};

module.exports = {
    notFound,
};