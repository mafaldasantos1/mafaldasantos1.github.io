
var anchor = document.querySelector("#navbar").querySelectorAll("a");

for( var i = 0; i < anchor.length; i++){
    if(window.location.href == anchor[i].href) {
        anchor[i].classList.add("active");
    }

    if(window.location.href.indexOf("sobre") > -1) {
        document.body.classList.add("sobre");
    } else if (window.location.href.indexOf("contactos") > -1) {
        document.body.classList.add("contactos");
    } else {
        document.body.classList.add("home");
    }
    }