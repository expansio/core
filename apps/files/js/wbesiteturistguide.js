$(window).load(function () {

	var isTourExecuted = false;

	var STEP_OPTIONS = {
		one: 1,
		two: 2
	};

	var STEPS = [
		{
			//show List with files
			content: '<p>To jest Twoja lista plików. Możesz w tym miejscu tworzyć foldery, umieszczać pliki tekstowe, pdf, zdjęcia, filmy i wszystkie inne – tak jak na Twoim własnym komputerze.</p>' +
			'<p>Potem pokażę Ci, że możesz automatycznie synchronizować swoje dane na komputerze z Expansio Docs. Wszystko, co umieścisz w wybranym miejscu na Twoim komputerze pojawi się automatycznie w Expansio Docs i odwrotnie – każdy plik, jaki utworzysz w Expansio Docs pojawi się automatycznie na Twoim komputerze.</p>',
			closeButton: true,
			nextButton: true,
			highlightTarget: true,
			target: $('#fileList'),
			my: 'top center',
			at: 'bottom center'

		}, {
			//click on file
			content: '<p>Kliknij na podświetlony plik, żeby zobaczyć szczegóły.</p>',
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
			content: '<p>Po prawej stronie pojawiły się szczegóły Twojego pliku.</p>',
			nextButton: true,
			closeButton: true,
			highlightTarget: true,
			my: 'right top',
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
			content: '<p>Na tej zakładce możesz dodawać komentarze do wybranego pliku, a jeśli udostępniłaś plik innym osobom, one także będą mogły dodawać tutaj swoje uwagi.</p>',
			nextButton: true,
			closeButton: true,
			highlightTarget: true,
			target: $('#app-sidebar .tabHeader:first'),
			my: 'right bottom',
			at: 'left center'
		}, {
			//file detaild - Share
			content: '<p>Kliknij w zakładkę “Udostępnianie”.</p>',
			highlightTarget: true,
			target: $('#app-sidebar .tabHeader:nth-child(2)'),
			my: 'bottom center',
			at: 'top center',
			bind: ['onClick'],
			setup: function (tour, options) {
				$('#app-sidebar .tabHeader:nth-child(2)').on('click', this.onClick);
			},
			teardown: function (tour, options) {
				$('#app-sidebar .tabHeader:nth-child(2)').off('click', this.onClick);
			},
			onClick: function (tour) {
				tour.next();
			}

		}, {
			//file details - version
			content: '<p>Możesz tutaj wpisać nazwę użytkownika Expansio Docs, który natychmiastowo uzyska dostęp do Twojego pliku. Możesz także zaznaczyć widoczną poniżej opcję “Udostępnij link”. Każdy, kto otrzyma ten link, będzie mógł dostać się do Twojego pliku. Szybko i bezpiecznie – na serwerach Twojej firmy. Dane nie są wysyłane w żadne inne miejsce.</p>',
			nextButton: true,
			closeButton: true,
			target: $('.tabsContainer'),
			my: 'right bottom',
			at: 'left center',
		},{
			//file detaild - Share
			content: '<p>Kliknij w zakładkę “Wersje”.</p>',
			highlightTarget: true,
			target: $('#app-sidebar .tabHeader:nth-child(3)'),
			my: 'bottom center',
			at: 'top center',
			bind: ['onClick'],
			setup: function (tour, options) {
				$('#app-sidebar .tabHeader:nth-child(3)').on('click', this.onClick);
			},
			teardown: function (tour, options) {
				$('#app-sidebar .tabHeader:nth-child(3)').off('click', this.onClick);
			},
			onClick: function (tour) {
				tour.next();
			}

		}, {
			//file details - version
			content: '<p>Jeśli wprowadzisz zmiany do swojego pliku albo wgrasz do Expansio Docs plik o takiej samej nazwie, Expansio Docs zapisze wszystkie poprzednie wersje tego pliku. Możliwe jest przywrócenie dowolnej wersji z przeszłości.</p>',
			nextButton: true,
			closeButton: true,
			target: $('.tabsContainer'),
			my: 'right bottom',
			at: 'left center'
		}, {
			//click on file
			content: '<p>Klikając w plusa możesz utworzyć nowy folder w Expansio Docs lub załadować nowy plik z Twojego komputera.</p>',
			highlightTarget: true,
			closeButton: true,
			nextButton: true,
			target: $('.button.new'),
			my: 'left center',
			at: 'right center',

		}, {
			//click on file
			content: '<p>Z kolei wyszukiwarka po lewej stronie pozwala szukać dowolnych plików. Przeszukuje ona także ich treść.</p>',
			highlightTarget: true,
			closeButton: true,
			nextButton: true,
			target: $('#searchbox'),
			my: 'left center',
			at: 'right center',

		},{
			//Show menu
			content: '<p>Expansio Docs oferuje znacznie więcej. Wystarczy kliknąć odpowiednią ikonę w górnym menu, żeby przejść do dodatkowych modułów. Integracja z pocztą e-mail, kalendarz, możliwość edytowania dokumentów w oknie przeglądarki i wiele innych. Jeśli chcesz zobaczyć więcej, skontaktuj się z Expansio – pokażemy Ci wszystkie możliwości.</p>',
			highlightTarget: true,
			nextButton: true,
			target: $('#apps'),
			my: 'top center',
			at: 'bottom center',
			setup: function () {
				isTourExecuted = false;
			}
		}
	]


	var TOUR = new Tourist.Tour({
		stepOptions: STEP_OPTIONS,
		steps: STEPS,
		tipClass: 'Bootstrap',
		tipOptions: {
			showEffect: 'slidein'
		}
	});

	$('#start-tour').on('click', function () {
		if (isTourExecuted == 0) {
			TOUR.start();
			isTourExecuted = true;
		}
		else{
			TOUR.stop();
			isTourExecuted = false;
		}
	});

	$('.start-tour').on('click', function () {
		$('#intro').hide('500');
		TOUR.start();
		isTourExecuted = true;
	});

	// $('.tour-buttons').on('click', '.tour-stop' , function (e) {
	// 	e.preventDefault();
	// 	TOUR.stop();
	// 	isTourExecuted = false;
	// });

	$("body").on("click", ".tour-close", function() {
		alert("Fired!");
	});

});


// dispaly welcome page only on first login
$(document).ready(function () {

	if (localStorage.EDVisited != 1 ) {
		$('#intro').css('display','block');
		localStorage.setItem('EDVisited', 1);
	}

});