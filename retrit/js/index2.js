document.getElementById("switchNightTheme").addEventListener("click", function () {
  document.querySelector("#light-theme").href = "";
  document.querySelector("#night-theme").href = "css/night2.css";
  document.getElementById("switchLightTheme").style.display = "inline-block";
  document.getElementById("switchNightTheme").style.display = "none";
  localStorage.setItem('theme_mode', 'night');
});

document.getElementById("switchLightTheme").addEventListener("click", function () {
  document.querySelector("#light-theme").href = "css/light2.css";
  document.querySelector("#night-theme").href = "";
  document.getElementById("switchNightTheme").style.display = "inline-block";
  document.getElementById("switchLightTheme").style.display = "none";
  localStorage.setItem('theme_mode', 'light');
});

  document.addEventListener('DOMContentLoaded', ()=>{
  const themeMode = localStorage.getItem('theme_mode')
  if (themeMode) {
      if (themeMode==='light') {
      document.querySelector("#light-theme").href = "css/light2.css";
      document.querySelector("#night-theme").href = "";
      document.getElementById("switchNightTheme").style.display = "inline-block";
      document.getElementById("switchLightTheme").style.display = "none";
      }
      else {
      document.querySelector("#light-theme").href = "";
      document.querySelector("#night-theme").href = "css/night2.css";
      document.getElementById("switchLightTheme").style.display = "inline-block";
      document.getElementById("switchNightTheme").style.display = "none";};
  }
})

var commentsContent = document.querySelector('#comments');
commentsContent.addEventListener("wheel", (e) => {
  let delta = (e.deltaY || e.detail || e.wheelDelta) / 3;
  let info = document.getElementById('comments');
  info.scrollLeft = +info.scrollLeft + delta;
  e.preventDefault ? e.preventDefault() : (e.returnValue = false);

});



