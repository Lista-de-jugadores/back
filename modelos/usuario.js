const moongose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const PlayerSchema = new moongose.Schema({
    id:Number,
    nickname: String,
    status: String,
    avatar:String,
    balance:Number,
})

PlayerSchema.plugin(mongoosePaginate);

const Player = moongose.model("Players",PlayerSchema)
module.exports = Player