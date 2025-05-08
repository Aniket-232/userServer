import { sequelize } from "../../lib/db.js";
import { DataTypes } from "sequelize";

let Users=sequelize.define(
    "Users",
    {
        "indexId":{
            type:DataTypes.STRING(100),
            defaultValue:DataTypes.UUIDV4,
        },
        "Name":{
            type:DataTypes.STRING(100),
            allowNull:false,
        },
        "Country":{
            type:DataTypes.STRING(100),
            allowNull:false,
        },
        "State":{
            type:DataTypes.STRING(100),
            allowNull:false
        },
        "repStat":{
            type:DataTypes.INTEGER,
            defaultValue:0
        }
    },{
        tableName:"Users",
        timestamps:true,
        indexes:[{
            unique:true,
            fields:["indexId"]
        }]
    }
)

export {Users};