const toggleButton = document.getElementById('toggle-mode');
const body = document.body;
const logo = document.getElementById('logo');

toggleButton.addEventListener('click', () => {
    const isLight = body.classList.contains('light');

    if(isLight){
        body.classList.remove('light');
        body.classList.add('dark');
        logo.src = './img/GGomes Logotipo dark mode.png';
    } else {
        body.classList.remove('dark');
        body.classList.add('light');
        logo.src = './img/GGomes Logotipo light mode.png';
    }
});