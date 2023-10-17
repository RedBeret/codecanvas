const foot = document.createElement('p');
foot.className = 'text-center text-body-secondary';
foot.textContent = '© 2023 Steven';
const footer = document.querySelector('footer');
footer.appendChild(foot);

//mouseover on the cards to make them bigger https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseover_event
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.05)';
        card.style.transition = 'transform 0.3s';
    });
    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)';
    });
});

