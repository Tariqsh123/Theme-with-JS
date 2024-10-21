// Toggle Dark Light
const toggleButton = document.getElementById('theme-toggle');

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
}

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    
    if (document.body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// Menu
const toggleInput = document.getElementById('theme-toggle');
const menuButton = document.getElementById('menu-button');
const navContainer = document.getElementById('nav-container');

toggleInput.addEventListener('change', () => {
    document.body.classList.toggle('dark', toggleInput.checked);
});

menuButton.addEventListener('click', () => {
    navContainer.classList.toggle('active');
});


// Slider
let headerSliderCurrentSlide = 0;

function headerSliderShowSlide(index) {
    const slides = document.querySelectorAll('.header-slider-slide');
    if (index >= slides.length) {
        headerSliderCurrentSlide = 0;
    } 
    else if (index < 0) {
        headerSliderCurrentSlide = slides.length - 1;
    }
    else {
        headerSliderCurrentSlide = index;
    }
    
    const slidesContainer = document.querySelector('.header-slider-slides');
    slidesContainer.style.transform = `translateX(${-headerSliderCurrentSlide * 100}%)`;
}

function headerSliderChangeSlide(direction) {
    headerSliderShowSlide(headerSliderCurrentSlide + direction);
}