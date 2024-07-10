$(document).ready(function(){
    $("#text").text("This text has been changed by jQuery!");
})

// Change the href attribute of the link
$("#link").attr("href", "https://newexample.com").text("Go to newexample.com");

// Add a new class to the paragraph
$("#text").addClass("highlight");

// Add some content to the container div
$("#container").html("<p>This content was added by jQuery!</p>");