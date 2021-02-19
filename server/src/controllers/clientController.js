const clientService = require('../services/clientService');

//Create client
exports.createClient = async (req, res) => {
    await clientService.createClient(req, function (err, result) {
        if (err) {
            return res.status(400).json({
                success: false,
                body: err
            });
        }
        return res.status(200).json({
            success: true,
            body: result
        });
    });
}

//Get client
exports.getClients = async (req, res) => {
    await clientService.getClients(req, function (err, result) {
        if (err) {
            return res.status(400).json({
                success: false,
                body: err
            });
        }
        return res.status(200).json({
            success: true,
            body: result
        });
    });
}

//Get client by ID
exports.getClientById = async (req, res) => {
    await clientService.getClientById(req, function (err, result) {
        if (err) {
            return res.status(400).json({
                success: false,
                body: err
            });
        }
        return res.status(200).json({
            success: true,
            body: result
        });
    });
}

//Delete client
exports.deleteClientById = async (req, res) => {
    await clientService.deleteClientById(req, function (err, result) {
        if (err) {
            return res.status(400).json({
                success: false,
                body: err
            });
        }
        return res.status(200).json({
            success: true,
            body: result
        });
    });
}

//Update client
exports.updateClientById = async (req, res) => {
    await clientService.updateClientById(req, function (err, result) {
        if (err) {
            return res.status(400).json({
                success: false,
                body: err
            });
        }
        return res.status(200).json({
            success: true,
            body: result
        });
    });
}