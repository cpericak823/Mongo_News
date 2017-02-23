  $(".scraper").on("click", function() {
      $(".modal-body").html('<p>' + "NY Times articles have been gathered" + '</p>');

      $("#scraperModal").modal("show");
  });
