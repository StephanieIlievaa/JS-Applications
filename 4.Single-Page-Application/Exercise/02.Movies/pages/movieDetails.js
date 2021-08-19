let section = undefined;

function initiliaze(domElement) {
section = domElement;
}
// with this func we will return the dom element
async function getView(){
return section;
}
let movieDetailsPage = {
    initiliaze,
    getView
    };
    
    export default movieDetailsPage;