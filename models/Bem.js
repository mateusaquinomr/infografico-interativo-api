const mongoose = require('mongoose');

const bemSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    subtitulo: String,
    date: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    localizacao: {
        type: String,
        required: true
    },
    estados: [{
        type: String
    }],
    registro: {
        type: String,
        required: true
    },
    livroId: {
        type: String,
        default: 'formas-expressao'
    },
    midias: [{
        type: mongoose.Schema.Types.Mixed
    }]
});

module.exports = mongoose.model('Bem', bemSchema);