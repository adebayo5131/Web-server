var siteWidth = 1280;
var scale = screen.width /(siteWidth/2)

document.querySelector('meta[name="viewport"]').setAttribute('content', 'width='+siteWidth+', initial-scale='+scale+'');

