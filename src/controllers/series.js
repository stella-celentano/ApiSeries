const mongoose = require('mongoose')

const { SerieModel } = require('./../models/series')

class Series {
    get(req, res) {
        SerieModel.find({}, (error, serie) => {
            if (error)
                res.send(error)
            else
                res.json({ data: serie })
        })
    }

    getById(req, res) {
        SerieModel.findById(req.params.id, (error, serie) => {
            if (error)
                res.send(error)
            else
                res.json({ data: serie })
        })
    }

    create(req, res) {
        SerieModel.create(req.body, (error, serie) => {
            if (error)
                res.send(error)
            else
                res.json({message: 'Successfully added series', data: serie})
        })
    }

    update(req, res){
        SerieModel.updateOne({_id: req.params.id}, {$set: req.body}, (error, serie) => {
            if (error)
               res.send(error)
            else
                res.json({message: 'Successfully updated series', data: serie}) 
        })
    }

    delete(req, res){
        SerieModel.deleteOne({_id: req.params.id}, (error, serie) => {
            if(error)
                res.send(error)
            else    
                res.json({message: 'Series deleted successfully', data: serie})
        })
    }
}

module.exports = new Series()