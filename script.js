let display = document.getElementById("display");

document.querySelectorAll(".btn").forEach(button => {
  button.addEventListener("click", () => {
    let buttonText = button.textContent;

    if (buttonText === "C") {
      display.value = "";
    } else if (buttonText === "=") {
      try {
        display.value = eval(display.value);
      } catch (error) {
        display.value = "Erro";
      }
    } else {
      display.value += buttonText;
    }
  });
});

document.addEventListener("keydown", function (event) {
  const key = event.key;

  if (event.key === "Backspace") {
    display.value = display.value.slice(0, -1);
  } else if (key === "Enter" || key === "=") {
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = "Erro";
    }
  } else if (key === "c" || key === "C") {
    display.value = ""; 
  } else if ("0123456789".includes(key) || "+-*/.".includes(key)) {
    display.value += key;
  }

  else if (key === "Escape") {
    display.value = "";
  }
});
