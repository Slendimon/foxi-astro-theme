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
		alt: 'Logo de Salud Mental',
		text: ''
	},
	navItems: [
		{ name: 'Plataforma', link: '/' },
		{ name: 'Salud Mental', link: '/pricing' },
		{ name: 'Proyecto', link: '/features' },
		{ name: 'Contact', link: '/contact' },
		{ name: 'Propuesta de protocolo', link: '/resources' },
		{
			name: 'Apoyo',
			link: '#',
			submenu: [
				{ name: 'DBUN', link: '/blog' },
				{ name: 'CSM', link: '/changelog' },
				{ name: 'Preguntas frecuentes', link: '/faq' },
				{ name: 'Recursos', link: '/terms' }
			]
		},
	],
	navActions: [{ name: 'Plataforma', link: '/', style: 'primary', size: 'lg' }]
}
