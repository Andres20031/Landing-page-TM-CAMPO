(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Fixed Navbar
    $(window).scroll(function () {
        if ($(window).width() < 992) {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-white shadow');
            } else {
                $('.fixed-top').removeClass('bg-white shadow');
            }
        } else {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-white shadow').css('top', -45);
            } else {
                $('.fixed-top').removeClass('bg-white shadow').css('top', 0);
            }
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Project carousel
    $(".project-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
			0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
			576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    // Chart: Indicadores clave (gráfica lineal usando colores del tema)
    const chartCanvas = document.getElementById('tmChart');
    if (chartCanvas && window.Chart) {
        // Obtener colores del tema desde CSS variables
        const rootStyles = getComputedStyle(document.documentElement);
        const colorPrimary = rootStyles.getPropertyValue('--primary').trim() || '#1ca053';
        const colorSecondary = rootStyles.getPropertyValue('--secondary').trim() || '#a6d5bd';
        const colorTertiary = rootStyles.getPropertyValue('--tertiary').trim() || '#e9f7ef';
        const colorDark = rootStyles.getPropertyValue('--dark').trim() || '#145c36';

        const labels = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'];
        const data = {
            labels,
            datasets: [
                {
                    label: 'Labores / mes',
                    data: [120, 160, 130, 180, 140, 190],
                    borderColor: colorPrimary,
                    backgroundColor: colorPrimary + '33',
                    tension: 0.15,
                    fill: true,
                    pointRadius: 5,
                    pointBackgroundColor: '#ffffff',
                    pointBorderColor: colorPrimary,
                    pointBorderWidth: 2,
                    borderWidth: 3
                },
                {
                    label: 'Horas maquinaria',
                    data: [300, 360, 320, 380, 340, 420],
                    borderColor: colorSecondary,
                    backgroundColor: colorSecondary + '33',
                    tension: 0.15,
                    fill: true,
                    pointRadius: 4,
                    pointBackgroundColor: '#ffffff',
                    pointBorderColor: colorSecondary,
                    pointBorderWidth: 2,
                    borderWidth: 3
                }
            ]
        };

        const options = {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: { display: true, labels: { color: colorDark } },
                tooltip: {
                    backgroundColor: colorDark,
                    titleColor: '#ffffff',
                    bodyColor: '#ffffff',
                    padding: 12,
                }
            },
            scales: {
                x: {
                    grid: { display: false },
                    ticks: { color: colorDark }
                },
                y: {
                    beginAtZero: true,
                    grid: { color: colorTertiary },
                    ticks: { color: colorDark }
                }
            }
        };

        new Chart(chartCanvas, {
            type: 'line',
            data,
            options
        });
    }
})(jQuery);

