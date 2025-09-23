// Config
// ------------
// Description: The configuration file for the website.

export interface Logo {
	src: string
	alt: string
}

export type Mode = 'auto' | 'light' | 'dark'

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	mode: Mode
	scrollAnimations: boolean
}

export const configData: Config = {
	siteTitle: 'SAME - Plataforma de Salud Mental',
	siteDescription:
		'SAME es una plataforma integral de salud mental diseñada para estudiantes universitarios. Ofrecemos tests psicológicos validados, recursos educativos, blogs, videos, podcasts y centros de apoyo para mejorar el bienestar mental.',
	ogImage: '/og.jpg',
	logo: {
		src: '/logo-same.png',
		alt: 'SAME - Plataforma de Salud Mental'
	},
	canonical: true,
	noindex: false,
	mode: 'auto',
	scrollAnimations: true
}
