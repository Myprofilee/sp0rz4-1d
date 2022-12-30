fetch('/assets/menu/home/')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#home");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})

fetch('/assets/menu/notification/')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#notification");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})

fetch('/assets/menu/search/')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#search");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})

fetch('/assets/menu/settings/')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#settings");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})

//* Rotate *//
fetch('/assets/m/rotate/')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#rotate");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})

//* Rotate game *//
fetch('/assets/m/rotate/rotate-game.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#rotate-game");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
})