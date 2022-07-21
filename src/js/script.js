/**
 * @file
 * Custom javascript for use in your theme.
 */

(function ($) {
  
  $('#critical').addClass('ready');
  
  var cclass = "jCard";
  $("." + cclass).jCard();
  var card = $($("#content").find("." + cclass));
  card.each(function () {
    var t = $(this),
      title = t.children().first(),
      link = title.find("a").attr("href");
    if (typeof link != "undefined") {
      t.wrap('<a href="' + link + '" class="' + card.attr("class") + '" />');
    }
    title.next().wrapAll('<div class="content"/>');
  });
})(jQuery);
