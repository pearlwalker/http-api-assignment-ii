const handleResponse = async (res) => {
    const content = document.getElementById('content');
    switch (res.status) {
        case 200:
            content.innerHTML = `<b>Success</b>`;
            break;
        case 201:
            content.innerHTML = `<b>Created</b>`;
            break;
        case 204:
            content.innerHTML = `<b>Updated</b>`;
            break;
        case 400:
            content.innerHTML = `<b>Bad Request</b>`;
            break;
        case 404:
            content.innerHTML = `<b>Not Found</b>`;
            break;
        default:
            content.innerHTML = `<p>Status code not implemented by client</p>`;
            break;
    };

    const resObj = await res.json();

    if (resObj.message) {
        content.innerHTML += `<p>${resObj.message}<p>`;
    } else {
        content.innerHTML += `<p>[no response message]</p>`
    };

};

const sendRequest = async (form) => {
    const url = form.getAttribute('action');
    const method = form.getAttribute('method');

    const options = {
        method: method,
        headers: {
            'Accept': 'application/json',
        },
    };

    let reqBody;

    if (method === 'POST' || method === 'post') {
        const name = form.querySelector('#nameField').value;
        const age = form.querySelector('#ageField').value;

        reqBody = `name=${name}&age=${age}`;
        options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
        options.body = reqBody;
    };

    const fetchResponse = await fetch(url, options);
    handleResponse(fetchResponse);
};

const init = () => {
    const addForm = document.querySelector('#form-addUser');
    const getForm = document.querySelector('#form-getUsers');

    const addUser = (e) => {
        e.preventDefault();
        sendRequest(addForm);
        return false;
    };

    const getUsers = (e) => {
        e.preventDefault();
        sendRequest(getForm);
        return false;
    };

    addForm.addEventListener('submit', addUser);
    getForm.addEventListener('submit', getUsers);
};

window.onload = init;