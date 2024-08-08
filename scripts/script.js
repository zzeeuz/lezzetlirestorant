const theme = document.getElementById('theme-link');
const button = document.getElementById('theme-button');

const lighttheme = 'css/light-theme.css';
const darktheme = 'css/dark-theme.css';

const savedTheme = localStorage.getItem('theme') || lighttheme;
theme.setAttribute('href', savedTheme);
updateButtonText(savedTheme);

button.addEventListener('click', () => {
  const currentTheme = theme.getAttribute('href');
  const newTheme = currentTheme === lighttheme ? darktheme : lighttheme;
  
  theme.setAttribute('href', newTheme);
  localStorage.setItem('theme', newTheme);
  updateButtonText(newTheme);
});

function updateButtonText(theme) {
  if (theme === lighttheme) {
    button.textContent = '🌙';
  } else {
    button.textContent = '🌞';
  }
}
