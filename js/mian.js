// get toggle
let toggle = document.querySelector('.toggle')

// get nav-list
let navlist = document.querySelector('.nav-list')

// get close
let closer = document.querySelector('.close')

// show the nav 
toggle.addEventListener('click', function () {
    navlist.classList.add('open')
})

// hide the nav
closer.addEventListener('click', function () {
    this.parentElement.classList.remove('open')
})

// --------------------------------------------------------------------------------------------------------
// btn-up
let btnUp = document.getElementById('btn-up')

window.onscroll = function() {
    if (window.scrollY >= 100) {
        btnUp.style.display = 'block'
    }else {
        btnUp.style.display = 'none'
    }
}
btnUp.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
// ----------------------------------------------------------------------------------------------------------
// about tap
let aboutTap = document.querySelectorAll('.about-tap li');
let aboutTapArr = Array.from(aboutTap)

let aboutDet = document.querySelectorAll('.about-det > div')
let aboutDetArr = Array.from(aboutDet)

aboutTapArr.forEach((li) => {
    li.addEventListener('click', (e) => {
        aboutTapArr.forEach((li) => {
            li.classList.remove('about-active')
        })
        e.currentTarget.classList.add('about-active')
        aboutDetArr.forEach((div) => {
            div.style.display = 'none'
        })
        document.querySelector(e.currentTarget.dataset.cont).style.display = 'block'
    })
})


