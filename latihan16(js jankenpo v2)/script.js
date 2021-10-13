const enemy = document.querySelector('.enemy .choices img');
const player = document.querySelector('.player .choices');
const enemyScoreboard = document.querySelector('.enemy .scoreboard p');
const playerScoreboard = document.querySelector('.player .scoreboard p');
const resultText = document.querySelector('.resultText p');

let playerScore = 0;
let enemyScore = 0;
let gambarPilihanPlayer;
let pilihanPlayer;
let pilihanEnemy;
let hasil;
let clicked = false;

// Menentukan pilihan player /////////////////
player.addEventListener('click',function(e){
    if(gambarPilihanPlayer) gambarPilihanPlayer.classList.remove('selected');

    gambarPilihanPlayer = e.target;
    pilihanPlayer = gambarPilihanPlayer.getAttribute('alt');
    
    if (pilihanPlayer && !clicked) {
        // console.log('player pilih : ' + pilihanPlayer);
        gambarPilihanPlayer.classList.add('selected');
        clicked = true;
        gameInterface();
    }
})

// Menentukan pilihan komputer ///////////////
function enemyChoicesGenerator() {
    let randomNum = Math.random();
    if (randomNum < 0.33) pilihanEnemy = 'batu';
    else if (randomNum > 0.33 && randomNum < 0.67) pilihanEnemy = 'gunting';
    else pilihanEnemy='kertas';

    // console.log('komputer pilih : ' + pilihanEnemy);
}

// Janken Logic ///////////////////
function jankenLogic() {
    if (pilihanPlayer == pilihanEnemy) hasil = 'SERI!';
    else if (pilihanPlayer == 'batu') hasil = (pilihanEnemy == 'gunting') ? 'KAMU MENANG!' : 'KAMU KALAH!';
    else if (pilihanPlayer == 'kertas') hasil = (pilihanEnemy == 'batu') ? 'KAMU MENANG!' : 'KAMU KALAH!';
    else if (pilihanPlayer == 'gunting') hasil = (pilihanEnemy == 'kertas') ? 'KAMU MENANG!' : 'KAMU KALAH!';

    if(hasil == 'KAMU MENANG!') {
        playerScore++;
        playerScoreboard.innerHTML = ' YOUR SCORE : ' + playerScore;
    }
    else if(hasil == 'KAMU KALAH!') {
        enemyScore++;
        enemyScoreboard.innerHTML = ' ENEMY SCORE : ' + enemyScore;
    }
    // console.log(hasil); 
}

// Rubah interface dalam game ///////
function gameInterface() {
    const enemyRandomImage = setInterval(function(){
        enemyChoicesGenerator();
        enemy.setAttribute('src','img/'+pilihanEnemy+'.png');
    },50);

    setTimeout(function(){
        clearTimeout(enemyRandomImage);
        jankenLogic();
        resultText.innerHTML = hasil;
        clicked = false;
    },1000)
}
