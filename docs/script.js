document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll("pre").forEach(function(block) {
    var copyButton = document.createElement("button");
    copyButton.className = "copy-button";
    copyButton.textContent = "Copiar";

    var codeContainer = document.createElement("div");
    codeContainer.className = "code-container";

    block.parentNode.insertBefore(codeContainer, block);
    codeContainer.appendChild(block);
    codeContainer.appendChild(copyButton);

    copyButton.addEventListener("click", function() {
      var code = block.innerText;

      var tempTextArea = document.createElement("textarea");
      tempTextArea.value = code;
      document.body.appendChild(tempTextArea);
      tempTextArea.select();
      document.execCommand("copy");
      document.body.removeChild(tempTextArea);

      copyButton.textContent = "¡Copiado!";
      setTimeout(function() {
        copyButton.textContent = "Copiar";
      }, 2000);
    });
  });
});
