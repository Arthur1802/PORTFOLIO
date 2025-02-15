import { sendEmail } from "./sendEmail"

document.addEventListener("DOMContentLoaded", function () {
    const menu = document.querySelector('.menu')
    const menuBtn = document.querySelector('.menu-btn')
    const menuPortrait = document.querySelector('.portrait')
    const menuNav = document.querySelector('.menu-nav')

    let showMenu = false

    menuBtn.addEventListener('click', () => {
        if (!showMenu) {
            menuBtn.classList.add('close')
            menu.classList.add('show')
            menuPortrait.classList.add('show')
            menuNav.classList.add('show')
        } else {
            menuBtn.classList.remove('close')
            menu.classList.remove('show')
            menuPortrait.classList.remove('show')
            menuNav.classList.remove('show')
        }

        showMenu = !showMenu
    })

    document.getElementById("contact-form").addEventListener("submit", async function (event) {
        event.preventDefault();

        console.log('Form submited!')

        try {
            console.log('Sending email...')
            await sendEmail()
            console.log('Email sent!')
            this.reset()
        } catch (e) {
            console.error(e)
        }
    })
})