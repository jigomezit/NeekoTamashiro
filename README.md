# Neeko Tamashiro - Coming Soon

Página web "En Construcción" creada con Next.js, TypeScript y Tailwind CSS.

## Características

- ✅ Modo oscuro por defecto
- ✅ Fuente Sans Serif (Inter) en color blanco
- ✅ Diseño responsive
- ✅ Imagen de fondo personalizable
- ✅ CTA de Instagram con logo

## Instalación

1. Instala las dependencias:
```bash
npm install
```

2. Agrega tu imagen de fondo:
   - Coloca tu imagen llamada `image.png` en la carpeta `public/`
   - La imagen será usada como fondo de la página

3. Ejecuta el servidor de desarrollo:
```bash
npm run dev
```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Reemplazar la Imagen de Fondo

Para reemplazar la imagen de fondo:
1. Coloca tu nueva imagen en `public/image.png`
2. Asegúrate de que el archivo se llame exactamente `image.png`
3. La página se actualizará automáticamente

## Estructura del Proyecto

```
├── app/
│   ├── layout.tsx      # Layout principal con configuración de fuentes
│   ├── page.tsx        # Página principal "En Construcción"
│   └── globals.css     # Estilos globales
├── public/
│   └── image.png       # Imagen de fondo (agregar tu imagen aquí)
└── package.json
```

## Tecnologías Utilizadas

- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- React Icons

