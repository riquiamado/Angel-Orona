import turnosModel from "../models/turnos.model.js";

import usersModel from "../models/user.model.js";

import servicesModel from "../models/services.model.js";

import mercadopago from "mercadopago";

mercadopago.configure({
  access_token:
    "TEST-4538702908446805-072620-ce5a9da89599ffc1c825f7e3e9c80360-79197777",
});

export const getTurnos = async (req, res) => {
  try {
    const turnos = await turnosModel.find();
    res.status(200).json(turnos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createTurnos = async (req, res) => {
  try {
    const { date, hour, userId, servicesId } = req.body;
    const user = await usersModel.findById(userId);
    const services = await servicesModel.findById(servicesId);
    if (!user && !services)
      return res
        .status(404)
        .json({ message: "No existe el usuario o servicio" });
    // Lógica de pago con Mercado Pago
    const preference = {
      items: [
        {
          title: services.name,
          quantity: 1,
          currency_id: "ARS",
          unit_price: (services.price * 20) / 100,
        },
      ],
      back_urls: {
        success: "http://localhost:3000/pago_exitoso",
        failure: "http://localhost:3000/pago_fallido",
        pending: "http://localhost:3000/pago_pendiente",
      },
      auto_return: "approved",
    };

    const response = await mercadopago.preferences.create(preference);
    // const preferenceId = response.body.id;
    // const paymentLink = response.body.init_point;

    // console.log("ID de preferencia:", preferenceId);
    // console.log("Link de pago:", paymentLink);

    // Ahora crea el turno en la base de datos y almacena la información del pago
    const turno = new turnosModel({
      date,
      hour,
      userId,
      servicesId,
      state: "pendiente",
      paymentInfo: {
        preferenceId: response.body.id, // Almacena el ID de la preferencia de pago para futuras referencias
        status: "pendiente", // El estado inicial del pago es "pendiente"
      },
    });

    await turno.save();
    // turno.userId = user.name;
    // turno.services = services.name;

    // return res.status(201).json(turno); // Devuelve el turno recién creado en la respuesta
    return res.status(201).json({
        turno: {
          _id: turno._id,
          date: turno.date,
          hour: turno.hour,
          userId: turno.userId,
          servicesId: turno.servicesId,
          state: turno.state,
        },
        preferenceId: response.body.id,
        paymentLink: response.body.init_point,
      });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTurnosById = async (req, res) => {
  const { id } = req.params;
  try {
    const turno = await turnosModel.findById(id);
    if (turno) {
      res.status(200).json(turno);
    } else {
      res.status(404).json({ message: "No existe el turno" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateTurnos = async (req, res) => {
  const { id } = req.params;
  const { date, price, user } = req.body;
  try {
    const turno = await turnosModel.findByIdAndUpdate(id, {
      date,
      price,
      user,
    });
    res.status(200).json(turno);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteTurnos = async (req, res) => {
  const { id } = req.params;
  try {
    await turnosModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Turno eliminado" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
