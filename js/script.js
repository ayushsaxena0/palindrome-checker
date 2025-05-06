document.querySelector("#check-btn").addEventListener("click", checkPalindrome);

function checkPalindrome() {
  const input = document.querySelector("#text-input").value;
  const alphabet = "abcdefghijklmnopqrstuvwxyz0123456789";
  const filteredInput = input
    .toLowerCase()
    .split("")
    .filter((el) => alphabet.includes(el));
  const result = document.querySelector("#result");

  if (!input) {
    alert("Please input a value");
  } else {
    if (filteredInput.join("") === [...filteredInput].reverse().join("")) {
      result.innerText = `${input} is a palindrome.`;
    } else {
      result.innerText = `${input} is not a palindrome.`;
    }
  }
}
