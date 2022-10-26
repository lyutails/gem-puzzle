let winResult = [];
let steps = 0;
let gameTime = 0;
let fieldSize = 4;
let isSound = true;
let saveMatrix = [];
let isDark = false;
let newShuffle = new Audio('./refs/sound/shuffle_chimes.wav');
let chimeStep = new Audio('./refs/sound/move_150_bell_tree_loop.wav');
let isPause = false;
let isTimer = false;

let mainWrapper = document.createElement('div');
mainWrapper.classList.add('main_wrapper');
document.body.appendChild(mainWrapper);

const torii = document.createElement('div');
torii.classList.add('torii');
mainWrapper.appendChild(torii);

const dragon = document.createElement('div');
dragon.classList.add('dragon');
mainWrapper.appendChild(dragon);

let upButtonsFlex = document.createElement('div');
upButtonsFlex.classList.add('up_buttons_flex');
mainWrapper.appendChild(upButtonsFlex);

let dropDownMenu = document.createElement('ul');
dropDownMenu.classList.add('drop_down_menu', 'active');
upButtonsFlex.appendChild(dropDownMenu);

let menuItemSelected = document.createElement('li');
menuItemSelected.classList.add('menu_item');
dropDownMenu.appendChild(menuItemSelected);
let menuTextSelected = document.createTextNode('4x4');
menuItemSelected.appendChild(menuTextSelected);
dropDownMenu.style.textAlign = 'center';

let menuItemOne = document.createElement('li');
menuItemOne.classList.add('menu_item');
dropDownMenu.appendChild(menuItemOne);
let menuTextOne = document.createTextNode('3x3');
menuItemOne.appendChild(menuTextOne);
dropDownMenu.style.textAlign = 'center';

menuItemOne.addEventListener('click', function (a) {
    menuTextSelected.nodeValue = '3x3';
    printGame(3);
    if (isSound) {
        newShuffle.currentTime = 0;
        newShuffle.play();
    };
    steps = 0;
    inputMoves.innerHTML = '0';
})

let menuItemTwo = document.createElement('li');
menuItemTwo.classList.add('menu_item');
dropDownMenu.appendChild(menuItemTwo);
let menuTextTwo = document.createTextNode('4x4');
menuItemTwo.appendChild(menuTextTwo);
dropDownMenu.style.textAlign = 'center';

menuItemTwo.addEventListener('click', function (c) {
    menuTextSelected.nodeValue = '4x4';
    printGame(4);
    if (isSound) {
        newShuffle.currentTime = 0;
        newShuffle.play();
    };
    steps = 0;
    inputMoves.innerHTML = '0';
})

let menuItemThree = document.createElement('li');
menuItemThree.classList.add('menu_item');
dropDownMenu.appendChild(menuItemThree);
let menuTextThree = document.createTextNode('5x5');
menuItemThree.appendChild(menuTextThree);
dropDownMenu.style.textAlign = 'center';

menuItemThree.addEventListener('click', function (d) {
    menuTextSelected.nodeValue = '5x5';
    printGame(5);
    if (isSound) {
        newShuffle.currentTime = 0;
        newShuffle.play();
    };
    steps = 0;
    inputMoves.innerHTML = '0';
})

let menuItemFour = document.createElement('li');
menuItemFour.classList.add('menu_item');
dropDownMenu.appendChild(menuItemFour);
let menuTextFour = document.createTextNode('6x6');
menuItemFour.appendChild(menuTextFour);
dropDownMenu.style.textAlign = 'center';

menuItemFour.addEventListener('click', function (f) {
    menuTextSelected.nodeValue = '6x6';
    printGame(6);
    if (isSound) {
        newShuffle.currentTime = 0;
        newShuffle.play();
    };
    steps = 0;
    inputMoves.innerHTML = '0';
})

let menuItemFive = document.createElement('li');
menuItemFive.classList.add('menu_item');
dropDownMenu.appendChild(menuItemFive);
let menuTextFive = document.createTextNode('7x7');
menuItemFive.appendChild(menuTextFive);
dropDownMenu.style.textAlign = 'center';

menuItemFive.addEventListener('click', function (g) {
    menuTextSelected.nodeValue = '7x7';
    printGame(7);
    if (isSound) {
        newShuffle.currentTime = 0;
        newShuffle.play();
    };
    steps = 0;
    inputMoves.innerHTML = '0';
})

let menuItemSix = document.createElement('li');
menuItemSix.classList.add('menu_item');
dropDownMenu.appendChild(menuItemSix);
let menuTextEight = document.createTextNode('8x8');
menuItemSix.appendChild(menuTextEight);
dropDownMenu.style.textAlign = 'center';

menuItemSix.addEventListener('click', function (h) {
    menuTextSelected.nodeValue = '8x8';
    printGame(8);
    if (isSound) {
        newShuffle.currentTime = 0;
        newShuffle.play();
    };
    steps = 0;
    inputMoves.innerHTML = '0';
})

dropDownMenu.addEventListener('click', function (e) {
    dropDownMenu.classList.toggle('active');
});

dropDownMenu.addEventListener('mouseleave', function (b) {
    dropDownMenu.classList.add('active');
});

let buttonNew = document.createElement('div');
buttonNew.classList.add('new_button');
upButtonsFlex.appendChild(buttonNew);
let newText = document.createTextNode('New');
buttonNew.appendChild(newText);
buttonNew.style.textAlign = 'center';

let buttonPause = document.createElement('div');
buttonPause.classList.add('pause_button');
upButtonsFlex.appendChild(buttonPause);
let pauseText = document.createTextNode('Pause');
buttonPause.appendChild(pauseText);
buttonPause.style.textAlign = 'center';
buttonPause.addEventListener('click', function (y) {
    isPause = !isPause;
    if (isPause) {
        gameField.style.pointerEvents = 'none';
        pauseText.textContent = 'Play';
    }
    else if (!isPause) {
        gameField.style.pointerEvents = 'all';
        pauseText.textContent = 'Pause';
    }
})

let buttonTopResults = document.createElement('div');
buttonTopResults.classList.add('results_button');
upButtonsFlex.appendChild(buttonTopResults);
let resultsText = document.createTextNode('Results');
buttonTopResults.appendChild(resultsText);
buttonTopResults.style.textAlign = 'center';

let moves = document.createElement('div');
moves.classList.add('moves');
mainWrapper.appendChild(moves);
let movesText = document.createTextNode('Moves:');
moves.appendChild(movesText);

let time = document.createElement('div');
time.classList.add('time');
mainWrapper.appendChild(time);
let timeText = document.createTextNode('Time:');
time.appendChild(timeText);

let sakuraWrapper = document.createElement('div');
sakuraWrapper.classList.add('sakura_wrapper');
mainWrapper.appendChild(sakuraWrapper);

let sakuraBranch = document.createElement('div');
sakuraBranch.classList.add('sakura_branch');
sakuraWrapper.appendChild(sakuraBranch);

let ladyBug = document.createElement('div');
ladyBug.classList.add('lady_bug');
sakuraBranch.appendChild(ladyBug);

let gameField = document.createElement('div');
gameField.classList.add('game_field');
mainWrapper.appendChild(gameField);

printGame(4);

let bottomButtonsContainer = document.createElement('div');
bottomButtonsContainer.classList.add('bottom_buttons_container');
mainWrapper.appendChild(bottomButtonsContainer);

let rsschoolButton = document.createElement('a');
let rsschoolText = document.createTextNode('RS School');
rsschoolButton.appendChild(rsschoolText);
rsschoolButton.title = 'RS School';
rsschoolButton.href = 'https://rs.school/';
bottomButtonsContainer.appendChild(rsschoolButton);
rsschoolButton.classList.add('rsschool_button');
rsschoolButton.setAttribute('class', 'rsschool_content');
rsschoolButton.innerHTML = 'RS School';
rsschoolButton.style.textDecoration = 'none';

let symbolButtonsContainer = document.createElement('div');
symbolButtonsContainer.classList.add('symbol_buttons');
bottomButtonsContainer.appendChild(symbolButtonsContainer);

let buttonLight = document.createElement('div');
buttonLight.classList.add('button_light');
symbolButtonsContainer.appendChild(buttonLight);

let buttonDark = document.createElement('div');
buttonDark.classList.add('button_dark');
symbolButtonsContainer.appendChild(buttonDark);

buttonDark.classList.toggle('active');
buttonDark.addEventListener('click', function (j) {
    let darkTheme = document.body;
    darkTheme.classList.add('active');
    dragon.classList.add('active');
    sakuraBranch.classList.add('active');
    lanternLight.classList.add('active');
    lightLightOne.classList.add('active');
    lightLightTwo.classList.add('active');
    lightLightThree.classList.add('active');
    lightLightFour.classList.add('active');
    const colorNumbers = Array.from(gameField.childNodes);
    colorNumbers.forEach((element) => {
        element.classList.add('active');
    });
    isDark = true;
})

buttonLight.classList.toggle('active');
buttonLight.addEventListener('click', function (k) {
    let darkTheme = document.body;
    darkTheme.classList.remove('active');
    dragon.classList.remove('active');
    sakuraBranch.classList.remove('active');
    lanternLight.classList.remove('active');
    lightLightOne.classList.remove('active');
    lightLightTwo.classList.remove('active');
    lightLightThree.classList.remove('active');
    lightLightFour.classList.remove('active');
    const colorNumbers = Array.from(gameField.childNodes);
    colorNumbers.forEach((element) => {
        element.classList.remove('active');
    });
    isDark = false;
})

let buttonSound = document.createElement('div');
buttonSound.classList.add('button_sound');
symbolButtonsContainer.appendChild(buttonSound);
buttonSound.addEventListener('click', function (l) {
    buttonSound.classList.toggle('active');
    isSound = !isSound;
    chimeStep.pause();
    newShuffle.pause();
})

let lyutailsButton = document.createElement('a');
lyutailsButton.classList.add('lyutails_button');
bottomButtonsContainer.appendChild(lyutailsButton);
lyutailsButton.setAttribute('content', 'test content');
lyutailsButton.setAttribute('class', 'lyutails_content');
lyutailsButton.innerHTML = '@lyutails';
lyutailsButton.href = 'https://github.com/lyutails';
lyutailsButton.style.textDecoration = 'none';

let lanternLight = document.createElement('div');
lanternLight.classList.add('lantern_light');
mainWrapper.appendChild(lanternLight);

let lightLightOne = document.createElement('div');
lightLightOne.classList.add('moving_light_1');
lanternLight.appendChild(lightLightOne);

let lightLightTwo = document.createElement('div');
lightLightTwo.classList.add('moving_light_2');
lanternLight.appendChild(lightLightTwo);

let lightLightThree = document.createElement('div');
lightLightThree.classList.add('moving_light_3');
lanternLight.appendChild(lightLightThree);

let lightLightFour = document.createElement('div');
lightLightFour.classList.add('moving_light_4');
lanternLight.appendChild(lightLightFour);

let inputMoves = document.createElement('div');
inputMoves.classList.add('input_moves');
mainWrapper.appendChild(inputMoves);
inputMoves.style.textAlign = 'center';
inputMoves.innerHTML = '0';

let inputTime = document.createElement('div');
inputTime.classList.add('input_time');
mainWrapper.appendChild(inputTime);
inputTime.style.textAlign = 'center';
inputTime.innerHTML = '';

let secondsTime = document.createElement('div');
secondsTime.classList.add('seconds');
inputTime.appendChild(secondsTime);
secondsTime.innerHTML = '00';

let minutesTime = document.createElement('div');
minutesTime.classList.add('minutes');
inputTime.appendChild(minutesTime);
minutesTime.innerHTML = '00';

function printGame(number) {
    fieldSize = number;
    gameField.innerHTML = '';
    let fieldCells = document.createDocumentFragment();
    winResult = [...new Array(number * number).fill(0).map((item, ind) => item = ind + 1)];
    let numbers = shuffle([...new Array(number * number).fill(0).map((item, ind) => item = ind + 1)]);
    while (!ifCanBeSolved(numbers)) {
        numbers = shuffle([...new Array(number * number).fill(0).map((item, ind) => item = ind + 1)]);
    }
    saveMatrix = getMatrixFromArray(numbers, number);
    for (let i = 0; i < number * number; i++) {
        let gameCell = document.createElement('div');
        gameCell.classList.add('game_cell');
        gameCell.setAttribute('data-matrixId', `${i + 1}`);
        fieldCells.appendChild(gameCell);

        const japaneseNumbers = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二', '十三',
            '十四', '十五', '十六', '十七', '十八', '十九', '二十', '二十一', '二十二', '二十三', '二十四', '二十五',
            '二十六', '二十七', '二十八', '二十九', '三十', '三十一', '三十二', '三十三', '三十四', '三十五', '三十六'
            , '三十七', '三十八', '三十九', '四十', '四十一', '四十二', '四十三', '四十四', '四十五', '四十六'
            , '四十七', '四十八', '四十九', '五十', '五十一', '五十二', '五十三', '五十四', '五十五', '五十六'
            , '五十七', '五十八', '五十九', '六十', '六十一', '六十二', '六十三', '六十四'];

        let cellNumber = document.createElement('div');
        if (isDark) {
            gameCell.classList.add('active');
        }
        if (!isDark) {
            gameCell.classList.remove('active');
        }
        cellNumber.classList.add('cell_number');
        gameCell.style.width = `${100 / number}%`;
        gameCell.style.height = `${100 / number}%`;
        const fS = {
            3: '48px',
            4: '32px',
            5: '28px',
            6: '24px',
            7: '20px',
            8: '16px',
        }
        gameCell.style.fontSize = `${fS[number]}`;
        gameCell.appendChild(cellNumber);
        numbers.forEach(() => cellNumber.innerText = winResult[i]);

        if (winResult[i] === number * number) {
            gameCell.firstElementChild.style.fontSize = '0';
            gameCell.style.backgroundImage = "url('./refs/neko_2.png')";
            gameCell.style.backgroundSize = '100%';
        }

        // drag and drop

        // gameCell.setAttribute('id', 'cell');
        // gameCell.setAttribute('draggable', true);
        // gameCell.draggable = true;
        // gameField.ondragover = allowDrop;
        // gameCell.ondragover = allowDrop;
        // function allowDrop(event) {
        //     event.preventDefault();
        // }
        // gameField.addEventListener('dragover', (event) => {
        //     event.preventDefault();
        // })
        // gameCell.ondragstart = drag;
        // function drag(event) {
        //     event.dataTransfer.setData('id', event.target.id);
        // }
        // gameCell.ondrop = drop;
        // function drop(event) {
        //     let itemId = event.dataTransfer.getData('id');
        //     console.log(itemId);
        //     event.target.append(gameCell);
        // }
    }

    gameField.appendChild(fieldCells);
    myMatrix = getMatrixFromArray(numbers, number);
    placeCells(myMatrix, [...gameField.childNodes]);
}

gameField.addEventListener('click', (event) => {
    const gameCell = event.target.closest('.game_cell');
    if (!gameCell) return;

    const nekoManeki = fieldSize * fieldSize;
    const cellNode = +gameCell.dataset.matrixid;
    const cellCoordinates = findCoordinatesByNumber(cellNode, myMatrix);
    const emptyCellCoordinates = findCoordinatesByNumber(nekoManeki, myMatrix);
    const isValid = isValidForSwap(cellCoordinates, emptyCellCoordinates);
    if (isValid === true) {
        replaceCells(emptyCellCoordinates, cellCoordinates, myMatrix);
        placeCells(myMatrix, [...gameField.childNodes]);
        if (checkWin(myMatrix, winResult) === true) {
            alert('Hooray! You solved the puzzle in $time and $steps ^^');
        };
        if (isSound) {
            chimeStep.currentTime = 0;
            chimeStep.play();
        };

        // count moves          
        steps++;
        inputMoves.innerHTML = steps;
    }
})

// sound on new and shuffle on new

buttonNew.addEventListener('click', function (n) {
    printGame(fieldSize);
    if (isSound) {
        newShuffle.currentTime = 0;
        newShuffle.play();
    };
    // count moves 
    steps = 0;
    inputMoves.innerHTML = '0';
    
    // count time
    let seconds = 00;
    let minutes = 00;
    let Interval;
    let clear = clearInterval(Interval);
    Interval = setInterval(startTime, 1000);
    secondsTime.innerHTML = seconds;
    minutesTime.innerHTML = minutes;
    function startTime() {
        seconds++;
        minutes++;
        if(minutes <= 9) {
            minutesTime.innerHTML = paintTime(minutes);
        }
        if(minutes > 9) {
            minutesTime.innerHTML = minutes;
        }        
        if(seconds > 9) {
            secondsTime.innerHTML = paintTime(seconds);
        }
    }
})
function paintTime(countedTime) {
    return countedTime.toString().padStart(2, 0);
}

// function startTimer() {
//     if (!State.isStartTimer) {
//         State.isStartTimer = setInterval(function () {
//             timer.time += 1;
//             const secondsValue = Math.floor(timer.time) - Math.floor(timer.time / 60);
//             const minutesValue = Math.floor(timer.time / 60);
//             printTime(secondsValue, minutesValue);
//         }, 1000);
//     }
// }
// function stopTimer() {
//     clearInterval(State.isStartTimer);
//     State.isStartTimer = null;
// }

function placeCells(matrix, cells) {
    const moveStep = 100;
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            const value = matrix[y][x];
            const cell = cells[value - 1];
            cell.style.transform = `translate3D(${x * moveStep}%, ${y * moveStep}%, 0)`;
            //cell.style.transition = 'all 2s';
        }
    }
}

function shuffle(numbers) {
    for (let i = numbers.length - 1; i > 0; i--) {
        let randomNumber = Math.floor(Math.random() * (i + 1));
        let currentnumber = numbers[i];
        numbers[i] = numbers[randomNumber];
        numbers[randomNumber] = currentnumber;
    }
    return numbers;
};

function ifCanBeSolved(numbers) {
    let count = 0;
    const arrayWithoutLast = numbers.filter((element) => element !== numbers.length);
    for (let i = 0; i < arrayWithoutLast.length; i++) {
        arrayWithoutLast.forEach((element, index) => {
            if (element < arrayWithoutLast[i] && index > i) {
                count++;
            }
        });
    }
    const matrix = getMatrixFromArray(numbers, Math.sqrt(numbers.length));
    const nekoManeki =
        matrix.indexOf(
            matrix.filter((element) => element.includes(numbers.length))[0]
        ) + 1;
    if (numbers.length % 2 === 1) {
        return count % 2 === 0;
    } else {
        count += nekoManeki;
        return count % 2 === 0;
    }
};

function getMatrixFromArray(numbers, currentFrame) {
    let matrix = [];
    for (let i = 0; i < currentFrame; i++) {
        matrix.push([]);
    }
    let y = 0;
    let x = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (x >= currentFrame) {
            y++;
            x = 0;
        }
        matrix[y][x] = numbers[i];
        x++;
    }
    return matrix;
}

function findCoordinatesByNumber(number, matrix) {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] === number) {
                return { x, y };
            }
        }
    }
    return null;
}

function isValidForSwap(coords1, coords2) {
    const diffX = Math.abs(coords1.x - coords2.x);
    const diffY = Math.abs(coords1.y - coords2.y);

    return (diffX === 1 || diffY === 1) &&
        (coords1.x === coords2.x || coords1.y === coords2.y);
}

function replaceCells(coords1, coords2, matrix) {
    const currentPosition = matrix[coords1.y][coords1.x];
    matrix[coords1.y][coords1.x] = matrix[coords2.y][coords2.x];
    matrix[coords2.y][coords2.x] = currentPosition;
}

function checkWin(matrix, winArray) {
    return matrix.flat().join('') === winArray.join('');
}
