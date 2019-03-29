
// window.addEventListener('DOMContentLoaded', (event) => {
//     // afterPageLoad();
//     initCookie();
//   });

$("document").ready(function() {
    initCookie();
});

function initCookie() {
    window.cookieconsent.initialise({
        "palette": {
        "popup": {
            "background": "#073151"
        },
        "button": {
            "background": "transparent",
            "text": "#fff",
            "border": "#fff",
            "padding": "5px 15px"
        }
        },
        "content": {
        "message": "This website uses cookies to ensure you get the best experience.",
        "dismiss": "Got it!",
        "href": "https://www.apotica.net/privacy/"
        }
    });
}