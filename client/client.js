const handleResponse = async (res) => {

};

const sendRequest = async (form) => {
    const url = form.getAttribute('action');
    const method = form.getAttribute('method');
};

const init = () => {
    const addForm = document.querySelector('#form-addUser');
    const getForm = document.querySelector('form-getUsers');
};

window.onload = init;