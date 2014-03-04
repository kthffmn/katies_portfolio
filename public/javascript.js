$(document).ready(function(){

  $("div.downarrow").on("click", function(event) {

    if (!$(this).hasClass("active") && (!$(this).parents().first().hasClass("disabled"))) {

      // change more to less, add active class
      $(this).text("less");
      $(this).addClass("active");

      // add grey background to project div
      var rents = $(this).parents().first();
      rents.addClass("clickedgrey");

      // disable other projects
      var otherProjects = $(".project").not(rents);
      otherProjects.addClass("disabled");

      // show descriptions
      var desc = $(this).siblings(".descriptionz");
      desc.show( "slow", function() {
      });

      console.log("if");

    } else if (!$(this).parents().first().hasClass("disabled")) {

      // change less back to more, remove active class
      $(this).text("more");
      $(this).removeClass("active");

      // remove grey background
      var parents = $(this).parents().first();
      parents.removeClass("clickedgrey");

      // enable all projects
      $(".project").removeClass("disabled");

      // hide description
      var description = $(this).siblings(".descriptionz");
      description.hide( "slow", function() {
      }); 

      console.log("else if");

    } else {
      var clicked = $(this);
      console.log("else: disabled");
    }

  });

});