/* var siteWidth = 1280;
var scale = screen.width /siteWidth

document.querySelector('meta[name="viewport"]').setAttribute('content', 'width='+siteWidth+', initial-scale='+scale+''); */

$(window).resize(function() {
    var mobileWidth =  (window.innerWidth > 0) ? 
                        window.innerWidth : 
                        screen.width;
    var viewport = (mobileWidth > 360) ?
                    'width=device-width, initial-scale=1.0' :
                    'width=1200';
    $("meta[name=viewport]").attr('content', viewport);
}).resize(); 

