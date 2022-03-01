require('dotenv').config();
const express=require('express');
const connection=require('./db');
const authRoutes=require('./routes/auth');
const userRoutes=require('./routes/user')

const app=express();
const cors=require('cors');

app.use(express.json());
app.use(cors());

connection();


app.use('/api/users',userRoutes);
app.use('/api/auth',authRoutes);

const port=process.env.PORT || 8080;


app.listen(port,()=>{
    console.log(`Server is running at ${port}`);
})