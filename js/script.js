// Get DOM elements
const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');

// Define regex for phone number validation
const countryCode = "^(1\\s?)?";
const areaCode = "(\\([0-9]{3}\\)|[0-9]{3})";
const spacesDashes = "[\\s\\-]?";
const phoneNumber = "[0-9]{3}[\\s\\-]?[0-9]{4}$";
const phoneRegex = new RegExp(`${countryCode}${areaCode}${spacesDashes}${phoneNumber}`);

// Validate phone number input
const checkValidNumber = input => {
    if (input === "") {
        alert("Please provide a phone number");
        return;
    }
    resultsDiv.textContent = "";

    const isValid = phoneRegex.test(input);
    const showResult = document.createElement("p");
    showResult.className = "results-text";
    showResult.style.color = isValid ? "#12b012" : "red";
    showResult.textContent = `${isValid ? "Valid" : "Invalid"} US number: ${input}`;
    resultsDiv.appendChild(showResult);
};

// Event listeners for user interactions
checkBtn.addEventListener("click", () => {
    checkValidNumber(userInput.value);
    userInput.value = "";
});

userInput.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        checkValidNumber(userInput.value);
        userInput.value = "";
    }
});

clearBtn.addEventListener("click", () => {
    resultsDiv.textContent = "";
});
