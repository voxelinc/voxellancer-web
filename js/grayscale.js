
function updateNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

//jQuery to collapse the navbar on scroll
$(window).scroll(updateNavbar);
$(document).ready(setTimeout(updateNavbar, 500));

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });
});


<!-- Piwik -->
var _paq = _paq || [];
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
_paq.push(['setDownloadClasses', "download"]);
_paq.push(['setLinkTrackingTimer', 250]);
(function() {
var u=(("https:" == document.location.protocol) ? "https" : "http") + "://piwik.chrdw.de/";
_paq.push(['setTrackerUrl', u+'piwik.php']);
_paq.push(['setSiteId', 1]);
var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0]; g.type='text/javascript';
g.defer=true; g.async=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
})();
<!-- End Piwik Code -->