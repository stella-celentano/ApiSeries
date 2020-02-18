const { Schema, model } = require("mongoose")

const SerieSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    abstract: {
        type: String,
        required: true,
        maxlength: 500
    },
    release: {
        type: Date,
        required: true
    }

},
    {
        versionKey: false,
        timestamps: true
    }
)

module.exports = model('series', SerieSchema)