document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            // Reset active state on all cards
            document.querySelectorAll('.card.active').forEach(activeCard => {
                activeCard.classList.remove('active');
            });

            // Add active class to the clicked card
            card.classList.add('active');

            // Add text dynamically to the card
            if (!card.querySelector('.text')) {
                const text = card.getAttribute('data-text');
                const textElement = document.createElement('div');
                textElement.classList.add('text');
                textElement.textContent = text;
                card.appendChild(textElement);
            }
        });
    });

    // Remove active state on click outside any card
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.card')) {
            document.querySelectorAll('.card.active').forEach(activeCard => {
                activeCard.classList.remove('active');
            });
        }
    });
});
