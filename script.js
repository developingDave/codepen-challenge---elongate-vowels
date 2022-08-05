const slider = document.getElementById("range-slider");
const sliderNumber = document.getElementById("slider-number");
const cardHeader = document.getElementById("card-header");
const button = document.getElementById("button");
const textInput = document.getElementById("text-input");
const rangeSlider = document.getElementById("range-slider");
const outputBox = document.getElementById("output-box");
const submitButton = document.getElementById("sub-button");
const resultsCard = document.getElementById("results-card");
const inputCard = document.getElementById("input-card");
const outputGoesHere = document.getElementById("outputGoesHere");

let output = "";
sliderNumber.innerText = slider.value;

document.addEventListener(
  "mousemove",
  () => (sliderNumber.innerText = slider.value)
);

submitButton.addEventListener("click", () => {
  output = "";

  for (
    inputLetterIdx = 0;
    inputLetterIdx < textInput.value.length;
    inputLetterIdx++
  ) {
    if (
      textInput.value[inputLetterIdx].toLowerCase() == "a" ||
      textInput.value[inputLetterIdx].toLowerCase() == "e" ||
      textInput.value[inputLetterIdx].toLowerCase() == "i" ||
      textInput.value[inputLetterIdx].toLowerCase() == "o" ||
      textInput.value[inputLetterIdx].toLowerCase() == "u"
    ) {
      addLetter(textInput.value[inputLetterIdx], rangeSlider.value);
    } else {
      addLetter(textInput.value[inputLetterIdx], 1);
    }
  }
  resultsCard.innerHTML = `<h1>VOWEL BLOCKAGE</h1>
    <br>
    <br>
    <h3>Here are your results:</h3>
    <br>
    <br>
    ${output}
    <br>
    <br>
        <button class="btn" id="reset-button">RESET</button>
`;
  let resetButton = document.getElementById("reset-button");
  resetButton.addEventListener("click", () => {
    resultsCard.classList.add("hide");
    resultsCard.classList.remove("show");
    inputCard.classList.add("show");
    inputCard.classList.remove("hide");
  });

  resultsCard.classList.add("show");
  resultsCard.classList.remove("hide");
  inputCard.classList.add("hide");
  inputCard.classList.remove("show");
  inputCard.style.animation =
    "  animation: fade-me-in 0.3s .5s ease-out forwards";
  outputGoesHere.innerText = output;
});

function addLetter(letter, number) {
  for (i = 0; i < number; i++) {
    output = output + letter;
  }
}
