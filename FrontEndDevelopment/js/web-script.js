// Wow
new WOW().init();

// Tether: Position Loader
new Tether({
    element: mobileUI,
    target: phone,
    attachment: 'middle center',
    targetAttachment: 'middle center',
    offset: '11px 1px'
});

// Tether: Loading
new Tether({
    element: loadingCircle,
    target: loadingFinger,
    attachment: 'middle center',
    targetAttachment: 'middle center'
});

$(function () {
    $('.ichi').hide();
    $('.gon').hide();


    // Tether: Tool-tips
    $('[data-toggle="tooltip"]').tooltip();

    // Progress Bar
    var bar = new ProgressBar.Line('#loadingBar', {
            strokeWidth: 4,
            easing: 'easeInOut',
            duration: 1400,
            color: '#FFEA82',
            trailColor: '#eee',
            trailWidth: 1,
            svgStyle: {width: '100%', height: '100%'},
            from: {color: '#fab15b'},
            to: {color: '#f96332'},
            step: (state, bar) => {
            bar.path.setAttribute('stroke', state.color);
        }
    });

    function animateBar() {
        bar.animate(1.0);  // Number from 0.0 to 1.0
    }

    // Intro Transition
    function sendo() {
        $('.loader').fadeIn(function() {
            $('#loadingCircle').fadeIn();
            setTimeout(function() {
                $('#loading').html('COMPLETED')
            },4200);
            setTimeout(function(){
                animateBar();
            },3000)
        });
        $('.ichi').fadeOut();
        $('.gon').hide();

        setTimeout(function(){
            $('#loadingCircle').fadeOut(function() {
                $('.loader')
                    .addClass('fadeOutLeft')
                    .fadeOut();
                enterTheRealm();
                bar.animate(0);
            });

            function enterTheRealm() {
                $('.ichi').fadeIn();
            }

            setTimeout(function() {
                $('#loading').html('LOADING')
                $('.loader').removeClass('fadeOutLeft');
                $('.gon').fadeIn();
                $('.ichi').fadeOut();

                setTimeout(function() {
                    sendo();
                },5000)
            },5000);
        },5000);
    }

    sendo();
});

