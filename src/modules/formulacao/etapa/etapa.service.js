import { AppError } from '../../../core/utils/AppError.js';
import * as EtapaModel from './etapa.model.js';

export const cadastrar = async (etapa={}) => {
    return await EtapaModel.cadastrar(etapa);
};

export const alterar = async (etapa={}) => {
    return await EtapaModel.alterar(etapa);
};

export const alterarOrdem = async (ordemEtapa = {}) => {
    const { etapas } = ordemEtapa;
    if (!etapas || !Array.isArray(etapas) || etapas.length === 0) {
        throw new AppError({
            message: 'Lista de etapas inválidas',
            reason: 'O campo etapas deve ser um array com ao menos um item contendo id e ordem',
            code: 400
        });
    }   
    return await EtapaModel.alterarOrdem(etapas);
};

export const consultar = async (filtro = '') => {
    return await EtapaModel.consultar(filtro);
};

export const consultarPorId = async (id) => {
    return await EtapaModel.consultarPorId(id);
};

export const consultarPorNome = async (nome) => {
    return await EtapaModel.consultarPorNome(nome);
};

export const consultarPorProjeto = async (projeto_id) => {
    return await EtapaModel.consultarPorProjeto(projeto_id);
};

export const deletar = async (id) => {
    return await EtapaModel.deletar(id);
};
