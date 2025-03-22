document.addEventListener('DOMContentLoaded', function () {
    // Example: Smooth scroll when clicking 'Join the Zlurp Army' button
    const joinButton = document.querySelector('button');
    joinButton.addEventListener('click', function() {
        document.getElementById('community').scrollIntoView({ behavior: 'smooth' });
    });
});
