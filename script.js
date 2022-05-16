const passwordInput = document.getElementById("password");
const showPasswordBtn = document.getElementById("showPassword");
const copyPasswordBtn = document.getElementById("copyPassword");
const generatePasswordBtn = document.getElementById("generatePassword");

generatePasswordBtn.addEventListener("click", generatePassword);
showPasswordBtn.addEventListener("click", showPassword);
copyPasswordBtn.addEventListener("click", copyPassword);

function generatePassword() {
  let chars =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let passwordLength = 18;
  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    let randomNum = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNum, randomNum + 1);
  }
  passwordInput.value = password;
}

function showPassword() {
  return passwordInput.type === "password"
    ? (passwordInput.type = "text")
    : (passwordInput.type = "password");
}

function copyPassword() {
  passwordInput.select();
  if (passwordInput.value != "") {
    navigator.clipboard.writeText(passwordInput.value);
    alert("Copied to clipboard!");
  } else {
    alert("Generate password to copy!");
  }
}
