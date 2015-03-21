(function (root, factory) {
    /* istanbul ignore next */
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else {
        root.SlideShow = factory();
    }
}(this, function () {

    function createElement(tag, className, text) {
        var elm = document.createElement(tag);
        elm.className = className;
        if (text) elm.appendChild(document.createTextNode(text));
        return elm;
    }

    function SlideShow(selector, options) {
        options = {
            timeout: options && options.timeout || 5000
        };

        var elm = document.querySelector(selector);
        if (!(elm && elm.children.length)) {
            throw new Error('Element not found or no children.');
        }

        // Add slideshow classes
        elm.classList.add('slideshow');
        elm.classList.add('preload');

        // Set the dimensions of the container
        var elmImg = elm.querySelector('img');
        console.log(elmImg.clientWidth, elmImg.clientHeight);
        elm.style.height = elmImg.clientHeight + 'px';
        window.addEventListener('resize', function () {
            elm.style.height = elmImg.clientHeight + 'px';
        });

        // Create caption elements from image properties
        for (var i = 0; i < elm.children.length; i++) {
            var elmChild = elm.children[i];
            elmImg = elmChild.querySelector('img');
            if (elmImg && elmImg.title) {
                var elmCaption = createElement('div', 'caption');
                elmCaption.appendChild(createElement('span', 'title', elmImg.title));
                elmCaption.appendChild(createElement('span', 'alt', elmImg.alt));
                elmChild.appendChild(elmCaption);
            }
        }

        // Show the first slide
        elm.children[0].classList.add('show-animation');

        // Remove preload class to enable transition animations
        setTimeout(function () {
            elm.classList.remove('preload');
        });

        // Start the slidehshow
        var index = 0;
        setInterval(function () {
            elm.children[index].classList.remove('show-animation');
            index = (index + 1) % elm.children.length;
            elm.children[index].classList.add('show-animation');
        }, options.timeout);

        return elm;
    }

    return SlideShow;

}));
