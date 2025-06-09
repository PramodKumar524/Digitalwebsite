// Dynamic greeting based on time of day
window.addEventListener('DOMContentLoaded', () => {
    const greetingEl = document.getElementById('greeting');
    const now = new Date();
    const hour = now.getHours();
    let greeting = '';

    if (hour < 12) {
        greeting = 'Good Morning!';
    } else if (hour < 18) {
        greeting = 'Good Afternoon!';
    } else {
        greeting = 'Good Evening!';
    }

    greetingEl.textContent = greeting;
});
