const getStartedButton = document.getElementById("get-started-button");
const errorMessage = document.getElementById("error-message");
const inputEmail = document.getElementById("email-address");

let inputText = "";

inputEmail.addEventListener("input", (event) => {
  inputText = event.target.value;
});

getStartedButton.addEventListener("click", () => {
  if (inputText.length > 0) {
    errorMessage.style.display = "block";
  }
});
