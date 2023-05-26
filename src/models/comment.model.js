const mongoose = require("mongoose");
const { Schema} = mongoose;

const CommentSchema = new Schema({
    comment: {type: String},
    author: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true,
        autopopulate: true
    }
});

// Add autopopulate plugin
CommentSchema.plugin(require("mongoose-autopopulate"));

module.exports = mongoose.model(
    'comment',
    CommentSchema
);