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