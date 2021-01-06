// Lu has lines 1 - 300
//create variable
var recipe;
var movie;

var protein = "";
var vegetable = "";
var grains = "";

//create a get recipe function 
$(".uk-button").on("click", function (event) {
    event.preventDefault();
    if ($(this).attr("data-name") === "meat") {
        protein = $(this).attr("id")
        $(".meat").prop('disabled', true)
    } else if ($(this).attr("data-name") === "vegetable") {
        vegetable = $(this).attr("id")
        $(".vegetable").prop('disabled', true)
    } else {
        grains = $(this).attr("id")
        $(".grain").prop('disabled', true)
    }

    console.log(protein);


    var queryURL = "https://api.edamam.com/search?q=" + protein + "+" + vegetable + "+" + grains + "&app_id=64c826ae&app_key=e07cf4a17fede26c2683f3da76fc456e"

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        //  response = Math.floor((Math.random() * 10));
        for (i = 0; i < 3; i++) {

            $(".name").each(function (i) {
                $(this).text(response.hits[i + 1].recipe.label)
            });

            $('.pic').each(function (i) {
                $(this).attr("src", response.hits[i + 1].recipe.image);
            });

            $(".healthLabel").each(function (i) {
                $(this).text(response.hits[i + 1].recipe.healthLabels)
            });


            $(".link").each(function (i) {
                $(this).prop("href", response.hits[i + 1].recipe.url)
            });

        }
    })
});










































































































































































































































































// Lu lines end
// Charles has lines 301 - 600

// variables go here

// Rendered Buttons will go Here

// Button triggers here

// Food APIs here

// intial array of proteins
// array of grains
// array of veggies

// displayRecipeInfo function re-renders to HTML to dislay content

// creating AJAX call for the specific protein button being clicked.

// creating AJAX call for the movie.

// creating a div to hold the recipe.
// creating a div to hold the movie. 


function getMovie() {

    var movie = ["Titanic", "Inception", "The + Departed", "Catch+Me+If+You+Can", "Gangs+Of+New+York", "The+Aviator", "Django+Unchained", "Revolutionary+Road", "The+Wolf+of+Wall+Street", "This+Boy's+Life", "Shutter+Island", "The+Beach", "Romeo+Juliet", "What's+Eating+Gilbert+Grape", "The+Revenant", "Celebrity", "The+Great+Gatsby", "The+Quick+and+the+Dead", "Blood+Diamond", "The+Basketball+Diaries"];
    var randomMovie = Math.floor(Math.random() * movie.length);
    var queryURL = "https://www.omdbapi.com/?t=" + randomMovie + "&apikey=3e0d88fc";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (result) {
        console.log(result)

        var movieDiv = $("<div class='moviesBtn'>");
        console.log(movieDiv)
    })

};

getMovie();














































































































































































































































































































// Charles lines end