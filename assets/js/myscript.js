// navbar scroll
$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
    if (scrollTop > 1) {
        $('#navbar').css('padding', '0 20px')
    } else {
        $('#navbar').css('padding', '20px')
    }
})
