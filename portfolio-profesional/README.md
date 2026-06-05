<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white&labelColor=20232A" />
  <img src="https://img.shields.io/badge/Vite-6-646CFF?style=for-the-badge&logo=vite&logoColor=white&labelColor=20232A" />
  <img src="https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white&labelColor=20232A" />
  <img src="https://img.shields.io/badge/Tailwind-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white&labelColor=20232A" />
  <img src="https://img.shields.io/badge/Motion-12-FF4154?style=for-the-badge&logo=framer&logoColor=white&labelColor=20232A" />
</p>

# ✨ Portafolio Profesional

Aplicación web del portafolio personal del **Ing. Javier Fernández Vaca** — Ingeniero de Software con más de 13 años de experiencia en desarrollo móvil y web de alto rendimiento.

> 🌐 **Sitio en producción:** [javierfernandezvaca.github.io/Curriculum-Vitae](https://javierfernandezvaca.github.io/Curriculum-Vitae/)

---

## 🏗️ Stack tecnológico

| Tecnología | Versión | Descripción |
|---|---|---|
| **React** | 19 | Biblioteca de interfaces de usuario |
| **Vite** | 6 | Empaquetador y servidor de desarrollo |
| **TypeScript** | 5.8 | Tipado estático |
| **Tailwind CSS** | 4 | Sistema de estilos utilitario |
| **Motion (Framer)** | 12 | Animaciones declarativas |
| **Lucide React** | 0.5+ | Biblioteca de iconos |

---

## 🚀 Desarrollo local

### Requisitos previos

- **Node.js** 18 o superior
- **npm** 9 o superior

### Instalación y ejecución

```bash
# Clonar el repositorio
git clone https://github.com/javierfernandezvaca/Curriculum-Vitae.git

# Entrar en el proyecto
cd Curriculum-Vitae/portfolio-profesional

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

La aplicación estará disponible en **http://localhost:3000**

### Verificar tipos TypeScript

```bash
npm run lint
```

---

## 📦 Build de producción

```bash
# Generar el bundle optimizado
npm run build

# Previsualizar el bundle localmente
npm run preview
```

Los archivos se generan en la carpeta `dist/`.

---

## 🌍 Despliegue

El despliegue es **automático** mediante **GitHub Actions**:

- Cualquier `push` a la rama `main` que modifique archivos dentro de `portfolio-profesional/` dispara el flujo de CI/CD.
- El sitio se publica en: **https://javierfernandezvaca.github.io/Curriculum-Vitae/**

### Configuración requerida

1. Ir a **GitHub → Settings → Pages**
2. En *Source*, seleccionar **"GitHub Actions"**
3. Hacer push a `main` — el despliegue se ejecuta automáticamente

### Ver el estado del despliegue

Ir a la pestaña **Actions** del repositorio en GitHub.

---

## 📂 Estructura del proyecto

```
portfolio-profesional/
├── public/
│   ├── profile-image.jpg                 # Foto de perfil
│   └── recommendation_letter_deneb.pdf   # Carta de recomendación
├── src/
│   ├── App.tsx                           # Componente principal y datos
│   ├── index.css                         # Estilos globales (Tailwind v4)
│   └── main.tsx                          # Punto de entrada
├── .github/
│   └── workflows/                        # CI/CD con GitHub Actions
├── vite.config.ts                        # Configuración de Vite
├── tsconfig.json                         # Configuración TypeScript
└── package.json                          # Dependencias y scripts
```

---

## 📄 Licencia

© 2026 Javier Fernández Vaca. Todos los derechos reservados.