// Constantes de contato do site. Nada de número/dado espalhado pelo HTML —
// tudo entra aqui, com TODO, e os componentes importam daqui.
// TODO: preencher com os dados reais antes de publicar.

/** Dígitos em formato internacional (ex: 5511999998888). Usado nos links wa.me. */
export const WHATSAPP_NUMBER = '55XXXXXXXXXXX'; // TODO: número real do WhatsApp

/** Como o número aparece escrito no cabeçalho. */
export const WHATSAPP_DISPLAY = '[SEU WHATSAPP]'; // TODO: ex. "+55 11 99999-8888"

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
