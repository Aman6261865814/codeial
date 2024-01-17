const mongoose = require('mongoose');


const friendshipSchema = new mongoose.Schema({
   
    //  the user who sent the friendship request
    from_user:{
              type: mongoose.Schema.Types.ObjectId,
              ref:'User' 
    },

    //  the user who will accept this request 
     
    to_user:{
             type: mongoose.Schema.Types.ObjectId,
             ref:'User'
    },

},{

     timestamps: true

});

const Friendship=  mongoose.model('Friendship', friendshipSchema);
module.exports = Friendship;

     