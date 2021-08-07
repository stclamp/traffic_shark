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
        footerWebBtn = document.getElementById('footer__web'),
        webContent = document.querySelector('.web'),
        adContent = document.querySelector('.ad'),
        authBtn = document.querySelector('.header__menu-link--login'),
        checkinBtn = document.querySelector('.header__menu-link--checkin'),
        checkin = document.querySelector('.checkin'),
        auth = document.querySelector('.auth');



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

    function showAuth(e) {
        e.preventDefault();

        adContent.classList.add('hidden');
        webContent.classList.add('hidden');
        tabAdBtn.classList.remove('header__menu-ad--active');
        tabWebBtn.classList.remove('header__menu-web--active');
        auth.classList.remove('hidden');
    }

    function showCheckin(e) {
        e.preventDefault();

        adContent.classList.add('hidden');
        webContent.classList.add('hidden');
        auth.classList.add('hidden');
        tabAdBtn.classList.remove('header__menu-ad--active');
        tabWebBtn.classList.remove('header__menu-web--active');
        checkin.classList.remove('hidden');
    }

    tabAdBtn.addEventListener('click', showAdTab);

    tabWebBtn.addEventListener('click', showWebTab);

    authBtn.addEventListener('click', showAuth);

    checkinBtn.addEventListener('click', showCheckin);

    promoAdBtn.addEventListener('click', showAdTab);

    promoWebBtn.addEventListener('click', showWebTab);

    footerAdBtn.addEventListener('click', showAdTab);

    footerWebBtn.addEventListener('click', showWebTab);

    //smooth scroll

    const smoothScrollElems = document.querySelectorAll('a[href^="#"]');
    smoothScrollElems.forEach(link => {
        link.addEventListener('click', (event) => {

            event.preventDefault();
            const id = link.getAttribute('href').substring(1);


            document.getElementById(id).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    //accordion 

    const activityBtn = document.querySelectorAll('.activity__block-img');
    const activityImgDown = document.querySelectorAll('.activity__img-down');
    const activityImgDoUp = document.querySelectorAll('.activity__img-up');
    const activityContent = document.querySelectorAll('.activity__content');

    activityBtn.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            activityImgDown[i].classList.toggle('hidden');
            activityImgDoUp[i].classList.toggle('hidden');
            activityContent[i].classList.toggle('hidden');
        });
    })

})
