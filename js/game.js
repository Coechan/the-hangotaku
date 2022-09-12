
// Screen Selector
const mainScreen = document.querySelector(".main-screen");
const addScreen = document.querySelector(".add-screen");
const gameScreen = document.querySelector(".game-screen");

// Input Selector
const text = document.getElementById("text");

//Random Word Selector
const animeWord = document.querySelector(".anime");
const randomAnime = document.querySelector(".random-anime");
const wrongLetters = document.querySelector(".wrong-letters");
let chances = 0;
let correct = 0;
let gameEnded = false;

// Buttons Selectors
const saveButton = document.querySelector(".save");
const cancelButton = document.querySelector(".cancel");
const startButton = document.querySelector(".start");
const addWordButton = document.querySelector(".add-word");
const newGameButton = document.querySelector(".newgame");
const quitButton = document.querySelector(".quit");
const charButtons = document.querySelectorAll(".char-button")

//img selector
const firstTry = document.querySelector(".onetry");
const secondTry = document.querySelector(".twotry");
const thirdTry = document.querySelector(".threetry");
const fourthTry = document.querySelector(".fourtry");
const fiveTry = document.querySelector(".fivetry");
const loser = document.querySelector(".loser");
const winner = document.querySelector(".winner");

// Anime Array
let random = '';
let wrongLettersArray = [];
const animelist = [
    "wotakoi" , "horimiya" , "Kaguyasama" , "fruits basket" , "kamisama kiss", "mierukochan" ,"sakura cardcaptor", "toilet bound hanakokun" , "haikyu", "mob psycho", "one piece" , "attack on titan" , "demon slayer" , "nana", "inuyasha", "bleach" , "fullmetal alchemist", "given" , "jujutsu kaisen" , "Seaside Stranger" , "Sasaki and Miyano", "spy x family", "chainsaw man", "naruto", "hunterxhunter" , "orange" , "my neighbor totoro" , "ponyo on the cliff by the sea", "princes mononoke", "pokemon", "kikis delivery service", "komi cant communicate", "ao haru ride" , "toradora", "sword art online" , "spirited away", "ranking of king" , "your name" , "weathering with you" ];
// Functions
function addAnime(event){
    let newAnime = text.value;
    if (animelist.includes(newAnime)){
        text.value = "";
        gameScreenShow();
        showAnime();
    } else {
        animelist.push(newAnime);
        text.value = "";
        gameScreenShow();
        showAnime();
    }
}

function showAnime(event){
    gameEnded = false;
    erasedAnime()
    gameScreenShow()
    let indexRandom = Math.floor(Math.random() * animelist.length);
    random= animelist[indexRandom].toUpperCase();
    secretAnime();
    chances = 0;
    correct = 0;
    hangman();
}

function showLetters(event){
    if (gameEnded) {
        return;
    }
    let char = document.querySelectorAll(".char");
    if (event.keyCode < 65 || event.keyCode > 90){
        return
    }
    if (random.includes(event.key.toUpperCase())){
        for(let n = 0 ; n < char.length ; n ++){
            if(char[n].innerHTML == event.key.toUpperCase()){
                if (char[n].style.visibility === "hidden") {
                    char[n].style.visibility = "";
                    correct += 1;
                }
            }}
    } else {
        if (wrongLettersArray.includes(event.key)) {
            return;
        } else {
            let wrongLetters = document.querySelector(".wrong-letters");
            let wrongList = document.createElement("div");
            wrongLetters.appendChild(wrongList);
            wrongList.className = "wrong-list";
            wrongList.innerHTML = event.key.toUpperCase();
            wrongLettersArray.push(event.key);
            chances += 1;
            hangman();
        }
    }
    if (chances == 5){
        for(let g = 0 ; g < char.length ; g ++){
            char[g].style.visibility = "";}
    }
    if (random.replaceAll(" ", "").length == correct){
        firstTry.style.display = "none";
        secondTry.style.display = "none";
        thirdTry.style.display = "none"; 
        fourthTry.style.display = "none";
        fiveTry.style.display = "none"; 
        loser.style.display = "none"; 
        winner.style.display = "flex";
        gameEnded = true;

    }
}

function secretAnime(){
    for (let j=0 ; j < random.length ; j ++){
        let div = document.createElement("div");
        let p = document.createElement("p");
        div.className = "anime";
        p.className = "char";
        randomAnime.appendChild(div);
        div.appendChild(p);
        p.innerHTML = random[j];
        p.style.visibility = "hidden";
    }
}

function erasedAnime(){
    let wrongLettersList = document.querySelectorAll(".wrong-list");
    for (let j=0 ; j < random.length ; j ++){
        const div = document.querySelector(".anime");
        randomAnime.removeChild(div);
    }
    for( let c = 0 ; c < wrongLettersList.length ; c++){
        const wrongList = document.querySelector(".wrong-list");
        wrongLetters.removeChild(wrongList);
    }
}

function hangman(){
    if (chances == 0){
        firstTry.style.display = "flex";
        secondTry.style.display = "none";
        thirdTry.style.display = "none"; 
        fourthTry.style.display = "none";
        fiveTry.style.display = "none"; 
        loser.style.display = "none"; 
        winner.style.display = "none";
    }
    if (chances == 1){
        firstTry.style.display = "none";
        secondTry.style.display = "flex";
    }
    if (chances == 2){
        secondTry.style.display = "none";
        thirdTry.style.display = "flex"; 
    }
    if (chances == 3){
        thirdTry.style.display = "none"; 
        fourthTry.style.display = "flex";
    }
    if (chances == 4){
        fourthTry.style.display = "none";
        fiveTry.style.display = "flex"; 
    }
    if (chances == 5){
        fiveTry.style.display = "none"; 
        loser.style.display = "flex";
    }
}

function keyboard(event){
    if (gameEnded) {
        return;
    }

    let pressedChar = event.currentTarget.innerHTML;

    let char = document.querySelectorAll(".char");
    if (random.includes(pressedChar.toUpperCase())){
        for(let n = 0 ; n < char.length ; n ++){
            if(char[n].innerHTML == pressedChar.toUpperCase()){
                if (char[n].style.visibility === "hidden") {
                    char[n].style.visibility = "";
                    correct += 1;
                }
            }}
    } else {
        if (wrongLettersArray.includes(pressedChar)) {
            return;
        } else {
            let wrongLetters = document.querySelector(".wrong-letters");
            let wrongList = document.createElement("div");
            wrongLetters.appendChild(wrongList);
            wrongList.className = "wrong-list";
            wrongList.innerHTML = pressedChar.toUpperCase();
            wrongLettersArray.push(pressedChar);
            chances += 1;
            hangman();
        }
    }
    if (chances == 5){
        for(let g = 0 ; g < char.length ; g ++){
            char[g].style.visibility = "";}
    }
    if (random.replaceAll(" ", "").length == correct){
        firstTry.style.display = "none";
        secondTry.style.display = "none";
        thirdTry.style.display = "none"; 
        fourthTry.style.display = "none";
        fiveTry.style.display = "none"; 
        loser.style.display = "none"; 
        winner.style.display = "flex";
        gameEnded = true;
    }
}

function homeScreen(event){
    addScreen.style.display = 'none';
    gameScreen.style.display = 'none';
    mainScreen.style.display = 'flex';
}

function gameScreenShow(event){
    addScreen.style.display = 'none';
    mainScreen.style.display = 'none';
    gameScreen.style.display = 'flex';
    document.onkeydown = showLetters;
    wrongLettersArray = [];
    gameEnded = false;
}

function AddScreenShow(event){
    mainScreen.style.display = 'none';
    gameScreen.style.display = 'none';
    addScreen.style.display = 'flex';
}

//Runing Code

//1 - Inicial Screen State
homeScreen()



// Asigning Events
quitButton.onclick = homeScreen;
cancelButton.onclick = homeScreen;
startButton.onclick = showAnime;
addWordButton.onclick = AddScreenShow;
saveButton.onclick = addAnime;
newGameButton.onclick = showAnime;
charButtons.forEach( item => {
    item.onclick = keyboard;
})

