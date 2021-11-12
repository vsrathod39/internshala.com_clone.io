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
            console.log(imgesWidth[count].clientWidth)
            count++;
        }
    }, 3000)
}
document.addEventListener("DOMContentLoaded", autoSlider());

