 export function saveToken(token) {
     localStorage.setItem('auth_token', token);   
 }
//if we have auth_token ->logged in person
//if there is no auth_token ->not logged in
export function isAuthenticated() {
    return Boolean(localStorage.getItem('auth_token'));
}
export function logout(){
    localStorage.removeItem('auth_token');
}