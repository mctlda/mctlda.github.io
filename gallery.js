function imageGallery() {
    const highlight = document.querySelector("gallery-highlight");
    const previews = document.querySelectorAll('.towerbridge-preview img');

    previews.forEach(preview => {
        preview.addEventListener('click', function() {
            const smallSrc = this.src;
            const bigSrc = smallSrc.replace('small', 'big');
            highlight.src = bigSrc;
        });
    });
}

imageGallery();