export interface ResourceData {
    name: string
    fullName: string
    description: string
    type: 'resource' | 'support'
    icon: string
    color: string
    content: string
}

export const RESOURCE_DATA: Record<string, ResourceData> = {
    'blog': {
        name: 'Blog',
        fullName: 'Blog de Salud Mental',
        description: 'Artículos especializados sobre manejo del estrés académico, técnicas de relajación, y consejos para mantener el bienestar mental durante la universidad.',
        type: 'resource',
        icon: 'book-open',
        color: 'mental-green',
        content: 'Lectura'
    },
    'videos': {
        name: 'Videos',
        fullName: 'Videos Educativos',
        description: 'Contenido audiovisual con expertos en psicología, técnicas de respiración, ejercicios de mindfulness y charlas sobre salud mental estudiantil.',
        type: 'resource',
        icon: 'play-circle',
        color: 'mental-green',
        content: 'Multimedia'
    },
    'podcasts': {
        name: 'Podcasts',
        fullName: 'Podcasts Especializados',
        description: 'Episodios de podcast con psicólogos y especialistas en salud mental universitaria. Escucha consejos y experiencias de otros estudiantes.',
        type: 'resource',
        icon: 'headphones',
        color: 'mental-green',
        content: 'Audio'
    },
    'meditation': {
        name: 'Meditación',
        fullName: 'Meditaciones Guiadas',
        description: 'Sesiones de meditación y relajación diseñadas específicamente para estudiantes. Incluye técnicas de respiración y mindfulness.',
        type: 'resource',
        icon: 'sparkles',
        color: 'mental-lavender',
        content: 'Relajación'
    },
    // 'therapy': {
    //     name: 'Terapia',
    //     fullName: 'Terapia Online',
    //     description: 'Acceso a sesiones de terapia online con profesionales certificados. Programas de apoyo psicológico adaptados a estudiantes universitarios.',
    //     type: 'support',
    //     icon: 'heart',
    //     color: 'mental-lavender',
    //     content: 'Profesional'
    // }
}