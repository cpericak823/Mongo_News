//on click of the scraper button, show the modal with the message below
$("#scraper").on("click", function() {
    $(".modal-body").html('<p>' + "20 NY Times articles have been gathered" + '</p>');
    $("#scraperModal").modal("show");
});
