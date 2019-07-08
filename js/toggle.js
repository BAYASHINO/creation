(function($) {
  $(function() {
    var $header = $('#top-head');

    $(window).scroll(function() {
      if ($(window).scrollTop() > 300) {
        $header.addClass('fixed');
      } else {
        $header.removeClass('fixed');
      }
    });

    $('#nav-toggle').click(function(){
      $header.toggleClass('open');
    });

  });
})(jQuery);
