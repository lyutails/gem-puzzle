
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
upButtonsFlex.classList.add('up_button_flex');
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



let buttonLight = document.createElement('button_light');
let buttonDark = document.createElement('button_dark');
let buttonSound = document.createElement('button_sound');


buttonLight.classList.add('light_button');
buttonDark.classList.add('dark_button');

