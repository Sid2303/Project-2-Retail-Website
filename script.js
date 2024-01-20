const navbar = document.querySelector('.header');
const scroll_watcher = document.createElement('div');

scroll_watcher.setAttribute('data-scroll-watcher0','');
navbar.before(scroll_watcher);

const navObserver = new IntersectionObserver((entries)=>{
    navbar.classList.toggle('sticking', !entries[0].isIntersecting)
});

navObserver.observe(scroll_watcher);