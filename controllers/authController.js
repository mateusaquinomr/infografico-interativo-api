const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const authController = {
    async register(req, res) {
        try {
            const { email, password, nome } = req.body;

            let user = await User.findOne({ email });
            if (user) {
                return res.status(400).json({ message: 'Usuário já existe' });
            }

            user = new User({ email, password, nome });
            await user.save();

            const token = jwt.sign(
                { id: user._id, email: user.email },
                process.env.JWT_SECRET,
                { expiresIn: '7d' }
            );

            res.status(201).json({ token, user: { id: user._id, email, nome } });
        } catch (err) {
            res.status(500).json({ message: 'Erro no servidor' });
        }
    },

    async login(req, res) {
        try {
            const { email, password } = req.body;

            const user = await User.findOne({ email });
            if (!user) {
                return res.status(400).json({ message: 'Credenciais inválidas' });
            }

            const isMatch = await user.comparePassword(password);
            if (!isMatch) {
                return res.status(400).json({ message: 'Credenciais inválidas' });
            }

            const token = jwt.sign(
                { id: user._id, email: user.email },
                process.env.JWT_SECRET,
                { expiresIn: '7d' }
            );

            res.json({ token, user: { id: user._id, email: user.email, nome: user.nome } });
        } catch (err) {
            res.status(500).json({ message: 'Erro no servidor' });
        }
    },

    async criarUsuarioInicial() {
        try {
            const usuarioExistente = await User.findOne({ email: 'admin@admin.com' });

            if (!usuarioExistente) {
                await User.create({
                    email: 'admin@admin.com',
                    password: 'admin123',
                    nome: 'Administrador'
                });
                console.log('Usuário inicial criado: admin@admin.com / admin123');
            }
        } catch (err) {
            console.error('Erro ao criar usuário inicial:', err);
        }
    }
};

module.exports = authController;