$(document).ready(function(){

  $("div.downarrow").on("click", function(event) {

    if(!$(this).hasClass("chosen")) {
      $(this).addClass("chosen");
      var desc = $(this).siblings(".descriptionz");
      // $(this).text("<i class="fa fa-angle-double-up"></i>");
      desc.show( "slow", function() {
      }); 
    } else {
      $(this).removeClass("chosen");
      var desc = $(this).siblings(".descriptionz");
      // $(this).text("<i class="fa fa-angle-double-down"></i>");
      desc.hide( "slow", function() {
      });
    }
  });
});