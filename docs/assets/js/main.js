// Contador regressivo para 30/12/2026
const targetDate = new Date('2026-12-30T00:00:00').getTime();
const countdownElement = document.getElementById('countdown');

function updateCountdown() {
    if (!countdownElement) {
        return;
    }

    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    } else {
        countdownElement.innerHTML = 'Lançamento Disponível!';
    }
}

if (countdownElement) {
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Formulário de feedback
const feedbackForm = document.getElementById('feedbackForm');

if (feedbackForm) {
    feedbackForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const titleInput = document.getElementById('title');
        const bodyInput = document.getElementById('body');
        const title = encodeURIComponent(titleInput ? titleInput.value : 'Feedback Helianto Condominium');
        const body = encodeURIComponent(bodyInput ? bodyInput.value : '');
        const url = `mailto:suporte@caracore.com.br?subject=${title}&body=${body}`;

        window.location.href = url;
    });
}
