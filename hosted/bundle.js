/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./client/client.js":
/*!**************************!*\
  !*** ./client/client.js ***!
  \**************************/
/***/ (() => {

eval("{const handleResponse = async (res) => {\r\n    const content = document.getElementById('content');\r\n    switch (res.status) {\r\n        case 200:\r\n            content.innerHTML = `<b>Success</b>`;\r\n            break;\r\n        case 201:\r\n            content.innerHTML = `<b>Created</b>`;\r\n            break;\r\n        case 204:\r\n            content.innerHTML = `<b>Updated</b>`;\r\n            break;\r\n        case 400:\r\n            content.innerHTML = `<b>Bad Request</b>`;\r\n            break;\r\n        case 404:\r\n            content.innerHTML = `<b>Not Found</b>`;\r\n            break;\r\n        default:\r\n            content.innerHTML = `<p>Status code not implemented by client</p>`;\r\n            break;\r\n    };\r\n\r\n    const resObj = await res.json()\r\n    .catch(err => {\r\n        console.log(err)\r\n        return null;\r\n    });\r\n    if (resObj.message) {\r\n        content.innerHTML += `<p>${resObj.message}<p>`;\r\n    } else if (resObj.users){\r\n        let userList = JSON.stringify(resObj.users)\r\n        content.innerHTML += `<p>${userList}</p>`;\r\n    } else {\r\n        content.innerHTML += `<p>[no response message]</p>`\r\n    };\r\n\r\n};\r\n\r\nconst sendRequest = async (form, method, url = undefined) => {\r\n    if(!url) {\r\n        url = form.getAttribute('action');\r\n    };\r\n    const options = {\r\n        method: method,\r\n        headers: {\r\n            'Accept': 'application/json',\r\n        },\r\n    };\r\n\r\n    let reqBody;\r\n\r\n    if (method === 'POST' || method === 'post') {\r\n        const name = form.querySelector('#nameField').value;\r\n        const age = form.querySelector('#ageField').value;\r\n\r\n        reqBody = `name=${name}&age=${age}`;\r\n        options.headers['Content-Type'] = 'application/x-www-form-urlencoded';\r\n        options.body = reqBody;\r\n    };\r\n\r\n    const fetchResponse = await fetch(url, options);\r\n    handleResponse(fetchResponse);\r\n};\r\n\r\nconst init = () => {\r\n    const addForm = document.querySelector('#form-addUser');\r\n    const getForm = document.querySelector('#form-getUsers');\r\n    const addUser = (e) => {\r\n        const method = addForm.getAttribute('method');\r\n        e.preventDefault();\r\n        sendRequest(addForm, method);\r\n        return false;\r\n    };\r\n\r\n    const getUsers = (e) => {\r\n        const method = document.getElementById('methodSelect').value;\r\n        const url = document.getElementById('urlField').value\r\n        e.preventDefault();\r\n        sendRequest(getForm, method, url);\r\n        return false;\r\n    };\r\n\r\n    addForm.addEventListener('submit', addUser);\r\n    getForm.addEventListener('submit', getUsers);\r\n};\r\n\r\nwindow.onload = init;\n\n//# sourceURL=webpack://http-api-assignment-ii/./client/client.js?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./client/client.js"]();
/******/ 	
/******/ })()
;