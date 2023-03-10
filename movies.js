
        $("#movie-form").on("submit", function(evt){
        evt.preventDefault();
        let title = $("#title").val();
        let rating = $("#rating").val();
       function addMovie(){ $("#title-list").append("<li id = 'newMovie'></li>");
        $("#newMovie").text(`${title}, ${rating}`).append("  <button id='delete'> Delete </button>");
       }
       
       addMovie();



    });
    $("#delete").click( function(){
        $.remove("#newMovie");
       });





