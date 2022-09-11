
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

// Buttons Selectors
const saveButton = document.querySelector(".save");
const cancelButton = document.querySelector(".cancel");
const startButton = document.querySelector(".start");
const addWordButton = document.querySelector(".add-word");
const newGameButton = document.querySelector(".newgame");
const quitButton = document.querySelector(".quit");

//img selector
const firstTry = document.querySelector(".onetry");
const secondTry = document.querySelector(".twotry");
const thirdTry = document.querySelector(".threetry");
const fourthTry = document.querySelector(".fourtry");
const fiveTry = document.querySelector(".fivetry");
const loser = document.querySelector(".loser");

// Anime Array
let random = '';
let wrongLettersArray = [];
const animelist = [
    "wotakoi" , "horimiya" , "Kaguyasama" , "fruits basket" , "kamisama kiss", "mierukochan" ,"sakura cardcaptor", "toilet bound hanakokun" , "haikyu", "mob psycho", "one piece" , "attack on titan" , "demon slayer" , "nana", "inuyasha", "bleach" , "fullmetal alchemist", "given" , "jujutsu kaisen" ];

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
    erasedAnime()
    gameScreenShow()
    let indexRandom = Math.floor(Math.random() * animelist.length);
    random= animelist[indexRandom].toUpperCase();
    secretAnime();
    chances = 0;
    hangman();
}

function showLetters(event){
    let char = document.querySelectorAll(".char");
    if (event.keyCode < 65 || event.keyCode > 90){
        return
    }
    if (random.includes(event.key.toUpperCase())){
        for(let n = 0 ; n < char.length ; n ++){
            if(char[n].innerHTML == event.key.toUpperCase()){
                char[n].style.visibility = "";
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



// Requisitos:
// - Debe funcionar solo con letras mayúsculas;
// - No deben ser utilizadas letras con acentos ni caracteres especiales;
// - Al completar o dibujo de la horca, debe ser mostrado un mensaje "Fin del juego" en la pantalla;
// - Si se completa la palabra correcta antes de que se acaben los intentos, debe ser mostrado un mensaje de "Ganaste, Felicidades!" en la pantalla.
// - La página debe tener los guiones indicando cada letra da palabra, separados por un espacio;
// - No debe ser posible escribir números dentro del juego.
// - Las letras equivocadas deben aparecer en la pantalla, pero no pueden aparecer de forma repetida;
// - Las letras correctas deben aparecer en la pantalla encima de los guiones, en la posición correcta em relación a la palabra.

// Extras:
// - La página debe tener un campo para inserción de texto con la finalidad de adicionar nuevas palabras al juego, e un botón "Agregar palabra".

// Tenemos un periodo de tiempo de cuatro semanas para desarrollar el proyecto y vamos a trabajar con el sistema ágil de desarrollo, utilizando el Trello de la siguiente forma:

// La columna Listos para iniciar presenta las tarjetas con elementos que aun no fueron desarrollados.
// En la columna En Desarrollo estarán los elementos que estés desarrollando en el momento. Al iniciar una tarea, podrás mover la tarjeta que contiene dicha tarea para esta columna.
// En la columna Pausado estarán los elementos que comenzaste a desarrollar, pero necesitaste parar por algún motivo.
// Por fin, en la columna Concluido estarán los elementos ya concluidos.
