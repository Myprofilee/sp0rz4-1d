$(".en").hide();
$(".de").show()
$( "#de" ).addClass("active");
$( "#en" ).removeClass("active");

$( "#de" ).click(function() {
  $(".en").hide();
  $(".de").show();
  $( "#de" ).addClass("active");
  $( "#en" ).removeClass("active");
});
$( "#en" ).click(function() {
  $(".de").hide();
  $(".en").show();
  $( "#en" ).addClass("active");
  $( "#de" ).removeClass("active");
});

cookieConsent = localStorage.getItem('cookie-consent');
cookieBanner = document.getElementById('cookie-banner');

if (cookieConsent) {
	cookieBanner.remove();
}

function acceptCookies() {
	localStorage.setItem('cookie-consent', true);
	cookieBanner.remove();
}