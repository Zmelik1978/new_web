function openCity(evt, cityName) {
  var i, tabcontent, tablinks;

  // Skrýt všechny panely
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }

  // Odstranit třídu "active" ze všech tlačítek
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
  }

  // Zobrazit vybraný panel
  document.getElementById(cityName).style.display = "block";

  // Přidat třídu "active" na aktuálně aktivní tlačítko
  evt.currentTarget.classList.add("active");
}
  
  