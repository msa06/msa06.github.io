var d = new Date();
var y = d.getFullYear();
document.getElementById("year").innerHTML = " " + y;

// Form ELements
var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var button = document.getElementById("submit");
var greet = document.getElementById("greet");

button.addEventListener("click", function (e) {
  console.log(name, email);
  greet.innerHTML = "Hello, " + name + ". Let's Meet Soon. ";
  e.preventDefault();
});
