//Variables & Conditionals
function checkAge() {
  let age = document.getElementById("ageInput").value; // variable declaration
  let result = "";

  // Conditional statement
  if (age >= 18) {
    result = "You are an adult ✅";
  } else if (age > 0) {
    result = "You are still a minor 👶";
  } else {
    result = "Please enter a valid age ⚠️";
  }

  document.getElementById("ageResult").textContent = result;
}

//Functions

//Function 1: Simple greeting
function showGreeting() {
  document.getElementById("greeting").textContent = greetingMessage("Student");
}

function greetingMessage(name) {
  return `Hello, ${name}! Welcome to JavaScript 🚀`;
}


//Loops

//Countdown using for loop
function showCountdown() {
  let output = "";
  for (let i = 5; i >= 1; i--) {
    output += i + " ";
  }
  document.getElementById("countdown").textContent = "Countdown: " + output;
}

//Looping through an array
let fruits = ["Apple", "Banana", "Mango"];
fruits.forEach(fruit => console.log("Fruit:", fruit));

//DOM Manipulation

//Change background color on button click
document.getElementById("colorBtn").addEventListener("click", function() {
  document.body.style.backgroundColor = 
    document.body.style.backgroundColor === "lightblue" ? "white" : "lightblue";
});

//Add new list items
document.getElementById("addItemBtn").addEventListener("click", function() {
  let li = document.createElement("li");
  li.textContent = "New Item " + (document.querySelectorAll("#itemList li").length + 1);
  document.getElementById("itemList").appendChild(li);
});

//Toggle text dynamically
document.getElementById("greeting").addEventListener("click", function() {
  this.textContent = this.textContent === "Clicked!" ? "Hello again!" : "Clicked!";
});
