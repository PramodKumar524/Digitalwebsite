<script>
  document.addEventListener('DOMContentLoaded', function () {
    const greetingEl = document.getElementById('greeting');
    if (!greetingEl) return; // Avoid error if element doesn't exist

    const hour = new Date().getHours();
    const greeting =
      hour < 12 ? 'Good Morning!' : 
      hour < 18 ? 'Good Afternoon!' :
       'Good Evening!';

    greetingEl.textContent = greeting;
  });
</script>