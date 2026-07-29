function startSurprise() {

    const opening = document.getElementById("opening");
    const mainContent = document.getElementById("mainContent");
    const music = document.getElementById("birthdaySong");

    opening.style.display = "none";
    mainContent.style.display = "block";

    music.play();

}