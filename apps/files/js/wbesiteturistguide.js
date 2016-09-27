$(window).load(function () {

	$(function () {

		var STEP_OPTIONS = {
			one: 1,
			two: 2
		};

		var STEPS = [{
			//Show menu
			content: '<p>This is a menu.</p>',
			highlightTarget: true,
			nextButton: true,
			target: $('#apps'),
			my: 'top center',
			at: 'bottom center'
		}, {
			//click on file
			content: '<p>This is an add button. You can upload a file or add new folder</p>',
			highlightTarget: true,
			nextButton: true,
			target: $('.button.new'),
			my: 'left center',
			at: 'right center',

		}, {
			//show List with files
			content: '<p>This is a list of files and folders. Take a look, then click next.</p>',
			nextButton: true,
			highlightTarget: true,
			target: $('#fileList'),
			my: 'top center',
			at: 'bottom center',

		}, {
			//click on file
			content: '<p>This is a file</p><p class="action">Click on highlighted file to continue</p>',
			highlightTarget: true,
			target: $('#fileList tr[data-type="file"]:first'),
			my: 'top center',
			at: 'bottom center',
			bind: ['onClick'],
			setup: function (tour, options) {
				$('#fileList tr[data-type="file"]:first').on('click', this.onClick);
			},
			teardown: function (tour, options) {
				$('#fileList tr[data-type="file"]:first').off('click', this.onClick);
			},
			onClick: function (tour) {
				tour.next();
			}
		}, {
			content: '<p>Here are some details of file</p>',
			nextButton: true,
			highlightTarget: true,
			my: 'right center',
			at: 'left top',
			setup: function (tour, options) {
				var self = this;
				setTimeout(function () {
					tour.view.setTarget($('#app-sidebar '), self);
					tour.view.show()
				}, 400)
			},
		}, {
			//file details - Comment
			content: '<p>You can add Comment.</p>',
			nextButton: true,
			highlightTarget: true,
			target: $('#app-sidebar .tabHeader:first'),
			my: 'bottom center',
			at: 'top center'
		}, {
			//file detaild - Share
			content: '<p>Share a file.</p>',
			nextButton: true,
			highlightTarget: true,
			target: $('#app-sidebar .tabHeader:nth-child(2)'),
			my: 'bottom center',
			at: 'top center'
		}, {
			//file details - version
			content: '<p>Or check all previous versions.</p>',
			nextButton: true,
			highlightTarget: true,
			target: $('#app-sidebar .tabHeader:last'),
			my: 'bottom center',
			at: 'top center'
		}
		]

		var FINAL = {
			content: '<p>Start working with Expansio Docs</p>',
			highlightTarget: true,
			nextButton: true,
			target: $('#fileList'),
			my: 'top center',
			at: 'bottom center'
		}

		var TOUR = new Tourist.Tour({
			stepOptions: STEP_OPTIONS,
			steps: STEPS,
			successStep: FINAL,
			tipClass: 'Bootstrap',
			tipOptions: {
				showEffect: 'slidein'
			}
		});
		TOUR.start();

	});


});