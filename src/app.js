import express from "express";
import { db } from "./module/index.js"; 
import { router } from "./router/userRouter.js";


const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

db.sequelize.sync({alter:true,force:false}).then(()=>{
    console.log("db has been sync");
})


app.use("/users",router);

export {app};
