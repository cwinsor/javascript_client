$(document).ready(function () {
    "use strict";


    //    var gitHubSearch = "https://github.com/search?o=desc&q=blahblahblah&s=stars&type=Repositories";
    //    var gitHubSearch = "https://github.com";
    //    var gitHubSearch = "http://www.cwinsorconsulting.com/projects/";

    //    $.get(gitHubSearch, function(r) {
    //       console.log("got it");
    //    });



    // new object ...
    var results = [{
        name: "Jquery",
        language: "JavaScript",
        score: 4.5,
        showLog: function () {
        },
        owner: {
            login: "shawnw",
            id: 123456
        }
    },
    {
        name: "Jquery UI",
        language: "JavaScript",
        score: 3.5,
        showLog: function () {
        },
        owner: {
            login: "shawnX",
            id: 123456
        }
    }];

    $(resultList).empty();
    $.each(results, function (i, item) {
        var newResult = $("<div class = 'result'>" +
            "<div class='title'>" + item.name + "</div>" +
            "<div>Language: " + item.language + "</div>" +
            "<div>Owner: " + item.owner.login + "</div>" +
            "</div>");

        newResult.hover(function () {
            // make it darker
            $(this).css("background-color", "lightgray");
        }, function () {
            // make it lighter
            $(this).css("background-color", "transparent");
        });

        $(resultList).append(newResult);
    });

    //var resultList = jQuery("#resultsList");
    //var resultList = $("#resultsList");
    //resultList.text("This is from JQuery");

    var toggleButton = $("#toggleButton");
    toggleButton.on("click", function () {
        $(resultList).toggle(500);

        if (toggleButton.text() == "Hide") toggleButton.text("Show");
        else toggleButton.text("Hide");
    });

    $("header nav li").css("font-weight", "bold");


})