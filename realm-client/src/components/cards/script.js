function setCardBackground(card) {
    // Get the card type from the data-type attribute
    const cardType = card.getAttribute('data-type');

    // Update the background color based on the card type
    switch (cardType) {
        case 'spell':
            card.style.backgroundColor = '#4c3b4d';

            break;
        case 'dream':
            card.style.backgroundColor = '#222E50';

            break;
        case 'invocation':
            card.style.backgroundColor = '#ffb347';

            break;
        case 'ritual':
            card.style.backgroundColor = '#B04759';

            break;
        default:
            card.style.backgroundColor = '#191c29';
    }
}

// Select all the card div elements
var cards = document.querySelectorAll('.card');
// Loop through each card and set the background color
cards.forEach(function(card) {
    setCardBackground(card);
});
