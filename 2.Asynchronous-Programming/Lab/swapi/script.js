document.getElementById('load-character').addEventListener('click', loadCharacter);

function loadCharacter() {
    let baseUrl = 'https://swapi.dev/api';
    //fetch returns a promise 
    //and we are calling .then ot the promise

    fetch(`${baseUrl}/people/1`)
   // this will return new promise
        .then(res => res.json())
        .then((character) => {
            console.log(character);
        })
}






function oldloadCharacter() {
    let baseUrl = 'https://swapi.dev/api';

    let promise = fetch(`${baseUrl}/people/1`)

    promise.then((response) => {
        if (response.ok) {
            // this will return new promise
            let jsonResponce = response.json();
            jsonResponce.then((character) => {
                console.log(character);
            });
        }
    });
}

