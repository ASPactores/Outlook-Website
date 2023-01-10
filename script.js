<<<<<<< HEAD

=======
>>>>>>> footer
const track = document.querySelector('.vidcartrack');
const slides = Array.from(track.children);
const prevbutton = document.querySelector('.carouselbuttonleft');
const nextbutton = document.querySelector('.carouselbuttonright');
const dotsnav = document.querySelector('.carouselnavigator');
const dots = Array.from(dotsnav.children);
const slideWidth = slides[0].getBoundingClientRect().width;

function dropdownApp() {
    document.getElementById("navtext-content").classList.toggle("show");
}

<<<<<<< HEAD
console.log(slideWidth);
=======
>>>>>>> footer
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

function toggleForm() {
    var blur1 = document.getElementById('blurhead');
    var blur2 = document.getElementById('blurbody');
    var blur3 = document.getElementById('vidblur');
    var blur4 = document.getElementById('blurfooter');
    var popup = document.getElementById('myform');
    blur1.classList.toggle('active');
    blur2.classList.toggle('active');
    blur3.classList.toggle('active');
    blur4.classList.toggle('active');
    popup.classList.toggle('active');
  }

function dropdownApp1() {
    var drop1 = document.getElementById("navtext-content1");
    drop1.classList.toggle("showlist");
}

function dropdownApp2() {
    var drop2 = document.getElementById("navtext-content2");
    drop2.classList.toggle("showlist");
}

function mobileNav() {
    var navmobile = document.getElementById("mobile-navigation");
    navmobile.classList.toggle("showlist");
}

function mobNav1() {
    var nav1 = document.getElementById("mobnav-drop-content1");
    nav1.classList.toggle("showlist");
}
function mobNav2() {
    var nav2 = document.getElementById("mobnav-drop-content2");
    nav2.classList.toggle("showlist");
}

window.onclick = function(e) {
    if (!e.target.matches('.navtext')) {
    var myDropdown1 = document.getElementById("navtext-content1");
        if (myDropdown1.classList.contains('showlist')) {
            myDropdown1.classList.remove('showlist');
        }
    var myDropdown2 = document.getElementById("navtext-content2");
        if (myDropdown2.classList.contains('showlist')) {
            myDropdown2.classList.remove('showlist');
        }
    }
}
/*
//swipe gesture
    var startingX, movingX;
    function touchstart(evt) {
        startingX = evt.touches[0].clientX;
    }
    function touchmove(evt) {
        movingX = evt.touches[0].clientX;
    }
    function touchend(evt) {
        if(startingX+100 < movingX) {
            console.log("YES");
        }
        else if(startingX-100 > movingX) {
            console.log("NO");
        }
    }

    
toleft.addEventListener('touchmove', e => {
    const thecurrentslide = track.querySelector('.currentslide');
    const prevslide = thecurrentslide.previousElementSibling;
    const currentdot = dotsnav.querySelector('.currentslide');
    const prevdot = currentdot.previousElementSibling;
    const targetindex = slides.findIndex(slide => slide === prevslide);

    movetoslides(track, thecurrentslide, prevslide);
    updatedots(currentdot, prevdot);
    hideshow(slides, prevbutton, nextbutton, targetindex);
})

toright.addEventListener('touchmove', e => {
    const thecurrentslide = track.querySelector('.currentslide');
    const nextslide = thecurrentslide.nextElementSibling;
    const currentdot = dotsnav.querySelector('.currentslide');
    const nextdot = currentdot.nextElementSibling;
    const targetindex = slides.findIndex(slide => slide === nextslide);
    
    movetoslides(track, thecurrentslide, nextslide);
    updatedots(currentdot, nextdot);
    hideshow(slides, prevbutton, nextbutton, targetindex);
})

window.addEventListener('load', function(){
 
    var touchsurface = document.querySelector('.vidcarcontainer'),
        startX,
        startY,
        dist,
        threshold = 150, //required min distance traveled to be considered swipe
        allowedTime = 200, // maximum time allowed to travel that distance
        elapsedTime,
        startTime
 
    function handleswipe(isrightswipe){
        if (isrightswipe){
            console.log("YES");
        }
        else{        
            console.log("NO");
        }
    }
 
    touchsurface.addEventListener('touchstart', function(e){
        touchsurface.innerHTML = ''
        var touchobj = e.changedTouches[0]
        dist = 0
        startX = touchobj.pageX
        startY = touchobj.pageY
        startTime = new Date().getTime() // record time when finger first makes contact with surface
        e.preventDefault()
    }, false)
 
    touchsurface.addEventListener('touchmove', function(e){
        e.preventDefault() // prevent scrolling when inside DIV
    }, false)
 
    touchsurface.addEventListener('touchend', function(e){
        var touchobj = e.changedTouches[0]
        dist = touchobj.pageX - startX // get total dist traveled by finger while in contact with surface
        elapsedTime = new Date().getTime() - startTime // get time elapsed
        // check that elapsed time is within specified, horizontal dist traveled >= threshold, and vertical dist traveled <= 100
        var swiperightBol = (elapsedTime <= allowedTime && dist >= threshold && Math.abs(touchobj.pageY - startY) <= 100)
        handleswipe(swiperightBol)
        e.preventDefault()
    }, false)
 
}, false) // end window.onload
*/
