if (document.readyState === 'loading') {
    const loadingScreen = document.createElement('div')
    loadingScreen.setAttribute('id', 'loading-screen')
    loadingScreen.innerHTML = `
    <span id="spinner"></span>
    <span id="loading-text">Loading...</span>
    `
    document.body.appendChild(loadingScreen)

    setTimeout(() => {
        document.addEventListener('DOMContentLoaded', init)
    }, 2000)
} else {
    init()
}

function init() {
    console.log('Script loaded!')

    const menu = document.querySelector('.menu')
    const menuBtn = document.querySelector('.menu-btn')
    const menuPortrait = document.querySelector('.portrait')
    const menuNav = document.querySelector('.menu-nav')

    let showMenu = false

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            console.log('Menu btn clicked!')

            if (!showMenu) {
                console.log('Opening menu...')
                menuBtn.classList.add('close')
                menu.classList.add('show')
                menuPortrait.classList.add('show')
                menuNav.classList.add('show')
            } else {
                console.log('Closing menu...')
                menuBtn.classList.remove('close')
                menu.classList.remove('show')
                menuPortrait.classList.remove('show')
                menuNav.classList.remove('show')
            }

            showMenu = !showMenu
        })
    }

}
document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('load', () => {
        var navLinks = document.querySelectorAll('.nav-link')
        console.log('Updating nav items...')
        const currentPageName = window.location.pathname.split('/').pop().split('.')[0]

        navLinks.forEach(link => {
            const linkHref = link.getAttribute('href').split('.')[0] // Get the page name from href

            if (linkHref === currentPageName) {
                console.log('Comparison: ' + linkHref + ' | ' + currentPageName)
                link.classList.add('current')
            } else {
                console.log('Comparison: ' + linkHref + ' | ' + currentPageName)
                link.classList.remove('current')
            }
        })

        // Remove loading screen once everything is loaded
        const loadingScreen = document.getElementById('loading-screen')
        if (loadingScreen) {
            loadingScreen.remove()
        }
    })
})