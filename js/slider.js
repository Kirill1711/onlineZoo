//pets in zoo slider

const leftarrowpetsinzoo = document.querySelector('.pets-arrow-left');
const rightarrowpetsinzoo = document.querySelector('.pets-arrow-right');
const petsgallery = document.querySelector('.pets__gallery');



function sliderpetsinzoo (left, right) {

    let petinzooarr = ['<a href="#" class="gallery__item"><svg class="pets-content" width="229" height="221" viewBox="0 0 229 221" fill="none" xmlns="http://www.w3.org/2000/svg<defs><clipPath id="pets-img"><path d="M208.771 45.8713C228.621 72.65 234.135 109.15 223.842 137.212C213.549 165.275 187.817 185.084 158.225 200.49C128.817 215.897 95.5484 227.086 67.2429 217.365C38.9373 207.827 15.4106 177.747 5.3015 142.164C-4.62382 106.582 -1.13158 65.4968 20.1895 38.5347C41.6944 11.3893 80.8442 -1.81665 117.788 0.200917C154.549 2.21848 188.92 19.2761 208.771 45.8713Z" fill="#B9D5D9" fill-opacity="0.2"></path></clipPath></defs><image clip-path="url(#pets-img)" href="./images/content/pandas.png" width="229" height="221" /></svg><span class="pets-line"></span><div class="pets__text"><div><h2>Pandas</h2><p>Shenshuping Gengda Panda Center</p></div><svg class="tv--icon"><use href="#tv--icon"></use></svg></div></a>',
                    '<a href="#" class="gallery__item"><svg class="pets-content" width="229" height="221" viewBox="0 0 229 221" fill="none" xmlns="http://www.w3.org/2000/svg<defs><clipPath id="pets-img"><path d="M208.771 45.8713C228.621 72.65 234.135 109.15 223.842 137.212C213.549 165.275 187.817 185.084 158.225 200.49C128.817 215.897 95.5484 227.086 67.2429 217.365C38.9373 207.827 15.4106 177.747 5.3015 142.164C-4.62382 106.582 -1.13158 65.4968 20.1895 38.5347C41.6944 11.3893 80.8442 -1.81665 117.788 0.200917C154.549 2.21848 188.92 19.2761 208.771 45.8713Z" fill="#B9D5D9" fill-opacity="0.2"></path></clipPath></defs><image clip-path="url(#pets-img)" href="./images/content/eagles.png" width="229" height="221" /></svg><span class="pets-line"></span><div class="pets__text"><div><h2>Eagles</h2><p>Catalina Island</p></div><svg class="tv--icon"><use href="#tv--icon"></use></svg></div></a>',
                 '<a href="#" class="gallery__item"><svg class="pets-content" width="229" height="221" viewBox="0 0 229 221" fill="none" xmlns="http://www.w3.org/2000/svg<defs><clipPath id="pets-img"><path d="M208.771 45.8713C228.621 72.65 234.135 109.15 223.842 137.212C213.549 165.275 187.817 185.084 158.225 200.49C128.817 215.897 95.5484 227.086 67.2429 217.365C38.9373 207.827 15.4106 177.747 5.3015 142.164C-4.62382 106.582 -1.13158 65.4968 20.1895 38.5347C41.6944 11.3893 80.8442 -1.81665 117.788 0.200917C154.549 2.21848 188.92 19.2761 208.771 45.8713Z" fill="#B9D5D9" fill-opacity="0.2"></path></clipPath></defs><image clip-path="url(#pets-img)" href="./images/content/penguine.png" width="229" height="221" /></svg><span class="pets-line"></span><div class="pets__text"><div><h2>Penguins</h2><p>Isla Tova</p></div><svg class="tv--icon"><use href="#tv--icon"></use></svg></div></a>',
                 '<a href="#" class="gallery__item"><svg class="pets-content" width="229" height="221" viewBox="0 0 229 221" fill="none" xmlns="http://www.w3.org/2000/svg<defs><clipPath id="pets-img"><path d="M208.771 45.8713C228.621 72.65 234.135 109.15 223.842 137.212C213.549 165.275 187.817 185.084 158.225 200.49C128.817 215.897 95.5484 227.086 67.2429 217.365C38.9373 207.827 15.4106 177.747 5.3015 142.164C-4.62382 106.582 -1.13158 65.4968 20.1895 38.5347C41.6944 11.3893 80.8442 -1.81665 117.788 0.200917C154.549 2.21848 188.92 19.2761 208.771 45.8713Z" fill="#B9D5D9" fill-opacity="0.2"></path></clipPath></defs><image clip-path="url(#pets-img)" href="./images/content/gorillas.png" width="229" height="221" /></svg><span class="pets-line"></span><div class="pets__text"><div><h2>Gorillas</h2><p>GRACE gorillas</p></div><svg class="tv--icon"><use href="#tv--icon"></use></svg></div></a>',
                 '<a href="#" class="gallery__item"><svg class="pets-content" width="229" height="221" viewBox="0 0 229 221" fill="none" xmlns="http://www.w3.org/2000/svg<defs><clipPath id="pets-img"><path d="M208.771 45.8713C228.621 72.65 234.135 109.15 223.842 137.212C213.549 165.275 187.817 185.084 158.225 200.49C128.817 215.897 95.5484 227.086 67.2429 217.365C38.9373 207.827 15.4106 177.747 5.3015 142.164C-4.62382 106.582 -1.13158 65.4968 20.1895 38.5347C41.6944 11.3893 80.8442 -1.81665 117.788 0.200917C154.549 2.21848 188.92 19.2761 208.771 45.8713Z" fill="#B9D5D9" fill-opacity="0.2"></path></clipPath></defs><image clip-path="url(#pets-img)" href="./images/content/aligators.png" width="229" height="221" /></svg><span class="pets-line"></span><div class="pets__text"><div><h2>Aligators</h2><p>St. Augustine&apos;s Alligator Farm</p></div><svg class="tv--icon"><use href="#tv--icon"></use></svg></div></a>',
                 '<a href="#" class="gallery__item"><svg class="pets-content" width="229" height="221" viewBox="0 0 229 221" fill="none" xmlns="http://www.w3.org/2000/svg<defs><clipPath id="pets-img"><path d="M208.771 45.8713C228.621 72.65 234.135 109.15 223.842 137.212C213.549 165.275 187.817 185.084 158.225 200.49C128.817 215.897 95.5484 227.086 67.2429 217.365C38.9373 207.827 15.4106 177.747 5.3015 142.164C-4.62382 106.582 -1.13158 65.4968 20.1895 38.5347C41.6944 11.3893 80.8442 -1.81665 117.788 0.200917C154.549 2.21848 188.92 19.2761 208.771 45.8713Z" fill="#B9D5D9" fill-opacity="0.2"></path></clipPath></defs><image clip-path="url(#pets-img)" href="./images/content/elephantes.png" width="229" height="221" /></svg><span class="pets-line"></span><div class="pets__text"><div><h2>Elephants</h2><p>Tembe Elephant Park</p></div><svg class="tv--icon"><use href="#tv--icon"></use></svg></div></a>'];

    left.addEventListener('click', function () {
        let firstel = petinzooarr.shift();
        petinzooarr.push(firstel);
        petsgallery.innerHTML = '';
        
        for(let item of petinzooarr) {
            petsgallery.innerHTML += item;        }
    });

    right.addEventListener('click', function () {
        let lastel = petinzooarr.pop();
        petinzooarr.unshift(lastel);
        petsgallery.innerHTML = '';

        for(let item of petinzooarr) {
            petsgallery.innerHTML += item;
        }
    })
}

sliderpetsinzoo(leftarrowpetsinzoo, rightarrowpetsinzoo);


// look beautiful animals

const leftwindow = document.querySelector('.left-window');
const leftarrowlookanimals = document.querySelector('.beautiful-left-arrow');
const rightarrowlookanimals = document.querySelector('.beautiful-right-arrow');

function sliderlookbeautifulanimals (right, left) {
    let beautifulanimals = ['<a class="beautifulanimals__item" href="#"><svg width="105" height="131" viewBox="0 0 229 221" fill="none" xmlns="http://www.w3.org/2000/svg<defs><clipPath id="pets-img"><path d="M208.771 45.8713C228.621 72.65 234.135 109.15 223.842 137.212C213.549 165.275 187.817 185.084 158.225 200.49C128.817 215.897 95.5484 227.086 67.2429 217.365C38.9373 207.827 15.4106 177.747 5.3015 142.164C-4.62382 106.582 -1.13158 65.4968 20.1895 38.5347C41.6944 11.3893 80.8442 -1.81665 117.788 0.200917C154.549 2.21848 188.92 19.2761 208.771 45.8713Z" fill="#B9D5D9" fill-opacity="0.2"></path></clipPath></defs><image clip-path="url(#pets-img)" href="./images/content/pandas.png" width="229" height="221" /></svg><p>Pandas</p></a>',
        '<a class="beautifulanimals__item" href="#"><svg width="105" height="131" viewBox="0 0 229 221" fill="none" xmlns="http://www.w3.org/2000/svg<defs><clipPath id="pets-img"><path d="M208.771 45.8713C228.621 72.65 234.135 109.15 223.842 137.212C213.549 165.275 187.817 185.084 158.225 200.49C128.817 215.897 95.5484 227.086 67.2429 217.365C38.9373 207.827 15.4106 177.747 5.3015 142.164C-4.62382 106.582 -1.13158 65.4968 20.1895 38.5347C41.6944 11.3893 80.8442 -1.81665 117.788 0.200917C154.549 2.21848 188.92 19.2761 208.771 45.8713Z" fill="#B9D5D9" fill-opacity="0.2"></path></clipPath></defs><image clip-path="url(#pets-img)" href="./images/content/gorillas.png" width="229" height="221" /></svg><p>Gorillas</p></a>',
        '<a class="beautifulanimals__item" href="#"><svg width="105" height="131" viewBox="0 0 229 221" fill="none" xmlns="http://www.w3.org/2000/svg<defs><clipPath id="pets-img"><path d="M208.771 45.8713C228.621 72.65 234.135 109.15 223.842 137.212C213.549 165.275 187.817 185.084 158.225 200.49C128.817 215.897 95.5484 227.086 67.2429 217.365C38.9373 207.827 15.4106 177.747 5.3015 142.164C-4.62382 106.582 -1.13158 65.4968 20.1895 38.5347C41.6944 11.3893 80.8442 -1.81665 117.788 0.200917C154.549 2.21848 188.92 19.2761 208.771 45.8713Z" fill="#B9D5D9" fill-opacity="0.2"></path></clipPath></defs><image clip-path="url(#pets-img)" href="./images/content/eagles.png" width="229" height="221" /></svg><p>Eagles</p></a>',
        '<a class="beautifulanimals__item" href="#"><svg width="105" height="131" viewBox="0 0 229 221" fill="none" xmlns="http://www.w3.org/2000/svg<defs><clipPath id="pets-img"><path d="M208.771 45.8713C228.621 72.65 234.135 109.15 223.842 137.212C213.549 165.275 187.817 185.084 158.225 200.49C128.817 215.897 95.5484 227.086 67.2429 217.365C38.9373 207.827 15.4106 177.747 5.3015 142.164C-4.62382 106.582 -1.13158 65.4968 20.1895 38.5347C41.6944 11.3893 80.8442 -1.81665 117.788 0.200917C154.549 2.21848 188.92 19.2761 208.771 45.8713Z" fill="#B9D5D9" fill-opacity="0.2"></path></clipPath></defs><image clip-path="url(#pets-img)" href="./images/content/aligators.png" width="229" height="221" /></svg><p>Aligators</p></a>',
        '<a class="beautifulanimals__item" href="#"><svg width="105" height="131" viewBox="0 0 229 221" fill="none" xmlns="http://www.w3.org/2000/svg<defs><clipPath id="pets-img"><path d="M208.771 45.8713C228.621 72.65 234.135 109.15 223.842 137.212C213.549 165.275 187.817 185.084 158.225 200.49C128.817 215.897 95.5484 227.086 67.2429 217.365C38.9373 207.827 15.4106 177.747 5.3015 142.164C-4.62382 106.582 -1.13158 65.4968 20.1895 38.5347C41.6944 11.3893 80.8442 -1.81665 117.788 0.200917C154.549 2.21848 188.92 19.2761 208.771 45.8713Z" fill="#B9D5D9" fill-opacity="0.2"></path></clipPath></defs><image clip-path="url(#pets-img)" href="./images/content/elephantes.png" width="229" height="221" /></svg><p>elephants</p></a>',
        '<a class="beautifulanimals__item" href="#"><svg width="105" height="131" viewBox="0 0 229 221" fill="none" xmlns="http://www.w3.org/2000/svg<defs><clipPath id="pets-img"><path d="M208.771 45.8713C228.621 72.65 234.135 109.15 223.842 137.212C213.549 165.275 187.817 185.084 158.225 200.49C128.817 215.897 95.5484 227.086 67.2429 217.365C38.9373 207.827 15.4106 177.747 5.3015 142.164C-4.62382 106.582 -1.13158 65.4968 20.1895 38.5347C41.6944 11.3893 80.8442 -1.81665 117.788 0.200917C154.549 2.21848 188.92 19.2761 208.771 45.8713Z" fill="#B9D5D9" fill-opacity="0.2"></path></clipPath></defs><image clip-path="url(#pets-img)" href="./images/content/penguine.png" width="229" height="221" /></svg><p>Penguins</p></a>'];
    
       left.addEventListener('click', function () {
        let firstel = beautifulanimals.shift();
        beautifulanimals.push(firstel);
        leftwindow.innerHTML = '';
        
        for(let item of beautifulanimals) {
            leftwindow.innerHTML += item;        }
    });

    right.addEventListener('click', function () {
        let lastel = beautifulanimals.pop();
        beautifulanimals.unshift(lastel);
        leftwindow.innerHTML = '';

        for(let item of beautifulanimals) {
            leftwindow.innerHTML += item;
        }
    })
}

sliderlookbeautifulanimals(leftarrowlookanimals, rightarrowlookanimals);
