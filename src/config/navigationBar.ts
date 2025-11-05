// Navigation Bar
// ------------
// Description: The navigation bar data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface NavSubItem {
	name: string
	link: string
}

export interface NavItem {
	name: string
	link: string
	submenu?: NavSubItem[]
}

export interface NavAction {
	name: string
	link: string
	style: string
	size: string
}

export interface NavData {
	logo: Logo
	navItems: NavItem[]
	navActions: NavAction[]
}

export const navigationBarData: NavData = {
	logo: {
		src: '/logo-same.png',
		alt: 'SAME - Salud Mental Estudiantil UNJBG',
		text: ''
	},
	navItems: [
		{ name: 'Inicio', link: '/' },
		{ name: 'Proyecto', link: '/proyecto' },
			{ name: 'Conceptos', link: '/conceptos' },
		{ name: 'Instrumentos de evaluación', link: '/tests' },
		{ name: 'Recursos', link: '/resources' },
		{ name: 'Blog', link: '/blog' },
		{
			name: 'Apoyo',
			link: '#',
			submenu: [
				{ name: 'Centros de Apoyo', link: '/support' },
				// { name: 'Citas', link: '/appointments' },
				// { name: 'Dashboard', link: '/dashboard' },
				// { name: 'Preguntas Frecuentes', link: '/faq' },
				{ name: 'Contacto', link: '/contact' }
			]
		},
	],
	navActions: [{ name: 'Ayuda Para Ti', link: 'https://test.same.com.pe/login', style: 'primary', size: 'lg' }]
}
