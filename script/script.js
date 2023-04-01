let block1 = document.getElementById('bl-1');
let block2 = document.getElementById('bl-2');
let block3 = document.getElementById('bl-3');
let block4 = document.getElementById('bl-4');
let block5 = document.getElementById('bl-5');
let win = document.getElementById('win');
let button = document.getElementById('btn');
let results = document.getElementById('table');
localStorage.clear();
let del_res = document.getElementById('del');
let blocks = [block1, block2, block3, block4, block5];

for (let i = 0; i < 5; i++) {    
    blocks[i].innerHTML = '<img id="cell-' + (i + 1) + '" src="./images/item05.png">';
}
button.addEventListener("click", go);
del_res.addEventListener("click", reload);
let count = 0;
let count_wins = 0;
function reload() {
    location.reload();
}
function suffix(cnt_w) {
    suff = 'th';  
    if (cnt_w % 10 == 1 && cnt_w % 100 != 11) {
        suff = 'st';
    }
    else if (cnt_w % 10 == 2 && cnt_w % 100 != 12) {
        suff = 'nd';
    } 
    else if (cnt_w % 10 == 3 && cnt_w % 100 != 13) {
        suff = 'rd';
    }
    return suff;
}
function ending(number) {
    end = 's';
    if (number == 1) {
        end = '';
    }
    return end;
}
function go() {
    let nums = [0, 0, 0, 0, 0];
    let cnt = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    let won = 0;
    count++;
    for (let i = 0; i < 5; i++) {
        nums[i] = rand();
        blocks[i].innerHTML = '<img id="cell-' + (i + 1) + '" src="./images/item0' + nums[i] + '.png">';        
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
    let max = cnt.indexOf(won) + 1;    
    if (won > 0) {
        if (won == 3) {
            win.innerHTML = 'You WON! ' + won + ' Matches!<br><span>Moves: ' + count + '</span>'; 
        }
        else if (won == 4) {
            win.innerHTML = 'You WON! Wow!!! ' + won + ' Matches!<br><span>Moves: ' + count + '</span>';  
        }
        else if (won == 5) {
            win.innerHTML = 'You WON! Oh my Gosh!!! ' + won + ' Matches!<br><span>Moves: ' + count + '</span>';   
        }             
        win.style.color = 'red'; 
        button.value = 'PLAY AGAIN';
        count_wins++;        
        for (let i = 0; i < 5; i++) {
            if (!blocks[i].innerHTML.includes('item0' + max)) {
                blocks[i].innerHTML = '<img id="cell-' + (i + 1) + '" src="./images/item0' + nums[i] + 'gr.png">';
            }
        }   
        if (count_wins == 1) {
            results.innerHTML += '<span>YOUR RESULTS ARE:</span><br>';
        }
        localStorage.setItem(count_wins, count);           
        results.innerHTML += '<span>' + count_wins + suffix(count_wins) + ' game: ' + localStorage.getItem(count_wins) + ' move' 
            + ending(localStorage.getItem(count_wins)) + ' with ' + won + ' matches</span><br>';
        count = 0;   
        if (count_wins == 1) {
            del_res.innerHTML = '<input class="just_btn" id="reload" type="button" value="  DELETE RESULTS  "> ';            
        }    
    }
    else {
        win.innerHTML = 'Try next move...<br><span>Moves: ' + count + '</span>';
        win.style.color = 'black';  
        button.value = 'NEXT MOVE';          
    }
}