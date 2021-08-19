//1.setup sections
//1.1 to make a separate modules for every specific task - module - Homepage,module - Edit page ...
//2. add data to html in order to work with html correctly
//3. create logic for showing view - routing
import addMoviePage from "./pages/addMovie.js";
import editMoviePage from "./pages/editMovie.js";
import homePage from "./pages/home.js";
import loginPage from "./pages/login.js";
import movieDetailsPage from "./pages/movieDetails.js";
import registerPage from "./pages/register.js";
import viewFinder from "./viewFinder.js";


//3. MAIN PROBLEM - create logic for showing views - routing
 setup();

 async function setup() {
    //setup and initiliaze html page login
    //setup and initiliaze html page register
    //setup and initiliaze html page logout??? - maybe only logic
    //setup and initiliaze html page homepage
    //setup and initiliaze html page  add-movie
    //setup and initiliaze html page  add-movie
    //setup and initiliaze html page movie-details
    //setup and initiliaze html page edit movie
    //setup and initiliaze html page likes??? - maybe only logic
    //setup and initiliaze html page delete???  - maybe only logic
   
// we add <main> section to separate the navigation from the sections
    // let appElement = document.getElementById('main');
// appElement.querySelectorAll('.view').forEach(e => e.classList.add('hidden'));

// let homeView = document.getElementById('home-page');
// homeView.classList.remove('hidden');

loginPage.initiliaze(document.getElementById('form-login'));
registerPage.initiliaze(document.getElementById('form-sign-up'));
homePage.initiliaze(document.getElementById('home-page'));
addMoviePage.initiliaze(document.getElementById('add-movie'));
movieDetailsPage.initiliaze(document.getElementById('movie-details'));
editMoviePage.initiliaze(document.getElementById('edit-movie'));
viewFinder.initiliaze(document.querySelectorAll('.link'));

viewFinder.navigateTo('home');
} 

// async function changeView(viewFunction) {
//     let view = await viewFunction();
//     appElement.querySelectorAll('.view').forEach(view => view.remove());
//     appElement.appendChild(homePageView);
// }