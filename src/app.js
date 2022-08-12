const button = document.querySelector("#next-advice");
const numberSpan = document.querySelector("#advice-number");
const advicePara = document.querySelector("#advice-content");

const URL = "https://api.adviceslip.com/advice";

const generateAdvice = async () => {
  const response = await fetch(URL);
  const data = await response.json();

  numberSpan.textContent = data.slip.id;
  advicePara.textContent = data.slip.advice;
};

button.addEventListener("click", generateAdvice);
