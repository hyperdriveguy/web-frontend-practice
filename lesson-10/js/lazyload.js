const preloadableImages = document.querySelectorAll("[data-src]");

function imagePreload(image) {
    const src = image.getAttribute("data-src");

    if (!src)
        return;

    image.src = src;
    image.classList.add("remove-blur");
}

const imageOptions = {
    threshold: 0,
    rootMargin: '0px 0px 300px 0px'
};

const imageObserver = new IntersectionObserver((entries, imageObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }
        else {
            imagePreload(entry.target);
            imageObserver.unobserve(entry.target);
        }
    })
}, imageOptions);

preloadableImages.forEach((image) => {
    imageObserver.observe(image);
});