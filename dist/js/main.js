window.addEventListener('DOMContentLoaded', () => {
    //change language
    const langRuBtn = document.querySelector('.header__menu-ru'),
        langEnBtn = document.querySelector('.header__menu-eng');

    langEnBtn.addEventListener('click', (e) => {
        e.preventDefault();
        langEnBtn.classList.add('header__menu--active', 'animate__animated', 'animate__slideInLeft', 'animate__faster');
        langRuBtn.classList.remove('header__menu--active', 'animate__animated', 'animate__slideInRight', 'animate__faster');

    });

    langRuBtn.addEventListener('click', (e) => {
        e.preventDefault();
        langRuBtn.classList.add('header__menu--active', 'animate__animated', 'animate__slideInRight', 'animate__faster');
        langEnBtn.classList.remove('header__menu--active', 'animate__animated', 'animate__slideInLeft', 'animate__faster');
    })

    //change Mega Tabs 

    const tabWebBtn = document.querySelector('.header__menu-link--web'),
        tabAdBtn = document.querySelector('.header__menu-link--ad'),
        promoAdBtn = document.getElementById('promo__adv'),
        promoWebBtn = document.getElementById('promo__web'),
        footerAdBtn = document.getElementById('footer__ad'),
        footerWebBtn = document.getElementById('footer__web');
        webContent = document.querySelector('.web'),
        adContent = document.querySelector('.ad');

    function showAdTab(e) {
        e.preventDefault();

        tabAdBtn.classList.add('header__menu-ad--active');
        tabWebBtn.classList.remove('header__menu-web--active');
        webContent.classList.add('hidden');
        adContent.classList.remove('hidden');
    }

    function showWebTab(e) {
        e.preventDefault();

        tabAdBtn.classList.remove('header__menu-ad--active');
        tabWebBtn.classList.add('header__menu-web--active');
        webContent.classList.remove('hidden');
        adContent.classList.add('hidden');
    }

    tabAdBtn.addEventListener('click', showAdTab);

    tabWebBtn.addEventListener('click', showWebTab);

    promoAdBtn.addEventListener('click', showAdTab);

    promoWebBtn.addEventListener('click', showWebTab);

    footerAdBtn.addEventListener('click', showAdTab);

    footerWebBtn.addEventListener('click', showWebTab);

    //smooth scroll

    const smoothScrollElems = document.querySelectorAll('a[href^="#"]:not(a[href="#"])');
    smoothScrollElems.forEach(link => {
        link.addEventListener('click', (event) => {

            event.preventDefault();
            const id = link.getAttribute('href').substring(1);
            

            document.getElementById(id).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

})