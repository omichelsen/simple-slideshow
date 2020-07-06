# simple-slideshow

[![Build Status][travis-image]][travis-url]
[![Test Coverage][coveralls-image]][coveralls-url]

Simple slideshow library. Uses CSS3 transformations for animation. Compatible with Chrome, Firefox, Safari and IE 10+.

No dependencies, written in VanillaJS.

See the __[demo](https://rawgit.com/omichelsen/simple-slideshow/master/demo/demo.html)__.

## Install

```bash
npm install simple-slideshow
```

Include the script and stylesheet in your web page:

```html
<link rel="stylesheet" href="node_modules/simple-slideshow/src/slideshow.css">

<script src="node_modules/simple-slideshow/src/slideshow.js"></script>
```

## Usage

Create a list of images, and the `title` and `alt` texts will be used as captions. You can also wrap them in a link to make them clickable.

```html
<ul class="slideshow">
  <li><a href="test1.html"><img src="test1.jpg" title="Test 1" alt="Description for image 1"></a></li>
  <li><a href="test2.html"><img src="test2.jpg" title="Test 2" alt="Description for image 2"></a></li>
  <li><a href="test3.html"><img src="test3.jpg" title="Test 3" alt="Description for image 3"></a></li>
</ul>
```

Initialize the slideshow:

```javascript
const slideshow = new SlideShow('.slideshow', { timeout: 5000 });
```

The optional setting `timeout` defines how many miliseconds to wait between slides.

You can get a reference to the target element by the property `slsh.element`.

If used in an single-page app you can release all resources by calling `slsh.destroy()`.

### Styling

You should set a default size for the slideshow that matches your images. You can do this in CSS:

```html
<style>
  .slideshow {
      width: 1024px;
      height: 768px;
  }
</style>
```

[travis-image]: https://img.shields.io/travis/omichelsen/simple-slideshow/master.svg
[travis-url]: https://travis-ci.org/omichelsen/simple-slideshow
[coveralls-image]: https://img.shields.io/coveralls/omichelsen/simple-slideshow/master.svg
[coveralls-url]: https://coveralls.io/r/omichelsen/simple-slideshow?branch=master