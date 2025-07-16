document.querySelectorAll('.square').forEach(square => {
    square.addEventListener('click', function() {
        this.classList.toggle('flipped');
    });
});