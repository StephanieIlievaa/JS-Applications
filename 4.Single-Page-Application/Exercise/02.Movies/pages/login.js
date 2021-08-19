import { jsonRequest } from "../helpers/httpService.js";
import auth from "../helpers/auth.js"
import viewFinder from "../viewFinder.js";
let section = undefined;

function initiliaze(domElement) {
    section = domElement;
    let form = section.querySelector('#login-form');
    form.addEventListener('submit', loginUser)
}
// with this func we will return the dom element
async function getView() {
    return section;
}

async function loginUser(e) {
    e.preventDefault();
    let form = e.target;
    let formData = new FormData(form);
    let user = {
        email: formData.get('email'),
        password: formData.get('password')
    }
    let url = 'http://localhost:3030/users/login';
    let result = await jsonRequest(url, 'Post', user);
    auth.setAuthToken(result.accessToken);
    form.reset();
    viewFinder.navigateTo('home')
}
let loginPage = {
    initiliaze,
    getView
};

export default loginPage;