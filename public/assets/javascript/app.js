$(document).ready(function() {
    //on click of the scraper button, show the modal with the message below
    $(".scraper").click(function(event) {
        event.preventDefault();
        $(".modal-body").html('<p>' + "20 NY Times articles have been gathered" + '</p>');
        $("#scraperModal").modal("show");
        $('#comment-form').modal('hide');
    });

    //on click of the comment button, show the modal with a text box to add a comment to the article
    // $("#save-button").on("click", function() {



    // });

    // //capture and trim the text from the input box
    // var userpost = $('#user-comment').val().trim();

    // //call the viewArticles function with the userpost variable as the parameter
    // viewArticles(userpost);
    // //function definition that adds the user comment 
    // function viewArticles(Post) {
    //     $.post("/", Post, function(user) {
    //         window.location.href = "/articles";
    //     }).fail(function(err) {
    //         alert('Articles not collected');
    //     });

    // }



    // This function grabs posts from the database and updates the view
    // function getPosts(category) {
    //     var categoryString = category || "";
    //     if (categoryString) {
    //         categoryString = "/category/" + categoryString;
    //     }
    //     $.get("/api/posts" + categoryString, function(data) {
    //         console.log("Posts", data);
    //         posts = data;
    //         if (!posts || !posts.length) {
    //             displayEmpty();
    //         } else {
    //             initializeRows();
    //         }
    //     });
    // }


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
