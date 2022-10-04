let btn = document.getElementById('btn')

// show btn
window.onscroll = function () {
    if (window.scrollY >= 500) {
        btn.style.display = 'block'
    } else {
        btn.style.display = 'none'
    }
}

// move to up 
btn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}






