const html = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');

// Set initial theme based on localStorage or default to light
function alertMessage() {
  alert("Poga uzspiesta!");
}

const button = document.getElementById('mobileMenuButton');
const menu = document.getElementById('mobileMenu');

button.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

function redirectToInformationPage() {
  // Replace 'information.html' with your actual information page URL or path.
  window.location.href = 'information.html';
}

function redirectToGalleryPage() {
  window.location.href = 'gallery.html'
}

function setInitialTheme() {
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'dark') {
    html.classList.add('dark');
    sunIcon.classList.remove('hidden');
    moonIcon.classList.add('hidden');
  } else {
    html.classList.remove('dark');
    sunIcon.classList.add('hidden');
    moonIcon.classList.remove('hidden');
  }
}

setInitialTheme(); // Run on load

// // Function to update hero image based on theme
// function updateHeroImage() {
//   const heroImage = document.getElementById('hero-image');
//   const isDarkMode = document.documentElement.classList.contains('dark');

//   if (isDarkMode) {
//     heroImage.style.backgroundImage = "url('./public/img/lu-night.png')";
//   } else {
//     heroImage.style.backgroundImage = "url('./public/img/lu.png')";
//   }
// }

// // Function to update gallery images based on theme
// function updateGalleryImages() {
//   const images = document.querySelectorAll('img[data-light][data-dark]');
//   const isDarkMode = document.documentElement.classList.contains('dark');

//   images.forEach(img => {
//     if (isDarkMode) {
//       img.src = img.getAttribute('data-dark');
//     } else {
//       img.src = img.getAttribute('data-light');
//     }
//   });
// }

// Toggle theme on click
themeToggle.addEventListener('click', () => {
  const isDark = html.classList.toggle('dark');

  // Toggle icons
  sunIcon.classList.toggle('hidden', !isDark);
  moonIcon.classList.toggle('hidden', isDark);

  // Update images
  updateHeroImage();
  updateGalleryImages();

  // Save theme
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Call on page load to set correct images
document.addEventListener('DOMContentLoaded', function () {
  updateHeroImage();
  updateGalleryImages();
});