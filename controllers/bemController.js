const Bem = require('../models/Bem');

const bemController = {
    async listar(req, res) {
        try {
            const bens = await Bem.find().sort({ id: 1 });
            res.json(bens);
        } catch (err) {
            res.status(500).json({ message: 'Erro ao listar bens' });
        }
    },

    async buscarPorId(req, res) {
        try {
            const bem = await Bem.findOne({ id: parseInt(req.params.id) });
            if (!bem) {
                return res.status(404).json({ message: 'Bem não encontrado' });
            }
            res.json(bem);
        } catch (err) {
            res.status(500).json({ message: 'Erro ao buscar bem' });
        }
    },

    async criar(req, res) {
        try {
            const ultimoBem = await Bem.findOne().sort({ id: -1 });
            const novoId = ultimoBem ? ultimoBem.id + 1 : 25;

            const bem = new Bem({
                id: novoId,
                ...req.body
            });

            await bem.save();
            res.status(201).json(bem);
        } catch (err) {
            res.status(500).json({ message: 'Erro ao criar bem' });
        }
    },

    async atualizar(req, res) {
        try {
            const bem = await Bem.findOneAndUpdate(
                { id: parseInt(req.params.id) },
                req.body,
                { new: true }
            );

            if (!bem) {
                return res.status(404).json({ message: 'Bem não encontrado' });
            }

            res.json(bem);
        } catch (err) {
            res.status(500).json({ message: 'Erro ao atualizar bem' });
        }
    },

    async deletar(req, res) {
        try {
            const bem = await Bem.findOneAndDelete({ id: parseInt(req.params.id) });

            if (!bem) {
                return res.status(404).json({ message: 'Bem não encontrado' });
            }

            res.json({ message: 'Bem deletado com sucesso' });
        } catch (err) {
            res.status(500).json({ message: 'Erro ao deletar bem' });
        }
    }
};

module.exports = bemController;