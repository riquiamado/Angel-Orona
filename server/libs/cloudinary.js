import {v2 as cloudinary} from "cloudinary";

cloudinary.config({
    cloud_name:"dwyfwbq1s",
    api_key:"244682742452274",
    api_secret:"A_35vLTBZLzVz2x3cXEBtNuqo4Y"
})

export const uploadImage = async filePath =>{

 return await   cloudinary.uploader.upload(filePath,{
        folder: "angelServices"
    })
}

export const deleteImage = async id =>{
    return await cloudinary.uploader.destroy(id)
}