const mongoose = require('mongoose')

const SerieModel = require('./../models/series')

class Series {
    get(req, res) {
        SerieModel.find({}, (err, serie) => {
            if (err)
                res.status(500).json({ message: 'Erro ao processar requisição', error: err })
            else
                res.status(200).json({ message: 'Dados recuperados com sucesso', data: serie })
        })
    }

    getById(req, res) {
        SerieModel.findById(req.params.id, (err, serie) => {
            if (err)
                res.status(500).json({ message: 'Erro ao processar requisição', error: err })
            else
                res.status(200).json({ message: 'Dados recuperados com sucesso', data: serie })
        })
    }

    create(req, res) {
        SerieModel.create(req.body, (err, serie) => {
            if (err)
                res.status(500).json({ message: 'Erro ao processar requisição', error: err })
            else
                res.status(200).json({ message: 'Série inserida com sucesso', data: serie })
        })
    }

    update(req, res) {
        SerieModel.updateOne({ _id: req.params.id }, { $set: req.body }, (err, serie) => {
            if (err)
                res.status(500).json({ message: 'Erro ao processar requisição', error: err })
            else
                res.status(200).json({ message: 'Série atualizada com sucesso', data: serie })
        })
    }

    delete(req, res) {
        SerieModel.deleteOne({ _id: req.params.id }, (err, serie) => {
            if (err)
            res.status(500).json({ message: 'Erro ao processar requisição', error: err })
        else
            res.status(200).json({ message: 'Série apagada com sucesso', data: serie })
        })
    }
}

module.exports = new Series()