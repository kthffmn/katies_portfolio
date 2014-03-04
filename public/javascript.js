$(document).ready(function(){

  $("div.downarrow").on("click", function(event) {

    if(!$(this).hasClass("chosen")) {
      $(this).addClass("chosen");
      var desc = $(this).siblings(".descriptionz");
      desc.show( "slow", function() {
        // closes show function
      });
      debugger
    // closes if 
    } else {
      $(this).removeClass("chosen");
      var desc = $(this).siblings(".descriptionz");
      desc.hide( "slow", function() {
        // closes hide function
      });
    // closes else
    }
  // closes downarrow click function
  });
// closes document ready
});