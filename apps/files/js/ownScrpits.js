
var form = '<form class="searchbox" action="#" method="post" role="search" novalidate>'+
	'<label for="searchbox" class="searchbox-label">'+t('files','Search')+'</label>'+
	'<input id="searchbox" class="svg" type="search" name="query" value="" required autocomplete="off" tabindex="5">'+
'</form>';


$(document).ready(function() {
	$("#app-navigation").append(form);
	$('#searchbox').on('hover', function(){
		$('.searchbox-label').toggleClass('hover');
	});

	$('#app-download-btn').on('click',function () {
		$(this).find('i').toggleClass('rotate');
		$('#app-download').toggleClass('hidden-elem');
	});
	if ($('#app-navigation').height() < 445) {
		$(this).find('i').addClass('rotate');
		$('#app-download').addClass('hidden-elem');
	}
});

$( window ).resize(function() {
	if ($('#app-navigation').height() < 445) {
		$(this).find('i').addClass('rotate');
		$('#app-download').addClass('hidden-elem');
	}
});