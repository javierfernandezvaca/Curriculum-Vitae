# Portfolio Profesional

Aplicación web del portafolio personal del Ingeniero de Software, Javier Fernández Vaca.

---

## Stack Tecnológico

| Tecnología | Versión | Uso |
|---|---|---|
| React | 19 | UI framework |
| Vite | 6 | Bundler y dev server |
| TypeScript | 5.8 | Tipado estático |
| Tailwind CSS | 4 | Estilos |
| Motion (Framer) | 12 | Animaciones |
| Lucide React | 0.5+ | Iconos |

---

## Desarrollo Local

### 1. Requisitos previos
- Node.js 18 o superior
- npm 9 o superior

### 2. Instalar dependencias

```bash
cd portfolio-profesional
npm install
```

### 3. Ejecutar en modo desarrollo

```bash
npm run dev
```

La app estará disponible en **http://localhost:3000**

### 4. Verificar tipos TypeScript

```bash
npm run lint
```

---

## Build de Producción

### Generar el bundle optimizado

```bash
npm run build
```

Los archivos se generan en la carpeta `dist/`.

### Previsualizar el bundle localmente antes de publicar

```bash
npm run preview
```

---

## Despliegue en GitHub Pages

El deploy es **automático** mediante GitHub Actions:

- Cualquier `push` a la rama `main` que modifique archivos dentro de `portfolio-profesional/` dispara el workflow de CI/CD.
- El sitio se publica en: **https://javierfernandezvaca.github.io/Curriculum-Vitae/**

### Configuración requerida

1. Ir a **GitHub → Settings → Pages**
2. En *Source*, seleccionar **"GitHub Actions"**
3. Hacer push a `main` — el deploy se ejecuta automáticamente

### Ver el estado del deploy

Ir a la pestaña **Actions** del repositorio en GitHub.

---

## Estructura del Proyecto

```
portfolio-profesional/
├── public/
│   └── profile-image.jpg     # Foto de perfil
├── src/
│   ├── App.tsx               # Componente principal y datos
│   ├── index.css             # Estilos globales (Tailwind v4)
│   └── main.tsx              # Punto de entrada
├── .vscode/
│   └── settings.json         # Configuración del editor
├── vite.config.ts            # Configuración de Vite + base GitHub Pages
├── tsconfig.json             # Configuración TypeScript
└── package.json
```

---

## Licencia

© 2026 Javier Fernández Vaca. Todos los derechos reservados.