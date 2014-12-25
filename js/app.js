$(document).ready(function () {

  $('.ryu').mouseenter(function() {
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function() {
    $('.ryu-ready').hide();
    $('.ryu-still').show();
  })
  .mousedown(function(){
    playHadouken(); 
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').show()
    $('.hadouken').finish().show()
    .animate(
      {'left': '300px'},
      500,
      function() {
        $(this).hide();
        $(this).css('left', '-212px');
      }
      );
  })
  .mouseup(function(){
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
  });

  /* The assignment refers to the jQuery page on keydown,
  there it says if it is meant to be globally accessible
  to just attach it to the document, however it also says
  something like only the element selected will get the event handler*/
  $(document).keydown(function(event){
    //console.log("keydown");
    //console.log(event.which);
    if ( event.which === 88 ){
      $('.ryu-still').hide();
      $('.ryu-cool').show();
    }
  }).keyup(function(event){
    //console.log("keyup");
    //console.log(event.which);
    if (event.which === 88) {
      $('.ryu-still').show();
      $('.ryu-cool').hide();
    }
  });
});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

