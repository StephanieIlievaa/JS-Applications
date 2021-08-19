// LOGIC FOR CHANGING THE VIEWS
// 1. add data to html in order to be ablre to select links 
//2. add data to html link that keeps information for changing view -link link
// add id="home-link", id="login-link",id="logout-link", id="register-link"
//3.addEventListeners to links 

import homePage from "./pages/home.js";
import loginPage from "./pages/login.js";
import registerPage from "./pages/register.js";
import auth from "./helpers/auth.js"

let views = {
    'home': async() => await homePage.getView(),
    'login': async() => await loginPage.getView(),
    'register': async() => await registerPage.getView(),
    'logout': async() => await auth.logout()
};

function initiliaze(allLinkElements) {
    
   // allLinkElements === let allLinks = allLinkElements.querySelectorAll('.link');
    allLinkElements.forEach(a => a.addEventListener('click', changeViewHandler));

}
// await for the page to  build the view and then take it
 export async function changeViewHandler(e) {
   //dataset => search for attributes with data
   //in html -> kebab-case -> data-route 
  //in js -> camelCase -> route
    let route = e.target.dataset.route;
 navigateTo(route);

}

 export async function navigateTo(route){
   console.log(route)
    if (views.hasOwnProperty(route)) {
        let view = await views[route]();
        let appElement = document.getElementById('main');
        appElement.querySelectorAll('.view').forEach(view => view.remove());
        appElement.appendChild(view);
    }
}
export async function redirectTo(route) {
    if (views.hasOwnProperty(route)) {
        let view = views[route]();
      return view;
    }
}

let viewFinder = {
    initiliaze,
    navigateTo,
    changeViewHandler
}
export default viewFinder;
