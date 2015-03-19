describe('simple-slideshow', function () {
    var elm;

    function createElement(tag, props) {
        var elm = document.createElement(tag);
        for (var key in props) {
        	elm.setAttribute(key, props[key]);
        }
        return elm;
    }

    beforeEach(function () {
    	var ul = createElement('ul', {'class': 'testshow'}),
    		li = createElement('li'),
    		img = createElement('img');
    	li.appendChild(img);
    	ul.appendChild(li);
        document.body.appendChild(ul);
        elm = new SlideShow('.testshow');
        console.log(elm);
    });

    it('should be classy', function () {
        expect(elm.classList).toContain('slideshow');
    });

});