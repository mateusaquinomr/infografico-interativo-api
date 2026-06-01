const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const bemRoutes = require('./routes/bens');
const authController = require('./controllers/authController');

const app = express();

const corsOptions = {
    origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
    credentials: true,
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'API Infográfico Interativo - Online' });
});

mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Conectado ao MongoDB');
        authController.criarUsuarioInicial();
    })
    .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

app.use('/api/auth', authRoutes);
app.use('/api/bens', bemRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});