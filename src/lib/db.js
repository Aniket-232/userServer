
import { Sequelize } from "sequelize";

const sequelize=new Sequelize("Company","postgres","aniket",{
    host:"localhost",
    dialect:"postgres"
});

sequelize.authenticate().then(()=>{
    console.log("connected to db successfully");
}).catch((err)=>{
       console.log("error"+err);
})

export {sequelize};
