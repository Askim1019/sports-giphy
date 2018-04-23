

$(document).ready(function(){
    var buttonArray = ["russell westbrook", "cp3", "NBA", "lebron james", "antonio brown", "michael jordan", "jeremy lin", "shaq",
                   "stephen curry", "jordan spieth", "kevin durant", "tiger woods"];
    var userInput; 
    var apikey = "8rASfvLXk28h2qWjTipLho0mIGLHly8r&limit=9";

    function renderButtons() {
        $("#sportsButton").empty();


        for (var i = 0; i < buttonArray.length; i++) {
            $("#sportsButton").append("<button class='button' data-query='" + buttonArray[i] + "'>" + buttonArray[i] + "</button>");
        }
    }

    function resetInput(){
        $("#sports-input").val("");
    }

    $("#searchGif").click(function(event){
        event.preventDefault();

        userInput = $("#sports-input").val();

        if (userInput !== "") {
            buttonArray.push(userInput);
            renderButtons();
            renderGif();
            resetInput();
        }

       
    });
        
    function renderGif() {

        $(".button").click(function(){
            $("#sports-gif").empty();
            var query = $(this).attr("data-query");
            console.log(query);
        
            $.ajax({
                url: "https://api.giphy.com/v1/gifs/search?q=" + "sports " + query + "&api_key=" + apikey,
                method: "GET" 
            }).then(function(response){
                console.log(response);
                var results = response.data;

                for (var i = 0; i < results.length; i++) {
                    var gifDiv = $("<div class='gif'>");
                    var p = $("<p>").text("Rating: " + results[i].rating);
                    var gifImage = $("<img class='gif-image'>");
                    
                    gifImage.attr("src", results[i].images.fixed_height_still.url);
                    gifImage.attr("data-still", results[i].images.fixed_height_still.url);
                    gifImage.attr("data-animate", results[i].images.fixed_height.url);
                    gifImage.attr("data-state", "still");


                    gifDiv.append(gifImage);
                    gifDiv.append(p);

                    $("#sports-gif").prepend(gifDiv);
                }

                $(".gif-image").click(function(){
                    var state = $(this).attr("data-state");

                    if (state === "still") {
                        $(this).attr("src", $(this).attr("data-animate"));
                        $(this).attr("data-state", "animate");
                    } else {
                        $(this).attr("src", $(this).attr("data-still"));
                        $(this).attr("data-state", "still");
                    }
                });


            });
        });
    }

    renderButtons();
    renderGif();

    
    
});