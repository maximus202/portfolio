// Accordion (About)
document.querySelectorAll('[data-accordion] .acc-item').forEach(function (item) {
    var head = item.querySelector('.acc-head');
    head.addEventListener('click', function () {
        var group = item.parentElement;
        var willOpen = !item.classList.contains('open');
        group.querySelectorAll('.acc-item').forEach(function (other) {
            other.classList.remove('open');
            other.querySelector('.acc-head').setAttribute('aria-expanded', 'false');
        });
        if (willOpen) {
            item.classList.add('open');
            head.setAttribute('aria-expanded', 'true');
        }
    });
});

// Career cards expand/collapse
document.querySelectorAll('.job').forEach(function (job) {
    var head = job.querySelector('.job-head');
    if (head.getAttribute('aria-expanded') === 'true') job.classList.add('open');
    head.addEventListener('click', function () {
        var open = job.classList.toggle('open');
        head.setAttribute('aria-expanded', String(open));
    });
});

// Mobile menu
var toggle = document.querySelector('.menu-toggle');
var nav = document.getElementById('site-nav');
toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
    });
});

// Scroll reveal
var items = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.classList.add('js-reveal');
    var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
            if (e.isIntersecting) {
                e.target.classList.add('in');
                io.unobserve(e.target);
            }
        });
    }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
}
