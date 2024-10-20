function validateSyntax() {
    let input = document.getElementById("petInput").value;
    // Validation logic goes here
    let result = "pet_2015Forrest"; // Placeholder for validation result

    // TODO: Write your validation logic here
    // Check if input starts with 'pet_' and followed by alphanumeric characters
    // Added if statements to check if the user input is equal or not to the result value.
    if (input == result) {
        message = "Valid Syntax";
    }
    if (input != result) {
        message = "Invalid Syntax";
    }
    // Set the id=result innerText value equal to message that will return the text message value if the input is valid or invalid.
    document.getElementById("result").innerText = message;
}
