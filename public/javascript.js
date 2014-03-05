$(document).ready(function () {

  $("div.downarrow").on("click", function (event) {

    if (!$(this).hasClass("active")) {

      // change less back to more for all .downarrow divs & change more to less for this downarrow
      $("div.downarrow").text("more");
      $(this).text("less");

      // remove grey background on all .project divs & add grey background to project div
      $("div.project").removeClass("clickedgrey");
      var parents = $(this).parents().first();
      parents.addClass("clickedgrey");

      // hide all descriptions & show description for this project div
      $("div.descriptionz").hide("slow", function () {});
      var desc = $(this).siblings(".descriptionz");
      desc.show("slow", function () {});

 
      // remove class active from all downarrow divs & add it to this downarrow div
      $("div.downarrow").removeClass("active");
      $(this).addClass("active");

      console.log("if");

    } else if ($(this).hasClass("active")) {

      // change less back to more for all .downarrow divs
      $("div.downarrow").text("more");

      // remove grey background on all .project divs
      $("div.project").removeClass("clickedgrey");

      // hide all descriptions
      $("div.descriptionz").hide("slow", function () {});

      // remove class active
      $("div.downarrow").removeClass("active");

      console.log("else if wha???");

    } else {
      console.log("else");
      console.log(this);
    }// else
  }); // $("div.downarrow")
}); // $(document).ready