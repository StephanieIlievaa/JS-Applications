let section = undefined;

function initiliaze(domElement) {
section = domElement;
}
// with this func we will return the dom element
async function getView(){
return section;
}

let nav = {
    initiliaze,
    getView
    };
    
    export default nav;