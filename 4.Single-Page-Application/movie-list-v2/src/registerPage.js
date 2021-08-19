//first we want to select the section with the register 
import { saveToken } from './auth.js';
import moviesPage from './pages/moviesPage.js'
import navigation from'./navigation.js'

let baseUrl = 'http://localhost:3030';
let registerSection = document.querySelector('.register');
let registerForm = registerSection.querySelector('#register-form');


registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    //out currentTarget is the registerForm
    let data = new FormData(registerForm);

    fetch(`${baseUrl}/users/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: data.get('email'),
            password: data.get('password')
        })
    })
        .then(response => response.json())
        .then(responseData => {
            saveToken(responseData.accessToken);
            hidePage()
            moviesPage.showPage();
            navigation.updateNavigation();
        })
})
//1st way 
//directly export the function
//  export function showPage() {
//    registerSection.classList.remove('hidden');
// }

function showPage() {
    registerSection.classList.remove('hidden');

}
function hidePage() {
    registerSection.classList.add('hidden');
}





//2nd way
//we export object, then we can use to put another functions

export default {
    showPage,
    hidePage,
};