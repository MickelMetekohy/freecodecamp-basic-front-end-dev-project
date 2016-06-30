(function($) {

  var opts = {
    scrolltoSpeed: 1000,
    scrolltoOffset: 50,
    scrollSpyTarget: '#bs-navbar',
    scrollSpyOffset: 100,
  }

  //smooth scroll to nav
  //thanks css-tricks.com
  $('a[href*="#"]:not([href="#"])').on('click', function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - opts.scrolltoOffset
        }, opts.scrolltoSpeed);
        return false;
      }
    }
  });

  //scroll spy
  $('body').scrollspy({
    target: opts.scrollSpyTarget,
    offset: opts.scrollSpyOffset,
  });

  //form style
  $('.form-control').on('blur', function() {
    $(this).removeClass('set');
    $('.form-control').each(function( i, val) {
      if($(val)[0].value.length !== 0) {
        $(val).addClass('set');
      }
    });

  });

})(jQuery);
