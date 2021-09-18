import express from "express";
import bodyParser from 'body-parser';
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from './routes/user.js'

const app = express();
const CONNECTION_URL = "mongodb://localhost:27017/handleUser"

app.use(bodyParser.json({ limit: '10mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(cors());

app.use('/user', userRoutes)

const PORT = 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true,useUnifiedTopology: true})
.then(()=>app.listen(PORT, ()=>console.log(`server is Running on Port: ${PORT}`)))
.catch((error)=>console.log(error.message));

//mongoose.set("useFindAndOdify", false);