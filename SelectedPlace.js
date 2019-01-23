$(document).ready(function () {

    $(document).on("click", ".select-btn", displayPlaceRestaurantDetails);



    // displayPlaceCoupons function re-renders the HTML to display the appropriate content
    function displayPlaceRestaurantDetails() {


        // variable for selected Place
        var place = "16774318";
        console.log(place);

        //var place = $(this).attr("selected-place");
        // Constructing a queryURL using the topic


        // Pull in data with zomato api
        var queryURL = "https://developers.zomato.com/api/v2.1/restaurant?res_id="+ place +"&api_key=40dfa72638fdd4bc99a0bb21a8c4d08f&limit=10";
        console.log(queryURL);

        $.ajax({
            method: "GET",
            url: queryURL,
            headers: {
                "Accept": "application/json",
                "user-key": "40dfa72638fdd4bc99a0bb21a8c4d08f",
            }
        })

            // After data comes back from the request store the data results in the variable
            .then(function (response) {
                console.log(response);

                var results = response.data;

                $("#restaurant-view").text(JSON.stringify(response));
                // Loop through each result item and create div for rating and image
                for (var i = 0; i < results; i++) {

                    var restaurantDetailsDiv = $("<div>");
                    var restaurantDetailsImage = $("<img>");
                    restaurantDetailsImage.addClass("placeRestaurantDetails");
                    restaurantDetailsImage.attr("featured_image", results[i].featured_image);
                    var p = $("<p>").text("Cuisines: " + results[i].cuisines);
                    var p = $("<p>").text("Average Cost for Two: $");
                    var p = $("<p>").text("Link to Menu:" + resutls[i].menu_url);
                    var p = $("<p>").text("Restaurant Rating:" + results[i].user_rating.aggregate_rating.rating_test);

                    console.log(restaurantDetailsDiv);
                    console.log(restaurantDetailsImage);
                    console.log(p);

                    // Appending the paragraph and image tag to the topicDiv
                    restaurantDetailsDiv.append(restaurantDetailsImage);
                    restaurantDetailsDiv.append(p);


                    // Prependng the topicDiv to the HTML page in the gifs div
                    $("#coupons-view").prepend(restaurantDetailsDiv);
                }
            });

    };

})
