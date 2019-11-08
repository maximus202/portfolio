$(document).ready(function () {
    function displayProjectsMenu() {
        console.log('displayProjectsMenu() ran');
        //User story: The user needs to be able to see the projects menu where it'll display all the projects.
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