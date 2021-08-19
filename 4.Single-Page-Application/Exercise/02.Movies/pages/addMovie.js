//initiliaze is logic that I reuse for all pages
//after to export every page I create separate objects for evety page

let section = undefined;

function initiliaze(domElement) {
    section = domElement;
}
// with this func we will return the dom element
export async function getView() {
    return section;
}

let addMoviePage = {
    initiliaze,
    getView
};

export default addMoviePage;