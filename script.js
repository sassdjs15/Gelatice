// Função para a rolagem suave ao clicar nos links da navegação
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    function adjustLayout() {
        const header = document.querySelector('header');
        const nav = document.querySelector('header nav');
        const apresentacao = document.querySelector('.apresentacao');
        const oportunidades = document.querySelector('.oportunidades');
        const feedbacks = document.querySelector('.feedbacks');

        if (window.innerWidth <= 768) {
            // Header
            header.style.flexDirection = 'column';
            nav.style.flexDirection = 'column';
            nav.style.alignItems = 'flex-start';

            // Apresentação
            apresentacao.style.flexDirection = 'column';
            apresentacao.querySelector('.foto').style.marginRight = '0';
            apresentacao.querySelector('.descricao').style.maxWidth = '100%';

            // Oportunidades
            oportunidades.style.flexDirection = 'column';
            oportunidades.querySelectorAll('.card').forEach(card => {
                card.style.maxWidth = '90%';
            });

            // Feedbacks
            feedbacks.querySelector('.feedback-cards').style.flexDirection = 'column';
            feedbacks.querySelectorAll('.feedback-card').forEach(card => {
                card.style.maxWidth = '90%';
            });
        } else {
            // Reset to default styles for larger screens
            header.style.flexDirection = 'row';
            nav.style.flexDirection = 'row';
            nav.style.alignItems = 'center';

            apresentacao.style.flexDirection = 'row';
            apresentacao.querySelector('.foto').style.marginRight = '2rem';
            apresentacao.querySelector('.descricao').style.maxWidth = '500px';

            oportunidades.style.flexDirection = 'row';
            oportunidades.querySelectorAll('.card').forEach(card => {
                card.style.maxWidth = '300px';
            });

            feedbacks.querySelector('.feedback-cards').style.flexDirection = 'row';
            feedbacks.querySelectorAll('.feedback-card').forEach(card => {
                card.style.maxWidth = '200px';
            });
        }
    }

    // Adjust layout on load and on resize
    adjustLayout();
    window.addEventListener('resize', adjustLayout);
});
document.addEventListener('DOMContentLoaded', function () {
    const carouselInner = document.querySelector('.carousel-inner');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    let index = 0;
    const cardWidth = document.querySelector('.feedback-card').offsetWidth + 16; // 16px é a margem

    function updateCarousel() {
        const offset = -index * cardWidth;
        carouselInner.style.transform = `translateX(${offset}px)`;
    }

    nextButton.addEventListener('click', function () {
        index = (index + 1) % document.querySelectorAll('.feedback-card').length;
        updateCarousel();
    });

    prevButton.addEventListener('click', function () {
        index = (index - 1 + document.querySelectorAll('.feedback-card').length) % document.querySelectorAll('.feedback-card').length;
        updateCarousel();
    });

    // Inicializa o carrossel
    updateCarousel();
});
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
});
