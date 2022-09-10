
// Screen Selector
const mainScreen = document.querySelector(".main-screen");
const addScreen = document.querySelector(".add-screen");
const gameScreen = document.querySelector(".game-screen");

// Input Selector
const text = document.getElementById("text");

//Random Word Selector
const animeWord = document.querySelector(".anime");
const randomAnime = document.querySelector(".random-anime");

// Buttons Selectors
const saveButton = document.querySelector(".save");
const cancelButton = document.querySelector(".cancel");
const startButton = document.querySelector(".start");
const addWordButton = document.querySelector(".add-word");
const newGameButton = document.querySelector(".newgame");
const quitButton = document.querySelector(".quit");

// canvas
const screen = document.querySelector(".canvas");
const pencil = screen.getContext("2D")

// Anime Array
let random = '';
const animelist = [
    "wotakoi" , "horimiya" , "Kaguyasama" , "fruits basket" , "kamisama kiss", "mierukochan" ,"sakuracardcaptor", "toiletboundhanakokun" , "haikyu"];

// Functions
function addAnime(event){
    let newAnime = text.value;
    if (animelist.includes(newAnime)){
        gameScreenShow();
        showAnime();
    } else {
        animelist.push(newAnime);
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
}

function secretAnime(){
    for (let j=0 ; j < random.length ; j ++){
        let div = document.createElement("div");
        randomAnime.appendChild(div);
        div.className = "anime"
        div.innerHTML = random[j];
    }
}

function erasedAnime(){
    for (let j=0 ; j < random.length ; j ++){
    const div = document.querySelector(".anime");
    randomAnime.removeChild(div);
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
