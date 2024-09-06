document.addEventListener('DOMContentLoaded', function() {
    const closeBtn = document.querySelector('.close-btn');
    const announcementBar = document.querySelector('.announcement-bar');

    closeBtn.addEventListener('click', function() {
        announcementBar.style.display = 'none';
    });
});
