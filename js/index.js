document.getElementById("switchNightTheme").addEventListener("click", function () {
  document.querySelector("#light-theme").href = "";
  document.querySelector("#night-theme").href = "css/night.css";
  document.getElementById("switchLightTheme").style.display = "inline-block";
  document.getElementById("switchNightTheme").style.display = "none";
});

document.getElementById("switchLightTheme").addEventListener("click", function () {
  document.querySelector("#light-theme").href = "css/light.css";
  document.querySelector("#night-theme").href = "";
  document.getElementById("switchNightTheme").style.display = "inline-block";
  document.getElementById("switchLightTheme").style.display = "none";
});

var commentsContent = document.querySelector('#comments');
commentsContent.addEventListener("wheel", (e) => {
  let delta = (e.deltaY || e.detail || e.wheelDelta) / 3;
  let info = document.getElementById('comments');
  info.scrollLeft = +info.scrollLeft + delta;
  e.preventDefault ? e.preventDefault() : (e.returnValue = false);

});

var modal = document.getElementById("myModal");
var openModalBtn = document.getElementById("openModalBtn");
var closeModalBtn = document.getElementById("closeModalBtn");
var closeModalBtn2 = document.getElementById("closeModalBtn2");

// Показываем модальное окно при клике на кнопку открытия
openModalBtn.addEventListener("click", function() {
    modal.style.display = "block";
});

// Закрываем модальное окно при клике на кнопку закрытия
closeModalBtn.addEventListener("click", function() {
    modal.style.display = "none";
});

closeModalBtn2.addEventListener("click", function() {
    modal.style.display = "none";
});

// Закрываем модальное окно при клике вне модального окна
window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});