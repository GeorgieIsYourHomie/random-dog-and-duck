// Variables from index
const foxResult = document.getElementById("fox-result");
const dogResult = document.getElementById("dog-result");
const foxButton = document.getElementById("fox-button");
const dogButton = document.getElementById("dog-button");

// Event handlers
/* Both functions: 
1. Make GET request to respective API's
2. Change the result to json format
3. Changes the p tag to an image element of relevant animal result
 - data.file as data in "file" object 
 */
const getRandomFox = () => {
  fetch("https://randomfox.ca/floof/")
    .then((res) => res.json())
    .then((data) => {
      foxResult.innerHTML = `<img src="${data.image}"/>`;
    });
};

const getRandomDog = () => {
  fetch("https://random.dog/woof.json")
    .then((res) => res.json())
    .then((data) => {
      dogResult.innerHTML = `<img src="${data.url}"/>`;
    });
};

// Event listeners
foxButton.addEventListener("click", getRandomFox);
dogButton.addEventListener("click", getRandomDog);
