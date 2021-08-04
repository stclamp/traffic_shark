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
            tabAdBtn = document.querySelector('.header__menu-link--ad');

        tabAdBtn.addEventListener('click', () => {
            tabAdBtn.classList.add('header__menu-ad--active');
            tabWebBtn.classList.remove('header__menu-web--active');
        });

        tabWebBtn.addEventListener('click', () => {
            tabAdBtn.classList.remove('header__menu-ad--active');
            tabWebBtn.classList.add('header__menu-web--active');
        });
})