function registerUser(event) {
    event.preventDefault(); // Prevent form submission from reloading the page
    
    const username = document.getElementById('usernameInput').value;
    // Here, you can add code to handle user registration, such as sending the data to your backend server
    
    // For demonstration purposes, let's assume registration is successful and redirect the user to the games page
    window.location.href = "games.html";
}
