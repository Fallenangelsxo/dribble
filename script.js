const container = document.getElementById('cardContainer');
        
// Function to continuously move cards horizontally
function scrollCards() {
    const cards = container.querySelectorAll('.card');
    const firstCard = cards[0];
    const cardWidth = firstCard.offsetWidth;

    container.scrollLeft += 1; // Adjust the scrolling speed as needed

    if (container.scrollLeft >= cardWidth) {
        container.scrollLeft -= cardWidth;
        container.appendChild(firstCard);
    }
}

// Set an interval to continuously scroll the cards
const scrollInterval = setInterval(scrollCards, 10); 
