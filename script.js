function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function() {
  const text = "Front-End JN | Técnico de Informática";
  const typingText = document.getElementById("typing-text");

  // Função para fazer a animação de digitação
  function typeText(text, element) {
    let index = 0;
    element.style.width = '100%'; // Define a largura total antes de iniciar

    const typingInterval = setInterval(() => {
      if (index < text.length) {
        element.textContent += text[index];
        index++;
      } else {
        clearInterval(typingInterval);
        
        // Adiciona um pequeno atraso antes de fixar o texto
        setTimeout(() => {
          element.classList.add("fixed"); // Remove o cursor
        }, 500); // Pequeno atraso antes de remover o cursor
      }
    }, 100); // Velocidade da digitação
  }

  // Inicia a animação
  typeText(text, typingText);
});



function toggleInfo(infoId) {
  const infoElement = document.getElementById(infoId);
  if (infoElement.style.display === "none" || infoElement.style.display === "") {
    infoElement.style.display = "block"; // Exibe as informações
  } else {
    infoElement.style.display = "none"; // Oculta as informações
  }
}
