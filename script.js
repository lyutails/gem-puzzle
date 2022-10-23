
const numbers = [
    {
        number: '一',
        id: 'one',
    },
    {
        number: '二',
        id: 'two',
    },
    {
        number: '三',
        id: 'three',
    },
    {
        number: '四',
        id: 'four',
    },
    {
        number: '五',
        id: 'five',
    },
    {
        number: '六',
        id: 'six',
    },
    {
        number: '七',
        id: 'seven',
    },
    {
        number: '八',
        id: 'eight',
    },
    {
        number: '九',
        id: 'nine',
    },
    {
        number: '十',
        id: 'ten',
    },
    {
        number: '十一',
        id: 'eleven',
    },
    {
        number: '十二',
        id: 'twelwe',
    },
    {
        number: '十三',
        id: 'thirteen',
    },
    {
        number: '十四',
        id: 'fourteen',
    },
    {
        number: '十五',
        id: 'fifteen',
    },
    {
        number: '十六',
        id: 'sixteen',
    },
    {
        number: '十七',
        id: 'seventeen',
    },
    {
        number: '十八',
        id: 'eighteen',
    },
    {
        number: '十九',
        id: 'nineteen',
    },
    {
        number: '二十一',
        id: 'twenty_one',
    },
    {
        number: '二十二',
        id: 'twenty_two',
    },
    {
        number: '二十三',
        id: 'twenty_three',
    },
    {
        number: '二十四',
        id: 'twenty_four',
    },
    {
        number: '二十五',
        id: 'twenty_five',
    },
]


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

let dropDownMenu = document.createElement('div');
dropDownMenu.classList.add('drag_drop_menu');
upButtonsFlex.appendChild(dropDownMenu);

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

let gameCell = document.createElement('div');
gameCell.classList.add('game_cell');
gameField.appendChild(gameCell);

// for (i = 0; i < 16; i++) {
//     game_cell++;
// };

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
buttonDark.addEventListener('click', function(e) {
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
buttonLight.addEventListener('click', function(e) {
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

