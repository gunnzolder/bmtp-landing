(function($){

    var date = '2017/06/05';

    $('#clock').countdown(date, function(event) {
        $(this).html(event.strftime('%D dage %H:%M:%S'));
    });
})($);