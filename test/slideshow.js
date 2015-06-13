describe('simple-slideshow', function () {
    var slsh, elm,
        options = {timeout: 10};

    function createElement(tag, props, child) {
        var elm = document.createElement(tag);
        for (var key in props) {
            elm.setAttribute(key, props[key]);
        }
        if (child) elm.appendChild(child);
        return elm;
    }

    beforeEach(function () {
        var ul = createElement('ul', {'class': 'testslides'});
        ul.appendChild(createElement('li', null, createElement('img', {title: 'Title0', alt: 'Alt0'})));
        ul.appendChild(createElement('li', null, createElement('img', {title: 'Title1', alt: 'Alt1'})));
        document.body.appendChild(ul);
        slsh = new SlideShow('.testslides', options);
        elm = slsh.element;
    });

    afterEach(function () {
        slsh.destroy();
        elm.parentNode.removeChild(elm);
        elm = null;
    });

    it('should be classy', function () {
        expect(elm.classList).toContain('slideshow');
        expect(elm.classList).toContain('preload');
        expect(elm.querySelector('li:first-child').classList).toContain('show-animation');
    });

    it('should add caption', function () {
        expect(elm.querySelector('.caption')).not.toBeNull();
    });

    it('should remove preload', function (done) {
        setTimeout(function () {
            expect(elm.classList).not.toContain('preload');
            done();
        });
    });

    it('should set height on container', function () {
        expect(elm.style.height).toMatch(/\dpx$/);
    });

    it('should change to next slide', function (done) {
        setTimeout(function () {
            expect(elm.querySelector('li:first-child').classList).not.toContain('show-animation');
            expect(elm.querySelector('li:last-child').classList).toContain('show-animation');
            done();
        }, options.timeout);
    });

    it('should die violently if no element', function () {
        expect(function () { new SlideShow('.noElement'); }).toThrow();
    });

    it('should die violently if no children', function () {
        document.body.appendChild(createElement('ul', {'class': 'emptyElement'}));
        expect(function () { new SlideShow('.emptyElement'); }).toThrow();
    });

    it('should work without captions', function () {
        var ul = createElement('ul', {'class': 'noCaptions'});
        ul.appendChild(createElement('li', null, createElement('img', {alt: 'Alt0'})));
        ul.appendChild(createElement('li', null, createElement('img', {alt: 'Alt1'})));
        document.body.appendChild(ul);

        elm = new SlideShow('.noCaptions');
        expect(elm.querySelector('.caption')).toBeNull();
    });
});