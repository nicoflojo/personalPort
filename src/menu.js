var count = 0;
var $overlay = $('.overlay');
var $links = $overlay.find('ul')

$links.velocity({
  opacity: 0.4,
  translateY: '-75%',
  translateX: '-50%',
  rotateX: '35deg'
}, 0);

// new function
var display = function(){
  {
    // Show
    $overlay
      .velocity('stop')
      .velocity('fadeIn', 500);

    $links
      .velocity('stop')
      .velocity({
        opacity: 1,
        translateY: '-50%',
        translateX: '-50%',
        rotateX: '0deg'
      }, 500);
  }
};

setTimeout(display, 34000);

$("#replay").click(function() {
  location.reload(true);
});