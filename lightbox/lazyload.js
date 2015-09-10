
//when window is loaded
$(window).bind("load", function() {
  //image with class 'lazy', call lazyload plugin (see html script for details)
  $('img.lazy').lazyload({
    // listener - listens for 'openlightbox' to be called in the code (see lightbox.js for the other side of the call)
    event: 'openlightbox'
  });
});
