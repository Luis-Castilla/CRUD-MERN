const Clients = require('../models/client');

//Create client
exports.createClient = async (req, callback) => {
  try {
    const {
      cedula,
      email,
      nombre,
      telefono
    } = req.body; //destructuracion del objeto

    console.log(cedula, telefono, email, nombre);

    const newClient = new Clients({
      cedula,
      email,
      nombre,
      telefono
    });
    try {
      const ClientSave = await newClient.save();
      callback(null, ClientSave);
      return;
    } catch (error) {
      callback(error);
      return;
    }
  } catch (error) {
    callback(error);
    return
  }
}
//Get clients
exports.getClients = async (req, callback) => {
  try {
    const products = await Clients.find();
    callback(null, products);
    return;
  } catch (error) {
    callback(error);
    return;
  }
};

//Get client by Id
exports.getClientById = async (req, callback) => {
  const { ClientId } = req.params;

  try {
    const Client = await Clients.findById(ClientId);
    callback(null, Client);
    return;
  } catch (error) {
    callback(error);
    return;
  }
};

//Update client
exports.updateClientById = async (req, callback) => {
  try {
    console.log(req.body);
    const updatedClient = await Clients.findByIdAndUpdate(
      req.params.ClientId,
      req.body,
      {
        new: true, // para que el metodo devuelva los datos nuevos.
      }
    );
    callback(null, updatedClient);
    return;
  } catch (error) {
    callback(error);
    return;
  }
};

//Delete client
exports.deleteClientById = async (req, callback) => {
  const { ClientId } = req.params;

  try {
    await Clients.findByIdAndDelete(ClientId);
    callback(null, "Blog client deleted");
    return;
  } catch (error) {
    callback(error);
    return;
  }
};