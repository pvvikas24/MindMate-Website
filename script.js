function getResponse() {
    const userInput = document.getElementById("userInput").value;
    const responseSection = document.getElementById("response");

    if (userInput.trim() === "") {
        responseSection.innerHTML = "Please share something. I'm here to help!";
        return;
    }

    // For now, we will return a generic response
    responseSection.innerHTML = "Thank you for sharing. Your feelings are valid. Keep going—you’re not alone. 🌱";
}
