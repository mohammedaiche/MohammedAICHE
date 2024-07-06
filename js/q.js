$(document).ready(function() {
    $('.gallery').each(function() {
        const gallery = $(this);
        const slides = gallery.find('.slide');
        const totalSlides = slides.length;
        let currentIndex = 0;
        let slideInterval;

        // Show initial slide
        showSlide(gallery, currentIndex);

        // Start automatic sliding for this gallery
        startSlideInterval(gallery);

        // Function to show current slide
        function showSlide(gallery, index) {
            const slides = gallery.find('.slide');
            slides.css('transform', `translateX(${-index * 100}%)`);
        }

        // Function to move to next slide
        function moveToNextSlide(gallery) {
            currentIndex++;
            if (currentIndex >= totalSlides) {
                currentIndex = 0;
            }
            showSlide(gallery, currentIndex);
        }

        // Start slide interval function
        function startSlideInterval(gallery) {
            slideInterval = setInterval(function() {
                moveToNextSlide(gallery);
            }, 2000); // Change slide every 2 seconds (2000 ms)
        }

        // Pause slide interval on mouse enter
        gallery.on('mouseenter', function() {
            clearInterval(slideInterval);
        });

        // Resume slide interval on mouse leave
        gallery.on('mouseleave', function() {
            startSlideInterval(gallery);
        });

        // Next button click event
        gallery.find('.next-btn').on('click', function() {
            moveToNextSlide(gallery);
        });

        // Previous button click event
        gallery.find('.prev-btn').on('click', function() {
            currentIndex--;
            if (currentIndex < 0) {
                currentIndex = totalSlides - 1;
            }
            showSlide(gallery, currentIndex);
        });
    });
});
