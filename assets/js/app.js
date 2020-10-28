const player1 = document.getElementById("player1");
const playground = document.getElementById("playground");
const bot = document.getElementById("bot");

// const bot2 = document.getElementById("bot2");

let life = 3;

//fonction pour récupérer plus rapidement les valeurs calculées des propriétés CSS des éléments
//   !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function valueOfStyle(element, property) {
    return parseInt(window.getComputedStyle(element).getPropertyValue(property));
  }
  


// function de deplacement

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
}
/*
function touche() {
    positionLeftBot = valueOfStyle(bot, "left");
    positionLeftPlayer1 = valueOfStyle(player1, "left");
    positionTopBot = valueOfStyle(bot, "left");
    positionTopPlayer1 = valueOfStyle(player1, "left");
    if (positionLeftBot === positionLeftPlayer1 && positionTopBot === positionTopPlayer1){
        return "toucher couler in the player face"
    }

    touche(console.log("toucher couler in the player face"))

*/





    /*
valueOfStyle(element, "left");
    let top = valueOfStyle(element, "top");
    */

/*
function touche(topBot, leftBot) {
    if (parseInt(window.getComputedStyle(player1).getPropertyValue('top')) === parseInt(window.getComputedStyle(bot).getPropertyValue('top')) && parseInt(window.getComputedStyle(player1).getPropertyValue('left')) === parseInt(window.getComputedStyle(bot).getPropertyValue('left'))){
        console.log("joueurtoucher");
        
        
    }
}
*/

//  A refactore avec fonction valueOfStyle
function colision(topBomb, leftBomb){
    if((parseInt(window.getComputedStyle(player1).getPropertyValue('top')) <= topBomb + 37.5 && parseInt(window.getComputedStyle(player1).getPropertyValue('top')) >= topBomb - 37.5) && (parseInt(window.getComputedStyle(player1).getPropertyValue('left')) <= leftBomb + 37.5 && parseInt(window.getComputedStyle(player1).getPropertyValue('left')) >= leftBomb - 37.5)){
        console.log("joueurtoucher");
        life = life - 1;
        console.log(life);  
        if (life <= 0){
            console.log("YOU LOOSE")
        }
    }
    if((parseInt(window.getComputedStyle(bot).getPropertyValue('top')) <= topBomb + 37.5 && parseInt(window.getComputedStyle(bot).getPropertyValue('top')) >= topBomb - 37.5) && (parseInt(window.getComputedStyle(bot).getPropertyValue('left')) <= leftBomb + 37.5 && parseInt(window.getComputedStyle(bot).getPropertyValue('left')) >= leftBomb - 37.5)){
        console.log("bottouch");
       //////////////////////////////////////////////////////////////////////
        playground.removeChild(bot);
    }
}

console.log(bot);
//console.log(bot2);
console.log(player1);
console.log(playground);


document.addEventListener('keydown', function (e) {
    
    let top = parseInt(window.getComputedStyle(player1).getPropertyValue('top'));
    let left = parseInt(window.getComputedStyle(player1).getPropertyValue('left'));

console.log(top);
console.log(left);

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
           
        default:
            break;
    }


});

// generer le mouvement aléatoire de mon bot1
setInterval(() => {
    let top = parseInt(window.getComputedStyle(bot).getPropertyValue('top'));
    let left = parseInt(window.getComputedStyle(bot).getPropertyValue('left'));
    laDirection = Math.ceil(Math.random() * 4);
            console.log("X Y de BOT");
            console.log(left); 
            console.log(top);
    switch (laDirection) {
        case 1:
            deplacement(bot, "up");           
            break;
        case 2:
            deplacement(bot, "left");
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
}, 500);


// generer le mouvement aléatoire de mon bot2
/*
setInterval(() => {
    let top = parseInt(window.getComputedStyle(bot2).getPropertyValue('top'));
    let left = parseInt(window.getComputedStyle(bot2).getPropertyValue('left'));
    laDirection = Math.ceil(Math.random() * 4);
            console.log("X Y de BOT2");
            console.log(left); 
            console.log(top);
    switch (laDirection) {
        case 1:
            if (top > 25) {
                top -= 25;
                bot2.style.top = top + 'px';
               
            }
            else if (left < 1325){
                left += 25;
                bot2.style.left = left + 'px';
                
            }
            else if (top < 725) {
                top += 25;
                bot2.style.top = top + 'px';
               
            }
            else if (left > 25) {
                left -= 25;
                bot2.style.left = left + 'px';
               
            }
            break;

        case 2:
            if (left < 1325) {
                left += 25;
                bot2.style.left = left + 'px';
               
            }
            else if (top < 725) {
                top += 25;
                bot2.style.top = top + 'px';
               
            }
            else if (left > 25) {
                left -= 25;
                bot2.style.left = left + 'px';
               
            }
            else if (top > 25) {
                top -= 25;
                bot2.style.top = top + 'px';
               
            }

            break;
        case 3:
            if (top < 725) {
                top += 25;
                bot2.style.top = top + 'px';
               
            }
            else if (left > 25) {
                left -= 25;
                bot2.style.left = left + 'px';
               
            }
            else if (top > 25) {
                top -= 25;
                bot2.style.top = top + 'px';
               
            }
            else if (left < 1325){
                left += 25;
                bot2.style.left = left + 'px';
               
            }

            break;
        case 4:
            if (left > 25) {
                left -= 25;
                bot2.style.left = left + 'px';
              
            }
            else if (top > 25) {
                top -= 25;
                bot2.style.top = top + 'px';
             
            }
            else if (left < 1325){
                left += 25;
                bot2.style.left = left + 'px';
               
            }
            else if (top < 725) {
                top += 25;
                bot2.style.top = top + 'px';
             
            }

            break;
        default:
            break;
            
    }
}, 250);

*/

