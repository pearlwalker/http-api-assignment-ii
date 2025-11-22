const users = {};

const respondJSON = (req, res, status, object) => {
  const content = JSON.stringify(object);

  res.writeHead(status, {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(content, 'utf8'),
  });

  if (req.method !== 'HEAD' && status !== 204) {
    res.write(content);
  }

  res.end();
};

const getUsers = (req, res) => {
  const responseJSON = {
    users,
  };

  respondJSON(req, res, 200, responseJSON);
};

const addUser = (req, res) => {
  const responseJSON = {
    message: 'Name and age are both required.',
  };

  const { name, age } = req.body;

  if (!name || !age) {
    responseJSON.id = 'missingParams';
    return respondJSON(req, res, 400, responseJSON);
  }

  let status = 204;
  if (!users[name]) {
    status = 201;
    users[name] = {
      name,
    };
  }

  users[name].age = age;

  if (status === 201) {
    responseJSON.message = 'Created Successfully!';
    responseJSON.id = 'Created';
    return respondJSON(req, res, status, responseJSON);
  }

  return respondJSON(req, res, status, {});
};

const notReal = (req, res) => {
  const responseJSON = {
    message: 'The page you are looking for was NOT found.',
    id: 'notReal',
  };

  respondJSON(req, res, 404, responseJSON);
};

module.exports = {
  notReal,
  getUsers,
  addUser,
};
