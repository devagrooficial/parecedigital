import type { IconName } from './icons';

// Etapas da seção "Como funciona". O texto é o mesmo do design aprovado.
export interface Step {
	numero: string;
	icone: IconName;
	titulo: string;
	texto: string;
	/** Rótulo curto exibido como chip: tempo da etapa ou característica dela. */
	meta: string;
}

export const STEPS: Step[] = [
	{
		numero: '01',
		icone: 'upload',
		titulo: 'Você exporta e envia',
		texto: 'Te mando o passo a passo da exportação por WhatsApp. Leva dois minutos e é o próprio cliente quem faz, no aparelho dele.',
		meta: '2 minutos',
	},
	{
		numero: '02',
		icone: 'list-check',
		titulo: 'Vinte minutos de escopo',
		texto: 'Qual é a tese, o que precisa ficar provado, quem são as pessoas. Sem essa conversa o parecer vira relatório genérico, e relatório genérico não serve para nada.',
		meta: '20 minutos',
	},
	{
		numero: '03',
		icone: 'lock',
		titulo: 'Análise',
		texto: 'O arquivo é processado com ferramenta própria, em ambiente isolado. Nada é enviado para serviço de terceiro e nada fica hospedado em nuvem.',
		meta: 'ambiente isolado',
	},
	{
		numero: '04',
		icone: 'file-check',
		titulo: 'Parecer e reunião de leitura',
		texto: 'PDF na sua mão em até 48 horas, mais meia hora de conversa para você tirar dúvida técnica antes de peticionar.',
		meta: 'até 48 horas',
	},
];
