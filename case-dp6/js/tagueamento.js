// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

function validate_value(field){
	var valor = $.trim($(field).prop('value'));
	return valor ? true : false;
}

function validate_check(field){
	return $(field).prop('checked');
}

menu_contato = $('a.menu-lista-contato');
menu_contato.click(function(){
	ga('send', {
		hitType: 'event',
		eventCategory: 'menu',
		eventAction: 'entre_em_contato',
		eventLabel: 'link_externo'
	});
});

menu_download = $('a.menu-lista-download');
menu_download.click(function(){
	ga('send', {
		hitType: 'event',
		eventCategory: 'menu',
		eventAction: 'download_pdf',
		eventLabel: 'download_pdf'
	});
});

cards = $('div.card-montadoras');
cards.click(function(){
	var nome = $(this).data('name');
	ga('send', {
		hitType: 'event',
		eventCategory: 'analise',
		eventAction: 'ver_mais',
		eventLabel: nome
	});
});

form = $('form.contato');

inputs = form.find('input');
inputs.change(function(){
	var id = $(this).attr('id');
	var validate = false;
	if(['nome','email','telefone'].includes(id)){
		validate = validate_value(this);
	}
	if(['aceito'].includes(id)){
		validate = validate_check(this);
	}
	if(validate){
		ga('send', {
			hitType: 'event',
			eventCategory: 'contato',
			eventAction: id,
			eventLabel: 'preencheu'
		});
	}
});

form.on('submit', function(){
	ga('send', {
		hitType: 'event',
		eventCategory: 'contato',
		eventAction: 'enviado',
		eventLabel: 'enviado'
	});
});

