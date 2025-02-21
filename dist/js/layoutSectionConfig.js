document.addEventListener("DOMContentLoaded", function () {
    console.log('layoutSectionConfig.js loaded!')

    const currentPage = window.location.pathname.split("/").pop()

    fetch('layout.html')
        .then(response => response.text())
        .then(html => {
            console.log('Fetched layout.html')

            const layoutDoc = new DOMParser().parseFromString(html, 'text/html')
            const layoutHead = layoutDoc.head
            const layoutBody = layoutDoc.body

            const currentHead = document.head;
            [...layoutHead.children].forEach(tag => currentHead.appendChild(tag))

            document.body.innerHTML = layoutBody.innerHTML

            return fetch(currentPage)
        })
        .then(response => response.text())
        .then(content => {
            console.log(`Fetched ${currentPage}`)

            document.getElementById('content').innerHTML = content

            const script = document.createElement('script')
            script.src = ' ./js/main.js'
            script.type = 'module'
            document.body.appendChild(script)

            console.log('Injected main.js')

            // Re-add Ionicons script dynamically
            const ioniconsScriptModule = document.createElement('script')
            ioniconsScriptModule.type = 'module'
            ioniconsScriptModule.src = 'https://cdn.jsdelivr.net/npm/ionicons@latest/dist/ionicons/ionicons.esm.js'
            document.body.appendChild(ioniconsScriptModule)

            const ioniconsScriptNoModule = document.createElement('script')
            ioniconsScriptNoModule.nomodule = true
            ioniconsScriptNoModule.src = 'https://cdn.jsdelivr.net/npm/ionicons@latest/dist/ionicons/ionicons.js'
            document.body.appendChild(ioniconsScriptNoModule)

            console.log('Re-injected Ionicons')
        })
        .catch(error => console.error(error))
})