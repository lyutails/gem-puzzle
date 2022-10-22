
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

let buttonNew = document.createElement('div');
buttonNew.classList.add('new_button');
upButtonsFlex.appendChild(buttonNew);

let buttonPause = document.createElement('div');
buttonPause.classList.add('pause_button');
upButtonsFlex.appendChild(buttonPause);

let buttonTopResults = document.createElement('div');
buttonTopResults.classList.add('results_button');
upButtonsFlex.appendChild(buttonTopResults);

let dragDropMenu = document.createElement('div');
dragDropMenu.classList.add('drag_drop_menu');
upButtonsFlex.appendChild(dragDropMenu);

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

let gameLine = document.createElement('div');
gameLine.classList.add('game_line');
gameField.appendChild(gameLine);

let gameCell = document.createElement('div');
gameCell.classList.add('game_cell');
gameField.appendChild(gameCell);

Array(3).fill('game_line');

let bottomButtonsContainer = document.createElement('div');
bottomButtonsContainer.classList.add('bottom_buttons_container');
mainWrapper.appendChild(bottomButtonsContainer);

let rsschoolButton = document.createElement('div');
rsschoolButton.classList.add('rsschool_button');
bottomButtonsContainer.appendChild(rsschoolButton);
rsschoolButton.setAttribute('content', 'test content');
rsschoolButton.setAttribute('class', 'rsschool_content');
rsschoolButton.innerHTML = 'RS School';

let symbolButtonsContainer = document.createElement('div');
symbolButtonsContainer.classList.add('symbol_buttons');
bottomButtonsContainer.appendChild(symbolButtonsContainer);

let buttonLight = document.createElement('div');
buttonLight.classList.add('button_light');
symbolButtonsContainer.appendChild(buttonLight);

let buttonDark = document.createElement('div');
buttonDark.classList.add('button_dark');
symbolButtonsContainer.appendChild(buttonDark);

let buttonSound = document.createElement('div');
buttonSound.classList.add('button_sound');
symbolButtonsContainer.appendChild(buttonSound);

let lyutailsButton = document.createElement('div');
lyutailsButton.classList.add('lyutails_button');
bottomButtonsContainer.appendChild(lyutailsButton);
lyutailsButton.setAttribute('content', 'test content');
lyutailsButton.setAttribute('class', 'lyutails_content');
lyutailsButton.innerHTML = '@lyutails';

let lanternLightTheme = document.createElement('div');
lanternLightTheme.classList.add('lantern_light');
mainWrapper.appendChild(lanternLightTheme);

let lanternDarkTheme = document.createElement('div');
lanternDarkTheme.classList.add('lantern_dark');
mainWrapper.appendChild(lanternDarkTheme);