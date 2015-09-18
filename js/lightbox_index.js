  //when the document is ready, start function
  $(document).ready(function(){
  //when class="lightbox" is clicked, start function
    $('.lightbox').click(function(){
    //images with class="lazy" are loaded/triggered when 'openlightbox' is called (this is the other end metephoric phone call)
      $('img.lazy').trigger('openlightbox');
    //class="backdrop" and "box" are shown/appear when ".lightbox" is clicked
    // $('.backdrop, .box').show();
    //console.log($(this));
    //console.log($(this).attr("data-id"));
    //      .myclass[reference="12345"]
    var box_lookup = '.box[data-id="' + $(this).attr("data-id") + '"]';
    console.log(box_lookup);
    $(box_lookup).show();
    var backdrop_lookup = '.backdrop[data-id="' + $(this).attr("data-id") + '"]';
    console.log(backdrop_lookup);
    $(backdrop_lookup).show();
    ga('send', 'event', 'lightbox', $(this).attr("data-id"));
  });
  // pretty much the same as above, but this time the box and backdrop close when the ".close" class is clicked.
  $('.close').click(function(){
  //  $('.backdrop, .box').hide();
    var box_lookup = '.box[data-id="' + $(this).attr("data-id") + '"]';
    console.log(box_lookup);
    $(box_lookup).hide();
    var backdrop_lookup = '.backdrop[data-id="' + $(this).attr("data-id") + '"]';
    console.log(backdrop_lookup);
    $(backdrop_lookup).hide();
    });
  });

  //when window is loaded
  $(window).bind("load", function() {
  //image with class 'lazy', call lazyload plugin (see html script for details)
    $('img.lazy').lazyload({
    // listener - listens for 'openlightbox' to be called in the code (this is one end of the metephoric phonecall)
    event: 'openlightbox'
    });
  });
