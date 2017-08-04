'use strict';

var ampify = require('ampify'),
    fs = require('fs');

var cheerio = require('cheerio');

var src = "./export/index.html",
    dest = "./export/amp-index.html",
    options = {
        cwd: "./export/" // Assets (images/styles) file path
    };

var googleAnalyticsRegEx = /<script>[\s\S]*?<\/script>/ig,

    amphtml = '<link rel="amphtml" href="http://bmtp.life/amp-index.html">',
    canonical = '<link rel="canonical" href="http://bmtp.life/index.html">';

var scriptsToRemove = '<script src="//code.jquery.com/jquery-2.1.4.min.js"></script>\n' +
    '<script src="libs.js"></script>\n'+
    '<script src="scripts.js"></script>';

var iframeRegEx = /<amp-iframe>[\s\S]*?<\/amp-iframe>/ig;


var cssCharset = '@charset "UTF-8";';

fs.readFile(src, 'utf8', function(err, html){

    var $;
    $ = cheerio.load(html, options);
    var ampifiedHtml = ampify(html, options);
    ampifiedHtml = ampifiedHtml.replace(amphtml, canonical);
    ampifiedHtml = ampifiedHtml.replace(googleAnalyticsRegEx, '');
    ampifiedHtml = ampifiedHtml.replace(iframeRegEx, '');
    ampifiedHtml = ampifiedHtml.replace(cssCharset, '');
    ampifiedHtml = ampifiedHtml.replace(scriptsToRemove, '');

    fs.writeFile(dest, ampifiedHtml, function(err){
        console.log(err);
    });
});



//ampify(src, options)
//    .then (function(res){
//        console.log(res)
//    });