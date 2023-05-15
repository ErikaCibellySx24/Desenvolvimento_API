const { request, response } = require('../app');
const contratosModel = require('../models/contratosModel')

const getAll = async () => {
    const contratos = await contratosModel.getAll();

    return response.status(200).json({message: 'controller ok'});
};
const creatContrato = async(req, res) => {
    const creatContrato = await contratosModel.createContrato(request.body);
    return response.status(201).json({creatContrato})
};
const deleteContrato = async(req, res) => {
    const {id} = request.params;

    await contratosModel.deleteContrato(id);
    return response.status(204).json();
};
const updateContrato = async(req, res) => {
    const {nome} = request.params;

    await contratosModel.updateContrato(nome, request.body);
    return response.status(204).json();
};
module.exports = {
    getAll,
    creatContrato,
    deleteContrato,
    updateContrato
};