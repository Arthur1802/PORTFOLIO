var logos = document.querySelectorAll("i")
var titles = document.querySelectorAll("h3")
var text = document.querySelectorAll(".text")

function hoverOn(i)
{
    logos[i].style.left = '35%'
    titles[i].style.left = '37.5%'
    titles[i].style.opacity = '1'
}

function hoverOff(i)
{
    titles[i].style.opacity = '0'
    titles[i].style.left = '35%'
    logos[i].style.left = '45%'
}
