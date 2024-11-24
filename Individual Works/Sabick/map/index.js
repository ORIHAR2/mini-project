
let started = false;
let isDivOpen = false;
const events = ['keydown', 'click', 'keyup'];


const infoDiv = document.getElementById('info');
const commandsDiv = document.getElementById('commands');
const xButton = document.getElementById('xbutton');
const resDiv = document.getElementById('resources');
const activePreambleDiv = document.querySelectorAll('.preamble');
let activePreamble = 0;
let activeconv=1;
function dimIt() {
    canvas.classList.add('dimmed');
    commandsDiv.classList.add('dimmed');
    isDivOpen=true;
}

function unDimIt() {
    canvas.classList.remove('dimmed');
    commandsDiv.classList.remove('dimmed');
    isDivOpen=false;
}

window.botpress.on('webchat:closed',unDimIt);


document.getElementById("zoom").addEventListener("click", () => {
    gsap
      .timeline()
      .to("img", {
        scale: 2,
        z: 350,
        transformOrigin: "center center",
        ease: "power1.inOut"
      });
  });

document.addEventListener('DOMContentLoaded', () => {
    const startDiv = document.getElementById('start');
    events.forEach(event => {
        document.addEventListener(event, () => {
            if (!started) {
                startDiv.classList.add('hidden');
                unDimIt();
                started = true;
            }
        });
    });

});

const canvas = document.querySelector('#mainFrame');

const c = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

// creating an offset so that the map is centers
// made the offset of the background responsive and will always be in center no matter the screen size

const offset = {
    x: -900 + ((canvas.width - 1024) / 2),
    y: -2800 + ((canvas.height - 576) / 2),
}
// collision mechanism
const collisionMap = []//2d array representing the grid
for (let i = 0; i < collisions.length; i += 70) {
    collisionMap.push(collisions.slice(i, i + 70))
}
// creating a arr with all the boundary positions with height and width
const boundaries = []
collisionMap.forEach((row, i) => {
    row.forEach((column, j) => {
        if (column != 0) {
            boundaries.push(
                new Boundary({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y
                    }
                })
            )
        }
    })
})

const teleportMap = []
for (let i = 0; i < teleport.length; i += 70) {
    teleportMap.push(teleport.slice(i, i + 70))
}
const teleports = []
teleportMap.forEach((row, i) => {
    row.forEach((column, j) => {
        if (column !=0) {
            teleports.push(
                new Boundary({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y
                    }
                }, column)
            )
        }
    })
})

const interactMap = []
for (let i = 0; i < interact.length; i += 70) {
    interactMap.push(interact.slice(i, i + 70))
}
const interacts = []
interactMap.forEach((row, i) => {
    row.forEach((column, j) => {
        if (column != 0) {
            interacts.push(
                new Boundary({
                    position: {
                        x: j * Boundary.width + offset.x,
                        y: i * Boundary.height + offset.y
                    }
                }, column)
            )
        }
    })
})

const image = new Image();
image.src = "./assets/images/SIH2.png";

const foregroundImage = new Image()
foregroundImage.src = './assets/images/fore.png'

const playerDownImage = new Image()
playerDownImage.src = './assets/images/playerDown.png'

const playerUpImage = new Image()
playerUpImage.src = './assets/images/playerUp.png'

const playerLeftImage = new Image()
playerLeftImage.src = './assets/images/playerLeft.png'

const playerRightImage = new Image()
playerRightImage.src = './assets/images/playerRight.png'

const background = new Sprite({
    position: offset,
    image: image,
    // resolution of the image
    width: 4096,
    height: 4096
})

// canvas.width/2 - this.image.width/8, we are going to replace it with static value
// which is nothing but width and height of the player image in this case it is 192 and 68
// canvas.height/2 - this.image.height/2, 

const player = new Sprite({
    position: {
        x: canvas.width / 2 - 192 / 8,
        y: canvas.height / 2 - 68 / 2
    },
    image: playerUpImage,
    frames: {
        max: 4,
        hold: 7
    },
    width: 192,
    height: 68,
    sprites: {
        up: playerUpImage,
        left: playerLeftImage,
        right: playerRightImage,
        down: playerDownImage
    }
})

const foreground = new Sprite({
    position: {
        x: offset.x,
        y: offset.y
    },
    image: foregroundImage,
    width: 4096,
    height: 4096
})

let lastKey = '';
const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false
    },
    x: {
        pressed: false
    },
}

const movables = [background, ...boundaries, foreground, ...teleports, ...interacts];

// softedge is created to make the boundary smaller thus given more movement space to the player
const softedge = {
    x: 25,
    y: 25
}
const speed = 5

const teleportActivation = {
    initiate: false
}

function rectangularCollision({ rectangle1, rectangle2 }) {
    return (
        rectangle1.position.x + rectangle1.width >= rectangle2.position.x + softedge.x &&
        rectangle1.position.x <= rectangle2.position.x + rectangle2.width - softedge.x &&
        rectangle1.position.y <= rectangle2.position.y + rectangle2.height - softedge.y &&
        rectangle1.position.y + rectangle1.height >= rectangle2.position.y + softedge.y
    )
}

function openPreamble() {
    activePreamble = 0;
    resDiv.classList.add('hidden');
    activePreambleDiv[activePreamble].classList.remove('hidden');
}

function closePreamble() {
    activePreambleDiv[activePreamble].classList.add('hidden');
    resDiv.classList.remove('hidden');
}

function nextPreamble() {
    activePreambleDiv[activePreamble].classList.add('hidden');
    activePreamble++;
    activePreambleDiv[activePreamble].classList.remove('hidden');
}

function prevPreamble() {

    activePreambleDiv[activePreamble].classList.add('hidden');
    activePreamble--;
    activePreambleDiv[activePreamble].classList.remove('hidden');
}


function updateXButton() {
    if (xButton) {
        const inTeleportZone = teleports.some(pad => rectangularCollision({ rectangle1: player, rectangle2: pad }));
        const inInteractZone = interacts.some(pad => rectangularCollision({ rectangle1: player, rectangle2: pad }));
        
        // If the player is in either teleport or interact zone, show the button
        if ((inTeleportZone || inInteractZone) && started && !isDivOpen) {
            if (xButton.classList.contains('hidden')) {
                xButton.classList.remove('hidden');
            }
        } else {
            if (!xButton.classList.contains('hidden')) {
                xButton.classList.add('hidden');
            }
        }
    }
}

function animate() {
    const animationId = window.requestAnimationFrame(animate);
    updateXButton();
    background.draw()

    boundaries.forEach(boundary => {
        boundary.draw()
        if (rectangularCollision({
            rectangle1: player,
            rectangle2: boundary
        })) {
            console.log('collision')
        }
    });

    interacts.forEach(inter => {
        inter.draw();
        if (rectangularCollision({ rectangle1: player, rectangle2: inter }) && keys.x.pressed) {
            console.log("interaction activated");

            if (inter.val == 1) {
                isDivOpen = true;
                resDiv.classList.remove('hidden');
                dimIt();
            }
            else if (inter.val == 2) {
                const botpress = window.botpress;
                botpress.open();
                isDivOpen = true;
                dimIt();
            }
            else if (inter.val==3){
                activeconv=1;
                const npc1p=document.getElementById('npc1p');
                const npc1=document.getElementById('npc1');
                npc1p.classList.remove('hidden');
                dimIt();
                setTimeout(() => {
                    npc1p.classList.add('hidden');
                    npc1.classList.remove('hidden');
                  }, 700);
                setTimeout(() => {
                    npc1.classList.add('hidden');
                    unDimIt();
                  }, 3500);
            }
            else if (inter.val==4){
                activeconv=2;
                const npc2p=document.getElementById('npc2p');
                const npc2=document.getElementById('npc2');
                npc2p.classList.remove('hidden');
                dimIt();
                setTimeout(() => {
                    npc2p.classList.add('hidden');
                    npc2.classList.remove('hidden');
                  }, 700);
                setTimeout(() => {
                    npc2.classList.add('hidden');
                    unDimIt();
                  }, 4000);
            }

        }
    });


    player.draw()
    // foreground.draw()




    if (teleportActivation.initiate) return
    teleports.forEach(pad => {
        pad.draw()
        if (rectangularCollision({ rectangle1: player, rectangle2: pad }) && keys.x.pressed) {
            console.log("teleportation activated")
            teleportActivation.initiate = true

            //deactivate current animation loop
            window.cancelAnimationFrame(animationId)
            if (pad.val == 1) {
                console.log("redirecting to cardGame");
                location.href = '/cardgame';
            } else if (pad.val == 2) {
                console.log("redirecting to quizGame");
                location.href = '/quizgame';
            } else if(pad.val==3){
                console.log("redirecting to situation game");
                location.href= '/situationgame';
            } else if(pad.val==4){
                console.log("redirecting to drag'n'drop game");
                location.href= '/matchup';
            } else if(pad.val==5){
                console.log("redirecting to spin wheel");
                location.href= '/spin';
            }
            else {
                console.log("X key is not pressed")
            }
        }
    })

    let moving = true
    player.moving = false

    if (keys.w.pressed && lastKey === 'w') {
        player.moving = true
        player.image = playerUpImage
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {
                        ...boundary,
                        position: {
                            x: boundary.position.x,
                            y: boundary.position.y + speed
                        }
                    }
                })
            ) {
                moving = false
                break
            }
        }

        if (moving)
            movables.forEach((movable) => {
                movable.position.y += speed
            })
    }
    else if (keys.a.pressed && lastKey === 'a') {
        player.moving = true
        player.image = playerLeftImage
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {
                        ...boundary,
                        position: {
                            x: boundary.position.x + speed,
                            y: boundary.position.y
                        }
                    }
                })
            ) {
                moving = false
                break
            }
        }

        if (moving)
            movables.forEach((movable) => {
                movable.position.x += speed
            })
    }
    else if (keys.s.pressed && lastKey === 's') {
        player.moving = true
        player.image = playerDownImage
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {
                        ...boundary,
                        position: {
                            x: boundary.position.x,
                            y: boundary.position.y - speed
                        }
                    }
                })
            ) {
                moving = false
                break
            }
        }

        if (moving)
            movables.forEach((movable) => {
                movable.position.y -= speed
            })
    }
    else if (keys.d.pressed && lastKey === 'd') {
        player.moving = true
        player.image = playerRightImage
        for (let i = 0; i < boundaries.length; i++) {
            const boundary = boundaries[i]
            if (
                rectangularCollision({
                    rectangle1: player,
                    rectangle2: {
                        ...boundary,
                        position: {
                            x: boundary.position.x - speed,
                            y: boundary.position.y
                        }
                    }
                })
            ) {
                moving = false
                break
            }
        }

        if (moving)
            movables.forEach((movable) => {
                movable.position.x -= speed
            })
    }
}
animate()

window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case ("w"):
            keys.w.pressed = true;
            lastKey = "w";

            break
        case ("a"):
            keys.a.pressed = true;
            lastKey = "a";
            break
        case ("s"):
            keys.s.pressed = true;
            lastKey = "s";
            break
        case ("d"):
            keys.d.pressed = true;
            lastKey = "d";
            break
        case ("x"):
            keys.x.pressed = true;
            break
        case ("i"):
            if (started) {

                if (infoDiv.classList.contains('hidden')) {
                    infoDiv.classList.remove('hidden');
                    canvas.classList.add('dimmed');
                    dimIt();
                    isDivOpen = true;
                }
                else {
                    infoDiv.classList.add('hidden');
                    unDimIt();
                    xButton.classList.remove('hidden');
                    isDivOpen = false;
                }
            }
            break
        case ("q"):
            if (!resDiv.classList.contains('hidden')) {
                resDiv.classList.add('hidden');
                isDivOpen = false;
                unDimIt();
            }
            if (!activePreambleDiv[activePreamble].classList.contains('hidden')) {
                activePreambleDiv[activePreamble].classList.add('hidden');
                isDivOpen = false;
                unDimIt();
            }
            break;
    }

})

window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case ("w"):
            keys.w.pressed = false;
            break
        case ("a"):
            keys.a.pressed = false;
            break
        case ("s"):
            keys.s.pressed = false;
            break
        case ("d"):
            keys.d.pressed = false;
            break
        case ("x"):
            keys.x.pressed = false;
            break
    }
})