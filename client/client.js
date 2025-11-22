const handleResponse = async (res) => {

};

const sendRequest = async (form) => {
    const url = form.getAttribute('action');
    const method = form.getAttribute('method');
    
    let reqBody;

    if( method === 'POST' || method === 'post') {
        const name = form.querySelector('#nameField').value;
        const age = form.querySelector('#ageField').value;

        reqBody = `name=${name}&age=${age}`;
    };
};

const init = () => {
    const addForm = document.querySelector('#form-addUser');
    const getForm = document.querySelector('form-getUsers');
};

window.onload = init;