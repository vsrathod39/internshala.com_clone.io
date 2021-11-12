let userCategory = document.querySelectorAll("#userCat > div");
let regisCategory = document.querySelectorAll("#msg > span");
let horizontalStroke = document.getElementById("horStroke");
let details = document.getElementsByTagName("input");
let orOption = document.getElementById("opt");
let loginGoogle = document.getElementById("loginGoogle");
for(let i = 0; i<userCategory.length; i++)
{
    userCategory[i].onclick = function() {
        changeLoginPage(i);
    }
}

function changeLoginPage(i) {
    userCategory[i].style.borderBottom = "2px solid #008bdc";
    userCategory[i].style.color = "#008bdc";
    userCategory[1-i].style.borderBottom = "none";
    userCategory[1-i].style.color = "#444";
    if(i == 1)
    {
        horizontalStroke.style.display = "none";
        orOption.style.display = "none";
        loginGoogle.style.display = "none";
    }
    else
    {
        horizontalStroke.style.display = "block";
        orOption.style.display = "block";
        loginGoogle.style.display = "block";
    }
}

regisCategory[0].onclick = function() {
    window.location.href = "./register_student.html";
}

regisCategory[1].onclick = function() {
    window.location.href = "./register_employer.html";
}

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

async function login(event) {
    event.preventDefault();
    let user_data = {
        username: details[0].value,
        password: details[1].value,
    };

    console.log(details[0].value);
    console.log(details[1].value)

    let data_send = JSON.stringify(user_data);

   let res = await fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
        method:'POST',
        body:data_send,
        headers: {
            "Content-Type": "application/json",
        },
    });
    let data = await res.json();

    if(!data.error)
    {
        alert("Sucessfully loged in")
    }
    else
    alert("Invalid credentials");
}