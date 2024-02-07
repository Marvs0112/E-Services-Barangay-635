document.addEventListener('scroll', function () {
    if (document.body.scrollTop > 50|| document.documentElement.scrollTop > 70) {
        document.getElementsByClassName('header')[0].style.background = 'var(--bg)';
        document.getElementsByClassName('header')[0].style.borderBottom = 'var(--border)';
    } else {
        document.getElementsByClassName('header')[0].style.background = 'none';
        document.getElementsByClassName('header')[0].style.borderBottom = 'none';
    }
});


let navbar = document.querySelector('.navbar');
window.onscroll = () =>{
    navbar.classList.remove('active');
    {
}}
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    navbar.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    navbar.classList.remove('active');
}

function toggleContent(showId, hideId1, hideId2) {
        var showContent = document.getElementById(showId);
        var hideContent1 = document.getElementById(hideId1);
        var hideContent2 = document.getElementById(hideId2);
    
        showContent.style.display = (showContent.style.display === "none" || showContent.style.display === "") ? "block" : "none";
        hideContent1.style.display = "none";
        hideContent2.style.display = "none";
}   


