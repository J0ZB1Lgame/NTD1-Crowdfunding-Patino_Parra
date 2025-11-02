const pool = require('../config/db');

module.exports = {
  list: async (req, res) => {
    try {
      const [rows] = await pool.query('SELECT p.*, u.nombre as creador FROM proyectos p JOIN usuarios u ON p.creador_id = u.id');
      res.json(rows);
    } catch (err) { res.status(500).json({ error: err.message }); }
  },

  get: async (req, res) => {
    try {
      const [rows] = await pool.query('SELECT p.*, u.nombre as creador FROM proyectos p JOIN usuarios u ON p.creador_id = u.id WHERE p.id = ?', [req.params.id]);
      if (rows.length === 0) return res.status(404).json({ message: 'Proyecto no encontrado' });
      res.json(rows[0]);
    } catch (err) { res.status(500).json({ error: err.message }); }
  },

  create: async (req, res) => {
    try {
      const { titulo, descripcion, categoria, meta, creador_id } = req.body;
      if (!titulo || !creador_id) return res.status(400).json({ message: 'Faltan datos' });
      const [result] = await pool.query('INSERT INTO proyectos (titulo, descripcion, categoria, meta, creador_id) VALUES (?, ?, ?, ?, ?)', [titulo, descripcion, categoria, meta || 0, creador_id]);
      const [rows] = await pool.query('SELECT * FROM proyectos WHERE id = ?', [result.insertId]);
      res.status(201).json(rows[0]);
    } catch (err) { res.status(500).json({ error: err.message }); }
  },

  update: async (req, res) => {
    try {
      const { titulo, descripcion, categoria, meta } = req.body;
      const updates = [];
      const params = [];
      if (titulo) { updates.push('titulo = ?'); params.push(titulo); }
      if (descripcion) { updates.push('descripcion = ?'); params.push(descripcion); }
      if (categoria) { updates.push('categoria = ?'); params.push(categoria); }
      if (meta !== undefined) { updates.push('meta = ?'); params.push(meta); }
      if (updates.length === 0) return res.status(400).json({ message: 'Nada para actualizar' });
      params.push(req.params.id);
      await pool.query(`UPDATE proyectos SET ${updates.join(', ')} WHERE id = ?`, params);
      const [rows] = await pool.query('SELECT * FROM proyectos WHERE id = ?', [req.params.id]);
      res.json(rows[0]);
    } catch (err) { res.status(500).json({ error: err.message }); }
  },

  remove: async (req, res) => {
    try {
      await pool.query('DELETE FROM proyectos WHERE id = ?', [req.params.id]);
      res.json({ message: 'Proyecto eliminado' });
    } catch (err) { res.status(500).json({ error: err.message }); }
  }
};
