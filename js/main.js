$('document').ready(function() {

    const changeSection = () => {
        setTimeout(function () {
            if (window.location.hash) {
                let nav = window.location.hash;
                $('section').addClass('d-none');
                $(nav).removeClass('d-none');
            }
        }, 0);
    }

    $('.nav-link, .navbar-brand').on('click', function() {
        $('nav').find('.active').removeClass('active');
        $(this).addClass('active');
        changeSection();
    });

    changeSection();
});

