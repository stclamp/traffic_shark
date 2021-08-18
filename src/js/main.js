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
        logoLink = document.querySelector('.header__logo-link'),
        checkinFromAuth = document.getElementById('register')
        auth = document.querySelector('.auth');


    function showAdTab() {

        tabAdBtn.classList.add('header__menu-ad--active');
        tabWebBtn.classList.remove('header__menu-web--active');
        webContent.classList.add('hidden');
        auth.classList.add('hidden');
        checkin.classList.add('hidden');
        adContent.classList.remove('hidden');
    }

    function showWebTab() {

        tabAdBtn.classList.remove('header__menu-ad--active');
        tabWebBtn.classList.add('header__menu-web--active');
        webContent.classList.remove('hidden');
        auth.classList.add('hidden');
        checkin.classList.add('hidden');
        adContent.classList.add('hidden');
    }

    function showAuth() {
        adContent.classList.add('hidden');
        webContent.classList.add('hidden');
        tabAdBtn.classList.remove('header__menu-ad--active');
        tabWebBtn.classList.remove('header__menu-web--active');
        checkin.classList.add('hidden');
        auth.classList.remove('hidden');
    }

    function showCheckin() {

        adContent.classList.add('hidden');
        webContent.classList.add('hidden');
        auth.classList.add('hidden');
        tabAdBtn.classList.remove('header__menu-ad--active');
        tabWebBtn.classList.remove('header__menu-web--active');
        checkin.classList.remove('hidden');
    }

    tabAdBtn.addEventListener('click', (e) => {
        e.preventDefault();

        showAdTab();
        document.title = 'Traffic Shark. Рекламодателям';
    });

    tabWebBtn.addEventListener('click', (e) => {
        e.preventDefault();

        showWebTab();
        document.title = 'Traffic Shark. Веб-мастерам';
    });

    logoLink.addEventListener('click', (e) => {
        e.preventDefault();

        showWebTab();
        document.title = 'Traffic Shark. Веб-мастерам';
    })

    authBtn.addEventListener('click', (e) => {
        e.preventDefault();

        showAuth();
        document.title = 'Авторизоваться';
    });

    checkinBtn.addEventListener('click', (e) => {
        e.preventDefault();

        showCheckin();
        document.title = 'Зарегистрироваться';
    });

    promoAdBtn.addEventListener('click', (e) => {
        e.preventDefault();

        showAdTab();
        document.title = 'Traffic Shark. Рекламодателям';
    });

    promoWebBtn.addEventListener('click', (e) => {
        e.preventDefault();

        showWebTab();
        document.title = 'Traffic Shark. Веб-мастерам';
    });

    footerAdBtn.addEventListener('click', (e) => {
        e.preventDefault();

        showAdTab();
        document.title = 'Traffic Shark. Рекламодателям';
    });

    footerWebBtn.addEventListener('click', (e) => {
        e.preventDefault();

        showWebTab();
        document.title = 'Traffic Shark. Веб-мастерам';
    });

    checkinFromAuth.addEventListener('click', (e) => {
        e.preventDefault();
        
        showCheckin();
        document.title = 'Зарегистрироваться';
    })

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
    });

    //remember marker 

    const remember = document.querySelector('.auth__remember'),
        marker = document.getElementById('marker');


    remember.addEventListener('click', () => {
        marker.classList.toggle('marker');

    });

    //checkboxes 

    const checkboxItem = document.querySelectorAll('.checkin__checkboxes div'),
        checkbox = document.querySelectorAll('.checkin__checkbox'),
        agree = document.querySelector('.checkin__agree'),
        agreeSpan = document.getElementById('checkin__agree-span');

    checkboxItem.forEach((item, i) => {
        item.addEventListener('click', () => {
            checkbox[i].classList.toggle('checked');

        });
    });

    agree.addEventListener('click', () => {
        agreeSpan.classList.toggle('checked');
    })

    

})
