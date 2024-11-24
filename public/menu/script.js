const newGameButton = document.getElementById('newGame');

// Add click event listener to the "New Game" button
newGameButton.addEventListener('click', () => {
    // const element = document.documentElement;
    // if (element.requestFullscreen) {
    //     element.requestFullscreen();
    // } else if (element.mozRequestFullScreen) { // Firefox
    //     element.mozRequestFullScreen();
    // } else if (element.webkitRequestFullscreen) { // Chrome, Safari, Opera
    //     element.webkitRequestFullscreen();
    // } else if (element.msRequestFullscreen) { // IE/Edge
    //     element.msRequestFullscreen();
    // }

    // Move to the game screen immediately after requesting fullscreen
    window.location.href = "/map";
});
