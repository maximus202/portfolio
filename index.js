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
                desc: 'In past marketing projects, I used contests to build brand awareness and get exposure in a short amount of time. Contestphyte is an app I created that allows small businesses to do just that; run contests that incentivize participants to share for additional entries.',
                techUsed: `${TECH.javascript} ${TECH.react} ${TECH.node} ${TECH.express} ${TECH.postgresql} ${TECH.html} ${TECH.css}`,
                demo: 'https://contestphyte-app.now.sh/home',
                code: 'https://github.com/maximus202/contestphyte-app',
                screenshot: {
                    src: 'https://github.com/maximus202/portfolio/blob/master/contestphytescreenshot2.jpg?raw=true',
                    alt: 'Image of the Contestphyte screenshots.'
                }
            },
            {
                name: 'ProductionWeaver',
                desc: 'The independent filmmaking community can agree on this, an expensive and tedious task is production management. There are so many elements to keep track of and often times, these tools can be very expensive. I created ProductionWeaver to provide filmmakers a simple app to manage their productions, no matter the scope.',
                techUsed: `${TECH.javascript} ${TECH.react} ${TECH.node} ${TECH.express} ${TECH.postgresql} ${TECH.html} ${TECH.css}`,
                demo: 'https://productionweaver-app.now.sh/home',
                code: 'https://github.com/maximus202/productionweaver-app',
                screenshot: {
                    src: 'https://github.com/maximus202/portfolio/blob/master/producionweaverscreenshot2.png?raw=true',
                    alt: 'Image of the ProductionWeaver screenshots.'
                }
            },
            {
                name: 'Cinema Fetch',
                desc: 'Cinephiles often times search the trenches of film libraries to find hidden gems. It\'s tough to find these gems when there is a slew of films that don\'t quite meet what you\'re looking for and search engines are limited. Work your way through decades of cinema using Cinema Fetch to find your next watch!',
                techUsed: `${TECH.html} ${TECH.css} ${TECH.javascript} ${TECH.jquery}`,
                demo: 'https://maximus202.github.io/cinema-fetch/',
                code: 'https://github.com/maximus202/cinema-fetch',
                screenshot: {
                    src: 'https://github.com/maximus202/portfolio/blob/master/cinemafetchscreenshot2.jpg?raw=true',
                    alt: 'Image of Cinema Fetch screenshots.'
                },
            },
            {
                name: 'J.K. Rowling-Level Harry Potter Quiz',
                desc: 'How big of a Harry Potter fan are you? If you can answer these 5 questions, you may crown yourself as Potterhead Level: J.K. Rowling.',
                techUsed: `${TECH.html} ${TECH.css} ${TECH.javascript} ${TECH.jquery}`,
                demo: 'https://maximus202.github.io/harry-potter-quiz/',
                code: 'https://github.com/maximus202/harry-potter-quiz',
                screenshot: {
                    src: 'https://github.com/maximus202/portfolio/blob/master/hpquizscreenshot.jpg?raw=true',
                    alt: 'Image of the Harry Potter quiz screenshots.'
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