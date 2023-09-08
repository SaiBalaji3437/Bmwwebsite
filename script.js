var newWindow; // Variable to store the reference to the new window

function buyCar(carName, price) {
  // Open a new window and store the reference
  newWindow = window.open("purchase.html");

  // Pass the car details to the new window
  newWindow.onload = function() {
    newWindow.initialize(carName, price);
  };
}

function closebuyCar() {
  newWindow.close(); // Close the new window
}

function validateForm(event) {
  event.preventDefault(); // Prevent form submission

  // Get form inputs
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // Perform validation
  if (email === "" || password === "") {
    alert("Please enter both email and password.");
  } else {
    // Successful login, perform further actions
    alert("Login successful!");
    // Add additional code here, such as redirecting to another page
  }
}

