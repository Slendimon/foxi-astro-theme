export interface ResourceData {
    name: string
    fullName: string
    description: string
    type: 'resource' | 'support'
    icon: string
    color: string
    content: string
}

export interface ResourceItem {
    title: string
    description: string
    url: string
    type?: 'article' | 'video' | 'podcast' | 'meditation'
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
    // 'meditation': {
    //     name: 'Meditación',
    //     fullName: 'Meditaciones Guiadas',
    //     description: 'Sesiones de meditación y relajación diseñadas específicamente para estudiantes. Incluye técnicas de respiración y mindfulness.',
    //     type: 'resource',
    //     icon: 'sparkles',
    //     color: 'mental-lavender',
    //     content: 'Relajación'
    // },
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

export const RESOURCE_ITEMS: Record<string, ResourceItem[]> = {
    'blog': [
        {
            title: 'Salud Mental - OPS/OMS',
            description: 'Artículos especializados sobre temas de salud mental de la Organización Panamericana de la Salud',
            url: 'https://www.paho.org/es/temas/salud-mental',
            type: 'article'
        },
        {
            title: 'Cómo mejorar la salud mental - UNICEF',
            description: 'Consejos y recursos para mejorar tu bienestar mental y emocional',
            url: 'https://www.unicef.es/blog/salud-mental/como-mejorar-la-salud-mental',
            type: 'article'
        },
        {
            title: 'Reflexión sobre salud mental - UNICEF',
            description: 'Reflexiones y perspectivas sobre la importancia de la salud mental',
            url: 'https://www.unicef.org/venezuela/blog/reflexi%C3%B3n-sobre-salud-mental',
            type: 'article'
        },
        {
            title: 'Entre a la universidad y me siento perdido',
            description: 'Es normal lo que me pasa - Guía para estudiantes que enfrentan cambios en la universidad',
            url: 'https://subjetivamente.cl/salud-mental/entre-a-la-universidad-y-me-siento-perdido-es-normal-lo-que-me-pasa/',
            type: 'article'
        },
        {
            title: 'Una vida sin salud mental - AUNA',
            description: 'Consejos para tu bienestar emocional y salud mental durante la universidad',
            url: 'https://blog.auna.pe/una-vida-sin-salud-mental-consejos-para-tu-bienestar-emocional',
            type: 'article'
        },
        {
            title: 'Cómo lidiar con la depresión - DBH Utah',
            description: 'Recursos y guías para entender y manejar la depresión',
            url: 'https://www.dbhutah.org/es/how-to-deal-with-depression/',
            type: 'article'
        },
        {
            title: 'Sana Mente - Quirónsalud',
            description: 'Blog especializado en salud mental con artículos de expertos en psicología y psiquiatría',
            url: 'https://www.quironsalud.com/blogs/es/blogs-quironsalud/sana-mente',
            type: 'article'
        },
        {
            title: 'Blog de Salud Mental - Neurociencias Aplicadas',
            description: 'Artículos sobre neurociencia y salud mental desde una perspectiva científica',
            url: 'https://www.neurocienciasaplicadas.org/blog-salud-mental',
            type: 'article'
        }
    ],
    'videos': [
        {
            title: 'Salud Mental en Estudiantes',
            description: 'Contenido educativo sobre salud mental para estudiantes universitarios',
            url: 'https://www.youtube.com/watch?v=e6q8YEE4NRE',
            type: 'video'
        },
        {
            title: 'Técnicas de Relajación',
            description: 'Aprende técnicas prácticas de relajación para manejar el estrés académico',
            url: 'https://www.youtube.com/watch?v=owr6b1WxWHM',
            type: 'video'
        },
        {
            title: 'Mindfulness para Estudiantes',
            description: 'Ejercicios de atención plena diseñados para estudiantes',
            url: 'https://www.youtube.com/watch?v=wifsNMDztJg',
            type: 'video'
        },
        {
            title: 'Bienestar Mental Universitario',
            description: 'Guía completa para mantener tu bienestar mental durante la universidad',
            url: 'https://www.youtube.com/watch?v=JUdEq6n_0ec&t=4s',
            type: 'video'
        },
        {
            title: 'Salud Mental y Bienestar',
            description: 'Contenido educativo sobre salud mental y estrategias de bienestar',
            url: 'https://youtu.be/2eQGcYotnp0?si=dtUL0_HrrgOpOrnv',
            type: 'video'
        },
        {
            title: 'Técnicas de Salud Mental',
            description: 'Aprende técnicas prácticas para mejorar tu salud mental y bienestar emocional',
            url: 'https://youtu.be/jIgmhgGak2k?si=92ChjMDQ5iZAkjQY',
            type: 'video'
        },
        {
            title: 'Bienestar Mental y Emocional',
            description: 'Recursos y consejos para mantener tu bienestar mental y emocional',
            url: 'https://youtu.be/H2MaaHFAbCI?si=HhK-u-kLxWa7xurn',
            type: 'video'
        }
    ],
    'podcasts': [
        {
            title: 'Salud Mental Estudiantil - Episodio 1',
            description: 'Episodio especializado sobre salud mental en estudiantes universitarios',
            url: 'https://open.spotify.com/episode/6UyGPBOB1xT4tgePxby32s?si=ecw2Qbs5QiCcozKKZuf11w',
            type: 'podcast'
        },
        {
            title: 'Manejo del Estrés Académico',
            description: 'Estrategias prácticas para manejar el estrés durante tus estudios',
            url: 'https://open.spotify.com/episode/5sW24KbeWRLSODB1137LZI?si=m37TW2lwQNWMoAMBS8zs5Q',
            type: 'podcast'
        },
        {
            title: 'Bienestar Emocional',
            description: 'Consejos de expertos sobre bienestar emocional y mental',
            url: 'https://open.spotify.com/episode/4B8jKCXk1kUQWZ5kDNEYnV?si=9Sll9f4vRIW-F6uutJ0UFg',
            type: 'podcast'
        },
        {
            title: 'Salud Mental Universitaria',
            description: 'Recursos y consejos específicos para estudiantes universitarios',
            url: 'https://open.spotify.com/episode/617mf9IuWBzUmM5f99OxLu?si=15ylGRSbT_utziocTtWukQ',
            type: 'podcast'
        }
    ],
    'meditation': []
}