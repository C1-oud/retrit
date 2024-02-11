document.getElementById("switchNightTheme").addEventListener("click", function() {
    document.querySelector("#light-theme").href = "";
    document.querySelector("#night-theme").href = "css/night.css";
    document.getElementById("switchLightTheme").style.display = "inline-block";
    document.getElementById("switchNightTheme").style.display = "none";
  });
  
  document.getElementById("switchLightTheme").addEventListener("click", function() {
    document.querySelector("#light-theme").href = "css/light.css";
    document.querySelector("#night-theme").href = ""; 
    document.getElementById("switchNightTheme").style.display = "inline-block";
    document.getElementById("switchLightTheme").style.display = "none";
  });