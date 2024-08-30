window.addEventListener('load', () => {
    setTimeout(() => {
        // Hide the main video and show the note section
        document.getElementById('mainVideo').style.display = 'none';
        document.getElementById('noteSection').style.display = 'block';
    }, 35000); // 40 seconds delay
});