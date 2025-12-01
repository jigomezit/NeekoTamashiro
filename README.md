# Neeko Tamashiro - Japanese Tattoo Artist Website

Página web profesional creada con Next.js, TypeScript y Tailwind CSS, basada en el diseño de Figma.

## Características

- ✅ Diseño idéntico al diseño de Figma
- ✅ Modo oscuro por defecto
- ✅ Fuente Sans Serif (Inter) en color blanco
- ✅ Diseño completamente responsive
- ✅ Navegación suave entre secciones
- ✅ Optimización automática de imágenes con Next.js

## Secciones

1. **Nav Bar** - Header fijo con logo, nombre y navegación
2. **Hero Banner** - Imagen de fondo con tatuajes y CTA
3. **Biography** - Biografía de Neeko Tamashiro con foto de perfil
4. **Book Features** - Galería de libros publicados
5. **Art Work** - Sección de arte con quote inspiracional
6. **Other Projects** - Proyectos Kabuto y Kamisama
7. **Merch Section** - Tienda de productos exclusivos
8. **Contact** - Información de contacto

## Instalación

1. Instala las dependencias:
```bash
npm install
```

2. Agrega las imágenes requeridas:
   - Coloca todas las imágenes en la carpeta `public/img/`
   - Consulta `public/img/README.md` para la lista completa de imágenes necesarias

3. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Imágenes Requeridas

Todas las imágenes deben colocarse en `/public/img/` con los siguientes nombres:

- `hero-background.jpg` - Imagen de fondo del Hero Banner
- `neeko-profile.jpg` - Foto de perfil para Biography
- `book-1.jpg`, `book-2.jpg`, `book-3.jpg` - Imágenes de Book Features
- `artwork-background.jpg` - Imagen de fondo de Art Work
- `kabuto-project.jpg` - Imagen del proyecto Kabuto
- `kamisama-project.jpg` - Imagen del proyecto Kamisama
- `merch-background.jpg` - Imagen de fondo de Merch Section
- `logo-icon.png` - Logo circular del header (opcional)

Consulta `public/img/README.md` para más detalles sobre las dimensiones recomendadas.

## Estructura del Proyecto

```
├── app/
│   ├── layout.tsx      # Layout principal con configuración de fuentes
│   ├── page.tsx        # Página principal con todas las secciones
│   └── globals.css     # Estilos globales
├── public/
│   └── img/            # Carpeta para todas las imágenes
│       └── README.md   # Lista detallada de imágenes requeridas
└── package.json
```

## Tecnologías Utilizadas

- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- React Icons

