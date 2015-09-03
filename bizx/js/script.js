(function ($) {
  var icon = $('#site-search').find('i'),
    form = icon.next();

  form.hide();
  icon.css('cursor', 'pointer')
    .on('mouseover', function () {
      icon.toggleClass('fa-times fa-search');
      form.slideToggle();
    });

  console.log('Never mistake motion for action.');
})(jQuery);