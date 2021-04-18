const mode = document.getElementById("mode");
const modeSave = localStorage.getItem('gmtNightMode');

if (modeSave) {
    document.body.classList.toggle("dark-mode");
    mode.src = "images/sun.png";
}
mode.onclick = function () {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem('gmtNightMode', true);
        mode.src = "images/sun.png";
    }
    else {
        localStorage.removeItem('gmtNightMode');
        mode.src = "images/moon.png";
    }
}