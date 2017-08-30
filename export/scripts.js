//(function($){
//
//    var date = '2017/06/26';
//    var days = (window.location.pathname.indexOf('EN') > -1) ? 'days' : 'dage' ;
//
//
//    $('#clock').countdown(date, function(event) {
//        $(this).html(event.strftime('%D ' + days + ' %H:%M:%S'));
//    });
//
//})($);
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
        stickyBreakpoint    = 0,
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
            var href = $(this).attr("href");
            var anchor = (href.indexOf('#') > -1) ?  href : '';
            var item = $(anchor);
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
    //  dropdown menu in mobile devices

    $('.language__item').click(function () {
        $('.language__dropdown-menu').slideToggle();
    });

    if ( screen.width < 992 ) {
        $('.top-navigation__menu').children().addClass('top-navigation__menu__item--mobile');
    }

    $('.top-navigation__mobile-nav__label, .top-navigation__menu__item--mobile').click(function () {
            $('.top-navigation__menu').slideToggle();
        }
    );

// .top-navigation__mobile-nav__input:checked~.top-navigation__menu.top-navigation__menu__item
})(jQuery);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvdXJjZS9zZWN0aW9uL2NvdW50ZG93bi5qcyIsInNvdXJjZS90b3AtbmF2aWdhdGlvbi9lZGl0LWNvbnRlbnQuanMiLCJzb3VyY2UvdG9wLW5hdmlnYXRpb24vdG9wLW5hdmlnYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InNjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyhmdW5jdGlvbigkKXtcclxuLy9cclxuLy8gICAgdmFyIGRhdGUgPSAnMjAxNy8wNi8yNic7XHJcbi8vICAgIHZhciBkYXlzID0gKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5pbmRleE9mKCdFTicpID4gLTEpID8gJ2RheXMnIDogJ2RhZ2UnIDtcclxuLy9cclxuLy9cclxuLy8gICAgJCgnI2Nsb2NrJykuY291bnRkb3duKGRhdGUsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbi8vICAgICAgICAkKHRoaXMpLmh0bWwoZXZlbnQuc3RyZnRpbWUoJyVEICcgKyBkYXlzICsgJyAlSDolTTolUycpKTtcclxuLy8gICAgfSk7XHJcbi8vXHJcbi8vfSkoJCk7IiwiKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgaWYod2luZG93LmxvY2F0aW9uLmhhc2ggPT0gJyNlZGl0LWNvbnRlbnQnKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jb250ZW50RWRpdGFibGUgPSB0cnVlXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtY29udGVudCcpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cclxuICAgIH1cclxuXHJcbn0pKCk7IiwiKGZ1bmN0aW9uKCQpe1xyXG5cclxuICAgIC8qIEZpeCB0aGUgaGVhZGVyIHRvIHRvcCAqL1xyXG5cclxuICAgIHZhciBoZWFkZXIgICAgICAgICAgICAgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyLnRvcC1uYXZpZ2F0aW9uJyksXHJcbiAgICAgICAgb2Zmc2V0UG9zaXRpb24gICAgICA9IDQwLFxyXG4gICAgICAgIHN0aWNreUNsYXNzICAgICAgICAgPSAndG9wLW5hdmlnYXRpb24tLXN0aWNreScsXHJcbiAgICAgICAgc2Nyb2xsU3B5Q2xhc3MgICAgICA9ICd0b3AtbmF2aWdhdGlvbl9fbWVudV9fbGluaycsXHJcbiAgICAgICAgc3RpY2t5QnJlYWtwb2ludCAgICA9IDAsXHJcbiAgICAgICAgc2Nyb2xsVG9wQnV0dG9uICAgICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EubmF2aWdhdGUtdG9wJyk7XHJcblxyXG4gICAgZnVuY3Rpb24gc3RpY2t5U2Nyb2xsKGUpIHtcclxuXHJcbiAgICAgICAgaWYoIHdpbmRvdy5wYWdlWU9mZnNldCA+IG9mZnNldFBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKHN0aWNreUNsYXNzKTtcclxuICAgICAgICAgICAgc2Nyb2xsVG9wQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LnJlbW92ZShzdGlja3lDbGFzcyk7XHJcbiAgICAgICAgICAgIHNjcm9sbFRvcEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKiBIaWRlIG1vYmlsZSBuYXZpZ2F0aW9uIG9uIG1lbnUgaXRlbSB0YXAgKi9cclxuXHJcbiAgICB2YXIgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9wLW5hdmlnYXRpb25fX21vYmlsZS1uYXZfX2lucHV0JyksXHJcbiAgICAgICAgbGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9wLW5hdmlnYXRpb25fX21lbnVfX2xpbmsnKSxcclxuICAgICAgICB1bmNoZWNrID0gZnVuY3Rpb24oKXsgaW5wdXQuY2hlY2tlZCA9IGZhbHNlIH07XHJcbiAgICBbXS5mb3JFYWNoLmNhbGwobGlua3MsIGZ1bmN0aW9uKGxpbmspIHtcclxuICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdW5jaGVjaywgZmFsc2UpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLyogU2Nyb2xsIHNweSAqL1xyXG5cclxuICAgIC8qXHJcbiAgICAqIFRPRE8gOiByZWZhY3RvciBzY3JvbGxzcHkgYmVsb3dcclxuICAgICogKi9cclxuXHJcbiAgICBmdW5jdGlvbiBzY3JvbGxTcHkoZSkge1xyXG4gICAgICAgIHZhciBtZW51SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuJytzY3JvbGxTcHlDbGFzcyksXHJcbiAgICAgICAgICAgIHRhcmdldHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcqW2RhdGEtc2Nyb2xsc3B5XScpO1xyXG5cclxuICAgICAgICBbXS5mb3JFYWNoLmNhbGwodGFyZ2V0cywgZnVuY3Rpb24odGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIHZhciBtZW51SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tocmVmPVwiIycrdGFyZ2V0LmlkKydcIl0nKTtcclxuXHJcbiAgICAgICAgICAgIGlmICggd2luZG93LnBhZ2VZT2Zmc2V0ID4gdGFyZ2V0Lm9mZnNldFRvcCApIHtcclxuICAgICAgICAgICAgICAgIHZhciB5MSwgeTI7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyggeTEgPSB0YXJnZXQub2Zmc2V0VG9wICsgdGFyZ2V0Lm9mZnNldEhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyggeTIgPSB3aW5kb3cucGFnZVlPZmZzZXQgLSB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHkxPnkyKVxyXG5cclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0nKTtcclxuICAgICAgICAgICAgICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoc2Nyb2xsU3B5Q2xhc3MrJy0tYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH0gIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbWVudUl0ZW0uY2xhc3NMaXN0LnJlbW92ZShzY3JvbGxTcHlDbGFzcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgW10uZm9yRWFjaC5jYWxsKG1lbnVJdGVtcywgZnVuY3Rpb24obWVudUl0ZW0pIHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhtZW51SXRlbSk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cobWVudUl0ZW0uZ2V0QXR0cmlidXRlKCdocmVmJykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIFNjcm9sbHNweSAqL1xyXG5cclxuICAgIC8vIENhY2hlIHNlbGVjdG9yc1xyXG4gICAgdmFyIGxhc3RJZCxcclxuICAgICAgICB0b3BNZW51ID0gJChcIi50b3AtbmF2aWdhdGlvbl9fbWVudVwiKSxcclxuICAgICAgICB0b3BNZW51SGVpZ2h0ID0gKCBzY3JlZW4ud2lkdGggPiBzdGlja3lCcmVha3BvaW50ICkgPyA2MCA6IDAsXHJcbiAgICAgICAgYWN0aXZlQ2xhc3MgPSBcInRvcC1uYXZpZ2F0aW9uX19tZW51X19saW5rLS1hY3RpdmVcIixcclxuICAgIC8vIEFsbCBsaXN0IGl0ZW1zXHJcbiAgICAgICAgbWVudUl0ZW1zID0gdG9wTWVudS5maW5kKFwiLnRvcC1uYXZpZ2F0aW9uX19tZW51X19saW5rXCIpLFxyXG4gICAgLy8gQW5jaG9ycyBjb3JyZXNwb25kaW5nIHRvIG1lbnUgaXRlbXNcclxuICAgICAgICBzY3JvbGxJdGVtcyA9IG1lbnVJdGVtcy5tYXAoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdmFyIGhyZWYgPSAkKHRoaXMpLmF0dHIoXCJocmVmXCIpO1xyXG4gICAgICAgICAgICB2YXIgYW5jaG9yID0gKGhyZWYuaW5kZXhPZignIycpID4gLTEpID8gIGhyZWYgOiAnJztcclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSAkKGFuY2hvcik7XHJcbiAgICAgICAgICAgIGlmIChpdGVtLmxlbmd0aCkgeyByZXR1cm4gaXRlbTsgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuLy8gQmluZCBjbGljayBoYW5kbGVyIHRvIG1lbnUgaXRlbXNcclxuLy8gc28gd2UgY2FuIGdldCBhIGZhbmN5IHNjcm9sbCBhbmltYXRpb25cclxuICAgIG1lbnVJdGVtcy5jbGljayhmdW5jdGlvbihlKXtcclxuICAgICAgICB2YXIgaHJlZiA9ICQodGhpcykuYXR0cihcImhyZWZcIiksXHJcbiAgICAgICAgICAgIG9mZnNldFRvcCA9IGhyZWYgPT09IFwiI1wiID8gMCA6ICQoaHJlZikub2Zmc2V0KCkudG9wLXRvcE1lbnVIZWlnaHQrMTtcclxuICAgICAgICAkKCdodG1sLCBib2R5Jykuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICBzY3JvbGxUb3A6IG9mZnNldFRvcFxyXG4gICAgICAgIH0sIDMwMCk7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcblxyXG4vLyBCaW5kIHRvIHNjcm9sbFxyXG4gICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xyXG4gICAgICAgIC8vIEdldCBjb250YWluZXIgc2Nyb2xsIHBvc2l0aW9uXHJcbiAgICAgICAgdmFyIGZyb21Ub3AgPSAkKHRoaXMpLnNjcm9sbFRvcCgpK3RvcE1lbnVIZWlnaHQ7XHJcbiAgICAgICAgIC8vY29uc29sZS5sb2coZnJvbVRvcCk7XHJcblxyXG4gICAgICAgIC8vIEdldCBpZCBvZiBjdXJyZW50IHNjcm9sbCBpdGVtXHJcbiAgICAgICAgdmFyIGN1ciA9IHNjcm9sbEl0ZW1zLm1hcChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICBpZiAoJCh0aGlzKS5vZmZzZXQoKS50b3AgPCBmcm9tVG9wKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gR2V0IHRoZSBpZCBvZiB0aGUgY3VycmVudCBlbGVtZW50XHJcbiAgICAgICAgY3VyID0gY3VyW2N1ci5sZW5ndGgtMV07XHJcbiAgICAgICAgdmFyIGlkID0gY3VyICYmIGN1ci5sZW5ndGggPyBjdXJbMF0uaWQgOiBcIlwiO1xyXG5cclxuICAgICAgICBpZiAobGFzdElkICE9PSBpZCkge1xyXG4gICAgICAgICAgICBsYXN0SWQgPSBpZDtcclxuICAgICAgICAgICAgLy8gU2V0L3JlbW92ZSBhY3RpdmUgY2xhc3NcclxuXHJcbiAgICAgICAgICAgIG1lbnVJdGVtc1xyXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKGFjdGl2ZUNsYXNzKVxyXG4gICAgICAgICAgICAgICAgLmZpbHRlcihcIltocmVmPSNcIitpZCtcIl1cIikuYWRkQ2xhc3MoYWN0aXZlQ2xhc3MpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8qIFRyaWdnZXIgZXZlcnl0aGluZzogKi9cclxuICAgIGlmICggc2NyZWVuLndpZHRoID4gc3RpY2t5QnJlYWtwb2ludCApIHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc3RpY2t5U2Nyb2xsLCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgICAvLyAgZHJvcGRvd24gbWVudSBpbiBtb2JpbGUgZGV2aWNlc1xyXG5cclxuICAgICQoJy5sYW5ndWFnZV9faXRlbScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCcubGFuZ3VhZ2VfX2Ryb3Bkb3duLW1lbnUnKS5zbGlkZVRvZ2dsZSgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCBzY3JlZW4ud2lkdGggPCA5OTIgKSB7XHJcbiAgICAgICAgJCgnLnRvcC1uYXZpZ2F0aW9uX19tZW51JykuY2hpbGRyZW4oKS5hZGRDbGFzcygndG9wLW5hdmlnYXRpb25fX21lbnVfX2l0ZW0tLW1vYmlsZScpO1xyXG4gICAgfVxyXG5cclxuICAgICQoJy50b3AtbmF2aWdhdGlvbl9fbW9iaWxlLW5hdl9fbGFiZWwsIC50b3AtbmF2aWdhdGlvbl9fbWVudV9faXRlbS0tbW9iaWxlJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKCcudG9wLW5hdmlnYXRpb25fX21lbnUnKS5zbGlkZVRvZ2dsZSgpO1xyXG4gICAgICAgIH1cclxuICAgICk7XHJcblxyXG4vLyAudG9wLW5hdmlnYXRpb25fX21vYmlsZS1uYXZfX2lucHV0OmNoZWNrZWR+LnRvcC1uYXZpZ2F0aW9uX19tZW51LnRvcC1uYXZpZ2F0aW9uX19tZW51X19pdGVtXHJcbn0pKGpRdWVyeSk7XHJcbiJdfQ==
