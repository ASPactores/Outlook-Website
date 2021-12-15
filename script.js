console.log("Anakin");
const track = document.querySelector('.vidcartrack');
const slides = Array.from(track.children);
const prevbutton = document.querySelector('.carouselbuttonleft');
const nextbutton = document.querySelector('.carouselbuttonright');
const dotsnav = document.querySelector('.carouselnavigator');
const dots = Array.from(dotsnav.children);
const slideWidth = slides[0].getBoundingClientRect().width;
console.log(slides);

console.log(slideWidth);
/*
slides[0].style.left = 0;
slides[1].style.left = slideWidth * 1 + 'px';
slides[2].style.left = slideWidth * 2 + 'px';
*/
const setslides = (slides, index) => {
    slides.style.left = slideWidth * index + 'px';
};

slides.forEach(setslides);

const movetoslides = (track, thecurrentslide, targetslide) => {
    track.style.transform = 'translateX(-' + targetslide.style.left + ')';
    thecurrentslide.classList.remove('currentslide');
    targetslide.classList.add('currentslide');
}

const hideshow = (slides, prevbutton, nextbutton, targetindex) => {
    if(targetindex === 0){
        prevbutton.classList.add('ishidden');
        nextbutton.classList.remove('ishidden');
    } else if (targetindex === slides.length - 1){
        prevbutton.classList.remove('ishidden');
        nextbutton.classList.add('ishidden');
    } else {
        prevbutton.classList.remove('ishidden');
        nextbutton.classList.remove('ishidden');
    }
}

const updatedots = (currentdot, targetdot) => {
    currentdot.classList.remove('currentslide');
    targetdot.classList.add('currentslide');
}

nextbutton.addEventListener('click', e => {
    const thecurrentslide = track.querySelector('.currentslide');
    const nextslide = thecurrentslide.nextElementSibling;
    const currentdot = dotsnav.querySelector('.currentslide');
    const nextdot = currentdot.nextElementSibling;
    const targetindex = slides.findIndex(slide => slide === nextslide);
    
    movetoslides(track, thecurrentslide, nextslide);
    updatedots(currentdot, nextdot);
    hideshow(slides, prevbutton, nextbutton, targetindex);
})

prevbutton.addEventListener('click', e => {
    const thecurrentslide = track.querySelector('.currentslide');
    const prevslide = thecurrentslide.previousElementSibling;
    const currentdot = dotsnav.querySelector('.currentslide');
    const prevdot = currentdot.previousElementSibling;
    const targetindex = slides.findIndex(slide => slide === prevslide);

    movetoslides(track, thecurrentslide, prevslide);
    updatedots(currentdot, prevdot);
    hideshow(slides, prevbutton, nextbutton, targetindex);
})

dotsnav.addEventListener('click', e => {
    const targetdot = e.target.closest('button');

    if (!targetdot) return;

    const thecurrentslide = track.querySelector('.currentslide');
    const currentdot = dotsnav.querySelector('.currentslide');
    const targetindex = dots.findIndex(dot => dot === targetdot);
    const targetslide = slides[targetindex];

    movetoslides(track, thecurrentslide, targetslide);
    updatedots(currentdot, targetdot);
    hideshow(slides, prevbutton, nextbutton, targetindex);
})
