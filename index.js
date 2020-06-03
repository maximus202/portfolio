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
                desc: 'In past marketing projects, I used contests and giveaways to build brand awareness which I found to be a great way to get exposure in a short amount of time. Contestphyte is an app I created for small business owners that allows them to do just that; run contests while incentivizing participants to share the contests for additional entry points.',
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
                desc: 'As an independent filmmaker hopeful and someone who knows many other indie filmmakers, an expensive and tedious task is production management. There are so many things to keep track of in a production and often times, these management tools can be very expensive. I created ProductionWeaver to provide filmmakers an effective way to manage their productions right from their phone or computer, no matter the scope of the projects.',
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
                desc: 'Cinema Fetch is the search engine for cinephiles. Cinephiles often times search the trenches of film libraries to find hidden gems. It\'s tough to find these gems when there is a slew of films that don\'t quite meet what you\'re looking for and search engines are limited. Work your way through decades of cinema using Cinema Fetch with its many filters to find your next watch!',
                techUsed: `${TECH.html} ${TECH.css} ${TECH.javascript} ${TECH.jquery}`,
                demo: 'https://maximus202.github.io/cinema-fetch/',
                code: 'https://github.com/maximus202/cinema-fetch',
                screenshot: {
                    src: 'https://github.com/maximus202/portfolio/blob/master/cinemafetchscreenshot.png?raw=true',
                    alt: 'Image of search done using Cinema Fetch.'
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