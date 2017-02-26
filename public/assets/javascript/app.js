$(document).ready(function() {
    //on click of the scraper button, show the modal with the message below
    $(".scraper").click(function(event) {
        event.preventDefault();
        $(".modal-body").html('<p>' + "20 NY Times articles have been gathered" + '</p>');
        $("#scraperModal").modal("show");
        $('#comment-form').modal('hide');
    });

    //on click of the save button, show the save modal
    $(".save-button").on("click", (function(event) {
        event.preventDefault();
        var currentURL = window.location.origin;
        var saveButton = $(this).attr("id");
        // post the newly added data
        $.ajax({
            url: currentURL + "/" + savebutton,
            data: { title: savebutton },
            type: "PUT",
            success: function(res) {
                window.location.replace('/savedarticles');
            }
        });

        //on click of the submit button
        $(".comment-form-form").on("click", function(e) {
            e.preventDefault();
            var currentURL = window.location.origin;
            var userComment = $("#article_comment").val().trim();

            // post the newly added data
            $.post(currentURL + "/", { article_comment: userComment }, function(res) {
                window.location.replace('/savedarticles');
            });

        });

    }));


    // This function does an API call to delete posts
    // function deletePost(id) {
    //     $.ajax({
    //             method: "DELETE",
    //             url: "/api/posts/" + id
    //         })
    //         .done(function() {
    //             getPosts(postCategorySelect.val());
    //         });
    // }

});
