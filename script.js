// Скрытие хедера при скролле вниз
const header = document.querySelector('.header')
let prevScrollState = window.scrollY;

window.addEventListener('scroll', () => {
    const currentScrollState = window.scrollY;
    const isHeaderHidden = header.classList.contains('header_hidden');

    if (currentScrollState > prevScrollState && !isHeaderHidden)
        header.classList.add('header_hidden')

    if (currentScrollState < prevScrollState && isHeaderHidden)
        header.classList.remove('header_hidden')

    prevScrollState = currentScrollState
})


// Нажатие на бургер-меню в хедере
let menu = null;
document.querySelector('.header__burger-icon').addEventListener('click', () => {
    menu = document.querySelector('.menu');
    menu.classList.add('menu_active');
});


// Нажатие на крестик в меню
document.querySelector('.menu__close-icon').addEventListener('click', () => {
    menu.classList.remove('menu_active')
});


// Делаем таб активным по клику
let projectTabs = [...document.querySelectorAll('.projects__tab')];
let currentTab = projectTabs[0];
projectTabs.forEach((projectTab) => {
    projectTab.addEventListener('click', (e) => {

        const className = 'projects__tab_selected';

        if (!e.target.id !== currentTab.id) {
            // e.target - другой таб, отличающийся от currentTab
            // => убираем у currentTab модификатор selected
            currentTab.classList.remove(className);

            // Новому табу даем тот же модификатор
            e.target.classList.add(className);
            currentTab = e.target;
        }
    })
})