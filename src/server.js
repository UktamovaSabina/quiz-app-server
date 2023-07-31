import express from "express";
import morgan from "morgan";
import cors from 'cors';
import { config } from "dotenv";
import router from "./router/route.js";
import connect from "./database/connection.js";

const app = express();

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
config();

const port = process.env.PORT || 7700

app.use('/', router)
app.use('/*', (req, res)=> {
    res.send("Page is not found")
})

connect().then(()=>{
try {
    app.listen(port, console.log(`server is running in port ${port}`))
} catch (error) {
    console.log("cannot connect to the server");
}
}).catch( error => {
    console.log("invalid Database Connection", error);
})