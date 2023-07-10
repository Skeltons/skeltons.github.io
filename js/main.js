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
    
    let isExpanded = false;

    $('#navbarContent').on('shown.bs.collapse', function() {
        isExpanded = true;
    })

    $('#navbarContent').on('hidden.bs.collapse', function() {
        isExpanded = false;
    })

    $('.nav-link, .navbar-brand').on('click', function() {
        $('nav').find('.active').removeClass('active');
        $(this).addClass('active');
        changeSection();
        if (isExpanded) {
            let navbar = $('#navbarContent')
            let bsCollapse = new bootstrap.Collapse(navbar, {
                toggle : true
            })
        }
    });

    changeSection();
});

