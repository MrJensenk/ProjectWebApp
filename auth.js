function checkJWT() {
    return localStorage.getItem("jwt-token") != null;
}

let canGoToPage = checkJWT();

if (!canGoToPage) {
    window.location.replace("FormLogin.html");
}