//when the document is ready, start function
$(document).ready(function(){
  //when class="lightbox" is clicked, start function
  $('.lightbox').click(function(){
    //images with class="lazy" are loaded/triggered when 'openlightbox' is called (this is the other end metephoric phone call)
    $("img.lazy").trigger('openlightbox');
    //class="backdrop" and "box" are shown/appear when ".lightbox" is clicked
    $('.backdrop, .box').show();
});
// pretty much the same as above, but this time the box and backdrop close when the ".close" class is clicked.
$('.close').click(function(){
  $('.backdrop, .box').hide();
  });
//  $('.backdrop').click(function(){
  //  $('.backdrop, .box').toggle(false);
});

//when window is loaded
$(window).bind("load", function() {
  //image with class 'lazy', call lazyload plugin (see html script for details)
  $('img.lazy').lazyload({
    // listener - listens for 'openlightbox' to be called in the code (this is one end of the metephoric phonecall)
    event: 'openlightbox'
  });
});
