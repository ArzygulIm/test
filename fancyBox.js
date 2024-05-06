
$(document).ready(function () {
    $('img').fancybox({
        afterClose: function() {
            $('img').show();
        }
    });
});
