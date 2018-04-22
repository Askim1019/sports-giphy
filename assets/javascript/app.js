// #sportsButton is the button div id
// #sports-gif is the gif's id
// #sports-input is the input id for text box
// #searchGif is the button

var buttonArray = ["russell westbrook", "cp3", "NBA", "lebron james", "mj", "michael jordan", "jeremy lin", "shaquille o'neal",
                   "stephen curry", "james harden", "kevin durant"];

console.log(buttonArray);

var userInput; 

var apikey = "8rASfvLXk28h2qWjTipLho0mIGLHly8r";
 


$("#searchGif").click(function(event){
    event.preventDefault();
    userInput = $.trim($("#sports-input").val());
    console.log(userInput);
    if (userInput !== "") {
        $("#sportsButton").append("<button class='button'>" + userInput + "</button>");
    }


});

$(document).ready(function(){
    for (var i = 0; i < buttonArray.length; i++) {
        $("#sportsButton").append("<button class='button'>" + buttonArray[i] + "</button>");
    }



});