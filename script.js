
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
let menuTextSelected = document.createTextNode('3x3');
menuItemSelected.appendChild(menuTextSelected);
dropDownMenu.style.textAlign = 'center';

let menuItemOne = document.createElement('li');
menuItemOne.classList.add('menu_item');
dropDownMenu.appendChild(menuItemOne);
let menuTextOne = document.createTextNode('3x3');
menuItemOne.appendChild(menuTextOne);
dropDownMenu.style.textAlign = 'center';

menuItemOne.addEventListener('click', function(a) {
    menuTextSelected.nodeValue = '3x3';
})

let menuItemTwo = document.createElement('li');
menuItemTwo.classList.add('menu_item');
dropDownMenu.appendChild(menuItemTwo);
let menuTextTwo = document.createTextNode('4x4');
menuItemTwo.appendChild(menuTextTwo);
dropDownMenu.style.textAlign = 'center';

menuItemTwo.addEventListener('click', function(c) {
    menuTextSelected.nodeValue = '4x4';
})

let menuItemThree = document.createElement('li');
menuItemThree.classList.add('menu_item');
dropDownMenu.appendChild(menuItemThree);
let menuTextThree = document.createTextNode('5x5');
menuItemThree.appendChild(menuTextThree);
dropDownMenu.style.textAlign = 'center';

menuItemThree.addEventListener('click', function(d) {
    menuTextSelected.nodeValue = '5x5';
})

let menuItemFour = document.createElement('li');
menuItemFour.classList.add('menu_item');
dropDownMenu.appendChild(menuItemFour);
let menuTextFour = document.createTextNode('6x6');
menuItemFour.appendChild(menuTextFour);
dropDownMenu.style.textAlign = 'center';

menuItemFour.addEventListener('click', function(f) {
    menuTextSelected.nodeValue = '6x6';
})

let menuItemFive = document.createElement('li');
menuItemFive.classList.add('menu_item');
dropDownMenu.appendChild(menuItemFive);
let menuTextFive = document.createTextNode('7x7');
menuItemFive.appendChild(menuTextFive);
dropDownMenu.style.textAlign = 'center';

menuItemFive.addEventListener('click', function(g) {
    menuTextSelected.nodeValue = '7x7';
})

let menuItemSix = document.createElement('li');
menuItemSix.classList.add('menu_item');
dropDownMenu.appendChild(menuItemSix);
let menuTextEight = document.createTextNode('8x8');
menuItemSix.appendChild(menuTextEight);
dropDownMenu.style.textAlign = 'center';

menuItemSix.addEventListener('click', function(h) {
    menuTextSelected.nodeValue = '8x8';
})

dropDownMenu.addEventListener('click', function(e) {
    dropDownMenu.classList.toggle('active');
});

dropDownMenu.addEventListener('mouseleave', function(b) {
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

let fieldCells = document.createDocumentFragment();
for(let i = 0; i < 16; i++) {
    let gameCell = document.createElement('div');
    gameCell.classList.add('game_cell');
    fieldCells.appendChild(gameCell);

    const numbers = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二', '十三',
    '十四', '十五', '十六', '十七', '十八', '十九', '二十', '二十一', '二十二', '二十三', '二十四', '二十五',
    '二十六', '二十七', '二十八', '二十九', '三十', '三十一', '三十二', '三十三', '三十四', '三十五', '三十六'
    , '三十七', '三十八', '三十九', '四十', '四十一', '四十二', '四十三', '四十四', '四十五', '四十六'
    , '四十七', '四十八', '四十九', '五十', '五十一', '五十二', '五十三', '五十四', '五十五', '五十六'
    , '五十七', '五十八', '五十九', '六十', '六十一', '六十二', '六十三', '六十四'];

    let cellNumber = document.createElement('div');    
    cellNumber.classList.add('cell_number');
    gameCell.appendChild(cellNumber);
    numbers.forEach(() => cellNumber.innerText = numbers[i]);

    buttonNew.addEventListener('click', (q) => {                   
        shuffle(numbers).map(el => gameCell);               
    })

    function shuffle(numbers) {
        let currentIndex = numbers.length, randomIndex;
      
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [numbers[currentIndex], numbers[randomIndex]] = [
            numbers[randomIndex], numbers[currentIndex]];
        }
      
        return array.slice(0, 6);
      }

    //   function init() {
    //     sliderCards.style.transition='none';
    //     sliderCards.innerHTML = '';   
    //     const slides1 = shuffle(dataAnimals).map(el => generateCard(el));
    //     const slides2 = shuffle(dataAnimals).map(el => generateCard(el));
    //     const slides3 = shuffle(dataAnimals).map(el => generateCard(el));
    //     sliderCards.append(...slides1, ...slides2, ...slides3);  
    //     sliderCards.style.transition=''; 
    //   }
      
    //   init ();
}
gameField.appendChild(fieldCells);

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
buttonDark.addEventListener('click', function(j) {
    let darkTheme = document.body;
    darkTheme.classList.add('active');
    dragon.classList.add('active');
    sakuraBranch.classList.add('active');
    lanternLight.classList.add('active');
    lightLightOne.classList.add('active');
    lightLightTwo.classList.add('active');
    lightLightThree.classList.add('active');
    lightLightFour.classList.add('active');    
})

buttonLight.classList.toggle('active');
buttonLight.addEventListener('click', function(k) {
    let darkTheme = document.body;
    darkTheme.classList.remove('active');
    dragon.classList.remove('active');
    sakuraBranch.classList.remove('active');
    lanternLight.classList.remove('active');
    lightLightOne.classList.remove('active');
    lightLightTwo.classList.remove('active');
    lightLightThree.classList.remove('active');
    lightLightFour.classList.remove('active');    
})

let buttonSound = document.createElement('div');
buttonSound.classList.add('button_sound');
symbolButtonsContainer.appendChild(buttonSound);
buttonSound.addEventListener('click', function(l) {
    buttonSound.classList.toggle('active');
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

