const express = require('express');
const authRoutes = require('./routes/authRoutes');
const coachRoutes = require('./routes/coachRoutes');
const teamRoutes = require('./routes/teamRoutes');
const playerRoutes = require('./routes/playerRoutes');
const setupSwagger = require('./swagger');

const app = express();
setupSwagger(app);

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/coaches', coachRoutes);
app.use('/api/teams', teamRoutes);
app.use('/api/players', playerRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
