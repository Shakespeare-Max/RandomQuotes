/* 
    Project: Random Quote Generator  
    Developed By : Niyamathullah R
    Developed For : Medify
    API Used: Quotable API  
    Endpoint: https://api.quotable.io/random  
    Purpose: Fetch a random quote along with the author and display it on the page.  
*/

document.addEventListener('DOMContentLoaded', () => {
    const quoteElement = document.querySelector('.article blockquote p');
    const authorElement = document.querySelector('.article blockquote cite');
    const refreshButton = document.getElementById('refresh');

    function fetchRandomQuote() {
        //API URL -> https://api.quotable.io/random
        // Fetch Data From API URL
        fetch('http://api.quotable.io/random')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                quoteElement.textContent = data.content;
                authorElement.textContent = `- ${data.author}`;
            })
            .catch(error => {
                console.error('Error fetching quote:', error);
                quoteElement.textContent = 'Failed to fetch quote';
                authorElement.textContent = '';
            });
    }

    // Fetch a quote on page load
    fetchRandomQuote();

    // Fetch a new quote when the refresh button is clicked
    refreshButton.addEventListener('click', fetchRandomQuote);
});
