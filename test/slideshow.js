describe('simple-slideshow', function () {
    var elm,
        options = {timeout: 10};

    function createElement(tag, props) {
        var elm = document.createElement(tag);
        for (var key in props) {
            elm.setAttribute(key, props[key]);
        }
        return elm;
    }

    beforeEach(function () {
        var ul = createElement('ul', {'class': 'testshow'}),
            li0 = createElement('li'),
            li1 = createElement('li');
        li0.appendChild(createElement('img', {title: 'Title1', alt: 'Alt1'}));
        li1.appendChild(createElement('img', {title: 'Title1', alt: 'Alt1'}));
        ul.appendChild(li0);
        ul.appendChild(li1);
        document.body.appendChild(ul);
        elm = new SlideShow('.testshow', options);
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
});