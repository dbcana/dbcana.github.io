// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

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

