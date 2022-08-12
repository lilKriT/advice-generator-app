const button = document.querySelector("#next-advice");

const URL = "https://api.adviceslip.com/advice";

const generateAdvice = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  console.log(data);
};

button.addEventListener("click", generateAdvice);
