function init() {
    do {
        randomlySort();
    } while (taken1D == [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
    addEventListeners();
    buttons();
}

function addEventListeners() {
    for (let i = 0; i < fichas.length; i++) {
        fichas[i].addEventListener("click", function () {
            moverFicha(i + 1);
        });
    }
}

function moverFicha(num) {
    const pos = taken1D.indexOf(num);
    const pos0 = taken1D.indexOf(16);
    if (pos - 4 === pos0 || pos + 4 === pos0 || pos - 1 === pos0 || pos + 1 === pos0) {
        taken1D[pos] = 16;
        taken1D[pos0] = num;
        updateFichas();
        checkWin();
    }
}

function checkWin() {
    let winOrder = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    let win = document.getElementById("win");
    let newGame = document.getElementById("newGame");
    let restart = document.getElementById("restart");
    if (taken1D.toString() === winOrder.toString()) {
        for (let i = 0; i < 16; i++) {
            fichas[i].style.backgroundColor = "#52D053";
        }
        win.classList.remove("invisible");
        newGame.classList.add("animate-pulse");
        restart.classList.add("animate-pulse");
    }
}


function randomlySort() {
    taken1D.sort(function (a, b) { return 0.5 - Math.random() });
    updateFichas()
}

function updateFichas() {
    for (let i = 1; i <= 16; i++) {
        let ficha = document.getElementById(`${i}`);
        const pos = taken1D.indexOf(i);
        ficha.style.order = pos;
    }
}

function buttons() {
    let newGame = document.getElementById("newGame");
    let restart = document.getElementById("restart");
    let volume = document.getElementById("volume");
    newGame.addEventListener("click", function () {
        randomlySort();
        updateFichas();
        taken1DBackup = [...taken1D];
        initial();
    });
    restart.addEventListener("click", function () {
        taken1D = [...taken1DBackup];
        updateFichas();
        initial();
    });
    volume.addEventListener("click", function () {
        if (mute) {
            putVolume();
            mute = false;
        } else {
            putVolumeZero();
            mute = true;
        }
    });
}

function initial() {
    newGame.classList.remove("animate-pulse");
    restart.classList.remove("animate-pulse");
    win.classList.add("invisible");
    for (let i = 0; i < 16; i++) {
        fichas[i].style.backgroundColor = "#A668FC";
    }
}

function playBackgroundMusic() {
    let audio = document.getElementById("ostmoon");
    audio.play();
    audio.volume = 0.05;
}

function putVolume() {
    let audio = document.getElementById("ostmoon");
    audio.volume = 0.05;
}

function putVolumeZero() {
    let audio = document.getElementById("ostmoon");
    audio.volume = 0;
}


const fichas = document.querySelectorAll(".ficha");
var taken1D = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
init()
playBackgroundMusic()
var mute = false;
var taken1DBackup = [...taken1D];

