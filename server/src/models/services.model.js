import mongoose from 'mongoose';

const servicesSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    price:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,

    },
    image:{
        type:String,
    },


},{
    timeStamps:true
});

export default mongoose.model('Services',servicesSchema);