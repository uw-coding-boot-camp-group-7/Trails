$(document).ready(function() {

    // Getting a reference to the passport 
    var $getNewPassport = $("get.new-passport");
    // Getting a wish trails and will go to wish trails container
    var $getWishTrails = $("get.wish-trails");
    // Getting a hiked trails and will go to hiked trails container
    var $getHikedTrails = $("get.hiked-trails");

    // Adding event listeners for completing, and deleting trails
    $(document).on("click", "button.complete", toggleComplete);
    $(document).on("click", "button.delete", deleteTrails);

    // Our initial wish and hiked trails
    var wishTrails = [];
    var hikedTrails = [];

    // Initializing rows
    function initializeRows() {
        $getWishTrails.empty();
        var rowsToAdd = [];
    }



});