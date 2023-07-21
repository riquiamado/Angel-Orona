import servicesModel from "../models/services.model.js";

export const getServices = async () => {
  try {
    const services = await servicesModel.find({});
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createServices = async (req, res) => {
  const { name, price, description, image } = req.body;
  try {
    const newServices = new servicesModel({
      name,
      price,
      description,
      image,
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
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteServices = async (req, res) => {
  const { id } = req.params;
  try {
    const service = await servicesModel.findByIdAndDelete(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
