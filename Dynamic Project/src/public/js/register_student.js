let details = document.getElementsByTagName("input");
let spn = document.getElementsByTagName("span");
let loginMsg = spn[2];
for (let i = 0; i < details.length; i++) {
  details[i].onmouseenter = function () {
    changeBorder(event);
  };
  details[i].onfocus = function () {
    changeBorderC(event);
  };
  details[i].onmouseleave = function () {
    restoreBorder(event);
  };
  details[i].onblur = function () {
    restoreBorderC(event);
  };
}

function changeBorder(ev) {
  ev.target.style.border = "1px solid #008bdc";
}

function restoreBorder(ev) {
  ev.target.style.border = "1px solid #dddddd";
}

function changeBorderC(ev) {
  ev.target.style.border = "1px solid #008bdc";
  ev.target.onmouseleave = function () {};
}

function restoreBorderC(ev) {
  ev.target.style.border = "1px solid #dddddd";
  ev.target.onmouseleave = function () {
    restoreBorder(event);
  };
}

loginMsg.onclick = function () {
  // login modal non-mobile view menu
    document.getElementById("login_modal_popup").style.display = "block";
    document.getElementById("login_modal_popup").innerHTML = loginModal();
    document.getElementsByTagName("body")[0].setAttribute("id", "fixedBody");
    document.getElementById("loginGoogle").addEventListener("click", loginWithGoogle);
    core();
};

function loginWithGoogle() {
  window.location.href = "http://localhost:2345/auth/google";
}



