// PushGo API - server.js
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const usersRouter = require('./routes/users');
const projectsRouter = require('./routes/projects');
const aportesRouter = require('./routes/aportes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => res.json({ message: 'PushGo API - OK' }));

app.use('/api/usuarios', usersRouter);
app.use('/api/proyectos', projectsRouter);
app.use('/api/aportes', aportesRouter);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
