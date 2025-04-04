// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', function() {
            const mobileMenu = document.querySelector('.mobile-menu');
            if (mobileMenu) {
                mobileMenu.classList.toggle('hidden');
            }
        });
    }

    // Testimonial Carousel
    const carousel = document.querySelector('.testimonial-carousel');
    if (carousel) {
        const inner = carousel.querySelector('.carousel-inner');
        const slides = carousel.querySelectorAll('.carousel-slide');
        const prevBtn = carousel.querySelector('.carousel-prev');
        const nextBtn = carousel.querySelector('.carousel-next');
        
        let currentIndex = 0;
        const slideCount = slides.length;
        
        function updateCarousel() {
            inner.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % slideCount;
            updateCarousel();
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + slideCount) % slideCount;
            updateCarousel();
        }

        if (nextBtn) nextBtn.addEventListener('click', nextSlide);
        if (prevBtn) prevBtn.addEventListener('click', prevSlide);

        // Auto-advance every 5 seconds
        setInterval(nextSlide, 5000);
    }

// Blog Category Filter
    const categoryFilters = document.querySelectorAll('.category-filter');
    if (categoryFilters.length > 0) {
        categoryFilters.forEach(filter => {
            filter.addEventListener('click', function() {
                // Update active category button
                categoryFilters.forEach(f => f.classList.remove('active-category'));
                this.classList.add('active-category');
                
                const category = this.dataset.category;
                const blogPosts = document.querySelectorAll('.blog-post');
                
                blogPosts.forEach(post => {
                    if (category === 'all' || post.dataset.category === category) {
                        post.style.display = 'block';
                    } else {
                        post.style.display = 'none';
                    }
                });
            });
        });
    }

// Form Validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !message) {
                alert('Por favor complete todos los campos requeridos');
                return;
            }

            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                alert('Por favor ingrese un email válido');
                return;
            }

// Submit the form (simulated here with an alert)
            alert('Formulario enviado con éxito! Nos pondremos en contacto pronto.');
            contactForm.reset();
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
//botones de pestañas
document.addEventListener("DOMContentLoaded", function () {
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabContents = document.querySelectorAll(".tab-content");

    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            const tabId = button.getAttribute("data-tab");

            // Remover clases activas de todos los botones
            tabButtons.forEach(btn => {
                btn.classList.remove("text-blue-400", "border-blue-400");
                btn.classList.add("text-gray-400");
            });

            // Agregar clases activas al botón seleccionado
            button.classList.add("text-blue-400", "border-blue-400");
            button.classList.remove("text-gray-400");

            // Ocultar todas las pestañas
            tabContents.forEach(content => {
                content.classList.remove("active");
                content.style.display = "none";
            });

            // Mostrar la pestaña activa
            document.getElementById(tabId).style.display = "block";
        });
    });

    // Mostrar la primera pestaña por defecto
    document.querySelector(".tab-button").click();
});