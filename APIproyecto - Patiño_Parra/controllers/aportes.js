const pool = require('../config/db');

module.exports = {
  list: async (req, res) => {
    try {
      const [rows] = await pool.query('SELECT a.*, u.nombre as usuario, p.titulo as proyecto FROM aportes a JOIN usuarios u ON a.usuario_id = u.id JOIN proyectos p ON a.proyecto_id = p.id');
      res.json(rows);
    } catch (err) { res.status(500).json({ error: err.message }); }
  },

  create: async (req, res) => {
    try {
      const { usuario_id, proyecto_id, monto } = req.body;
      if (!usuario_id || !proyecto_id || !monto) return res.status(400).json({ message: 'Faltan datos' });
      const [result] = await pool.query('INSERT INTO aportes (usuario_id, proyecto_id, monto) VALUES (?, ?, ?)', [usuario_id, proyecto_id, monto]);
      const [rows] = await pool.query('SELECT a.*, u.nombre as usuario, p.titulo as proyecto FROM aportes a JOIN usuarios u ON a.usuario_id = u.id JOIN proyectos p ON a.proyecto_id = p.id WHERE a.id = ?', [result.insertId]);
      res.status(201).json(rows[0]);
    } catch (err) { res.status(500).json({ error: err.message }); }
  },

  get: async (req, res) => {
    try {
      const [rows] = await pool.query('SELECT a.*, u.nombre as usuario, p.titulo as proyecto FROM aportes a JOIN usuarios u ON a.usuario_id = u.id JOIN proyectos p ON a.proyecto_id = p.id WHERE a.id = ?', [req.params.id]);
      if (rows.length === 0) return res.status(404).json({ message: 'Aporte no encontrado' });
      res.json(rows[0]);
    } catch (err) { res.status(500).json({ error: err.message }); }
  },

  remove: async (req, res) => {
    try {
      await pool.query('DELETE FROM aportes WHERE id = ?', [req.params.id]);
      res.json({ message: 'Aporte eliminado' });
    } catch (err) { res.status(500).json({ error: err.message }); }
  }
};
