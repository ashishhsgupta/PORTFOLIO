import express from "express";
import cors from "express";
import bodyParser from "body-parser";
// import "dotenv/config";
import dotenv from "dotenv";
import routers from './routes/routes.js';
import { connectDatabase } from "./config/database.js";

dotenv.config({path: "./config/config.env"});

connectDatabase();

const app = express();

app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.urlencoded({extended:false}))

app.get("/",(req, res)=>{
    res.download("./resume.pdf");
});


app.use('/',routers);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port: ${process.env.PORT}`);
});