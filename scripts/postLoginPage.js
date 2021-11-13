let btn = document.getElementsByTagName("button");
btn[0].onclick = function() {
    window.location.href = "./filter.html";
}

let advertisement = document.getElementById("picImg");

window.onresize = function() {
    if(window.innerWidth <= 940)
    {
        advertisement.src = "https://internshala.com/uploads/cms_banners/Mobile%20dashboard%20banner_503852.png";
    }
    if(window.innerWidth > 940)
    {
        advertisement.src = "https://internshala.com/uploads/cms_banners/Desktop%20dashboard%20banner_454570.png";
    }
}