const startButton = document.getElementById("startButton");
const startScreen = document.getElementById("startScreen");

const music = document.getElementById("music");

const scenes = document.querySelectorAll(".scene");

let currentScene = 0;

let started = false;


/* =========================
   MULAI SURPRISE
========================= */

startButton.addEventListener("click", function () {

    if (started) return;

    started = true;

    /* Hilangkan halaman pembuka */
    startScreen.style.opacity = "0";

    setTimeout(() => {
        startScreen.style.display = "none";
    }, 1000);


    /* Putar musik */
    music.currentTime = 0;

    music.play().catch(() => {
        console.log("Musik membutuhkan interaksi pengguna.");
    });


    /* Mulai scene pertama */

    scenes[0].classList.add("active");

    currentScene = 0;


    /* Setiap scene sekitar 3 detik */

    setTimeout(nextScene, 3000);
});


/* =========================
   PINDAH SCENE
========================= */

function nextScene() {

    if (currentScene >= scenes.length - 1) {

        finish();

        return;
    }

    scenes[currentScene].classList.remove("active");

    currentScene++;

    scenes[currentScene].classList.add("active");

    setTimeout(nextScene, 3000);
}


/* =========================
   SELESAI
========================= */

function finish() {

    /* Pastikan halaman terakhir tetap tampil */

    scenes[currentScene].classList.add("active");

    /*
        Setelah 30 detik,
        musik dihentikan.
    */

    setTimeout(() => {

        music.pause();

    }, 3000);
}