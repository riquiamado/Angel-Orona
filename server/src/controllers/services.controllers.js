import { deleteImage, uploadImage } from "../../libs/cloudinary.js";
import servicesModel from "../models/services.model.js";
import fs from "fs-extra";

export const getServices = async (req,res) => {
  try {
    const services = await servicesModel.find({});
    console.log(services)
   return  res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createServices = async (req, res) => {
  const { name, price, description } = req.body;
  try {
    let image;

    if (req.files?.image) {
      const result = await uploadImage(req.files.image.tempFilePath);
      await fs.remove(req.files.image.tempFilePath);
      image = {
        url: result.secure_url,
        public_id: result.public_id,
      };
      
    }
    const newServices = new servicesModel({
      name,
      price,
      description,
      image:image.url
    });
    await newServices.save();
    res.status(201).json(newServices);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getServicesById = async (req, res) => {
  const { id } = req.params;
  try {
    const service = await servicesModel.findById(id);
    res.status(200).json(service);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateServices = async (req, res) => {
  const { id } = req.params;
  const { name, price, description, image } = req.body;
  try {
    const service = await servicesModel.findByIdAndUpdate(id, {
      name,
      price,
      description,
      image,
    },{
      new:true
    });
    res.status(200).json(service);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteServices = async (req, res) => {
  const { id } = req.params;
  try {
    const service = await servicesModel.findByIdAndDelete(id);
    if (!service) return res.sendStatus(404)
    if(service.image.public_id){
      return await deleteImage(service.image.public_id)
    }
   else {
    console.log("delete");
    return res.status(204).json("al fin se borro esta mierda");
  }
    // res.status(200).json(service);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
