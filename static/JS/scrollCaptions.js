$(document).ready(function() {
  let scroll = $(window).scrollTop();
  let caption = $('.caption');

  let range = $('.general').height();
  let h     = $(document).height();

  let bottom = (((scroll) * (range)) / h) + 100;
  let width  = (((((scroll) * (10)) / h) + 25)/100) * $(document).width();

  caption.css('bottom', bottom);
  caption.css('width', width);
});

$(document).scroll(function() {
  let scroll = $(window).scrollTop();
  let caption = $('.caption');

  let range = $('.general').height();
  let h     = $(document).height();

  let bottom = (((scroll) * (range)) / h) + 100;
  let width  = (((((scroll) * (5)) / h) + 25)/100) * $(document).width();

  console.log(width);

  caption.css('bottom', bottom);
  caption.css('width', width);
});
