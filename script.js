function validateSyntax() {
    let input = document.getElementById("petInput").value;
    // Validation logic goes here
    let result = "pet_2015Forrest"; // Placeholder for validation result

    // TODO: Write your validation logic here
    // Check if input starts with 'pet_' and followed by alphanumeric characters
    if (result == "pet_2015Forrest") {
        result = "Valid Syntax";
        return result;
    } else {
        result = "Invalid Syntax";
        return result;
    }

    document.getElementById("result").innerText = result;
    console.log(result);
}

console.log(validateSyntax);
