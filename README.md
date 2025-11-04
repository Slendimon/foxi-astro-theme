# SAME - Plataforma de Salud Mental UNJBG

Plataforma integral de salud mental diseñada específicamente para estudiantes universitarios de la Universidad Nacional Jorge Basadre Grohmann (UNJBG). Ofrecemos evaluaciones psicológicas validadas, recursos educativos especializados y acceso directo a centros de apoyo profesional.

![SAME Plataforma](https://img.shields.io/badge/Estado-Producción-success?style=for-the-badge)
![Licencia](https://img.shields.io/badge/Licencia-MIT-blue?style=for-the-badge)
![Astro](https://img.shields.io/badge/Astro-5.13.4-FF5D01?style=for-the-badge&logo=astro)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.4-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🎯 Sobre SAME

SAME (Salud Mental Estudiantil) es una iniciativa de la Universidad Nacional Jorge Basadre Grohmann que busca promover el bienestar mental de la comunidad estudiantil mediante:

- **Tests Psicológicos Validados**: GAD-7, PHQ-9, PCL-5, IES-R, C-SSRS, BDI-II, AUDIT
- **Recursos Educativos**: Blog especializado, videos, podcasts y meditaciones guiadas
- **Centros de Apoyo**: Acceso directo a profesionales de la salud mental
- **Sistema de Citas**: Agendamiento en línea con especialistas
- **Dashboard Personal**: Seguimiento del progreso mental del estudiante

### 📊 Impacto en la Comunidad

Según datos de la DIRESA Tacna:
- **19.46%** de incidencia de ansiedad
- **7.45%** de depresión
- **4.67%** de consumo problemático de alcohol
- **954 personas** atendidas con problemas psicosociales
- **19 casos** de intento de suicidio atendidos

## ✨ Características Principales

### 🧠 Tests Psicológicos
- **GAD-7**: Evaluación de ansiedad generalizada (5-7 minutos)
- **PHQ-9**: Cuestionario de depresión (5-10 minutos)
- **PCL-5**: Estrés postraumático (10-15 minutos)
- **IES-R**: Impacto de eventos traumáticos (10-15 minutos)
- **C-SSRS**: Riesgo suicida (10-20 minutos)
- **BDI-II**: Inventario de depresión (10-15 minutos)
- **AUDIT**: Consumo de alcohol (5-10 minutos)

### 📚 Recursos Educativos
- **Blog Especializado**: Artículos sobre manejo del estrés académico
- **Videos Educativos**: Contenido audiovisual con expertos
- **Podcasts**: Conversaciones con psicólogos especializados
- **Meditaciones Guiadas**: Técnicas de relajación para estudiantes


### 🏥 Centros de Apoyo
- **Línea de Crisis 24/7**: Apoyo inmediato en situaciones de emergencia
- **Centros de Atención**: Ubicaciones físicas en campus universitario
- **Profesionales Certificados**: Psicólogos especializados en salud estudiantil
- **Grupos de Apoyo**: Espacios para compartir experiencias

### 📱 Características Técnicas
- **Diseño Responsive**: Optimizado para móviles y tablets
- **Tema Claro**: Diseño enfocado en la legibilidad y reducción de fatiga visual
- **Accesibilidad WCAG**: Cumple estándares de accesibilidad web
- **Navegación Intuitiva**: Estructura clara y fácil de usar
- **Carga Rápida**: Optimizado para performance (PageSpeed 100%)
- **SEO Optimizado**: Mejor visibilidad en motores de búsqueda

## 🚀 Inicio Rápido

### Requisitos del Sistema

- **Node.js**: Versión 20.3.0 o superior
- **npm**: Incluido con Node.js
- **Sistema Operativo**: Windows, macOS o Linux

### Instalación y Ejecución

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm run dev

# 3. Abrir navegador en http://localhost:4321
```

### Comandos Disponibles

| Comando          | Descripción                                                                                 |
| :--------------- | :------------------------------------------------------------------------------------------ |
| `npm run dev`    | Inicia servidor de desarrollo en `localhost:4321`                                           |
| `npm run build`  | Construye el sitio para producción en `./dist/`                                            |
| `npm run preview`| Vista previa del sitio construido localmente                                               |
| `npm run astro`  | Ejecuta comandos directos de Astro                                                          |

## 📁 Estructura del Proyecto

```
same-plataforma-salud-mental/
├── public/                    # Assets estáticos (imágenes, favicon)
│   ├── logo-same.png         # Logo de SAME
│   └── og.jpg                # Imagen para redes sociales
├── src/
│   ├── assets/               # Imágenes y recursos multimedia
│   ├── components/           # Componentes reutilizables
│   │   ├── blocks/           # Bloques de sección (hero, tests, etc.)
│   │   └── ui/               # Componentes de UI básicos
│   ├── config/               # Configuraciones de la aplicación
│   │   ├── config.ts         # Configuración general (SEO, modo)
│   │   ├── navigationBar.ts  # Configuración del menú
│   │   └── tailwind.config.mjs # Configuración de colores
│   ├── content/              # Contenido dinámico
│   │   └── blog/             # Artículos del blog
│   ├── data/                 # Datos JSON y archivos de contenido
│   │   ├── tests.ts          # Configuración de tests psicológicos
│   │   └── resources.ts      # Configuración de recursos
│   ├── icons/                # Íconos personalizados
│   ├── layouts/              # Layouts de página
│   ├── pages/                # Páginas del sitio
│   │   ├── index.astro       # Página principal
│   │   ├── tests/            # Páginas de tests
│   │   └── resources/        # Páginas de recursos
│   └── styles/               # Estilos CSS personalizados
└── package.json              # Dependencias y scripts
```

### 📋 Descripción de Directorios

| Directorio/Archivo         | Descripción                                                                                  |
| -------------------------- | -------------------------------------------------------------------------------------------- |
| `public/`                  | Assets estáticos servidos directamente desde la raíz del dominio                            |
| `src/assets/`              | Imágenes, íconos y recursos multimedia utilizados en el proyecto                             |
| `src/components/blocks/`   | Componentes de sección reutilizables (hero, tests, recursos, etc.)                           |
| `src/components/ui/`       | Componentes básicos de interfaz (botones, cards, formularios)                                |
| `src/config/`              | Archivos de configuración en TypeScript (SEO, navegación, colores)                           |
| `src/content/blog/`        | Artículos del blog en formato Markdown                                                       |
| `src/data/`                | Datos JSON con información de tests, recursos y configuraciones                              |
| `src/icons/`               | Íconos personalizados utilizados en la plataforma                                            |
| `src/layouts/`             | Layouts que definen la estructura general de las páginas                                     |
| `src/pages/`               | Archivos `.astro` que generan las rutas del sitio                                            |
| `src/styles/`              | Estilos CSS personalizados y optimizaciones para salud mental                                |

## ⚙️ Configuración de SAME

Los archivos de configuración se encuentran en el directorio `src/config/`. Estos archivos contienen todas las configuraciones necesarias para personalizar la plataforma SAME.

| Archivo de Configuración       | Descripción                                                                                     |
| ------------------------------ | ----------------------------------------------------------------------------------------------- |
| `src/config/config.ts`         | Configuración básica: SEO, modo de visualización, animaciones                                  |
| `src/config/navigationBar.ts`  | Configuración del menú de navegación principal                                                  |
| `src/config/footerNavigation.ts`| Configuración del menú del footer                                                              |
| `src/config/analytics.ts`      | Configuración de Google Analytics, Tag Manager y Search Console                                |
| `src/config/socialLinks.ts`    | Enlaces a redes sociales de la UNJBG                                                           |

### 🔧 Configuración Básica

**SEO y Metadatos:**
- `siteTitle`: Título principal del sitio ("SAME - Plataforma de Salud Mental")
- `siteDescription`: Descripción para motores de búsqueda
- `ogImage`: Imagen para compartir en redes sociales
- `logo`: Logo de SAME para la navegación

**Configuración del Sitio:**
- `mode`: Modo de visualización (solo 'light' para reducir fatiga visual)
- `scrollAnimations`: Animaciones suaves de scroll habilitadas
- `canonical`: Enlaces canónicos para SEO

## 🎨 Personalización

### Colores de Salud Mental

SAME utiliza una paleta de colores especialmente diseñada para salud mental:

```javascript
// Paleta optimizada para salud mental
mental: {
  blue:    // Azul calmante para tests psicológicos
  green:   // Verde esperanza para recursos positivos
  lavender:// Lavanda suave para apoyo emocional
  yellow:  // Amarillo suave para contenido sensible
  pink:    // Rosa empático para cuidado
}
```

### Tipografía Accesible

- **Inter**: Fuente principal para excelente legibilidad
- **Outfit**: Fuente para encabezados con buen contraste
- **Tamaños optimizados**: Para reducir fatiga visual

## 🚀 Despliegue

### Construcción para Producción

```bash
# Construir el sitio optimizado
npm run build

# Vista previa antes del despliegue
npm run preview
```

### Opciones de Despliegue

**Vercel (Recomendado):**
```bash
npm i -g vercel
vercel --prod
```

**Netlify:**
```bash
npm run build
# Subir el contenido de ./dist/
```

**Servidor Estático:**
```bash
npm run build
# Servir el contenido de ./dist/ con cualquier servidor web
```

## 📊 Monitoreo y Analytics

### Google Analytics
- Seguimiento anónimo de uso de la plataforma
- Métricas de engagement con recursos de salud mental
- Optimización basada en datos de uso real

### Métricas de Salud Mental
- Tests más utilizados por estudiantes
- Recursos más accedidos
- Horarios de mayor uso para optimizar soporte

## 🔒 Privacidad y Seguridad

### Protección de Datos
- **Anonimato total**: No se almacenan datos personales
- **Encriptación**: Toda comunicación HTTPS
- **Cumplimiento**: Normas de protección de datos estudiantiles

### Accesibilidad WCAG
- **Contraste optimizado**: Para reducir fatiga visual
- **Navegación por teclado**: Totalmente funcional
- **Lectores de pantalla**: Completamente compatible

## 📞 Soporte y Contacto

### Centro de Desarrollo
- **Universidad**: Universidad Nacional Jorge Basadre Grohmann (UNJBG)
- **Proyecto**: SAME - Salud Mental Estudiantil
- **Equipo**: Investigadores en Psicología y Desarrollo Web

### Contacto de Emergencia
- **Línea de Crisis**: 24/7 para estudiantes
- **Centros de Apoyo**: Ubicaciones físicas en campus
- **Apoyo Profesional**: Psicólogos especializados

## 📄 Licencia

**MIT License** - Copyright © 2024 Universidad Nacional Jorge Basadre Grohmann

Proyecto desarrollado para promover el bienestar mental estudiantil. Uso libre para instituciones educativas con fines similares.

---

**SAME - Cuidando la Salud Mental de Nuestros Estudiantes** 🧠💙

*Plataforma desarrollada con ❤️ por y para la comunidad universitaria*
