# PushGo - Entrega 2 (BackerByte)
Proyecto: PushGo (Plataforma crowdfunding)
Entregables incluidos en este paquete:
- Código de la API (Node.js + Express)
- Script SQL para crear la base de datos y datos de ejemplo (MySQL)
- Archivo Postman para probar los endpoints
- Instrucciones de despliegue y uso

## Estructura del repositorio
/config/db.js        -> Configuración de conexión con MySQL
/controllers/*       -> Lógica para usuarios, proyectos y aportes
/routes/*            -> Definición de rutas
/server.js           -> Punto de entrada
create_tables.sql    -> Script SQL para crear la base de datos y tablas
postman_collection.json -> Colección para Postman con pruebas básicas
.env.example         -> Ejemplo de variables de entorno

## Requisitos
- Node.js 16+ instalado
- MySQL (o MariaDB)
- npm

## Instalación y ejecución
1. Clona el repositorio o descomprime este paquete.
2. Copia `.env.example` a `.env` y configura las credenciales de tu base de datos.
3. Ejecuta el script SQL `create_tables.sql` en tu servidor MySQL (por ejemplo con Workbench o línea de comandos).
4. Desde la carpeta del proyecto instala dependencias:
   ```
   npm install
   ```
5. Inicia la API:
   ```
   npm start
   ```
6. Prueba los endpoints con Postman usando `postman_collection.json`.

## Endpoints desarrollados (mínimo 3 CRUD completos)
- /api/usuarios  -> GET, POST, PUT, DELETE
- /api/proyectos -> GET, POST, PUT, DELETE
- /api/aportes   -> GET, POST, DELETE

## Notas y observaciones
- Las contraseñas en el script de ejemplo están como texto de demostración (campo `contraseña`). La API usa bcrypt para guardar la contraseña hasheada al crear usuarios.
- El proyecto entrega funcionalidad REST mínima para la entrega 2. Para producción, se recomienda agregar autenticación (JWT), validaciones más estrictas y pruebas unitarias/integación.
