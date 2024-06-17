// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add the 'visible' class to elements in the viewport
function checkVisibility() {
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        if (isInViewport(content)) {
            content.classList.add('visible');
        }
    });

    const parallaxSections = document.querySelectorAll('.parallax');
    parallaxSections.forEach(parallax => {
        if (isInViewport(parallax)) {
            parallax.classList.add('rotate-scale');
        } else {
            parallax.classList.remove('rotate-scale');
        }
    });
}

// Listen for scroll events
window.addEventListener('scroll', checkVisibility);

// Initial check in case elements are already in viewport
checkVisibility();

window.addEventListener('DOMContentLoaded', function() {
    const reviews = document.querySelectorAll('.review');

    // Function to toggle gradient blue color on mouse enter
    function toggleGradientColor(event) {
        event.target.classList.add('gradient-hover');
    }

    // Function to remove gradient blue color on mouse leave
    function removeGradientColor(event) {
        event.target.classList.remove('gradient-hover');
    }

    // Add event listeners to each review box
    reviews.forEach(function(review) {
        review.addEventListener('mouseenter', toggleGradientColor);
        review.addEventListener('mouseleave', removeGradientColor);
    });

    // Partner Carousel Functionality
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const partnerCarousel = document.querySelector('.partner-carousel');
    let currentIndex = 0;

    function showPartner(index) {
        const partners = document.querySelectorAll('.partner');
        partners.forEach((partner, i) => {
            if (i === index) {
                partner.style.display = 'block';
            } else {
                partner.style.display = 'none';
            }
        });
    }

    function showNextPartner() {
        currentIndex = (currentIndex + 1) % partnerCarousel.children.length;
        showPartner(currentIndex);
    }

    function showPrevPartner() {
        currentIndex = (currentIndex - 1 + partnerCarousel.children.length) % partnerCarousel.children.length;
        showPartner(currentIndex);
    }

    prevButton.addEventListener('click', showPrevPartner);
    nextButton.addEventListener('click', showNextPartner);

    // Show the first partner initially
    showPartner(currentIndex);
});
