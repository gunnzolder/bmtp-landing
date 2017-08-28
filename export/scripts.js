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

    $('.top-navigation__mobile-nav__label').click(function () {
            $('.top-navigation__menu').slideToggle();
        }
    );


})(jQuery);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvdXJjZS9zZWN0aW9uL2NvdW50ZG93bi5qcyIsInNvdXJjZS90b3AtbmF2aWdhdGlvbi9lZGl0LWNvbnRlbnQuanMiLCJzb3VyY2UvdG9wLW5hdmlnYXRpb24vdG9wLW5hdmlnYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InNjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyhmdW5jdGlvbigkKXtcclxuLy9cclxuLy8gICAgdmFyIGRhdGUgPSAnMjAxNy8wNi8yNic7XHJcbi8vICAgIHZhciBkYXlzID0gKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5pbmRleE9mKCdFTicpID4gLTEpID8gJ2RheXMnIDogJ2RhZ2UnIDtcclxuLy9cclxuLy9cclxuLy8gICAgJCgnI2Nsb2NrJykuY291bnRkb3duKGRhdGUsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbi8vICAgICAgICAkKHRoaXMpLmh0bWwoZXZlbnQuc3RyZnRpbWUoJyVEICcgKyBkYXlzICsgJyAlSDolTTolUycpKTtcclxuLy8gICAgfSk7XHJcbi8vXHJcbi8vfSkoJCk7IiwiKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgaWYod2luZG93LmxvY2F0aW9uLmhhc2ggPT0gJyNlZGl0LWNvbnRlbnQnKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jb250ZW50RWRpdGFibGUgPSB0cnVlXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXQtY29udGVudCcpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG5cclxuICAgIH1cclxuXHJcbn0pKCk7IiwiKGZ1bmN0aW9uKCQpe1xyXG5cclxuICAgIC8qIEZpeCB0aGUgaGVhZGVyIHRvIHRvcCAqL1xyXG5cclxuICAgIHZhciBoZWFkZXIgICAgICAgICAgICAgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyLnRvcC1uYXZpZ2F0aW9uJyksXHJcbiAgICAgICAgb2Zmc2V0UG9zaXRpb24gICAgICA9IDQwLFxyXG4gICAgICAgIHN0aWNreUNsYXNzICAgICAgICAgPSAndG9wLW5hdmlnYXRpb24tLXN0aWNreScsXHJcbiAgICAgICAgc2Nyb2xsU3B5Q2xhc3MgICAgICA9ICd0b3AtbmF2aWdhdGlvbl9fbWVudV9fbGluaycsXHJcbiAgICAgICAgc3RpY2t5QnJlYWtwb2ludCAgICA9IDAsXHJcbiAgICAgICAgc2Nyb2xsVG9wQnV0dG9uICAgICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2EubmF2aWdhdGUtdG9wJyksXHJcbiAgICAgICAgbGFuZ3VhZ2VTZWxlY3RvcklkICA9ICdsYW5ndWFnZS1zZWxlY3RvcicsXHJcbiAgICAgICAgZGVmYXVsdExhbmd1YWdlICAgICA9ICdESyc7XHJcblxyXG4gICAgZnVuY3Rpb24gY2hhbmdlTGFuZ3VhZ2UoaWQsZGVmYXVsdExhbmd1YWdlKSB7XHJcbiAgICAgICAgdmFyIGxhbmd1YWdlU2VsZWN0b3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcblxyXG4gICAgICAgIHZhciBjdXJyZW50VmFsdWUgPSBsYW5ndWFnZVNlbGVjdG9yLnZhbHVlO1xyXG5cclxuICAgICAgICBsYW5ndWFnZVNlbGVjdG9yLm9uY2hhbmdlID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICBpZihsYW5ndWFnZVNlbGVjdG9yLnZhbHVlICE9IGN1cnJlbnRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gKGxhbmd1YWdlU2VsZWN0b3IudmFsdWUgPT0gZGVmYXVsdExhbmd1YWdlKSA/ICdpbmRleC5odG1sJyA6ICdpbmRleC0nK2xhbmd1YWdlU2VsZWN0b3IudmFsdWUrJy5odG1sJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2cobGFuZ3VhZ2VTZWxlY3Rvci52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUxhbmd1YWdlKGxhbmd1YWdlU2VsZWN0b3JJZCxkZWZhdWx0TGFuZ3VhZ2UpO1xyXG5cclxuICAgIGZ1bmN0aW9uIHN0aWNreVNjcm9sbChlKSB7XHJcblxyXG4gICAgICAgIGlmKCB3aW5kb3cucGFnZVlPZmZzZXQgPiBvZmZzZXRQb3NpdGlvbikge1xyXG4gICAgICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChzdGlja3lDbGFzcyk7XHJcbiAgICAgICAgICAgIHNjcm9sbFRvcEJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoc3RpY2t5Q2xhc3MpO1xyXG4gICAgICAgICAgICBzY3JvbGxUb3BCdXR0b24uc3R5bGUuZGlzcGxheSA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgLyogSGlkZSBtb2JpbGUgbmF2aWdhdGlvbiBvbiBtZW51IGl0ZW0gdGFwICovXHJcblxyXG4gICAgdmFyIGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvcC1uYXZpZ2F0aW9uX19tb2JpbGUtbmF2X19pbnB1dCcpLFxyXG4gICAgICAgIGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRvcC1uYXZpZ2F0aW9uX19tZW51X19saW5rJyksXHJcbiAgICAgICAgdW5jaGVjayA9IGZ1bmN0aW9uKCl7IGlucHV0LmNoZWNrZWQgPSBmYWxzZSB9O1xyXG4gICAgW10uZm9yRWFjaC5jYWxsKGxpbmtzLCBmdW5jdGlvbihsaW5rKSB7XHJcbiAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHVuY2hlY2ssIGZhbHNlKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8qIFNjcm9sbCBzcHkgKi9cclxuXHJcbiAgICAvKlxyXG4gICAgKiBUT0RPIDogcmVmYWN0b3Igc2Nyb2xsc3B5IGJlbG93XHJcbiAgICAqICovXHJcblxyXG4gICAgZnVuY3Rpb24gc2Nyb2xsU3B5KGUpIHtcclxuICAgICAgICB2YXIgbWVudUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLicrc2Nyb2xsU3B5Q2xhc3MpLFxyXG4gICAgICAgICAgICB0YXJnZXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKltkYXRhLXNjcm9sbHNweV0nKTtcclxuXHJcbiAgICAgICAgW10uZm9yRWFjaC5jYWxsKHRhcmdldHMsIGZ1bmN0aW9uKHRhcmdldCkge1xyXG4gICAgICAgICAgICB2YXIgbWVudUl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbaHJlZj1cIiMnK3RhcmdldC5pZCsnXCJdJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIHdpbmRvdy5wYWdlWU9mZnNldCA+IHRhcmdldC5vZmZzZXRUb3AgKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgeTEsIHkyO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coIHkxID0gdGFyZ2V0Lm9mZnNldFRvcCArIHRhcmdldC5vZmZzZXRIZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coIHkyID0gd2luZG93LnBhZ2VZT2Zmc2V0IC0gd2luZG93LmlubmVySGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh5MT55MilcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnLS0tJyk7XHJcbiAgICAgICAgICAgICAgICBtZW51SXRlbS5jbGFzc0xpc3QuYWRkKHNjcm9sbFNweUNsYXNzKyctLWFjdGl2ZScpO1xyXG4gICAgICAgICAgICB9ICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5yZW1vdmUoc2Nyb2xsU3B5Q2xhc3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIFtdLmZvckVhY2guY2FsbChtZW51SXRlbXMsIGZ1bmN0aW9uKG1lbnVJdGVtKSB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cobWVudUl0ZW0pO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKG1lbnVJdGVtLmdldEF0dHJpYnV0ZSgnaHJlZicpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKiBTY3JvbGxzcHkgKi9cclxuXHJcbiAgICAvLyBDYWNoZSBzZWxlY3RvcnNcclxuICAgIHZhciBsYXN0SWQsXHJcbiAgICAgICAgdG9wTWVudSA9ICQoXCIudG9wLW5hdmlnYXRpb25fX21lbnVcIiksXHJcbiAgICAgICAgdG9wTWVudUhlaWdodCA9ICggc2NyZWVuLndpZHRoID4gc3RpY2t5QnJlYWtwb2ludCApID8gNjAgOiAwLFxyXG4gICAgICAgIGFjdGl2ZUNsYXNzID0gXCJ0b3AtbmF2aWdhdGlvbl9fbWVudV9fbGluay0tYWN0aXZlXCIsXHJcbiAgICAvLyBBbGwgbGlzdCBpdGVtc1xyXG4gICAgICAgIG1lbnVJdGVtcyA9IHRvcE1lbnUuZmluZChcIi50b3AtbmF2aWdhdGlvbl9fbWVudV9fbGlua1wiKSxcclxuICAgIC8vIEFuY2hvcnMgY29ycmVzcG9uZGluZyB0byBtZW51IGl0ZW1zXHJcbiAgICAgICAgc2Nyb2xsSXRlbXMgPSBtZW51SXRlbXMubWFwKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHZhciBocmVmID0gJCh0aGlzKS5hdHRyKFwiaHJlZlwiKTtcclxuICAgICAgICAgICAgdmFyIGFuY2hvciA9IChocmVmLmluZGV4T2YoJyMnKSA+IC0xKSA/ICBocmVmIDogJyc7XHJcbiAgICAgICAgICAgIHZhciBpdGVtID0gJChhbmNob3IpO1xyXG4gICAgICAgICAgICBpZiAoaXRlbS5sZW5ndGgpIHsgcmV0dXJuIGl0ZW07IH1cclxuICAgICAgICB9KTtcclxuXHJcbi8vIEJpbmQgY2xpY2sgaGFuZGxlciB0byBtZW51IGl0ZW1zXHJcbi8vIHNvIHdlIGNhbiBnZXQgYSBmYW5jeSBzY3JvbGwgYW5pbWF0aW9uXHJcbiAgICBtZW51SXRlbXMuY2xpY2soZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgdmFyIGhyZWYgPSAkKHRoaXMpLmF0dHIoXCJocmVmXCIpLFxyXG4gICAgICAgICAgICBvZmZzZXRUb3AgPSBocmVmID09PSBcIiNcIiA/IDAgOiAkKGhyZWYpLm9mZnNldCgpLnRvcC10b3BNZW51SGVpZ2h0KzE7XHJcbiAgICAgICAgJCgnaHRtbCwgYm9keScpLnN0b3AoKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgc2Nyb2xsVG9wOiBvZmZzZXRUb3BcclxuICAgICAgICB9LCAzMDApO1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG5cclxuLy8gQmluZCB0byBzY3JvbGxcclxuICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcclxuICAgICAgICAvLyBHZXQgY29udGFpbmVyIHNjcm9sbCBwb3NpdGlvblxyXG4gICAgICAgIHZhciBmcm9tVG9wID0gJCh0aGlzKS5zY3JvbGxUb3AoKSt0b3BNZW51SGVpZ2h0O1xyXG4gICAgICAgICAvL2NvbnNvbGUubG9nKGZyb21Ub3ApO1xyXG5cclxuICAgICAgICAvLyBHZXQgaWQgb2YgY3VycmVudCBzY3JvbGwgaXRlbVxyXG4gICAgICAgIHZhciBjdXIgPSBzY3JvbGxJdGVtcy5tYXAoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgaWYgKCQodGhpcykub2Zmc2V0KCkudG9wIDwgZnJvbVRvcClcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIEdldCB0aGUgaWQgb2YgdGhlIGN1cnJlbnQgZWxlbWVudFxyXG4gICAgICAgIGN1ciA9IGN1cltjdXIubGVuZ3RoLTFdO1xyXG4gICAgICAgIHZhciBpZCA9IGN1ciAmJiBjdXIubGVuZ3RoID8gY3VyWzBdLmlkIDogXCJcIjtcclxuXHJcbiAgICAgICAgaWYgKGxhc3RJZCAhPT0gaWQpIHtcclxuICAgICAgICAgICAgbGFzdElkID0gaWQ7XHJcbiAgICAgICAgICAgIC8vIFNldC9yZW1vdmUgYWN0aXZlIGNsYXNzXHJcblxyXG4gICAgICAgICAgICBtZW51SXRlbXNcclxuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhhY3RpdmVDbGFzcylcclxuICAgICAgICAgICAgICAgIC5maWx0ZXIoXCJbaHJlZj0jXCIraWQrXCJdXCIpLmFkZENsYXNzKGFjdGl2ZUNsYXNzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaGFjayB0byBoaWRlIGxhbmd1YWdlIHNlbGVjdHRvciBkcm9wZG93blxyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYW5ndWFnZS1zZWxlY3Rvci1jaGVja2JveCcpLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8qIFRyaWdnZXIgZXZlcnl0aGluZzogKi9cclxuICAgIGlmICggc2NyZWVuLndpZHRoID4gc3RpY2t5QnJlYWtwb2ludCApIHtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgc3RpY2t5U2Nyb2xsLCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgJCgnLnRvcC1uYXZpZ2F0aW9uX19tb2JpbGUtbmF2X19sYWJlbCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgJCgnLnRvcC1uYXZpZ2F0aW9uX19tZW51Jykuc2xpZGVUb2dnbGUoKTtcclxuICAgICAgICB9XHJcbiAgICApO1xyXG5cclxuXHJcbn0pKGpRdWVyeSk7XHJcbiJdfQ==
