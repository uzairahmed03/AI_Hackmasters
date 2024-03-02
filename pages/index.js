

    // This is a standalone JavaScript file

function fetchDataFromStackAI() {
    // Replace this URL with your actual Stack AI URL
    const stackAIUrl = "https://www.stack-ai.com/internal_ui/7d8464a4-a7cc-4f2c-bc5c-6037e038a0e8/a4f8f5b6-4856-4b5a-9b70-d010c987bb55/65e32637178e7dfcbbef555f";

    // Fetch data from Stack AI
    fetch(stackAIUrl)
        .then(response => response.json())
        .then(data => {
            // Log the data to the console
            console.log("Data from Stack AI:", data);
        })
        .catch(error => {
            console.error('Error fetching data from Stack AI:', error);
        });
}

// Call the function to fetch data when the script is loaded
fetchDataFromStackAI();


