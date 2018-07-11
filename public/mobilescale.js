/* var siteWidth = 1280;
var scale = screen.width /siteWidth

document.querySelector('meta[name="viewport"]').setAttribute('content', 'width='+siteWidth+', initial-scale='+scale+''); */


var scale = window.outerWidth / 1280;

$('head').append('<meta name="viewport" content="width=1280, initial-scale=' + scale + ', maximum-scale=' + scale + ', user-scalable=0">');