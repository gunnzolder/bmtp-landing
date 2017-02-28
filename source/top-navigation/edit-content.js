(function(){

    if(window.location.hash == '#edit-content') {
        document.body.contentEditable = true
        document.querySelector('.edit-content').style.display = 'block';

    }

})();