$(document).ready(function() {
    //on click of the scraper button, show the modal with the message below
    $(".scraper").click(function(event) {
        event.preventDefault();
        $(".modal-body").html('<p>' + "20 NY Times articles have been gathered" + '</p>');
        $("#scraperModal").modal("show");
        $('#comment-form').modal('hide');
        // viewArticles(Post);

    });

    //on click of the comment button, show the modal with a text box to add a comment to the article
    $("#comment-button").on("click", function() {
        event.preventDefault();
        $(".modal-body").html('<p>' + "Leave your comment here" + '</p>');
        $("#scraperModal").modal("show");
        $('#comment-form').modal('show');

        //capture and trim the text from the input box
        var userpost = $('#user-comment').val().trim();

        //call the viewArticles function with the userpost variable as the parameter
        viewArticles(userpost);
    });

    //function definition that adds the user comment 
    function viewArticles(Post) {
        $.post("/", Post, function(user) {
            window.location.href = "/articles";
        }).fail(function(err) {
            alert('Articles not collected');
        });

    }

});
