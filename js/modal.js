//modal auth
const openmodalauth = document.querySelectorAll('.log-in');
const modalauth = document.querySelector('.modal__auth');

const body = document.querySelector('body');

function closemodal (modal) {

    if (!modal) return;

    function closeModalWindow () {
        modal.classList.remove('modal-active');
        modal.classList.add('modal-unactive');
        document.body.style.overflow = 'auto';
    }

    modal.addEventListener('click', function (event) {
        if(event.target === modal) {
            closeModalWindow();
        }
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('modal-active')) {
            closeModalWindow();
        }
    });
}

//modal create account
const openmodalcreateaccount = document.querySelector('.sign-up');
const modalcreateaccount = document.querySelector('.modal__create-account');


function openmodal (btn, modal) {

    function showModalWindow (event) {
        event.preventDefault();
        modal.classList.remove('modal-unactive');
        modal.classList.add('modal-active');
        document.body.style.overflow = 'hidden';
    }

    if (btn instanceof NodeList) {
        btn.forEach(button => button.addEventListener('click', showModalWindow));
    } else {
        btn.addEventListener('click', showModalWindow);
    }
}

openmodal(openmodalcreateaccount, modalcreateaccount);
openmodal(openmodalauth, modalauth);

closemodal(modalauth);
closemodal(modalcreateaccount);

const btncreeataccount = document.querySelectorAll('.create-account');
const btnlogin = document.querySelectorAll('.log-in');

//modal switch
function switchmodals (btns, modal1, modal2) {
    btns.forEach(btn => {
         btn.addEventListener('click', function () {
            modal1.classList.remove('modal-active');
            modal1.classList.add('modal-unactive');
            modal2.classList.remove('modal-unactive');
            modal2.classList.add('modal-active');
    });
    });
  
}

switchmodals(btncreeataccount, modalauth, modalcreateaccount);
switchmodals(btnlogin, modalcreateaccount, modalauth);

//modal contact us
const openmodalcontactus = document.querySelectorAll('.contact-us');
const modalcontactus = document.querySelector('.modal__contact-us');

openmodal(openmodalcontactus, modalcontactus);
closemodal(modalcontactus);

//modal leave feedback
const openmodalleavefeedback = document.querySelectorAll('.leave-feedback');
const modalleavefeedback = document.querySelector('.modal__leave-feedback');

openmodal(openmodalleavefeedback, modalleavefeedback);
closemodal(modalleavefeedback);

//modal donate to valunteers
const openmodaldonatetovalunteeers = document.querySelectorAll('.donate-to-valunteers');
const modaldonatetovalunteers = document.querySelector('.modal__donate-to-volunteers');


openmodal(openmodaldonatetovalunteeers, modaldonatetovalunteers);
closemodal(modaldonatetovalunteers);

const btnpaymenttime = document.querySelectorAll('.payment-type button');
const btnpaymentamount = document.querySelectorAll('.amounts button');

function activepayment (btns) {
    btns.forEach(btn => {
        btn.addEventListener('click', function () {
            btns.forEach(item => {
                if(item === btn) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            })
        })
    })
}

activepayment(btnpaymenttime);
activepayment(btnpaymentamount);
