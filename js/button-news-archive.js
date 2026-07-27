$(document).ready(function() {
    // Kliknutí na tlačítko 2024
    $('#button2024').on('click', function() {
      // Skrytí všech obsahů
      $('#2023').hide();
      $('#2022').hide();
      $('#2025').hide();
      $('#2026').hide();
      // Zobrazení obsahu pro rok 2024
      $('#2024').show();
    });
  }),

  $(document).ready(function() {  
    // Kliknutí na tlačítko 2023
    $('#button2023').on('click', function() {
      // Skrytí všech obsahů
      $('#2024').hide();
      $('#2022').hide();
      $('#2025').hide();
      $('#2026').hide();
      // Zobrazení obsahu pro rok 2023
      $('#2023').show();
    });
}),

$(document).ready(function() {
    // Kliknutí na tlačítko 2025
    $('#button2025').on('click', function() {
      // Skrytí všech obsahů
      $('#2024').hide();
      $('#2023').hide();
      $('#2026').hide();
      // Zobrazení obsahu pro rok 2025
      $('#2025').show();
    });
}),

$(document).ready(function() {
    // Kliknutí na tlačítko 2026
    $('#button2026').on('click', function() {
      // Skrytí všech obsahů
      $('#2024').hide();
      $('#2023').hide();
      $('#2025').hide();
      // Zobrazení obsahu pro rok 2026
      $('#2026').show();
    });
})