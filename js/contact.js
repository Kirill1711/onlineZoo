const contactBlock = document.querySelector('.modal__contact-us');
const contactForm = document.querySelector('.contact-form');


function closeContactForm () {
    contactBlock.classList.remove('modal-active');
    contactBlock.classList.add('modal-unactive');
    document.body.style.overflow = 'auto';
}

let RegContMessTimeOut;

document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const msgContact = document.getElementById('message-contact');
    const submitBtn = document.getElementById('contact-btn');

    clearTimeout(RegContMessTimeOut);

    submitBtn.disabled = true;

    try {
        const res = await fetch('/php/contacts.php',{
            method: 'POST',
            body: new FormData(e.target)
        });

        if(!res.ok) {
            msgContact.textContent = 'Ошибка сервера';
            msgContact.style.color = 'red';
            return;
        }
        const data = await res.json();
        msgContact.textContent = data.message || 'Готово';
        msgContact.style.color = data.success ? 'green' : 'red';
        } catch (err) {
        msgContact.textContent = 'Ошибка сети, попробуйте позже';
        msgContact.style.color = 'red';
        } finally {
        submitBtn.disabled = false;
        RegContMessTimeOut = setTimeout(() => 
            (msgContact.textContent = '', closeContactForm(), contactForm.reset()), 1500);
        }
});