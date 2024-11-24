for (let i = 1; i <= 8; i++) {
    let tmp = `
    <div class="grid-item">
        <div class="card-container">
            <div class="card _${i}">
                <div id="img-one" class="card front">
                    <img class="cardImg" onclick="" src="./images/card_${i}.jpg" alt="Avatar">
                </div>
                <div class="card back">
                    <img class="cardImg" onclick="" src="./images/card_white.png" alt="Avatar">
                </div>
            </div>
        </div>
    </div>`;
    document.getElementById("card-container").innerHTML += tmp;
}

let qns = [
    [
        "While DPSPs are not enforceable by courts, the government is constitutionally obligated to prioritize them over Fundamental Rights when forming policies.",
        0,
    ],
    ["Children under the age of 14 are allowed to work for jobs.", 0],
    [
        "Children should not be forced to work in jobs that are not suitable for their age and strength.",
        1,
    ],
    [
        "Every child has the right to early childhood care and education until they turn six.",
        1,
    ],
    [
        "Children in India have the right to be protected from discrimination based on their religion or caste.",
        1,
    ],
    ["Children can be forced into  labor in India.", 0],
    [
        "Children have the right to be protected from social injustice and exploitation.",
        1,
    ],
    [
        "The government has a duty to improve public health and nutrition for children.",
        1,
    ],
];

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));

        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
}

var score = 0;
var life = 3;
let ncard = 8;

const popupOverlay = document.getElementById("popup-overlay");
const closePopupButton = document.getElementById("close-popup");

closePopupButton.addEventListener("click", () => {
    popupOverlay.style.display = "none";
    window.location.reload();
});

function showPop(data) {
    const popupOverlay = document.getElementById("popup-overlay");
    popupOverlay.style.display = "flex";
    displayResult(data);
}
function displayResult(data) {
    let result_image = document.querySelector(".popup-content");
    if (data == 0) {
        result_image.innerHTML = `YOU LOSE`;
    } else {
        result_image.innerHTML = `YOU WON`;
    }
}

function animateLife(life) {
    const hearts = document.querySelectorAll(".heart");
    hearts[life].classList.add("lost");
    if(life != 0){
        hearts[life-1].classList.add("animated-header");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let questions = shuffleArray(qns);
    const dialog = document.getElementById("dialog");
    const ques = document.getElementById("ques");
    const true_btn = document.getElementById("true-btn");
    const false_btn = document.getElementById("false-btn");
    var x;
    var y;

    for (let i = 1; i <= 8; ++i) {
        const card = document.querySelector(`.card._${i}`);

        card.addEventListener("click", function () {
            ques.innerText = questions[i - 1][0];
            dialog.style.display = "block";
            card.classList.toggle("flipped");
            x = card;
            y = i;
        });
    }

    false_btn.addEventListener("click", function () {
        dialog.style.display = "none";
        x.style.display = "none";
        if (questions[y - 1][1] == 1) {
            life = life - 1;
            animateLife(life);
        } else {
            score += 10;
        }
        ncard--;

        if (ncard == 0 || life <= 0) {
            let r = 0;
            if (life > 0 && ncard == 0) {
                r = 1;
            }
            showPop(r);
        }
    });

    true_btn.addEventListener("click", function () {
        dialog.style.display = "none";
        x.style.display = "none";
        if (questions[y - 1][1] == 0) {
            life = life - 1;
            animateLife(life);
        } else {
            score += 10;
        }

        ncard--;

        if (ncard == 0 || life <= 0) {
            let r = 0;
            if (life > 0 && ncard == 0) {
                r = 1;
            }
            showPop(r);
        }
    });
});
