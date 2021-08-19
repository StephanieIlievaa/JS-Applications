import { isAuthenticated } from './auth.js';
import loginPage from './loginPage.js';
import moviesPage from './pages/moviesPage.js';
import registerPage from './registerPage.js';
import navigation from './navigation.js';
import logout from './logout.js';

let headerElement = document.querySelector('.header .nav');

//data-link
//taking care of the visualization of the page

let pages = {

    register: registerPage,
    login: loginPage,
    movies: moviesPage,
    logout

}
navigation.updateNavigation();
if (isAuthenticated) {
    moviesPage.showPage();
}

headerElement.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.tagName == 'A') {
        let dataLink = e.target.getAttribute('data-link')

        //we will execute the functionallity  only if pages includes dataLink
        if (Object.keys(pages).includes(dataLink)) {
            hidePages();

            let currentView = pages[dataLink];

            currentView.showPage();
        }
    }
});
function hidePages() {
    Object.values(pages).forEach(x => x.hidePage());
}