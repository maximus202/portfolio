$(document).ready(function () {
    const TECH = {
        html: '<i class="devicon-html5-plain-wordmark colored"></i>',
        css: '<i class="devicon-css3-plain-wordmark colored"></i>',
        javascript: '<i class="devicon-javascript-plain colored"></i>',
        jquery: '<i class="devicon-jquery-plain-wordmark colored"></i>',
    }
    const STORE = {
        projects: [
            {
                name: 'J.K. Rowling-Level Harry Potter Quiz',
                desc: 'How big of a Harry Potter fan are you really? If you can answer these 5 questions, you may crown yourself as Potterhead Level: J.K. Rowling.',
                techUsed: `${TECH.html} ${TECH.javascript} ${TECH.jquery}`,
                demo: 'https://maximus202.github.io/harry-potter-quiz/',
                code: 'https://github.com/maximus202/harry-potter-quiz',
                screenshot: {
                    src: 'https://github.com/maximus202/portfolio/blob/master/harrypotterquizscreenshot.jpg?raw=true',
                    alt: 'Screenshot image of Harry Potter Quiz start page.'
                },
            },
            {
                name: 'J.K. Rowling-Level Harry Potter Quiz 2',
                desc: 'How big of a Harry Potter fan are you really? If you can answer these 5 questions, you may crown yourself as Potterhead Level: J.K. Rowling.',
                techUsed: `${TECH.css}`,
                demo: 'https://maximus202.github.io/harry-potter-quiz/',
                code: 'https://github.com/maximus202/harry-potter-quiz',
                screenshot: {
                    src: 'https://github.com/maximus202/portfolio/blob/master/harrypotterquizscreenshot.jpg?raw=true',
                    alt: 'Screenshot image of Harry Potter Quiz start page.'
                },
            },
        ],
    }


    function generateProjects(i) {
        console.log('generateProjects() ran');
        return `
                <img src="${STORE.projects[i].screenshot.src}" alt="${STORE.projects[i].screenshot.alt}">
                </img>
                <h3>
                    ${STORE.projects[i].name}
                </h3>
                <div>
                    ${STORE.projects[i].techUsed}
                </div>
                <p>
                    ${STORE.projects[i].desc}
                </p>

                `;
    }

    function displayProjects() {
        console.log('displayProjects() ran');
        //User story: The user needs to be able to see the projects menu where it'll display all the projects.
        for (let i = 0; i < STORE.projects.length; i++) {
            $('.js-projects').append(generateProjects(i));
        }
    }

    function setUpEventHandlers() {
        //Runs event handlers at page load.
        console.log('setUpEventHandlers() ran');
        displayProjects();
    }
    //Runs setUpEventHandlers() at page load.
    $(setUpEventHandlers())
});