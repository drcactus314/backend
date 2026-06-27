import mongoose  from 'mongoose';

console.log(process.env.MONGO_URL);


mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('Connected to MongoDB');
}).catch((err)=>{
    console.error('failed to load', err);    
})