$(document).ready(function () {
    const STORE = {
        projects: [
            {
                name: 'J.K. Rowling-Level Harry Potter Quiz',
                desc: 'How big of a Harry Potter fan are you really? If you can answer these 5 questions, you may crown yourself as Potterhead Level: J.K. Rowling.',
                tech: 'HTML, CSS, JavaScript, jQuery',
                demo: 'https://maximus202.github.io/harry-potter-quiz/',
                code: 'https://github.com/maximus202/harry-potter-quiz',
                screenshot: {
                    src: 'https://github.com/maximus202/portfolio/blob/master/harrypotterquizscreenshot.jpg?raw=true',
                    alt: 'Screenshot image of Harry Potter Quiz start page.'
                },
            },
        ],
    }


    function renderProjectsMenuHTML() {
        console.log('renderProjectsMenuHTML() ran');
        return `
                <h3>
                    ${STORE.projects[0].name}
                </h3>
                <img src="${STORE.projects[0].screenshot.src}" alt="${STORE.projects[0].screenshot.alt}">
                </img>
                <button>
                    View
                </button>`;
    }

    function displayProjectsMenu() {
        console.log('displayProjectsMenu() ran');
        //User story: The user needs to be able to see the projects menu where it'll display all the projects.
        $('.js-projects').html(renderProjectsMenuHTML());
    }

    function displayProjectDetailsButton() {
        console.log('displayProjectDetailsButton() ran');
        //User story: The user clicks on a project to see more details about it.
    }

    function displayProjectDetailsScreen() {
        console.log('displayProjectDetailsScreen() ran');
        //User story: The user is presented with a screen that shows details of the project they're viewing.
    }

    function displaySeeCodeButton() {
        console.log('displaySeeCodeButton() ran');
        //User story: The user clicks to see a render of the project.
    }

    function displaySeeDemoButton() {
        console.log('displayDemoButton() ran');
        //User story: The user clicks to see the code for the project they're viewing.
    }

    function displayBackButton() {
        console.log('displayBackButton() ran');
        //User story: The user is able to return to the home screen of the site.
    }

    function setUpEventHandlers() {
        //Runs event handlers at page load.
        console.log('setUpEventHandlers() ran');
        displayProjectsMenu();
        displayProjectDetailsButton();
        displayProjectDetailsScreen();
        displaySeeCodeButton();
        displaySeeDemoButton();
        displayBackButton();
    }
    //Runs setUpEventHandlers() at page load.
    $(setUpEventHandlers())
});