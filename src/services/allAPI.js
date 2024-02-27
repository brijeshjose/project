//register api

const { BASE_URL } = require("./baseUrl")
const { commonAPI } = require("./commonAPI")

 export const registerAPI=async(user)=>{
    return await commonAPI("POST",`${BASE_URL}/user/register`,user,"")
}

export const loginAPI=async(user)=>{
    return await commonAPI("POST",`${BASE_URL}/user/login`,user,"")
}

//add project

export const addProjectAPI=async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${BASE_URL}/projects/add`,reqBody,reqHeader)
}