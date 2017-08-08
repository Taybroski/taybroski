// // HEADER FADER
// $(window).on("load", function() {

$(document).ready(function() {
	var headerText = $('.header-h1');
	var headerP0 = $('.pSpan0');
	var headerP1 = $('.pSpan1');
	var headerP2 = $('.pSpan2');
	var headerP = $('.header-p span');

	headerText.css('opacity', '0');
	headerP0.css('opacity', '0');
	headerP1.css('opacity', '0');
	headerP2.css('opacity', '0');

	setTimeout(function() {
		headerText.animate({
			'opacity': '1'
		}, 1000, 'swing', function() {
			headerP1.animate({
				'opacity': '1'
			}, 1000, 'swing', function() {
				headerP0.animate({
					'opacity': '1'
				}, 1400, 'swing', function() {
					headerP2.animate({
						'opacity': '1'
					}, 1000);
				});
			});
		});
	}, 1000);
});

// PROFILE SLOGAN TEXT CHANGER

$(document).ready(function() {

	var image = $(".profileImg");
	var slogan = $(".slogan");

		image.mouseover(function() {
			slogan.html("And everything inbetween.");
		});
		image.mouseout(function() {
			slogan.html("A bean with a dream...")
		})
});

// PAGE RE-DIRECTION

	var portfolioPage = document.getElementById("br");
	var contactPage = document.getElementById("bl");

	portfolioPage.onclick = function() {
		window.location.assign("pages/portfolio.html");
	};
	contactPage.onclick = function() {
		window.location.assign("pages/contact.html");
	};