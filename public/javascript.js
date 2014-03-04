$(document).ready(function(){

  $("div.downarrow").on("click", function(event) {

    if(!$(this).hasClass("chosen")) {
      $(this).addClass("chosen");
      $(this).text("<i class="fa fa-angle-double-up"></i>");
      $(this).closest(".descriptionz").show( "slow", function() {
        // closes show function
      });
    // closes if 
    } else {
      $(this).removeClass("chosen");
      $(this).text("<i class="fa fa-angle-double-up"></i>");
      $(this).closest(".descriptionz").hide( "slow", function() {
        // closes hide function
      });
    // closes else
    }
  // closes downarrow click function
  });
// closes document ready
});