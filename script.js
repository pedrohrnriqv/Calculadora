// script.js

let display = document.getElementById("display");

document.querySelectorAll(".btn").forEach(button => {
  button.addEventListener("click", () => {
    let buttonText = button.textContent;

    if (buttonText === "C") {
      display.value = ""; // Limpa a tela
    } else if (buttonText === "=") {
      try {
        // Usamos eval para calcular a expressão, mas com cautela
        display.value = eval(display.value);
      } catch (error) {
        display.value = "Erro"; // Se a expressão for inválida
      }
    } else {
      // Adiciona o valor do botão ao display
      display.value += buttonText;
    }
  });
});

// Função para capturar as teclas pressionadas
document.addEventListener("keydown", function (event) {
  const key = event.key;

  // Evita que as teclas especiais como 'Shift', 'CapsLock', etc, sejam processadas
  if (event.key === "Backspace") {
    display.value = display.value.slice(0, -1); // Apaga o último caractere
  } else if (key === "Enter" || key === "=") {
    try {
      // Calcula a expressão quando pressionar Enter
      display.value = eval(display.value);
    } catch (error) {
      display.value = "Erro"; // Se houver erro na expressão
    }
  } else if (key === "c" || key === "C") {
    display.value = ""; // Limpa a tela
  } else if ("0123456789".includes(key) || "+-*/.".includes(key)) {
    // Adiciona números e operadores ao display
    display.value += key;
  }
  // Limpar a tela com ESC
  else if (key === "Escape") {
    display.value = "";
  }
});
