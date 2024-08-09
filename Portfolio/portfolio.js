var bar = document.querySelector('.bar');
var sidenav = document.querySelector('.sidenav');

function slide(pos) {
    document.querySelector('.ref-line').style.left = `${pos}px`;
}

const like_btn = document.querySelector('#liked-btn');

like_btn.addEventListener('click', () => {
   like_btn.classList.toggle('active');
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


function openSideBar(){
    sidenav.style.display = 'block';
    bar.style.display = 'none';
}

function closeSideBar(){
    bar.style.display = 'block';
    sidenav.style.display = 'none';
}

document.body.addEventListener('click',()=>{
    if(sidenav.style.display == 'block'){
        sidenav.style.display = 'none';
    }
})

function openform(){
    scrollToTop();
    let form = document.getElementById('contact-form');
    form.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    sidenav.style.display = 'none';
    bar.style.display = 'block';
}

function closeform(){
    document.getElementById('contact-form').style.display = 'none';
    document.body.style.overflow = 'visible';
}