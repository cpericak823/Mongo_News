$(document).ready(function() {
    //on click of the scraper button, show the modal with the message below
    $("#scraper").on("click", function() {
        event.preventDefault();
        $(".modal-body").html('<p>' + "20 NY Times articles have been gathered" + '</p>');
        $("#scraperModal").modal("show");
        $('#comment-form').modal('hide');
    });

    //on click of the comment button, show the modal with a text box to add a comment to the article
    $("#comment").on("click", function() {
        event.preventDefault();
        $(".modal-body").html('<p>' + "Leave your comment here" + '</p>');
        $("#scraperModal").modal("show");
        $('#comment-form').modal('show');
    });
});
