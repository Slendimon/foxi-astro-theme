export interface TestData {
	name: string
	fullName: string
	description: string
	duration: string
	questions: number
	icon: string
	color: string
	urgency: boolean
}

export const TEST_DATA: Record<string, TestData> = {
	'gad-7': {
		name: 'GAD-7',
		fullName: 'Test de Ansiedad Generalizada',
		description: 'Evalúa la severidad de los síntomas de ansiedad generalizada en las últimas 2 semanas.',
		duration: '5-7 min',
		questions: 7,
		icon: 'heart',
		color: 'mental-blue',
		urgency: false
	},
	'phq-9': {
		name: 'PHQ-9',
		fullName: 'Test de Depresión',
		description: 'Evalúa la presencia y severidad de síntomas depresivos en las últimas 2 semanas.',
		duration: '5-10 min',
		questions: 9,
		icon: 'brain',
		color: 'mental-blue',
		urgency: false
	},
	'pcl-5': {
		name: 'PCL-5',
		fullName: 'Test de Estrés Postraumático',
		description: 'Evalúa síntomas de trastorno de estrés postraumático según los criterios del DSM-5.',
		duration: '10-15 min',
		questions: 20,
		icon: 'shield-exclamation',
		color: 'mental-lavender',
		urgency: false
	},
	'ies-r': {
		name: 'IES-R',
		fullName: 'Test de Impacto de Evento',
		description: 'Mide la angustia subjetiva causada por eventos traumáticos.',
		duration: '10-15 min',
		questions: 22,
		icon: 'exclamation-triangle',
		color: 'mental-yellow',
		urgency: true
	},
	'c-ssrs': {
		name: 'C-SSRS',
		fullName: 'Test de Riesgo Suicida',
		description: 'Identifica presencia, frecuencia e intensidad de ideación y conducta suicida.',
		duration: '10-20 min',
		questions: 16,
		icon: 'exclamation-circle',
		color: 'red',
		urgency: true
	},
	'bdi-ii': {
		name: 'BDI-II',
		fullName: 'Inventario de Depresión',
		description: 'Mide la severidad de la depresión con síntomas emocionales, cognitivos y somáticos.',
		duration: '10-15 min',
		questions: 21,
		icon: 'heart',
		color: 'mental-blue',
		urgency: false
	},
	'audit': {
		name: 'AUDIT',
		fullName: 'Test de Consumo de Alcohol',
		description: 'Detecta consumo riesgoso, perjudicial o dependencia de alcohol según la OMS.',
		duration: '5-10 min',
		questions: 10,
		icon: 'beaker',
		color: 'mental-yellow',
		urgency: true
	}
}
