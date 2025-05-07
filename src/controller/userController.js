
import { Users } from "../module/Users/user.js";
import { ApiResponse } from "../utils/ApiResponse.js";

//user crud operation

export const getAllUser=(req,res)=>{
    res.json(ApiResponse.success("all user data"));
}

export const getSpecificUser=(req,res)=>{
    res.json(ApiResponse.success("only specific data"));
}

export const insertUser=(req,res)=>{
    res.json(ApiResponse.success("inserted successfully"));
}

export const updateUser=(req,res)=>{
    res.json(ApiResponse.success("updated success"));
}

export const deleteUser=(req,res)=>{
    res.json(ApiResponse.success("deleted success"));
}