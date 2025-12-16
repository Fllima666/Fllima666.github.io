const form = document.getElementById('registerForm');
const clearButton = document.getElementById('clear');

document.getElementById("registerForm").addEventListener("submit", function(event) {
event.preventDefault(); 
let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let password = document.getElementById("password").value;
let age = document.getElementById("age").value;
let result = document.getElementById("result");
if (name === "" || email === "" || password === "" || age === "") {
result.textContent = "❌Заповніть усі поля!";
result.style.color = "red";
} else if (password.length < 6) {

result.textContent = " Пароль має містити не менше 6 символів.";
result.style.color = "orange";
} else if (age < 14) {
result.textContent = "❌Реєстрація дозволена лише з 14 років!";
result.style.color = "red";
} else if (!email.includes('@')){
  result.textContent = "Email повинен містити @";
}  else {
result.textContent = `✅Вітаємо, ${name}! Реєстрацію успішно виконано.`;
result.style.color = "green";
document.body.style.background = "#00ff00";
}
});

clearButton.addEventListener('click', function() {
  form.reset();
  document.body.style.background = "";
  result.textContent = "";
});