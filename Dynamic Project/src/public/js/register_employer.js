let details = document.getElementsByTagName("input");
let btn = document.getElementById("regBtn");
for(let i = 0; i<details.length; i++)
{
    details[i].onmouseenter = function() {
        changeBorder(event);
    }
    details[i].onfocus = function() {
        changeBorderC(event);
    }
    details[i].onmouseleave = function() {
        restoreBorder(event);
    }
    details[i].onblur = function() {
        restoreBorderC(event);
    }
}

function changeBorder(ev) {
    ev.target.style.border = "1px solid #008bdc"
}

function restoreBorder(ev) {
    ev.target.style.border = "1px solid #dddddd"
}

function changeBorderC(ev) {
    ev.target.style.border = "1px solid #008bdc"
    ev.target.onmouseleave = function() {
        
    }
}

function restoreBorderC(ev) {
    ev.target.style.border = "1px solid #dddddd"
    ev.target.onmouseleave = function() {
        restoreBorder(event);
    }
}


btn.onclick = function() {
    window.scrollTo(0,0)
}