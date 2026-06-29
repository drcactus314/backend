import 'dotenv/config';


import express from 'express';
import bodyParser from 'body-parser';
import './config/db.js';
import swaggerUI from 'swagger-ui-express'

import authRouter from './routes/authRoutes.js'
import taskRouter from './routes/taskRoutes.js'
import swaggerSpec from './config/swagger.js';

const app = express();

const port = 3000;


//middleware

app.use(bodyParser.json());

app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
app.use('/api', authRouter);
app.use('/api', taskRouter);

app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
    
})