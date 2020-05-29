let randomNumber1 = Math.floor(Math.random() * 6) + 1; // dice 1-6
let randomNumber2 = Math.floor(Math.random() * 6) + 1; // dice 1-6

let dice1 = document.querySelector('.img1');
dice1.getAttributeNode('src').value = `./images/dice${randomNumber1}.png`;
// dice1.setAttribute('src', `./images/dice${randomNumber1}.png`)

let dice2 = document.querySelector('.img2');
dice2.getAttributeNode('src').value = `./images/dice${randomNumber2}.png`;

let heading = document.querySelector('h1');
(randomNumber1 > randomNumber2) ? heading.innerHTML = '🚩Player 1 Wins!' 
: (randomNumber2 > randomNumber1) ? heading.innerHTML = 'Player 2 Wins! 🚩' 
: heading.innerHTML = 'Draw!';