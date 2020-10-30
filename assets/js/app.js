// Valeurs d'initialisation
let life = 3;
const player1 = document.getElementById("player1");
const playground = document.getElementById("playground");
const bot = document.getElementById("bot");
const nbBot = 4;
const parametreBot = [];

// Generation des Bot dans le tableau et positions de départ
for (let i = 0; i < nbBot; i++) {
    let positionBOT = [[25, 1375, 1375, 25], [25, 775, 25, 775]];


    let ennemie = document.createElement("div");
    ennemie.classList.add("bot");

    ennemie.style.top = positionBOT[1][i] + 'px';
    ennemie.style.left = positionBOT[0][i] + 'px';

    playground.appendChild(ennemie);

    parametreBot.push(ennemie);
    console.log(parametreBot);
}

//fonction pour récupérer plus rapidement les valeurs calculées des propriétés CSS des éléments !!!! ==> TOUTES LES DEPENDANCES VIENNENT D ICI
function valueOfStyle(element, property) {
    return parseInt(window.getComputedStyle(element).getPropertyValue(property));
}

// FONCTION DEPLACEMENT
function deplacement(element, whatMove) {
    let left = valueOfStyle(element, "left");
    let top = valueOfStyle(element, "top");
    switch (whatMove) {
        case "up":
            if (top > 25) {
                top -= 25;
                element.style.top = top + 'px';
            }
            break;
        case "down":
            if (top < 775) {
                top += 25;
                element.style.top = top + 'px';
            }
            break;

        case "left":
            if (left > 25) {
                left -= 25;
                element.style.left = left + 'px';
            }
            break;
        case "right":
            if (left < 1375) {
                left += 25;
                element.style.left = left + 'px';
            }
            break;
        default:
            break;
    }
    touche();
}

// FONCTION CREATION DE LA BOMBE
function bombOnPlayground(element) {
    let left = valueOfStyle(element, "left");
    let top = valueOfStyle(element, "top");
    const bomb = document.createElement("div");

    const newBomb = document.getElementById("bomb");
    bomb.style.position = "absolute";
    bomb.setAttribute("class", "bomb");

    playground.appendChild(bomb);

    bomb.style.top = top + 'px';
    bomb.style.left = left + 'px';

    bomb.style.width = "25px";
    bomb.style.height = "25px";
    bomb.style.transformOrigin = "center";
   // bomb.style.backgroundColor = '#00d2d3';
   // bomb.style.borderRadius = '50%';

    setTimeout(() => {
        let parent = document.getElementById(playground);
        let enfant = document.getElementById(bomb);
        colision(top, left);

        // appel de fonction regarde tableau d ennemie
        playground.removeChild(bomb);
    }, 3000);

    // console.log("X Y de BOMB");
    // console.log(left);
    //  console.log(top);
}

// DEPLACEMENT PLAYER1 DEPENDANCE ==> valueOfStyle
document.addEventListener('keydown', function (e) {
    switch (e.key) {
        case "ArrowUp":
            deplacement(player1, "up");
            break;
        case "ArrowDown":
            deplacement(player1, "down");
            break;
        case "ArrowLeft":
            deplacement(player1, "left");
            break;
        case "ArrowRight":
            deplacement(player1, "right");
            break;
        case ' ':
            bombOnPlayground(player1);

        default:
            break;
    }
});

// generer le mouvement aléatoire de mon bot ==> DEPENDANCE valueOfStyle
setInterval(() => {
    parametreBot.forEach(bot => {
        let top = parseInt(window.getComputedStyle(bot).getPropertyValue('top'));
        let left = parseInt(window.getComputedStyle(bot).getPropertyValue('left'));
        laDirection = Math.ceil(Math.random() * 4);
        switch (laDirection) {
            case 1:
                deplacement(bot, "up");
                break;
            case 2:
                deplacement(bot, "right");
                break;
            case 3:
                deplacement(bot, "down");
                break;
            case 4:
                deplacement(bot, "left");

                break;
            default:
                break;
        }
    });
},500);


// Fonction explosion BOMB  DEPENDANCE ==> valueOfStyle
function colision(topBomb, leftBomb) {
    if (valueOfStyle(player1, "top") <= topBomb + 37.5 && valueOfStyle(player1, "top") >= topBomb - 37.5 && valueOfStyle(player1, "left") <= leftBomb + 37.5 && valueOfStyle(player1, "left") >= leftBomb - 37.5) {
        console.log("joueurtoucher");
        life = life - 1;
        console.log(life);
        if (life <= 0) {
            console.log("YOU LOOSE");
            playground.removeChild(player1);
        }
    }
    parametreBot.forEach(bot => {
        if (valueOfStyle(bot, "top") <= topBomb + 37.5 && valueOfStyle(bot, "top") >= topBomb - 37.5 && valueOfStyle(bot, "left") <= leftBomb + 37.5 && valueOfStyle(bot, "left") >= leftBomb - 37.5) {
            console.log("bottouch");
            //////////////////////////////////////////////////////////////////////
            playground.removeChild(bot);
        }
    });
   
}

// Fonction collision Bot Vs Player1  DEPENDANCE ==> valueOfStyle
function touche() {
    parametreBot.forEach(bot => {
        if (valueOfStyle(bot, "top") === valueOfStyle(player1, "top") && valueOfStyle(bot, "left") === valueOfStyle(player1, "left")) {
            console.log("joueurtoucher");
            life = life - 1;
                 console.log(life);
            if (life <= 0) {
                console.log("YOU LOOSE");
                playground.removeChild(player1); 
        }
    }})    
}

