import mongoose from 'mongoose';

const servicesSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
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