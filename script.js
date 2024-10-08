function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  const themeIcon = document.getElementById('theme-icon');

themeIcon.addEventListener('click', function () {
  // Toggle dark theme class on body
  document.body.classList.toggle('dark-theme');

  // Check if dark theme is enabled
  const isDarkTheme = document.body.classList.contains('dark-theme');

  // Toggle icons between sun and moon
  if (isDarkTheme) {
    themeIcon.innerHTML = '<i class="fas fa-moon"></i>'; // Moon icon for dark mode
    localStorage.setItem('theme', 'dark'); // Save theme preference
  } else {
    themeIcon.innerHTML = '<i class="fas fa-sun"></i>'; // Sun icon for light mode
    localStorage.setItem('theme', 'light'); // Save theme preference
  }
});

// Load saved theme preference on page load
window.addEventListener('DOMContentLoaded', (event) => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    themeIcon.innerHTML = '<i class="fas fa-moon"></i>'; // Moon icon for dark mode
  } 
  else {
    themeIcon.innerHTML = '<i class="fas fa-sun"></i>'; // Sun icon for light mode
  }
});
