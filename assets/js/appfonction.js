const player1 = document.getElementById("player1");
const playground = document.getElementById("playground");
const bot = document.getElementById("bot");


let life = 3;

// compteur de vie : objet tableau avec un index vie et un chiffre

// compteur de score : objet dans le tableau score

// MULTIPLAYER

// TABLEAU DES COORDONNEES DES PLAYER ET DES BOTS ??????????????????????????????????????????????????

function deplacement(element, whatMove) {
    let left = getComputedStyle(element, "left");
    let top = getComputedStyle(element, "top");
/*
    let top = parseInt(window.getComputedStyle(element).getPropertyValue('top'));
    let left = parseInt(window.getComputedStyle(element).getPropertyValue('left'));
*/

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
}

/*
function goUP (top) {
    top -=25;
    return style.top = top + 'px';
}
function goDOWN (top) {
    top += 25;
    return style.top = top + 'px';
}
function goLEFT (left) {
    left -= 25;
    return style.left = left + 'px';
}
function goRIGHT (left) {
    left += 25;
    return style.left = left + 'px';
}

function deplacement (goUP, goDOWN, goLEFT, goRIGHT) {
    return (style.top, style.left);
}
*/
// COLISION PLAYER VS BOT COLISION PLAYER VS BOT COLISION PLAYER VS BOT COLISION PLAYER VS BOT COLISION PLAYER VS BOT COLISION PLAYER VS BOT 


/*
function touche(top, left) {
    if (parseInt(window.getComputedStyle(player1).getPropertyValue('top')) === parseInt(window.getComputedStyle(bot).getPropertyValue('top')) && parseInt(window.getComputedStyle(player1).getPropertyValue('left')) === parseInt(window.getComputedStyle(bot).getPropertyValue('left'))){
        console.log("joueurtoucher");
        
        
    }
}
*/


function colision(topBomb, leftBomb) {
    if ((parseInt(window.getComputedStyle(player1).getPropertyValue('top')) <= topBomb + 37.5 && parseInt(window.getComputedStyle(player1).getPropertyValue('top')) >= topBomb - 37.5) && (parseInt(window.getComputedStyle(player1).getPropertyValue('left')) <= leftBomb + 37.5 && parseInt(window.getComputedStyle(player1).getPropertyValue('left')) >= leftBomb - 37.5)) {
        console.log("joueurtoucher");
        life = life - 1;
        console.log(life);
        if (life <= 0) {
            console.log("YOU LOOSE")
        }
    }
    if ((parseInt(window.getComputedStyle(bot).getPropertyValue('top')) <= topBomb + 37.5 && parseInt(window.getComputedStyle(bot).getPropertyValue('top')) >= topBomb - 37.5) && (parseInt(window.getComputedStyle(bot).getPropertyValue('left')) <= leftBomb + 37.5 && parseInt(window.getComputedStyle(bot).getPropertyValue('left')) >= leftBomb - 37.5)) {
        console.log("bottouch");
        // NE PAS OUBLIER le removeChild
        playground.removeChild(bot);
    }
}




document.addEventListener('keydown', function (e) {

   // let top = parseInt(window.getComputedStyle(player1).getPropertyValue('top'));
   // let left = parseInt(window.getComputedStyle(player1).getPropertyValue('left'));

   

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

            /*
        case ' ':
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
            bomb.style.backgroundColor = '#00d2d3';
            bomb.style.borderRadius = '50%';



            setTimeout(() => {
                let parent = document.getElementById(playground);
                let enfant = document.getElementById(bomb);
                colision(top, left);

                // appel de fonction regarde tableau d ennemie
                playground.removeChild(bomb);
            }, 3000);

            console.log("X Y de BOMB");
            console.log(left);
            console.log(top);
*/
        default:
            break;
    }


});

// generer le mouvement aléatoire de mon bot1
// Creer une fonction de génération de mouvement aléatoire pour gérer le multi bots.
setInterval(() => {
    let top = parseInt(window.getComputedStyle(bot).getPropertyValue('top'));
    let left = parseInt(window.getComputedStyle(bot).getPropertyValue('left'));
    laDirection = Math.ceil(Math.random() * 4);
    console.log("X Y de BOT");
    console.log(left);
    console.log(top);
    switch (laDirection) {
        case 1:
            if (top > 25) {
                top -= 25;
                bot.style.top = top + 'px';

            }
            else if (left < 1325) {
                left += 25;
                bot.style.left = left + 'px';

            }
            else if (top < 725) {
                top += 25;
                bot.style.top = top + 'px';

            }
            else if (left > 25) {
                left -= 25;
                bot.style.left = left + 'px';

            }
            break;

        case 2:
            if (left < 1325) {
                left += 25;
                bot.style.left = left + 'px';

            }
            else if (top < 725) {
                top += 25;
                bot.style.top = top + 'px';

            }
            else if (left > 25) {
                left -= 25;
                bot.style.left = left + 'px';

            }
            else if (top > 25) {
                top -= 25;
                bot.style.top = top + 'px';

            }

            break;
        case 3:
            if (top < 725) {
                top += 25;
                bot.style.top = top + 'px';

            }
            else if (left > 25) {
                left -= 25;
                bot.style.left = left + 'px';

            }
            else if (top > 25) {
                top -= 25;
                bot.style.top = top + 'px';

            }
            else if (left < 1325) {
                left += 25;
                bot.style.left = left + 'px';

            }

            break;
        case 4:
            if (left > 25) {
                left -= 25;
                bot.style.left = left + 'px';

            }
            else if (top > 25) {
                top -= 25;
                bot.style.top = top + 'px';

            }
            else if (left < 1325) {
                left += 25;
                bot.style.left = left + 'px';

            }
            else if (top < 725) {
                top += 25;
                bot.style.top = top + 'px';

            }

            break;
        default:
            break;

    }
}, 250);








