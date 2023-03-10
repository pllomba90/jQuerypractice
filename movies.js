
        $("#movie-form").on("submit", function(evt){
        evt.preventDefault();
        let title = $("#title").val();
        let rating = $("#rating").val();
        $("li").add("li").text(`${title}, ${rating}`);
       
        
        
    });




