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

async function signup(event) {
    event.preventDefault();

    let user_data = {
        name: details[2].value + details[3].value,
        email: details[0].value,
        password: details[1].value,
        username: details[0].value,
        mobile: details[5].value,
        description: "Masai wale bhaiya",
    };


    user_data = JSON.stringify(user_data);

   let res = await fetch("https://masai-api-mocker.herokuapp.com/auth/register", {
        method:'POST',
        body:user_data,
        headers: {
            "Content-Type": "application/json",
        },
    });
    let data = await res.json();

    alert(data.message);

    details[0].value = "";
    details[1].value = "";
    details[2].value = "";
    details[3].value = "";
    details[5].value = "";
}

btn.onclick = function() {
    window.scrollTo(0,0)
}