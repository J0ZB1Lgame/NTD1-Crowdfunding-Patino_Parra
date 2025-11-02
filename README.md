# [NTD1] ProyectoCrowdfunding - Patino_Parra
# 🚀 PushGo – Plataforma Nacional de Crowdfunding
**Proyecto académico del equipo BackerByte**  
**Curso:** Nuevas Tecnologías del Desarrollo – Grupo 1  
**Integrantes:**  
- 👨‍💻 **Jose Luis Patiño** – Back-End Developer  
- 👩‍💻 **María Alejandra Parra** – Front-End Developer  

---

## 🧩 Descripción del proyecto
**PushGo** es una plataforma web de *crowdfunding* diseñada para apoyar a emprendedores colombianos a financiar sus proyectos mediante aportes colectivos.  
El sistema busca ofrecer una alternativa nacional accesible, segura y moderna frente a las plataformas internacionales, integrando un entorno adaptado al contexto local y a los métodos de pago disponibles en Colombia.

---

## 🧠 Problemática
En Colombia, gran parte de los emprendedores no logra acceder a financiamiento formal debido a limitaciones económicas, de idioma y acceso a plataformas internacionales. **PushGo** nace como una solución tecnológica que facilita la publicación y financiamiento de proyectos de forma colaborativa, segura y sencilla.

---

## ⚙️ Tecnologías utilizadas

### 🖥️ Back-End
- **Node.js** – Entorno de ejecución de JavaScript del lado del servidor.  
- **Express.js** – Framework para creación de API RESTful.  
- **MySQL** – Sistema de gestión de base de datos relacional.  
- **Postman** – Herramienta para pruebas y validación de endpoints.  

### 🎨 Front-End
- **HTML5 / CSS3 / JavaScript** – Lenguajes base del diseño web.  
- **Bootstrap 5** – Framework CSS para diseño responsive e interfaz moderna.  

### 🧰 Control de versiones
- **Git & GitHub** – Herramientas de colaboración y control de cambios.

---

## 🧱 Estructura del proyecto
PushGo/
│
├── backend/
│ ├── config/
│ │ └── db.js
│ ├── controllers/
│ │ ├── usuariosController.js
│ │ ├── proyectosController.js
│ │ └── aportesController.js
│ ├── models/
│ │ ├── Usuario.js
│ │ ├── Proyecto.js
│ │ └── Aporte.js
│ ├── routes/
│ │ ├── usuariosRoutes.js
│ │ ├── proyectosRoutes.js
│ │ └── aportesRoutes.js
│ ├── tests/
│ │ └── PushGo.postman_collection.json
│ └── server.js
│
└── frontend/
├── index.html
├── estilos.css
├── app.js
└── assets/

---

## 🔗 Endpoints principales

| Endpoint | Método | Descripción |
|-----------|---------|--------------|
| `/api/usuarios` | GET | Obtiene todos los usuarios registrados |
| `/api/usuarios` | POST | Registra un nuevo usuario |
| `/api/proyectos` | GET | Devuelve los proyectos disponibles |
| `/api/proyectos/:id` | PUT | Actualiza un proyecto existente |
| `/api/aportes` | POST | Registra un nuevo aporte |

📘 **Pruebas:**  
Todas las rutas fueron probadas en **Postman**, asegurando las respuestas HTTP correctas (200, 201, 400, 404) y el funcionamiento con la base de datos.

---

## 🗃️ Base de datos
La base de datos **MySQL** fue diseñada bajo el principio de la **Tercera Forma Normal (3FN)** y cuenta con las siguientes tablas:

- **usuarios**: ID, nombre, correo, contraseña, rol  
- **proyectos**: ID, nombre, descripción, meta, categoría, creador_id  
- **aportes**: ID, monto, fecha, usuario_id, proyecto_id  
- **transacciones**: ID, código, estado, fecha, monto, aporte_id  

---

## 📂 Repositorio GitHub
El repositorio de **PushGo** evidencia la colaboración activa de ambos integrantes del equipo.  
Cada uno realizó un mínimo de **10 commits significativos**, reflejando el avance en el desarrollo Back-End y Front-End.

### Ejemplos de commits:
- “Configuración inicial del servidor Express”
- “Implementación del modelo Proyecto y endpoints CRUD”
- “Diseño de formulario de registro e integración con API”
- “Pruebas en Postman de módulos Usuarios y Aportes”

---

## 📈 Estado de avance
El proyecto se encuentra con un **85% de avance general**.  
Los módulos principales (Usuarios, Proyectos y Aportes) están completamente funcionales y validados mediante Postman. Actualmente, se trabaja en ajustes de diseño responsive y optimización de la interfaz.  

**Progreso estimado:**
- Back-End: ✅ 90%  
- Front-End: ✅ 80%  
- Integración: ⚙️ En desarrollo  

---

## 👥 Aportes individuales

| Integrante | Rol | Aporte |
|-------------|-----|--------|
| **Jose Luis Patiño** | Back-End Developer | Diseño de la base de datos, implementación de la API REST, endpoints CRUD y pruebas en Postman. |
| **María Alejandra Parra** | Front-End Developer | Diseño de la interfaz de usuario, creación de vistas principales, formularios y diseño responsive. |

---

## 🧾 Licencia
Este proyecto fue desarrollado con fines **académicos** para el curso *Nuevas Tecnologías del Desarrollo (NTD)*.  
No se autoriza su distribución o uso comercial sin permiso previo del equipo **BackerByte**.

---

## 📬 Contacto
Si deseas conocer más sobre el proyecto o colaborar en su mejora:  
📧 josel.patinog@konradlorenz.edu.com  
📧 mariaa.parras@konradlorenz.edu.com  

---

**BackerByte © 2025** – *Impulsando ideas, un código a la vez.*
