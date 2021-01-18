//nav animation
window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0);
});

$(document).ready(()=>{
    $(window).scroll(()=>{
        if(window.scrollY>400){
            $(".scroll-up-btn").addClass("show")
        }else{
            $(".scroll-up-btn").removeClass("show")
        }
    })
    $(".scroll-up-btn").click(()=>{
        $("html").animate({scrollTop:0});
    })
})

let progress = document.getElementById("progressBar");
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll=function(){
    let progressHeight = (window.pageYOffset / totalHeight) *100;
    progress.style.height = progressHeight + "%";
}


function toggleMenu(){
    var menuToggle = document.querySelector(".toggle");
    var menu = document.querySelector(".menu");
    menuToggle.classList.toggle("active");
    menu.classList.toggle("active");
}
// typing animation
var typed = new Typed(".typing", {
    strings: ["Developer","YouTuber", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
var typed = new Typed(".typing-2", {
    strings: ["Developer","YouTuber", "Designer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});





