document.getElementById('contact-form').addEventListener('submit', async function (event) {
    event.preventDefault()

    emailjs.init('JfFvS7DyNpxoyogJu')

    const serviceID = 'service_t2e6nux'
    const templateID = 'template_f8gffzj'

    const formData = {
        from_name: document.querySelector("input[name='user_name']").value,
        reply_to: document.querySelector("input[name='user_email']").value,
        message: document.querySelector("textarea[name='message']").value,
    }

    return emailjs.send(serviceID, templateID, formData)
        .then(() => {
            document.getElementById('status-message').innerText = 'Email sent successfully!'
            this.reset()
        })
        .catch((error) => {
            document.getElementById('status-message').innerText = 'Failed to send email.'
            console.error('Error:', error)
            throw error
        })
})
