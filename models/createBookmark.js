const mongoose = require('mongoose');
const Schema = mongoose.Schema;

createBookmark = new Schema({

   
    Foldername: {
        type: String,
        required: true,
        unique: true
    },
    imageUrl : {
        type : String,
        required : true
    },
    link: {
        type: String,
         default: '',
        require: true,
    },

    title:{
        type: String,
        default :"",
        require : true
    },
    
    description:{
        type: String,
        default :"",
        require : true
    },

    modifiedAt: {
        type: Date,
    },
});


CreateBookmark = mongoose.model('CreateBookmark', createBookmark);
module.exports = { CreateBookmark };