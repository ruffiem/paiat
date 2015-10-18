/* Paiat : parallax almost in a tweet by ruffiem */

$(document).ready(function(){
  $(window).on('scroll load', function(){
    $('.parallax').each(function(){
      var c = $(this);
      var o = c.parent('div').offset();
      var h = c.parent('div').height();
      var s = c.data('speed');
      var sA = o.top - $(window).height();
      var eA = o.top+h;
      var sO = $(document).scrollTop();
      if(sA > sO || eA < sO) return;
      c.css({'top': ((sO-sA)*s)*(-1)});
    });
  });
});