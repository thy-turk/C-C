$('.about-us').hide();

$('#nav-toggle').on("click", function() {
    $('#land-text').toggle();
});

$('#about-us-btn').on('click', function () {
    $('.home-land').hide();
    $('.divider').hide();
    $('#land-statement').hide();
    $('.about-us').show();
})

$('#home-btn').on('click', function () {
    $('.home-land').show();
    $('.divider').show();
    $('#land-statement').show();
    $('.about-us').hide();
})