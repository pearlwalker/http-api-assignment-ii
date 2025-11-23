const handleResponse = async (res) => {

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

    if( method === 'POST' || method === 'post') {
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
    const getForm = document.querySelector('form-getUsers');

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
};

window.onload = init;