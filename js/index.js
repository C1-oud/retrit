// const darkModeSwitch = document.getElementById('darkModeSwitch');
// const body = document.body;

// darkModeSwitch.addEventListener('change', () => {
//     if (darkModeSwitch.checked) {
//         body.classList.add('dark-mode');
//     } else {
//         body.classList.remove('dark-mode');
//     }
// });

document.getElementById("switchNightTheme").addEventListener("click", function() {
    document.querySelector("#light-theme").href = ""; // Очищаем ссылку на файл light.css
    document.querySelector("#night-theme").href = "css/night.css";
});
document.getElementById("switchLightTheme").addEventListener("click", function() {
document.querySelector("#light-theme").href = "css/light.css";
document.querySelector("#night-theme").href = ""; // Очищаем ссылку на файл dark.css
});