/**
 * ownCloud - core
 *
 * This file is licensed under the Affero General Public License version 3 or
 * later. See the COPYING file.
 *
 * @author Bernhard Posselt <dev@bernhard-posselt.com>
 * @copyright Bernhard Posselt 2014
 */

(function (document, $, exports) {

	'use strict';

	var dynamicSlideToggleEnabled = false;

	exports.Apps = {
		enableDynamicSlideToggle: function () {
			dynamicSlideToggleEnabled = true;
		}
	};

	/**
	 * Shows the #app-sidebar and add .with-app-sidebar to subsequent siblings
	 *
	 * @param {Object} [$el] sidebar element to show, defaults to $('#app-sidebar')
	 */
	exports.Apps.showAppSidebar = function ($el) {
		var $appSidebar = $el || $('#app-sidebar');
		$appSidebar.removeClass('disappear');
		$('#app-content').addClass('with-app-sidebar').trigger(new $.Event('appresized'));

	};

	/**
	 * Shows the #app-sidebar and removes .with-app-sidebar from subsequent
	 * siblings
	 *
	 * @param {Object} [$el] sidebar element to hide, defaults to $('#app-sidebar')
	 */
	exports.Apps.hideAppSidebar = function ($el) {
		var $appSidebar = $el || $('#app-sidebar');
		$appSidebar.addClass('disappear');
		$('#app-content').removeClass('with-app-sidebar').trigger(new $.Event('appresized'));
	};

	/**
	 * Provides a way to slide down a target area through a button and slide it
	 * up if the user clicks somewhere else. Used for the news app settings and
	 * add new field.
	 *
	 * Usage:
	 * <button data-apps-slide-toggle=".slide-area">slide</button>
	 * <div class=".slide-area" class="hidden">I'm sliding up</div>
	 */
	var registerAppsSlideToggle = function () {
		var buttons = $('[data-apps-slide-toggle]');

		$(document).click(function (event) {

			if (dynamicSlideToggleEnabled) {
				buttons = $('[data-apps-slide-toggle]');
			}

			buttons.each(function (index, button) {

				var areaSelector = $(button).data('apps-slide-toggle');
				var area = $(areaSelector);

				function hideArea () {
					area.slideUp(OC.menuSpeed * 4, function () {
						area.trigger(new $.Event('hide'));
					});
				}

				function showArea () {
					area.slideDown(OC.menuSpeed * 4, function () {
						area.trigger(new $.Event('show'));
					});
				}

				// do nothing if the area is animated
				if (!area.is(':animated')) {

					// button toggles the area
					if ($(button).is($(event.target).closest('[data-apps-slide-toggle]'))) {
						if (area.is(':visible')) {
							hideArea();
						} else {
							showArea();
						}

						// all other areas that have not been clicked but are open
						// should be slid up
					} else {
						var closest = $(event.target).closest(areaSelector);
						if (area.is(':visible') && closest[0] !== area[0]) {
							hideArea();
						}
					}
				}
			});

		});
	};


	$(document).ready(function () {
		registerAppsSlideToggle();
		$('a.action-share').append('<span>Share</span>');

		if (window.location.href.indexOf("/settings/") > -1) {
			$('#app-navigation li > a').css('opacity', '1');
			$('#app-navigation ul').css('padding-top', '20px');
		}
		if (window.location.href.indexOf("/settings/") > -1) {
			$('#app-navigation li > a').css('opacity', '1');
			$('#app-navigation ul').css('padding-top', '20px');
		}
		if (!(window.location.href.indexOf("/files/") > -1)) {
			$('#tourguid, #controls .actions').css('display', 'none');
			$('#controls').css({
				'position': 'fixed',
				'margin': '0'
			});
		}
		else {
			$('#tourguid, #controls .actions').css('display', '');
			$('#controls').css({
				'position': 'static',
				'margin': '15px 0 10px 0'
			});
		}
	});

}(document, jQuery, OC));
