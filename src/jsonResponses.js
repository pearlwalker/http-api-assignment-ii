const respondJSON = (req, res, status, object) => {

};

const notFound = (req, res) => {
    const responseJSON = {
        message: 'The page you are looking for was NOT found.',
        id: 'notFound',
    };

    respondJSON(req, res, 404, responseJSON);
};