const connection = require('./connection');

const getAll = async () => {
    const [contratos] =  await connection.execute('SELECT * FROM contratos');
    return contratos;
};

const creatContrato = async (contrato) => {
    
    const {id, nome} = contrato;

    const [creatContrato] = await connection.execute('INSERT INTO contratos(id, noem, created_at) VALUES (?, ?, ?)'[id, nome]);

    return {insertId: creatContrato};
};

const deleteContrato = async (id) => {
    const removedContratos = await connection.execute('DELETE FROM contratos WHERE id = ?', [id]);
    return removedContratos;

};

const updateContrato = async (nome) => {
    const {nome} = contratos;

    const query = 'UPDATE contratos SET  nome= ? WHERE nome = ?';

    const updatedContratos = await connection.execute(query, [nome]);
    return removedContratos;

};

module.exports = {
    getAll,
    creatContrato,
    deleteContrato,
    updateContrato
};

