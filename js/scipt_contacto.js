let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

window.addEventListener('scroll',()=>{
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    hill1.style.top = value * 1 + 'px';
});



let current = window.scrollY;
let target = window.scrollY;

window.addEventListener("wheel", (e) => {
    e.preventDefault();

    const speed = 0.7;

    const maxStep = 100;

    let delta = e.deltaY * speed;

    if(delta > maxStep) delta = maxStep;
    if(delta < -maxStep) delta = -maxStep;

    target += delta;

    target = Math.max(
        0,
        Math.min(target, document.body.scrollHeight - window.innerHeight)
    );

}, { passive: false });

function smoothScroll() {

    if(Math.abs(target - current) < 0.1){
        current = target;
    } else {
        current += (target - current) * 0.12;
    }

    window.scrollTo(0, current);

    requestAnimationFrame(smoothScroll);
}

smoothScroll();

