$(document).ready(function () {
    const TECH = {
        html: '<i class="devicon-html5-plain-wordmark colored"></i>',
        css: '<i class="devicon-css3-plain-wordmark colored"></i>',
        javascript: '<i class="devicon-javascript-plain colored"></i>',
        jquery: '<i class="devicon-jquery-plain-wordmark colored"></i>',
        react: '<i class="devicon-react-original-wordmark colored"></i>',
        node: '<i class="devicon-nodejs-plain-wordmark colored"></i>',
        express: '<i class="devicon-express-original-wordmark colored"></i>',
        postgresql: '<i class="devicon-postgresql-plain-wordmark colored"></i>',
    }
    const STORE = {
        projects: [
            {
                name: 'Contestphyte',
                desc: 'An app targeted towards small business owners and influencers that allows them to run online contests to boost brand awareness and engagement.',
                techUsed: `${TECH.javascript} ${TECH.react} ${TECH.node} ${TECH.express} ${TECH.postgresql} ${TECH.html} ${TECH.css}`,
                demo: 'https://contestphyte-app.now.sh/home',
                code: 'https://github.com/maximus202/contestphyte-app',
                screenshot: {
                    src: 'https://github.com/maximus202/portfolio/blob/master/contestphytescreenshot.jpg?raw=true',
                    alt: 'Image of the Contestphyte home screen.'
                }
            },
            {
                name: 'ProductionWeaver',
                desc: 'An app designed for independent filmmakers. ProductionWeaver is here to provide indie filmmakers a truly cost effective way to manage productions from script breakdown, shot listing, budgeting, etc.',
                techUsed: `${TECH.javascript} ${TECH.react} ${TECH.node} ${TECH.express} ${TECH.postgresql} ${TECH.html} ${TECH.css}`,
                demo: 'https://productionweaver-app.now.sh/home',
                code: 'https://github.com/maximus202/productionweaver-app',
                screenshot: {
                    src: 'https://github.com/maximus202/portfolio/blob/master/productionweaverscreenshot.jpg?raw=true',
                    alt: 'Image of the ProductionWeaver home screen.'
                }
            },
            {
                name: 'Cinema Fetch',
                desc: 'The search engine made for cinephiles. Make highly-targeted searches to find similar films to the ones you love.',
                techUsed: `${TECH.html} ${TECH.css} ${TECH.javascript} ${TECH.jquery}`,
                demo: 'https://maximus202.github.io/cinema-fetch/',
                code: 'https://github.com/maximus202/cinema-fetch',
                screenshot: {
                    src: 'https://github.com/maximus202/cinema-fetch/blob/master/laptop-and-mobile-screenshots.jpg?raw=true',
                    alt: 'Image of laptop and mobile device with screenshots of Cinema Fetch.'
                },
            },
            {
                name: 'J.K. Rowling-Level Harry Potter Quiz',
                desc: 'How big of a Harry Potter fan are you? If you can answer these 5 questions, you may crown yourself as Potterhead Level: J.K. Rowling.',
                techUsed: `${TECH.html} ${TECH.css} ${TECH.javascript} ${TECH.jquery}`,
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
        return `
        <section class="project">        
            <img src="${STORE.projects[i].screenshot.src}" alt="${STORE.projects[i].screenshot.alt}" class="screenshot">
            <h3>
                ${STORE.projects[i].name}
            </h3>
            <div class="tech-used">
                ${STORE.projects[i].techUsed}
            </div>
            <p>
                ${STORE.projects[i].desc}
            </p>
            <button type="button" onclick="window.open('${STORE.projects[i].demo}', '_blank')" class="demo-button">
                Live App
            </button>
            <button type="button" onclick="window.open('${STORE.projects[i].code}', '_blank')" class="class-button">
                Github
            </button>
        </section>`;
    }

    function displayProjects() {
        //User story: The user needs to be able to see the projects menu where it'll display all the projects.
        for (let i = 0; i < STORE.projects.length; i++) {
            $('.js-projects').append(generateProjects(i));
        }
    }

    function setUpEventHandlers() {
        //Runs event handlers at page load.
        displayProjects();
    }
    //Runs setUpEventHandlers() at page load.
    $(setUpEventHandlers())
});