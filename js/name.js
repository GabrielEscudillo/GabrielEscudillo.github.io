document.addEventListener("DOMContentLoaded", function () {
  // Seleccionar el botón y el input por su id
  var nextButton = document.getElementById("nextButton");
  var inputName = document.getElementById("inputName");

  // Agregar un evento de clic al botón
  nextButton.addEventListener("click", function (event) {
    // Verificar si se ha ingresado un nombre
    if (inputName.value.trim() === "") {
      // Si no se ha ingresado un nombre, evitar que se vaya a la siguiente página
      event.preventDefault();
      alert("Please enter a name before proceeding.");
    } else {
      // Si se ha ingresado un nombre, puedes almacenarlo en SessionStorage
      localStorage.setItem("playerName", inputName.value.trim());
    }
  });
});
