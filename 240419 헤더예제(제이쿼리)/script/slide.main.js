$(document).ready(function () {
	function e() {
		var e = $('#header'),
			o = $('#header .wrap_gnb'),
			n = $('#gnb').children('li'),
			s = n.children('a'),
			i = n.children('ul'),
			t = 0,
			a = e.height(),
			l = !0;
		if ($(window).width() > 1179) {
			function d() {
				$('.bgGnb').length ||
					o.prepend(
						$('<div class="bgGnb">').css({
							width: '100%',
							height: t,
							backgroundColor: 'rgba(147, 108, 83, 0.4)',
							position: 'absolute',
							top: a,
							left: '0%',
							display: 'none',
						})
					),
					l &&
						((l = !1),
						i.stop().slideDown(1e3),
						$('.bgGnb').stop().slideDown(1e3));
			}
			function r() {
				i.slideUp(700),
					$('.bgGnb').slideUp(1e3, function () {
						$(this).remove(), (l = !0);
					});
			}
			n.each(function (e) {
				var o = $(this).children('ul').height();
				t = Math.max(t, o);
			}),
				o.on('mouseenter', d),
				o.on('mouseleave', r),
				s.on('focusin', d),
				n.last().find('a').last().on('focusout', r),
				n.on('mouseenter', function () {
					$(this).children('a').addClass('on');
				}),
				n.on('mouseleave', function () {
					$(this).children('a').removeClass('on');
				});
		} else
			o.off('mouseenter', d),
				o.off('mouseleave', r),
				o.off('mouseenter'),
				o.off('mouseleave'),
				n.off('mouseenter'),
				n.off('mouseleave');
	}
	e(),
		$(window).on('resize', function () {
			e();
		}),
		$('.btn_close').on('click', function () {
			$('#header').hasClass('open')
				? ($('#header').removeClass('open'), $('body').removeAttr('style'))
				: ($('#header').addClass('open'),
				  $('body').css({ overflow: 'hidden' }));
		});
});
