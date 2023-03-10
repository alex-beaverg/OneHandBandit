let block1 = document.getElementById('bl-1');
let block2 = document.getElementById('bl-2');
let block3 = document.getElementById('bl-3');
let block4 = document.getElementById('bl-4');
let block5 = document.getElementById('bl-5');

let win = document.getElementById('win');

let button = document.getElementById('btn');

let blocks = [block1, block2, block3, block4, block5];

for (let i = 0; i < 5; i++) {    
    blocks[i].innerHTML = '<img src="./images/item05.png">';
}

button.addEventListener("click", go);

let count = 0;

function go() {
    let nums = [0, 0, 0, 0, 0];
    let cnt = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    let won = 0;
    count++;

    for (let i = 0; i < 5; i++) {
        nums[i] = rand();
        blocks[i].innerHTML = '<img src="./images/item0' + nums[i] + '.png">';
    }
    
    function rand() {
        return Math.floor(Math.random() * 9 + 1);
    }
    
    for (let i = 0; i < 5; i++) {
        cnt[nums[i] - 1] += 1;
    }
    
    for (let i = 0; i < 9; i++) {
        if (cnt[i] > 2) {
            won = cnt[i]        
        }
    }
    
    if (won > 0) {
        win.innerHTML = 'You WON! ' + won + ' Matches!<br><span>Moves: ' + count + '</span>';
        win.style.color = 'red';
        count = 0;
        button.value = 'PLAY AGAIN';        
    }
    else {
        win.innerHTML = 'You LOSE!<br><span>Moves: ' + count + '</span>';
        win.style.color = 'black';  
        button.value = 'NEXT STEP';          
    }
}