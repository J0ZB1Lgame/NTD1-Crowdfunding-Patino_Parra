-- SQL script to create PushGo database schema (MySQL)
CREATE DATABASE IF NOT EXISTS pushgo_db;
USE pushgo_db;

-- Users table
CREATE TABLE IF NOT EXISTS usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(150) NOT NULL,
  correo VARCHAR(150) NOT NULL UNIQUE,
  contraseña VARCHAR(255) NOT NULL,
  rol ENUM('usuario','administrador') DEFAULT 'usuario',
  creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Projects table
CREATE TABLE IF NOT EXISTS proyectos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(200) NOT NULL,
  descripcion TEXT,
  categoria VARCHAR(100),
  meta DECIMAL(12,2) DEFAULT 0.00,
  creador_id INT NOT NULL,
  creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (creador_id) REFERENCES usuarios(id) ON DELETE CASCADE
);

-- Aportes (contributions) table
CREATE TABLE IF NOT EXISTS aportes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  usuario_id INT NOT NULL,
  proyecto_id INT NOT NULL,
  monto DECIMAL(12,2) NOT NULL,
  fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE,
  FOREIGN KEY (proyecto_id) REFERENCES proyectos(id) ON DELETE CASCADE
);

-- Sample seed data
INSERT IGNORE INTO usuarios (id, nombre, correo, contraseña, rol)
VALUES (1, 'Admin Demo', 'admin@pushgo.local', 'admin_hashed_pass', 'administrador'),
       (2, 'Jose Patiño', 'jose@pushgo.local', 'jose_hashed_pass', 'usuario'),
       (3, 'Maria Parra', 'maria@pushgo.local', 'maria_hashed_pass', 'usuario');

INSERT IGNORE INTO proyectos (id, titulo, descripcion, categoria, meta, creador_id)
VALUES (1, 'App de reciclaje', 'App para promover reciclaje', 'Social', 5000000.00, 2),
       (2, 'Corto independiente', 'Producción de corto', 'Cultura', 3000000.00, 3);

INSERT IGNORE INTO aportes (id, usuario_id, proyecto_id, monto)
VALUES (1, 3, 1, 50000.00),
       (2, 2, 2, 100000.00);
