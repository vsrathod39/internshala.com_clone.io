function core() {
  let userCategory = document.querySelectorAll("#userCat > div");
  let regisCategory = document.querySelectorAll("#msg > span");
  let horizontalStroke = document.getElementById("horStroke");
  let detail = document.getElementsByTagName("input");
  let orOption = document.getElementById("opt");
  let loginGoogle = document.getElementById("loginGoogle");
  let closeButton = document.getElementById("closeLogin_modal");
  let sectionsLogin = document.getElementById("loginSec");

  closeButton.onclick = () => {
    sectionsLogin.style.display = "none";
    document.getElementsByTagName("body")[0].removeAttribute("id", "fixedBody");
    document.getElementById("login_modal_popup").style.display = "none";
  };

  for (let i = 0; i < userCategory.length; i++) {
    userCategory[i].onclick = function () {
      changeLoginPage(i);
    };
  }

  function changeLoginPage(i) {
    userCategory[i].style.borderBottom = "2px solid #008bdc";
    userCategory[i].style.color = "#008bdc";
    userCategory[1 - i].style.borderBottom = "none";
    userCategory[1 - i].style.color = "#444";
    if (i == 1) {
      horizontalStroke.style.display = "none";
      orOption.style.display = "none";
      loginGoogle.style.display = "none";
    } else {
      horizontalStroke.style.display = "block";
      orOption.style.display = "block";
      loginGoogle.style.display = "block";
    }
  }

  regisCategory[0].onclick = function () {
    window.location.href = "/register_student";
  };

  regisCategory[1].onclick = function () {
    window.location.href = "/register_employer";
  };

  for (let i = 0; i < detail.length; i++) {
    detail[i].onmouseenter = function () {
      changeBorder(event);
    };
    detail[i].onfocus = function () {
      changeBorderC(event);
    };
    detail[i].onmouseleave = function () {
      restoreBorder(event);
    };
    detail[i].onblur = function () {
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
  document.getElementById("logInForm").onsubmit = () => {
    login(event);
  };
}
