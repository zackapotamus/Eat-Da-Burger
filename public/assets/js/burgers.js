// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".devour").on("click", function(event) {
    var id = $(this).data("id");

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: {devoured: true}
    }).then(
      function() {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $("#submit-burger").on("click", function(event) {
    let $burgertextarea = $("#burger-textarea");
    if (!$burgertextarea.val().trim()) return;
    var newBurger = {
      name: $("#burger-textarea").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
