'use strict';

var amp = require('html-to-amp'),
    fs = require('fs');

var src = "./export/index.html",
    dest = "./export/amp-index.html",
    options = {
        cwd: "export/resources/" // Assets (images/styles) file path
    };

fs.readFile(src, 'utf8', function(err, html){


    //console.log(html);
    //
    //amp(html, function(err, res){
    //    console.log(res);
    //});

    //amp(html, function(err, amped){
    //    if(err){
    //        console.log(err);
    //    }
    //    console.log(amped);
    //});

    amp(html).then(function(res){
        console.log(res);

        //fs.writeFile(dest, res, function(err){
        //    console.log(err);
        //});
    });

});