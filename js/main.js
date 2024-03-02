$(function() {
    var transTime = 10000;
    var numBgColors = $('.bg-grad').length;
    var bgtrans = setInterval(function () {
        if ($('.bg-grad.active').index() == ($('.bg-grad').length - 1)) {
            $('.bg-grad.active').removeClass('active');
            $('.bg-grad').eq(0).addClass('active');
        } else {
            var curIndex = $('.bg-grad.active').index();
            $('.bg-grad.active').removeClass('active');
            $('.bg-grad').eq(curIndex + 1).addClass('active');
        }
    }, transTime);

    $('.js-tab-trigger').on('click', function(e) {
        e.preventDefault();
    
        var tabName = $(this).data('tab'),
            tab = $('.js-tab-content[data-tab="'+tabName+'"]');
    
        $('.js-tab-trigger.active').removeClass('active');
        $(this).addClass('active');
    
        $('.js-tab-content.active').removeClass('active');
        tab.addClass('active');
    })

});