function validateSyntax() {
    let input = document.getElementById("petInput").value;
    // Validation logic goes here
    let result = "pet_2015Forrest"; // Placeholder for validation result

    // TODO: Write your validation logic here
    // Check if input starts with 'pet_' and followed by alphanumeric characters
    // Added first if statements to check if the user input is equal to the result value
    if (input == result) {
        message = "Valid Syntax";
    }
    // Added a second if statements to check if the user input is not equal to the result value
    if (input != result) {
        message = "Invalid Syntax";
    }
    /* Set the id=result innerText value equal to message that will return the necessary text message if the input value is
    equal to or not equal to the result value */
    document.getElementById("result").innerText = message;
}
