const banana = require("@banana-dev/banana-dev");

var apiKey = "973ceac0-32cf-45a2-9624-eb611df3e7a9";
var modelKey = "gptj";

let run = async (modelParameters) => {
  var out = await banana.run(apiKey, modelKey, modelParameters);
  console.log(out);
  return out;
};

function getInput(evt) {
  evt.preventDefault();
  const $userInput = document.getElementById("userInput");
  const userInput = $userInput.value;
  console.log(userInput);
  var question = `what is a ${userInput}?`;
  console.log(question);
  const modelParameters = {
    text: question,
    length: 250,
    temperature: 0.9,
    batchSize: 1,
  };
  var response = run(modelParameters);
  document.querySelector(".results").innerHTML = "cake";
}

const $form = document.querySelector(".input");
$form.addEventListener("submit", getInput);
