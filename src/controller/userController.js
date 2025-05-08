
import { Users } from "../module/Users/user.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { errorHandler } from "../utils/ErrorHandler.js";
import { sequelize } from "../lib/db.js";

//user crud operation

export const getAllUser=async (req,res)=>{
        //    const {body}=req;
        //    const data=await Users.findAll();
        //    if(!data || data.length===0){
        //     return res.json(ApiResponse.error("user data not foundt"));
        //    }
        //     else{
        //         return res.json(ApiResponse.success("all user data",data));   
        //     }

        try{
            const record=await Users.findAll();
            return res.json(ApiResponse.success("success",record));
        }catch(err){
              const error=errorHandler(err);
              return res.json(ApiResponse.error("Error",error));
        }
}

export const getSpecificUser=async (req,res)=>{
    try{
          const {indexId}= req.body;
          const record=await Users.findAll({
            where:{
                indexId:indexId,
            }
          })
          return res.json(ApiResponse.success("success",record));

        }catch(err){
            const error=errorHandler(err);
            return res.json(ApiResponse.error("error",error));
        }
          
}

export const insertUser=async (req,res)=>{
      const t=await sequelize.transaction();
      try{
        const {body}=req;
        const result=await Users.bulkCreate(body,{transaction:t});
       await t.commit();
        return res.json(ApiResponse.success("success",result)); 
      }catch(err){
       await t.rollback();
        const error=errorHandler(err);
        return res.json(ApiResponse.error("Error",error))
      }
        
}

export const updateUser=async (req,res)=>{
    const t=await sequelize.transaction();
     
    try{
        let {body}=req;
        const record=await Users.update(
            {...body},
            {
            where:{
                indexId:body.indexId
            }
        })
         await t.commit();
        return res.json(ApiResponse.success("success",record));
    }catch(err){
        await t.rollback();
        const error=errorHandler(err);
        return res.json(ApiResponse.error("error",err));
    }
        l
}

export const deleteUser=async (req,res)=>{
        const t=await sequelize.transaction();
        try{
            const {body}=req;
            const update={...body};
            delete update.indexId;
            update.repStat=9;
            const record=await Users.update(
                {...update},
                {
                    where:{
                        indexId:body.indexId,
                    },
                    returning: true,
                    transaction:t
                }
            )
            await t.commit();
            return res.json(ApiResponse.success("success",record))

        }catch(err){
            await t.rollback();
            const error=errorHandler(err)
            return res.json(ApiResponse.error("error",error))
        }
}