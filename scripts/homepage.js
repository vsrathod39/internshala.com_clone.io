// Home-page scroll slider
function autoSlider(){
    let count = 1;
    let imgesWidth = document.querySelectorAll('.getWidth');
    setInterval(()=>{
        if(count === 4){
            document.getElementById('scrollSlider').scrollLeft = 0;
            count = 1;
        }
        else{
            document.getElementById('scrollSlider').scrollLeft += imgesWidth[count].clientWidth;
            count++;
        }
    }, 3000)
}
document.addEventListener("DOMContentLoaded", autoSlider());
// search box
document.getElementById('searchInput').onfocus = () => {
    window.location.href = "searchSec.html"
}
// Job type filter
console.log(document.getElementsByClassName('typeOfJob')[0])
document.getElementsByClassName('typeOfJob')[0].onclick = () => {
    // if(localStorage.getItem('internshipDatabase') === null){
    //     localStorage.setItem('internshipDatabase', JSON.stringify([]));
    // }
    // let data = JSON.parse(localStorage.getItem('internshipDatabase'));
    console.log("hi");
    console.log(localStorage.getItem("mytime"))
}