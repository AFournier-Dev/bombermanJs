const player1 = document.getElementById("player1");
const playground = document.getElementById("playground");
const bot = document.getElementById("bot");

document.addEventListener('keydown', function (e) {
    
    let top = parseInt(window.getComputedStyle(player1).getPropertyValue('top'));
    let left = parseInt(window.getComputedStyle(player1).getPropertyValue('left'));


    switch (e.key) {
        case 'ArrowUp':
            if (top > 25) {
                top -= 25;
                player1.style.top = top + 'px';
            }
            break;
        case 'ArrowDown':
            if (top < 775) {
                top += 25;
                player1.style.top = top + 'px';
            }
            break;
        case 'ArrowLeft':
            if (left > 25) {
                left -= 25;
                player1.style.left = left + 'px';
            }
            break;
        case 'ArrowRight':
            if (left < 1375) {
                left += 25;
                player1.style.left = left + 'px';
            }
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

                playground.removeChild(bomb);
            }, 3000);
        default:
            break;
    }


});

// generer le mouvement aléatoire de mon bot1
setInterval(() => {
    let top = parseInt(window.getComputedStyle(bot).getPropertyValue('top'));
    let left = parseInt(window.getComputedStyle(bot).getPropertyValue('left'));
    laDirection = Math.ceil(Math.random() * 4);
    
    switch (laDirection) {
        case 1:
            if (top > 25) {
                top -= 25;
                bot.style.top = top + 'px';
               
            }
            else if (left < 1325){
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
            else if (left < 1325){
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
            else if (left < 1325){
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
}, 500);


   