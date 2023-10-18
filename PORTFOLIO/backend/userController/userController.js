import express from 'express';
import usermodel from '../model/userSchema.js';

export const usersignup=async(request,response)=>{
    try{
        console.log('request.body',request.body)
        const found= await usermodel.findOne({name:request.body.name});
        if(found){
            console.log('username exist');
            return response.status(401).json('username already exists!');
        }
        const user=request.body;
        const newuser=new usermodel(user);
        await newuser.save();
        console.log('user created');
        return response.status(200).json('user created!');
    }catch(error){
        console.log('error.message');
    }
}
export const usersignin=async(request,response)=>{
    try{
        const found= await usermodel.findOne({email:request.body.username,password:request.body.password});
        if(!found){
            console.log('Login successfully');
            return response.status(200).json(`${request.body.username} login successfully`);
        }else {
            return response.status(401).json('Invalid login');
        }
    }
    catch(error){response.json('Error:', error.message);}
}