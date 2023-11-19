document.addEventListener("DOMContentLoaded", function () {
  var colorBoxes = document.getElementById("colorBoxes");
  var nextButton = document.getElementById("nextButton");

  var selectedColors = [];

  colorBoxes.addEventListener("input", function () {
    // Recorre todos los inputs de color y agrega los valores al array
    selectedColors = Array.from(colorBoxes.getElementsByTagName("input")).map(
      (input) => input.value
    );
  });

  nextButton.addEventListener("click", function (event) {
    // Verifica si se han seleccionado 4 colores diferentes y no hay colores vacíos
    if (
      selectedColors.length === 4 &&
      new Set(selectedColors).size === 4 &&
      !selectedColors.includes("")
    ) {
      // Convierte los colores de HEX a RGB antes de almacenarlos
      var selectedColorsRGB = selectedColors.map(hexToRgb);

      // Almacena los colores en localStorage
      localStorage.setItem("selectedColors", JSON.stringify(selectedColorsRGB));

      // Redirige a la siguiente página
      window.location.href = "../pages/mastermind.html";
    } else {
      event.preventDefault();
      alert("Please select 4 different colors to proceed.");
    }
  });

  // Función para convertir HEX a RGB
  function hexToRgb(hex) {
    // Elimina el # del inicio si está presente
    hex = hex.replace(/^#/, '');

    // Divide el string en pares de caracteres
    var bigint = parseInt(hex, 16);

    // Extrae los componentes de color
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;

    // Retorna el formato RGB
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }
});

