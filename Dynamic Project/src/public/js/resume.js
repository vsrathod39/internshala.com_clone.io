document.getElementById("application_status_button").onclick = () => {
    let parrent =  document.getElementById("applicationContainer");
    parrent.innerHTML = null;

    let div = document.createElement("div");
    let p = document.createElement("p");
    p.textContent = "Application sent successfully";
    p.style.color = "green";
    div.append(p);
    parrent.append(div);

    setTimeout(()=>{
        window.location.href = "../pages/postLoginPage.html";
    }, 3000)
}