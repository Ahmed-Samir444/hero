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

