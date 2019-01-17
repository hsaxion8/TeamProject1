$(document).ready(function () {

    $(document).on("click", ".select-btn", displayPlaceCoupons);



    // displayPlaceCoupons function re-renders the HTML to display the appropriate content
    function displayPlaceCoupons() {


        // variable for selected Place
        var place = "Walmart";
        console.log(place);

        var place = $(this).attr("selected-place");
        // Constructing a queryURL using the topic


        // These code snippets use an open-source library. http://unirest.io/nodejs
        var queryURL = "https://udayogra-deal-and-coupons-v1.p.rapidapi.com/dl?merchant=mcdonalds&submittype=deals&action=getoffersbymerchant" + "&api_key=b8a28035afmshd00b7fe0009132bp116bdbjsn15bf0056f371&limit=10";
        console.log(queryURL);

        $.ajax({
            method: "GET",
            url: queryURL,
            headers: {
                "X-RapidAPI-Key": "b8a28035afmshd00b7fe0009132bp116bdbjsn15bf0056f371"
            }
        })




            //var queryURL = "https://udayogra-deal-and-coupons-v1.p.mashape.com/dl?action=getoffersbymerchant&merchant=" +
            //place + "&submittype=deals&api_key=J78jBfpm8omshpD4Gx4GUB0YbkWBp1fsQkYjsn2PE7Q9e1P7cb&limit=10";



            // After data comes back from the request store the data results in the variable
            .then(function (response) {
                console.log(response);

                var results = response.data;

                $("#coupons-view").empty();
                // Loop through each result item and create div for rating and image
                for (var i = 0; i < results.length; i++) {

                    var couponDiv = $("<div>");
                    var couponImage = $("<img>");
                    couponImage.addClass("placeCoupons");
                    couponImage.attr("src", results[i].images.fixed_height_still.url);
                    var p = $("<p>").text("Rating: " + results[i].rating);

                    // Appending the paragraph and image tag to the topicDiv
                    couponDiv.append(couponImage);
                    couponDiv.append(p);


                    // Prependng the topicDiv to the HTML page in the gifs div
                    $("#coupons-view").prepend(couponDiv);
                }
            });

    };

})
