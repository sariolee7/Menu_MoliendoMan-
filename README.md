# Moliendo Maní

Aplicación web de una carta gastronómica colombiana desarrollada con React y Vite. Permite explorar desayunos, comidas típicas, bebidas y otros antojos caucanos, consultar el detalle de cada plato y realizar un pedido por WhatsApp.

## Características

- Encabezado con el nombre del restaurante, subtítulo y navegación.
- Menú organizado por categorías y tarjetas de productos.
- Imágenes, precios, descripciones e ingredientes de cada plato.
- Modal con el detalle del producto seleccionado.
- Opciones adicionales según la categoría del menú.
- Botón para iniciar un pedido por WhatsApp.
- Pie de página con Instagram, teléfono, dirección y enlace de WhatsApp.
- Diseño responsive con estilos CSS separados por sección.

## Tecnologías

- React 19
- Vite 8
- JavaScript y JSX
- CSS
- ESLint

## Estructura del proyecto

```text
src/
├── App.jsx
├── main.jsx
├── assets/              # Imágenes de los platos
├── components/
│   ├── DishModal.jsx    # Detalle y pedido de un plato
│   ├── Footer.jsx       # Información de contacto
│   ├── Header.jsx       # Encabezado y navegación
│   └── MenuSection.jsx  # Sección reutilizable del menú
├── data/
│   └── menuData.js      # Categorías y productos
└── styles/              # Estilos de la interfaz
```

## Cumplimiento de los requerimientos

### React + Vite

El proyecto fue creado como una aplicación React utilizando Vite. Las dependencias de React y los scripts de desarrollo, compilación y previsualización están definidos en `package.json`.

La aplicación se monta desde `src/main.jsx` y el componente principal es `src/App.jsx`.

### Componente reutilizable

El componente reutilizable principal es `MenuSection`, ubicado en `src/components/MenuSection.jsx`. Este componente representa una sección completa de la carta: título, distintivo, productos, precios y acciones para ver detalles.

### Uso del componente en diferentes partes de la interfaz

En `App.jsx`, `MenuSection` se utiliza dentro de un `map` para renderizar cada categoría de `categories`:

```jsx
{categories.map((category) => (
	<MenuSection key={category.id} {...category} onSelectItem={handleSelectItem} />
))}
```

El mismo componente se utiliza para mostrar desayunos, comidas típicas y típicos fríos y otros antojos. Cada sección conserva la misma estructura visual, pero muestra contenido diferente.

### Personalización mediante props

`MenuSection` recibe mediante props valores como `title`, `badge`, `items`, `additionalOptions`, `variant` y `onSelectItem`. Así, una misma implementación puede adaptarse a cada categoría.

También se utilizan props en otros componentes:

- `Header` recibe `title`, `subtitle` y `navLinks`.
- `Footer` recibe `instagram`, `phone`, `address` y `whatsapp`.
- `DishModal` recibe el plato seleccionado, las opciones adicionales, el teléfono de WhatsApp y la función para cerrar el modal.

Los datos que personalizan la carta están centralizados en `src/data/menuData.js`, lo que facilita agregar o modificar productos sin duplicar la estructura de los componentes.

### Proyecto subido a GitHub

El proyecto debe estar publicado en un repositorio de GitHub. Enlace de entrega:

- **Repositorio:** [Agregar aquí la URL del repositorio de GitHub](https://github.com/)

### Deploy en Vercel

La aplicación puede desplegarse en Vercel conectando el repositorio de GitHub. Vercel detecta el proyecto Vite y utiliza `npm run build` para generar la versión de producción.

- **Aplicación publicada:** [Agregar aquí la URL de la aplicación en Vercel](https://vercel.com/)

## Instalación y ejecución local

Se requiere Node.js instalado. Desde la carpeta del proyecto, ejecuta:

```bash
npm install
npm run dev
```

Después, abre la URL indicada por Vite, normalmente `http://localhost:5173`.

## Scripts disponibles

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo con recarga automática. |
| `npm run build` | Genera la versión optimizada para producción. |
| `npm run preview` | Previsualiza localmente la compilación de producción. |
| `npm run lint` | Comprueba el código con ESLint. |


