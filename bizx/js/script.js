(function ($) {
  var search = $('#site-search'),
    form = search.next();

  form.hide();
  search.css('cursor', 'pointer')
    .on('mouseover', function () {
      search.addClass('close');
      form.show();
    });
  console.log('Never mistake motion for action.');
})(jQuery);