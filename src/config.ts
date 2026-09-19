// Constantes de contato do site. Nada de número/dado espalhado pelo HTML —
// tudo entra aqui e os componentes importam daqui.
// Ainda falta preencher CONTACT antes de publicar (marcado com TODO).

/** Dígitos em formato internacional (ex: 5511999998888). Usado nos links wa.me. */
export const WHATSAPP_NUMBER = '5565998007684';

/** Como o número aparece escrito no cabeçalho. */
export const WHATSAPP_DISPLAY = '+55 65 99800-7684';

export const CONTACT = {
	razaoSocial: '[SUA RAZÃO SOCIAL]', // TODO
	cnpj: '[SEU CNPJ]', // TODO
	cidade: '[SUA CIDADE]', // TODO
} as const;

function buildWhatsAppLink(message: string): string {
	return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

// Uma mensagem por ponto de clique, para saber de onde veio o lead.
export const WHATSAPP_LINKS = {
	header: buildWhatsAppLink('Olá! Vi o site e queria falar sobre um caso.'),
	hero: buildWhatsAppLink('Olá! Quero mandar meu caso para análise.'),
	preco: buildWhatsAppLink('Olá! Vi o valor do serviço e quero falar sobre o meu caso.'),
	ctaFinal: buildWhatsAppLink('Olá! Quero saber se meu caso tem material para o parecer.'),
} as const;
