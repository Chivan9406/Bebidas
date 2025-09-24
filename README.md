# 🍹 Bebidas - Catálogo de Cócteles con IA

Una moderna aplicación web para descubrir, explorar y generar recetas de cócteles y bebidas, potenciada con inteligencia artificial y desarrollada con las últimas tecnologías web.

## 🚀 Características principales

- 🔍 **Búsqueda avanzada**: Filtra bebidas por categoría e ingredientes
- 🤖 **Generación con IA**: Crea recetas personalizadas usando inteligencia artificial
- ❤️ **Sistema de favoritos**: Guarda tus cócteles preferidos con persistencia local
- 📱 **Diseño responsivo**: Interfaz adaptada para dispositivos móviles y desktop
- ⚡ **Carga lazy**: Optimización de rendimiento con carga diferida de componentes
- 🎨 **UI moderna**: Diseño elegante con Tailwind CSS y HeadlessUI
- 📊 **Gestión de estado**: Estado global con Zustand y middleware de desarrollo

## 🛠️ Tecnologías utilizadas

### Frontend Core
- **React**: ^19.1.1
- **TypeScript**: ~5.8.3
- **Vite**: ^7.1.2 (Build tool de última generación)

### Estado y Enrutado
- **Zustand**: ^5.0.8 (Gestión de estado ligera)
- **React Router**: ^7.8.2 (Enrutado declarativo)

### Estilado y UI
- **Tailwind CSS**: ^4.1.12 (Framework de utilidades CSS)
- **HeadlessUI**: ^2.2.7 (Componentes UI accesibles)

### Inteligencia Artificial
- **AI SDK**: ^5.0.33 (SDK para integración con IA)
- **OpenRouter**: ^1.2.0 (Proveedor de modelos de IA)

### Utilidades
- **Axios**: ^1.11.0 (Cliente HTTP)
- **Zod**: ^4.1.3 (Validación de esquemas)
- **React Markdown**: ^10.1.0 (Renderizado de markdown)
- **React Toastify**: ^11.0.5 (Notificaciones toast)

## 📦 Instalación

### Prerrequisitos
- Node.js (versión 18 o superior)
- npm o yarn

### Pasos de instalación

1. **Clona el repositorio**
```bash
git clone https://github.com/Chivan9406/Bebidas.git
cd Bebidas
```

2. **Instala las dependencias**
```bash
npm install
```

3. **Configura las variables de entorno**
```bash
# Crea un archivo .env en la raíz del proyecto
VITE_OPENROUTER_KEY=tu_api_key_aquí
VITE_OPENROUTER_MODEL=modelo_ia_preferido
```

4. **Ejecuta la aplicación en modo desarrollo**
```bash
npm run dev
```

5. **Abre tu navegador**
```
http://localhost:5173
```

## 🏗️ Estructura del proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── DrinkCard.tsx   # Tarjeta de bebida
│   ├── GenerateAI.tsx  # Generador con IA
│   ├── Header.tsx      # Cabecera principal
│   └── Modal.tsx       # Componente modal
├── layouts/
│   ├── Layout.tsx      # Layout principal
│   └── aiSlice.ts      # Slice de estado para IA
├── lib/
│   ├── ai.ts          # Configuración de IA
│   └── axios.ts       # Configuración de HTTP
├── services/
│   ├── AiService.ts   # Servicio de IA
│   └── RecipeService.ts # Servicio de API de recetas
├── stores/
│   ├── useAppStore.ts     # Store principal
│   ├── favoritesSlice.ts  # Estado de favoritos
│   ├── notificationSlice.ts # Estado de notificaciones
│   └── recipeSlice.ts     # Estado de recetas
├── types/
│   └── index.ts       # Definiciones de tipos
├── utils/
│   └── recipes-schema.ts # Esquemas de validación
└── views/
    ├── IndexPage.tsx    # Página principal
    └── FavoritesPage.tsx # Página de favoritos
```

## 🎯 Funcionalidades específicas

### 🔍 Búsqueda de Cócteles
- Integración con **TheCocktailDB API** para acceso a miles de recetas
- Filtrado por categorías (Cocktail, Shot, Ordinary Drink, etc.)
- Búsqueda por ingredientes específicos
- Validación de datos con Zod

### 🤖 Generación con IA
- Uso de **OpenRouter** para acceso a múltiples modelos de IA
- Prompts especializados para bartending
- Streaming de respuestas en tiempo real
- Renderizado de markdown para recetas formateadas

### ❤️ Sistema de Favoritos
- Persistencia en localStorage
- Gestión optimista del estado
- Interfaz intuitiva para agregar/quitar favoritos

### 📱 Experiencia de Usuario
- **Lazy loading** de rutas para optimización
- Notificaciones toast para feedback
- Estados de carga y error manejados
- Diseño responsivo con Tailwind CSS

## 🎨 Componentes principales

### `DrinkCard`
Componente que muestra información de una bebida con imagen, nombre y funcionalidad de favoritos.

### `GenerateAI` 
Interfaz para generar recetas personalizadas usando IA con streaming de respuestas.

### `Header`
Navegación principal con buscador integrado y enlaces a secciones principales.

### `Modal`
Sistema modal reutilizable para mostrar detalles de recetas.

## 📊 Manejo de estado

El proyecto utiliza **Zustand** con arquitectura de slices para manejar:

- **RecipesSlice**: Estado de recetas y búsquedas
- **FavoritesSlice**: Gestión de bebidas favoritas  
- **NotificationSlice**: Sistema de notificaciones
- **AISlice**: Estado para generación con IA

```typescript
// Ejemplo de uso del store
const drinks = useAppStore(state => state.drinks)
const generateRecipe = useAppStore(state => state.generateRecipe)
```

## 🔧 Scripts disponibles

```bash
# Desarrollo
npm run dev          # Ejecuta servidor de desarrollo

# Construcción
npm run build        # Construye la aplicación para producción
npm run preview      # Previsualiza la build de producción

# Calidad de código  
npm run lint         # Ejecuta ESLint para análisis de código
```

## 🌟 Características técnicas destacadas

- **🏃‍♂️ Rendimiento**: Vite para builds ultra rápidos
- **📱 Responsivo**: Mobile-first con Tailwind CSS
- **🔒 Type Safety**: TypeScript estricto con validaciones
- **🧪 Validación**: Esquemas Zod para datos de API
- **🎯 Accesibilidad**: Componentes HeadlessUI accesibles
- **⚡ Optimización**: Code splitting y lazy loading
- **🔄 Estado persistente**: Favoritos guardados localmente
- **🌐 API Integration**: Cliente HTTP configurado con Axios

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Iván Chirino**
- GitHub: [@Chivan9406](https://github.com/Chivan9406)

---

🍹 *Creado con pasión por la mixología y las tecnologías modernas*
