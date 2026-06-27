import mongoose from 'mongoose';

const TaskSchema = mongoose.Schema({
    description: {
        type: String,
        require: true,
    },
    completed:{
        type: Boolean,
        default: false,
    }, 
    createBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    
});

const User = mongoose.model('Task', userSchema);

export default User;