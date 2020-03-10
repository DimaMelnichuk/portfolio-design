var lazyload = lazyload || {};

(function($, lazyload) {

    "use strict";

    var page = 2,
        buttonId = "#button-more",
        loadingId = "#loading-div",
        container = "#data-container";

    lazyload.load = function() {

        var url = "./" + page + ".html";

        $(buttonId).hide();
        $(loadingId).show();

        $.ajax({
            url: url,
            success: function(response) {
                if (!response || response.trim() == "NONE") {
                    $(buttonId).fadeOut();
                    $('.button-blog').text("No more posts");
                    return;
                }
                appendContests(response);
            },
            error: function(response) {
                $('.button-blog').text("No more posts");
            }
        });
    };

    var appendContests = function(response) {
        var id = $(buttonId);

        $(buttonId).show();
        $(loadingId).hide();

        $(response).appendTo($(container));
        page += 1;
    };

})(jQuery, lazyload);