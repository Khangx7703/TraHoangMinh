//slider gallery
function imgSlide() {
    //khoi tao
    var img = document.querySelector('.sliders');
    if (document.contains(img) == true) {
        var flkty = new Flickity(
            img,
            {
                freeScroll: false,
                prevNextButtons: true,
                wrapAround: true,
                lazyLoad: 3,
                draggable: false,
                autoPlay: 2000,
                pauseAutoPlayOnHover: true
            }
        );
    }
}
window.addEventListener('load', function () {
    imgSlide();
    //    slider();
})