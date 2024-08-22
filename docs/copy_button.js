document.addEventListener("DOMContentLoaded", function() {
  // Crear un botón de copiar y agregarlo a cada bloque de código
  document.querySelectorAll("pre").forEach(function(block) {
    var copyButton = document.createElement("button");
    copyButton.className = "copy-button";
    copyButton.textContent = "Copiar";

    var codeContainer = document.createElement("div");
    codeContainer.className = "code-container";

    block.parentNode.insertBefore(codeContainer, block);
    codeContainer.appendChild(block);
    codeContainer.appendChild(copyButton);

    // Añadir evento de clic al botón de copiar
    copyButton.addEventListener("click", function() {
      var code = block.innerText;

      // Crear un área de texto temporal para seleccionar y copiar el código
      var tempTextArea = document.createElement("textarea");
      tempTextArea.value = code;
      document.body.appendChild(tempTextArea);
      tempTextArea.select();
      document.execCommand("copy");
      document.body.removeChild(tempTextArea);

      // Cambiar el texto del botón al hacer clic
      copyButton.textContent = "¡Copiado!";
      setTimeout(function() {
        copyButton.textContent = "Copiar";
      }, 2000);
    });
  });
});
