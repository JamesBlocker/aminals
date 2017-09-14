$(document).ready(function() {
  $(".lions").click(function() {
    $(".lion-panel").fadeIn();
    $(".tiger-panel").fadeOut();
    $(".bear-panel").fadeOut();
  });

  $(".tigers").click(function() {
     $('.tiger-panel').fadeIn();
     $(".lion-panel").fadeOut();
     $(".bear-panel").fadeOut();
  });

  $('.bears').click(function() {
      $('.bear-panel').fadeIn();
      $(".tiger-panel").fadeOut();
      $(".lion-panel").fadeOut();
  });
});
