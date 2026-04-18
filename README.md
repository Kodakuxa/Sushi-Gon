# Sushi-Gon

Sushi-Gon es una aplicación como una Single Page Application (SPA) con React y Vite: catálogo de platillos (menú), autenticación de usuarios (login/registro), carrito de compra con persistencia, y gestión de estado con Redux Toolkit.

Tecnologías: React, Vite, React Router v6, @reduxjs/toolkit, react-hook-form, redux-persist, ESLint.

---

## Requisitos

- Node.js 18 o superior (se recomienda la versión LTS más reciente)
- npm (incluido con Node) o Yarn

## Instalación y ejecución

1. Clonar el repositorio y entrar en la carpeta del proyecto:

```bash
git clone <repo-url>
cd Sushi-Gon
```

2. Instalar dependencias:

```bash
npm install
# o con yarn
yarn install
```

3. Iniciar el servidor de desarrollo (Vite — HMR):

```bash
npm run dev
```

Si estás en Windows y PowerShell notifica una restricción de ejecución de scripts, puedes levantar temporalmente la política en la sesión actual antes de ejecutar el comando:

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
npm run dev
```

## Scripts

- `npm run dev` — inicia el servidor de desarrollo con HMR
- `npm run build` — genera la versión de producción en la carpeta `dist`
- `npm run preview` — sirve la build localmente para pruebas
- `npm run lint` — ejecuta ESLint sobre el código

---

## Estructura

```
.
├─ public/                
├─ src/
│  ├─ assets/             
│  ├─ components/         
│  ├─ store/              
│  ├─ App.jsx             
│  └─ main.jsx
├─ index.html
└─ README.md
```

Descripción breve de carpetas principales:

- `components/Platillos`: catálogo y componentes de producto (`TodoPlatillos`, `ProductosItem`, formularios de selección).
- `components/Login`: `Login.jsx` y `SignUp.jsx` — formularios con validación usando `react-hook-form`.
- `components/Cart`: interfaz del carrito, `CartItem` y la lógica de visualización.
- `store/`: implementaciones de slices con `@reduxjs/toolkit` y configuración de persistencia.

---

## Rutas y comportamiento

- `/menu` — listado de platillos (vista principal).
- `/login` — formulario de inicio de sesión.
- `/registrarse` — formulario de registro.
- Ruta por defecto: redirección a `/menu`.

---

## Capturas de pantalla

- Menú

<img width="1871" height="904" alt="image" src="https://github.com/user-attachments/assets/04935769-eff3-445f-833a-a5dd01b127b7" />

- Login

<img width="1863" height="915" alt="image" src="https://github.com/user-attachments/assets/506af101-2916-4ca5-bbc3-c3d0e677e407" />

- Registro

<img width="1864" height="903" alt="image" src="https://github.com/user-attachments/assets/ccc44cd1-1a26-4218-ba1f-bd82af7dfb73" />

