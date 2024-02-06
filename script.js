
function toggleMode() {
    const body = document.body;
    const darkModeButton = document.querySelector('.dark-mode-button');

    body.classList.toggle('dark-mode');
    darkModeButton.innerText = body.classList.contains('dark-mode') ? 'Light mode' : 'Dark mode';
}
