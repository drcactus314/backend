const mogoose = require('mongoose');

const URL = "mongodb+srv://arturkril9_db_user:ejld3mbBWJ2zrYrI@training.omehpum.mongodb.net/?appName=Training";

mogoose.connect(URL).then(()=>{
    console.log("Connected to MongoDB");   
}).catch((e)=>{
    console.error(e);
})