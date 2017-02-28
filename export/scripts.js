(function(){

    if(window.location.hash == '#edit-content') {
        document.body.contentEditable = true
        document.querySelector('.edit-content').style.display = 'block';

    }

})();
(function($){

    /* Fix the header to top */

    var header              = document.querySelector('header.top-navigation'),
        offsetPosition      = 40,
        stickyClass         = 'top-navigation--sticky',
        scrollSpyClass      = 'top-navigation__menu__link',
        stickyBreakpoint    = 928,
        scrollTopButton     = document.querySelector('a.navigate-top');

    function stickyScroll(e) {

        if( window.pageYOffset > offsetPosition) {
            header.classList.add(stickyClass);
            scrollTopButton.style.display = 'inline-block';
        }

        else {
            header.classList.remove(stickyClass);
            scrollTopButton.style.display = '';
        }
    }


    /* Hide mobile navigation on menu item tap */

    var input = document.querySelector('.top-navigation__mobile-nav__input'),
        links = document.querySelectorAll('.top-navigation__menu__link'),
        uncheck = function(){ input.checked = false };
    [].forEach.call(links, function(link) {
        link.addEventListener('click', uncheck, false);
    });

    /* Scroll spy */

    /*
    * TODO : refactor scrollspy below
    * */

    function scrollSpy(e) {
        var menuItems = document.querySelectorAll('.'+scrollSpyClass),
            targets = document.querySelectorAll('*[data-scrollspy]');

        [].forEach.call(targets, function(target) {
            var menuItem = document.querySelector('[href="#'+target.id+'"]');

            if ( window.pageYOffset > target.offsetTop ) {
                var y1, y2;
                console.log( y1 = target.offsetTop + target.offsetHeight);
                console.log( y2 = window.pageYOffset - window.innerHeight);

                console.log(y1>y2)

                console.log('---');
                menuItem.classList.add(scrollSpyClass+'--active');
            }  else {
                menuItem.classList.remove(scrollSpyClass);
            }
        });

        [].forEach.call(menuItems, function(menuItem) {
            //console.log(menuItem);
            //console.log(menuItem.getAttribute('href'));
        });
    }

    /* Scrollspy */

    // Cache selectors
    var lastId,
        topMenu = $(".top-navigation__menu"),
        topMenuHeight = ( screen.width > stickyBreakpoint ) ? 60 : 0,
        activeClass = "top-navigation__menu__link--active",
    // All list items
        menuItems = topMenu.find(".top-navigation__menu__link"),
    // Anchors corresponding to menu items
        scrollItems = menuItems.map(function(){
            var item = $($(this).attr("href"));
            if (item.length) { return item; }
        });

// Bind click handler to menu items
// so we can get a fancy scroll animation
    menuItems.click(function(e){
        var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 300);
        e.preventDefault();
    });

// Bind to scroll
    $(window).scroll(function(){
        // Get container scroll position
        var fromTop = $(this).scrollTop()+topMenuHeight;
         //console.log(fromTop);

        // Get id of current scroll item
        var cur = scrollItems.map(function(){
            if ($(this).offset().top < fromTop)
                return this;
        });
        // Get the id of the current element
        cur = cur[cur.length-1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
            lastId = id;
            // Set/remove active class

            menuItems
                .removeClass(activeClass)
                .filter("[href=#"+id+"]").addClass(activeClass);
        }
    });

    /* Trigger everything: */
    if ( screen.width > stickyBreakpoint ) {
        window.addEventListener('scroll', stickyScroll, false);
    }


})(jQuery);
