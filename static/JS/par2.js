$(document).ready(function() {
  let scroll = $(window).scrollTop();

  let image = $('.titleImage');
  console.log(image);
  console.log(scroll);

  let bottom = -0.5 * scroll + 130;
  let height = 600 - 0.5 * scroll;

  image.css('bottom', bottom);
  image.css('height', height);
});

$(document).scroll(function(){

  let scroll = $(window).scrollTop();

  let image = $('.titleImage');
  console.log(image);
  console.log(scroll);

  let bottom = -0.5 * scroll + 130;
  let height = 600 - 0.5 * scroll;

  image.css('bottom', bottom);
  image.css('height', height);

});
