document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('videosWrapper');
    const placeholder = document.querySelector('.video-placeholder');

    video.addEventListener('loadeddata', function () {
        // Video is loaded, hide the placeholder
        placeholder.style.display = 'none';
        // Display the video
        video.style.display = 'block';
    });
});
