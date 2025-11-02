const pool = require('../config/db');
const bcrypt = require('bcrypt');

module.exports = {
  list: async (req, res) => {
    try {
      const [rows] = await pool.query('SELECT id, nombre, correo, rol, creado_en FROM usuarios');
      res.json(rows);
    } catch (err) { res.status(500).json({ error: err.message }); }
  },

  get: async (req, res) => {
    try {
      const [rows] = await pool.query('SELECT id, nombre, correo, rol, creado_en FROM usuarios WHERE id = ?', [req.params.id]);
      if (rows.length === 0) return res.status(404).json({ message: 'Usuario no encontrado' });
      res.json(rows[0]);
    } catch (err) { res.status(500).json({ error: err.message }); }
  },

  create: async (req, res) => {
    try {
      const { nombre, correo, contraseña, rol } = req.body;
      if(!nombre || !correo || !contraseña) return res.status(400).json({ message: 'Faltan datos' });
      const hash = await bcrypt.hash(contraseña, 10);
      const [result] = await pool.query('INSERT INTO usuarios (nombre, correo, contraseña, rol) VALUES (?, ?, ?, ?)', [nombre, correo, hash, rol || 'usuario']);
      const [rows] = await pool.query('SELECT id, nombre, correo, rol FROM usuarios WHERE id = ?', [result.insertId]);
      res.status(201).json(rows[0]);
    } catch (err) {
      if (err.code === 'ER_DUP_ENTRY') return res.status(400).json({ message: 'Correo ya registrado' });
      res.status(500).json({ error: err.message });
    }
  },

  update: async (req, res) => {
    try {
      const { nombre, correo, contraseña, rol } = req.body;
      const updates = [];
      const params = [];
      if (nombre) { updates.push('nombre = ?'); params.push(nombre); }
      if (correo) { updates.push('correo = ?'); params.push(correo); }
      if (contraseña) { const hash = await bcrypt.hash(contraseña, 10); updates.push('contraseña = ?'); params.push(hash); }
      if (rol) { updates.push('rol = ?'); params.push(rol); }
      if (updates.length === 0) return res.status(400).json({ message: 'Nada para actualizar' });
      params.push(req.params.id);
      await pool.query(`UPDATE usuarios SET ${updates.join(', ')} WHERE id = ?`, params);
      const [rows] = await pool.query('SELECT id, nombre, correo, rol FROM usuarios WHERE id = ?', [req.params.id]);
      res.json(rows[0]);
    } catch (err) { res.status(500).json({ error: err.message }); }
  },

  remove: async (req, res) => {
    try {
      await pool.query('DELETE FROM usuarios WHERE id = ?', [req.params.id]);
      res.json({ message: 'Usuario eliminado' });
    } catch (err) { res.status(500).json({ error: err.message }); }
  }
};
