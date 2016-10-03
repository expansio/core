$(window).load(function () {

	var isTourExecuted = false;

	var STEP_OPTIONS = {
		one: 1,
		two: 2
	};

	var STEPS = [
		{
			//show List with files
			content: '<p>To jest Twoja lista plików. Możesz w tym miejscu tworzyć foldery, umieszczać pliki tekstowe, pdf, zdjęcia, filmy i wszystkie inne – tak jak na Twoim własnym komputerze.</p>',
			closeButton: true,
			nextButton: true,
			highlightTarget: true,
			my: 'top center',
			at: 'bottom center',
			setup: function (tour, options) {
				var self = this;
				setTimeout(function () {
					tour.view.setTarget($('#fileList '), self);
					tour.view.show()
				}, 400)
			},
		}, {
			//show List with files
			content: '<p>Potem pokażę Ci, że możesz automatycznie synchronizować swoje dane na komputerze z Expansio Docs. Wszystko, co umieścisz w wybranym miejscu na Twoim komputerze pojawi się automatycznie w Expansio Docs i odwrotnie – każdy plik, jaki utworzysz w Expansio Docs pojawi się automatycznie na Twoim komputerze.</p>',
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
			content: '<p>Możesz tutaj wpisać nazwę użytkownika Expansio Docs, który natychmiastowo uzyska dostęp do Twojego pliku. <br><br> Możesz także zaznaczyć widoczną poniżej opcję “Udostępnij link”. Każdy, kto otrzyma ten link, będzie mógł dostać się do Twojego pliku. Szybko i bezpiecznie – na serwerach Twojej firmy. Dane nie są wysyłane w żadne inne miejsce.</p>',
			nextButton: true,
			closeButton: true,
			target: $('.tabsContainer'),
			my: 'right bottom',
			at: 'left bottom',
		}, {
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

		}, {
			//Show menu
			content: '<p>Expansio Docs oferuje znacznie więcej. Wystarczy kliknąć odpowiednią ikonę w górnym menu, żeby przejść do dodatkowych modułów. Integracja z pocztą e-mail, kalendarz, możliwość edytowania dokumentów w oknie przeglądarki i wiele innych. <br><br> Jeśli chcesz zobaczyć więcej, skontaktuj się z Expansio – pokażemy Ci wszystkie możliwości.</p>',
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
		else {
			TOUR.stop();
			isTourExecuted = false;
		}
	});

	$('.start-tour').on('click', function () {
		$('#intro').fadeOut(800);
		TOUR.start();
		isTourExecuted = true;
		$('body').remove('#intro');
	});


	$('#intro .intro-content .content').fadeIn(200);

	$('#letterAnimation').click();
	$('#intro-text').delay(2000).fadeIn(2000);
});


var intro = '<div id="intro">' +
	'<div class="intro-content">' +
	'	<svg class="hidden"><symbol id="icon-play" viewBox="0 0 60 60">	<path d="m53.48 27.435l-42.807-26.52c-3.119-2.047-5.672-.541-5.672 3.346v51.48c0 3.885 2.553 5.391 5.672 3.346l42.807-26.52c0 0 1.521-1.07 1.521-2.566s-1.521-2.566-1.521-2.566" />' +
	'	</symbol>	</svg>	<div class="container">	<section class="content"  style="display: none;">	<ul class="list">' +
	'	<li class="list__item color-3">	<h3 class="list__text">Expansio Docs</h3><button id="letterAnimation" class="control__button control__button--play" aria-label="Trigger animation">	<svg class="control__vector" aria-hidden="true" role="img" viewBox="0 0 60 60">	<use xlink:href="#icon-play"></use>	</svg>	</button>	</li>'+
	'</ul></section>' +
	'<div id="intro-text" class="intro-text" style="display:none;"> <h2> W kolejnych krokach pokażemy Ci w jaki sposób od dzisiaj będziesz mógł zarządzac swoimi dokumentami.</h2>' +
	"<button class='start-tour''>Poznaj Expansio Docs!</button> </div>" +
	"</div>" +
"</div>";


// dispaly welcome page only on first login
$(document).ready(function () {
	//localStorage.clear();
	if (localStorage.EDStorage != 1) {
		$('body').prepend(intro);
		localStorage.setItem('EDStorage', 1);
	}
});