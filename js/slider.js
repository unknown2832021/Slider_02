let slides = document.querySelectorAll('.slide');
let slidesArray = Array.from(slides)

let prevbtn = document.querySelector('.prev')
let nextbtn = document.querySelector('.next')

// ========================prevnext for nextbtn======================
function prevnext(){
    let activeSlide = document.querySelector('.slide.active')
    let currentIndex = slidesArray.indexOf(activeSlide)

    let prev;
    let next;
    
    if(currentIndex == 0){
        prev = slidesArray[slidesArray.length - 1]
    } else {
        prev = slidesArray[currentIndex - 1]
    }
    if(currentIndex == slidesArray.length - 1){
        next = slidesArray[0]
    } else {
        next = slidesArray[currentIndex + 1]
    }
    
    return{prev, next}
}

// ==============sliding serial arrangement with translateX=============
function sliding(){
    let activeSlide = document.querySelector('.slide.active')
    let currentIndex = slidesArray.indexOf(activeSlide)

    let {next, prev} = prevnext()

    slidesArray.map((slide, index) => {
        if(currentIndex == index){
            slide.style.transform = 'translateX(0)'
        } else if(slide == prev){
            slide.style.transform = 'translateX(-100%)'
        }else if(slide == next){
            slide.style.transform = 'translateX(100%)'
        }
        slide.addEventListener('transitionend', function(){
            slide.classList.remove('smooth')
        })
    })
}

// ========================nextbtn event function=======================
nextbtn.addEventListener('click', function(){
    let activeSlide = document.querySelector('.slide.active')

    let {prev, next} = prevnext()
    
    activeSlide.classList.add('smooth')
    next.classList.add('smooth')
    activeSlide.classList.remove('active')
    activeSlide.style.transform = 'translateX(-100%)'
    next.classList.add('active')
    next.style.transform = 'translateX(0)'
    sliding()
})

// ========================prevnextX for prevbtn======================
prevbtn.addEventListener('click', function(){
    let activeSlide = document.querySelector('.slide.active')
    let currentIndex = slidesArray.indexOf(activeSlide)

    let {prev} = prevnext()

    activeSlide.classList.add('smooth')
    prev.classList.add('smooth')
    
    // if(prev == slidesArray[slidesArray.length - 1]){
    //     prev.classList.remove('smooth')
    // }

    activeSlide.classList.remove('active')
    activeSlide.style.transform = 'translateX(-100%)'
    prev.classList.add('active')
    prev.style.transform = 'translateX(0)'
    sliding()
})















// function prevnextX(){
//     let activeSlide = document.querySelector('.slide.active')
//     let currentIndex = slidesArray.indexOf(activeSlide)

//     let prev;
//     let next;
    
//     if(currentIndex == 0){
//         prev = slidesArray[slidesArray.length - 1]
//     } else {
//         prev = slidesArray[currentIndex - 1]
//     }
//     if(currentIndex == slidesArray.length - 1){
//         next = slidesArray[0]
//     } else {
//         next = slidesArray[currentIndex + 1]
//     }
    
//     return[prev, next]
// }
// prevnextX()

// // ========================prevbtn event function=======================
// prevbtn.addEventListener('click', function(){
//     let activeSlide = document.querySelector('.slide.active')

//     let [prev] = prevnextX()

//     activeSlide.classList.add('smooth')
//     prev.classList.add('smooth')
//     activeSlide.classList.remove('active')
//     activeSlide.style.transform = 'translateX(100%)'
//     prev.classList.add('active')
//     prev.style.transform = 'translateX(0)'
//     sliding()
// })
