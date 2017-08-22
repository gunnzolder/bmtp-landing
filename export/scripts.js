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
        stickyBreakpoint    = 928,
        scrollTopButton     = document.querySelector('a.navigate-top'),
        languageSelectorId  = 'language-selector',
        defaultLanguage     = 'DK';

    function changeLanguage(id,defaultLanguage) {
        var languageSelector = document.getElementById(id);

        var currentValue = languageSelector.value;

        languageSelector.onchange = function() {

            if(languageSelector.value != currentValue) {
                window.location = (languageSelector.value == defaultLanguage) ? 'index.html' : 'index-'+languageSelector.value+'.html';
            }

            console.log(languageSelector.value);
        }
    }

    changeLanguage(languageSelectorId,defaultLanguage);

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
        // hack to hide language selecttor dropdown
        document.getElementById('language-selector-checkbox').checked = false;
    });

    /* Trigger everything: */
    if ( screen.width > stickyBreakpoint ) {
        window.addEventListener('scroll', stickyScroll, false);
    }


})(jQuery);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvdXJjZS9zZWN0aW9uL2NvdW50ZG93bi5qcyIsInNvdXJjZS90b3AtbmF2aWdhdGlvbi9lZGl0LWNvbnRlbnQuanMiLCJzb3VyY2UvdG9wLW5hdmlnYXRpb24vdG9wLW5hdmlnYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic2NyaXB0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vKGZ1bmN0aW9uKCQpe1xyXG4vL1xyXG4vLyAgICB2YXIgZGF0ZSA9ICcyMDE3LzA2LzI2JztcclxuLy8gICAgdmFyIGRheXMgPSAod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLmluZGV4T2YoJ0VOJykgPiAtMSkgPyAnZGF5cycgOiAnZGFnZScgO1xyXG4vL1xyXG4vL1xyXG4vLyAgICAkKCcjY2xvY2snKS5jb3VudGRvd24oZGF0ZSwgZnVuY3Rpb24oZXZlbnQpIHtcclxuLy8gICAgICAgICQodGhpcykuaHRtbChldmVudC5zdHJmdGltZSgnJUQgJyArIGRheXMgKyAnICVIOiVNOiVTJykpO1xyXG4vLyAgICB9KTtcclxuLy9cclxuLy99KSgkKTsiLCIoZnVuY3Rpb24oKXtcclxuXHJcbiAgICBpZih3aW5kb3cubG9jYXRpb24uaGFzaCA9PSAnI2VkaXQtY29udGVudCcpIHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNvbnRlbnRFZGl0YWJsZSA9IHRydWVcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1jb250ZW50Jykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcblxyXG4gICAgfVxyXG5cclxufSkoKTsiLCIoZnVuY3Rpb24oJCl7XHJcblxyXG4gICAgLyogRml4IHRoZSBoZWFkZXIgdG8gdG9wICovXHJcblxyXG4gICAgdmFyIGhlYWRlciAgICAgICAgICAgICAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoZWFkZXIudG9wLW5hdmlnYXRpb24nKSxcclxuICAgICAgICBvZmZzZXRQb3NpdGlvbiAgICAgID0gNDAsXHJcbiAgICAgICAgc3RpY2t5Q2xhc3MgICAgICAgICA9ICd0b3AtbmF2aWdhdGlvbi0tc3RpY2t5JyxcclxuICAgICAgICBzY3JvbGxTcHlDbGFzcyAgICAgID0gJ3RvcC1uYXZpZ2F0aW9uX19tZW51X19saW5rJyxcclxuICAgICAgICBzdGlja3lCcmVha3BvaW50ICAgID0gOTI4LFxyXG4gICAgICAgIHNjcm9sbFRvcEJ1dHRvbiAgICAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdhLm5hdmlnYXRlLXRvcCcpLFxyXG4gICAgICAgIGxhbmd1YWdlU2VsZWN0b3JJZCAgPSAnbGFuZ3VhZ2Utc2VsZWN0b3InLFxyXG4gICAgICAgIGRlZmF1bHRMYW5ndWFnZSAgICAgPSAnREsnO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNoYW5nZUxhbmd1YWdlKGlkLGRlZmF1bHRMYW5ndWFnZSkge1xyXG4gICAgICAgIHZhciBsYW5ndWFnZVNlbGVjdG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG5cclxuICAgICAgICB2YXIgY3VycmVudFZhbHVlID0gbGFuZ3VhZ2VTZWxlY3Rvci52YWx1ZTtcclxuXHJcbiAgICAgICAgbGFuZ3VhZ2VTZWxlY3Rvci5vbmNoYW5nZSA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgaWYobGFuZ3VhZ2VTZWxlY3Rvci52YWx1ZSAhPSBjdXJyZW50VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IChsYW5ndWFnZVNlbGVjdG9yLnZhbHVlID09IGRlZmF1bHRMYW5ndWFnZSkgPyAnaW5kZXguaHRtbCcgOiAnaW5kZXgtJytsYW5ndWFnZVNlbGVjdG9yLnZhbHVlKycuaHRtbCc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGxhbmd1YWdlU2VsZWN0b3IudmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VMYW5ndWFnZShsYW5ndWFnZVNlbGVjdG9ySWQsZGVmYXVsdExhbmd1YWdlKTtcclxuXHJcbiAgICBmdW5jdGlvbiBzdGlja3lTY3JvbGwoZSkge1xyXG5cclxuICAgICAgICBpZiggd2luZG93LnBhZ2VZT2Zmc2V0ID4gb2Zmc2V0UG9zaXRpb24pIHtcclxuICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoc3RpY2t5Q2xhc3MpO1xyXG4gICAgICAgICAgICBzY3JvbGxUb3BCdXR0b24uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKHN0aWNreUNsYXNzKTtcclxuICAgICAgICAgICAgc2Nyb2xsVG9wQnV0dG9uLnN0eWxlLmRpc3BsYXkgPSAnJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qIEhpZGUgbW9iaWxlIG5hdmlnYXRpb24gb24gbWVudSBpdGVtIHRhcCAqL1xyXG5cclxuICAgIHZhciBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3AtbmF2aWdhdGlvbl9fbW9iaWxlLW5hdl9faW5wdXQnKSxcclxuICAgICAgICBsaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b3AtbmF2aWdhdGlvbl9fbWVudV9fbGluaycpLFxyXG4gICAgICAgIHVuY2hlY2sgPSBmdW5jdGlvbigpeyBpbnB1dC5jaGVja2VkID0gZmFsc2UgfTtcclxuICAgIFtdLmZvckVhY2guY2FsbChsaW5rcywgZnVuY3Rpb24obGluaykge1xyXG4gICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB1bmNoZWNrLCBmYWxzZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvKiBTY3JvbGwgc3B5ICovXHJcblxyXG4gICAgLypcclxuICAgICogVE9ETyA6IHJlZmFjdG9yIHNjcm9sbHNweSBiZWxvd1xyXG4gICAgKiAqL1xyXG5cclxuICAgIGZ1bmN0aW9uIHNjcm9sbFNweShlKSB7XHJcbiAgICAgICAgdmFyIG1lbnVJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4nK3Njcm9sbFNweUNsYXNzKSxcclxuICAgICAgICAgICAgdGFyZ2V0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJypbZGF0YS1zY3JvbGxzcHldJyk7XHJcblxyXG4gICAgICAgIFtdLmZvckVhY2guY2FsbCh0YXJnZXRzLCBmdW5jdGlvbih0YXJnZXQpIHtcclxuICAgICAgICAgICAgdmFyIG1lbnVJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2hyZWY9XCIjJyt0YXJnZXQuaWQrJ1wiXScpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCB3aW5kb3cucGFnZVlPZmZzZXQgPiB0YXJnZXQub2Zmc2V0VG9wICkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHkxLCB5MjtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCB5MSA9IHRhcmdldC5vZmZzZXRUb3AgKyB0YXJnZXQub2Zmc2V0SGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCB5MiA9IHdpbmRvdy5wYWdlWU9mZnNldCAtIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coeTE+eTIpXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJy0tLScpO1xyXG4gICAgICAgICAgICAgICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZChzY3JvbGxTcHlDbGFzcysnLS1hY3RpdmUnKTtcclxuICAgICAgICAgICAgfSAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBtZW51SXRlbS5jbGFzc0xpc3QucmVtb3ZlKHNjcm9sbFNweUNsYXNzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBbXS5mb3JFYWNoLmNhbGwobWVudUl0ZW1zLCBmdW5jdGlvbihtZW51SXRlbSkge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKG1lbnVJdGVtKTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhtZW51SXRlbS5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyogU2Nyb2xsc3B5ICovXHJcblxyXG4gICAgLy8gQ2FjaGUgc2VsZWN0b3JzXHJcbiAgICB2YXIgbGFzdElkLFxyXG4gICAgICAgIHRvcE1lbnUgPSAkKFwiLnRvcC1uYXZpZ2F0aW9uX19tZW51XCIpLFxyXG4gICAgICAgIHRvcE1lbnVIZWlnaHQgPSAoIHNjcmVlbi53aWR0aCA+IHN0aWNreUJyZWFrcG9pbnQgKSA/IDYwIDogMCxcclxuICAgICAgICBhY3RpdmVDbGFzcyA9IFwidG9wLW5hdmlnYXRpb25fX21lbnVfX2xpbmstLWFjdGl2ZVwiLFxyXG4gICAgLy8gQWxsIGxpc3QgaXRlbXNcclxuICAgICAgICBtZW51SXRlbXMgPSB0b3BNZW51LmZpbmQoXCIudG9wLW5hdmlnYXRpb25fX21lbnVfX2xpbmtcIiksXHJcbiAgICAvLyBBbmNob3JzIGNvcnJlc3BvbmRpbmcgdG8gbWVudSBpdGVtc1xyXG4gICAgICAgIHNjcm9sbEl0ZW1zID0gbWVudUl0ZW1zLm1hcChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB2YXIgaHJlZiA9ICQodGhpcykuYXR0cihcImhyZWZcIik7XHJcbiAgICAgICAgICAgIHZhciBhbmNob3IgPSAoaHJlZi5pbmRleE9mKCcjJykgPiAtMSkgPyAgaHJlZiA6ICcnO1xyXG4gICAgICAgICAgICB2YXIgaXRlbSA9ICQoYW5jaG9yKTtcclxuICAgICAgICAgICAgaWYgKGl0ZW0ubGVuZ3RoKSB7IHJldHVybiBpdGVtOyB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4vLyBCaW5kIGNsaWNrIGhhbmRsZXIgdG8gbWVudSBpdGVtc1xyXG4vLyBzbyB3ZSBjYW4gZ2V0IGEgZmFuY3kgc2Nyb2xsIGFuaW1hdGlvblxyXG4gICAgbWVudUl0ZW1zLmNsaWNrKGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIHZhciBocmVmID0gJCh0aGlzKS5hdHRyKFwiaHJlZlwiKSxcclxuICAgICAgICAgICAgb2Zmc2V0VG9wID0gaHJlZiA9PT0gXCIjXCIgPyAwIDogJChocmVmKS5vZmZzZXQoKS50b3AtdG9wTWVudUhlaWdodCsxO1xyXG4gICAgICAgICQoJ2h0bWwsIGJvZHknKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgIHNjcm9sbFRvcDogb2Zmc2V0VG9wXHJcbiAgICAgICAgfSwgMzAwKTtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9KTtcclxuXHJcbi8vIEJpbmQgdG8gc2Nyb2xsXHJcbiAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgLy8gR2V0IGNvbnRhaW5lciBzY3JvbGwgcG9zaXRpb25cclxuICAgICAgICB2YXIgZnJvbVRvcCA9ICQodGhpcykuc2Nyb2xsVG9wKCkrdG9wTWVudUhlaWdodDtcclxuICAgICAgICAgLy9jb25zb2xlLmxvZyhmcm9tVG9wKTtcclxuXHJcbiAgICAgICAgLy8gR2V0IGlkIG9mIGN1cnJlbnQgc2Nyb2xsIGl0ZW1cclxuICAgICAgICB2YXIgY3VyID0gc2Nyb2xsSXRlbXMubWFwKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLm9mZnNldCgpLnRvcCA8IGZyb21Ub3ApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBHZXQgdGhlIGlkIG9mIHRoZSBjdXJyZW50IGVsZW1lbnRcclxuICAgICAgICBjdXIgPSBjdXJbY3VyLmxlbmd0aC0xXTtcclxuICAgICAgICB2YXIgaWQgPSBjdXIgJiYgY3VyLmxlbmd0aCA/IGN1clswXS5pZCA6IFwiXCI7XHJcblxyXG4gICAgICAgIGlmIChsYXN0SWQgIT09IGlkKSB7XHJcbiAgICAgICAgICAgIGxhc3RJZCA9IGlkO1xyXG4gICAgICAgICAgICAvLyBTZXQvcmVtb3ZlIGFjdGl2ZSBjbGFzc1xyXG5cclxuICAgICAgICAgICAgbWVudUl0ZW1zXHJcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoYWN0aXZlQ2xhc3MpXHJcbiAgICAgICAgICAgICAgICAuZmlsdGVyKFwiW2hyZWY9I1wiK2lkK1wiXVwiKS5hZGRDbGFzcyhhY3RpdmVDbGFzcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGhhY2sgdG8gaGlkZSBsYW5ndWFnZSBzZWxlY3R0b3IgZHJvcGRvd25cclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGFuZ3VhZ2Utc2VsZWN0b3ItY2hlY2tib3gnKS5jaGVja2VkID0gZmFsc2U7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvKiBUcmlnZ2VyIGV2ZXJ5dGhpbmc6ICovXHJcbiAgICBpZiAoIHNjcmVlbi53aWR0aCA+IHN0aWNreUJyZWFrcG9pbnQgKSB7XHJcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHN0aWNreVNjcm9sbCwgZmFsc2UpO1xyXG4gICAgfVxyXG5cclxuXHJcbn0pKGpRdWVyeSk7XHJcbiJdfQ==
