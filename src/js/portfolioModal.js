const screenWidth = window.innerWidth;

if (screenWidth > 1024) {
    const exteriorsModal = new SimpleLightbox('.exteriors a', { captionDelay: 250 });
    const interiorsModal = new SimpleLightbox('.interiors a', { captionDelay: 250 });
}
