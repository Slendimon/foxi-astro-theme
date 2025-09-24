// Footer Navigation
// ------------
// Description: The footer navigation data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface FooterAbout {
	title: string
	aboutText: string
	logo: Logo
}

export interface SubCategory {
	subCategory: string
	subCategoryLink: string
}

export interface FooterColumn {
	category: string
	subCategories: SubCategory[]
}

export interface SubFooter {
	copywriteText: string
}

export interface FooterData {
	footerAbout: FooterAbout
	footerColumns: FooterColumn[]
	subFooter: SubFooter
}

export const footerNavigationData: FooterData = {
	footerAbout: {
		title: 'SAME - Salud Mental Estudiantil',
		aboutText:
			'Plataforma integral de salud mental diseñada específicamente para estudiantes universitarios. Ofrecemos evaluaciones psicológicas validadas, recursos educativos especializados y acceso directo a centros de apoyo profesional.',
		logo: {
			src: '/logo-same.png',
			alt: 'SAME - Plataforma de Salud Mental UNJBG',
			text: 'SAME'
		}
	},
	footerColumns: [
		{
			category: 'Evaluaciones',
			subCategories: [
				{
					subCategory: 'Tests Psicológicos',
					subCategoryLink: '/tests'
				},
				{
					subCategory: 'GAD-7 (Ansiedad)',
					subCategoryLink: '/tests/gad-7'
				},
				{
					subCategory: 'PHQ-9 (Depresión)',
					subCategoryLink: '/tests/phq-9'
				},
				{
					subCategory: 'PCL-5 (Estrés Postraumático)',
					subCategoryLink: '/tests/pcl-5'
				},
				{
					subCategory: 'Todos los Tests',
					subCategoryLink: '/tests'
				}
			]
		},
		{
			category: 'Recursos',
			subCategories: [
				{
					subCategory: 'Blog de Salud Mental',
					subCategoryLink: '/blog'
				},
				{
					subCategory: 'Videos Educativos',
					subCategoryLink: '/resources/videos'
				},
				{
					subCategory: 'Podcasts',
					subCategoryLink: '/resources/podcasts'
				},
				{
					subCategory: 'Meditaciones',
					subCategoryLink: '/resources/meditation'
				},
				{
					subCategory: 'Todos los Recursos',
					subCategoryLink: '/resources'
				}
			]
		},
		{
			category: 'Apoyo',
			subCategories: [
				{
					subCategory: 'Centros de Apoyo',
					subCategoryLink: '/support'
				},
				{
					subCategory: 'Agendar Cita',
					subCategoryLink: '/appointments'
				},
				{
					subCategory: 'Dashboard Personal',
					subCategoryLink: '/dashboard'
				},
				{
					subCategory: 'Preguntas Frecuentes',
					subCategoryLink: '/faq'
				},
				{
					subCategory: 'Contacto',
					subCategoryLink: '/contact'
				}
			]
		}
	],
	subFooter: {
		copywriteText: '© SAME - Universidad Nacional Jorge Basadre Grohmann 2025.'
	}
}
