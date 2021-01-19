// scrollmagic gallery page 
function splitScroll() {
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        duration: '400%',
        triggerElement: '.about-title',
        triggerHook: 0
    })
    .setPin('.about-title')
    // .addIndicators()
    .addTo(controller);
}

splitScroll();