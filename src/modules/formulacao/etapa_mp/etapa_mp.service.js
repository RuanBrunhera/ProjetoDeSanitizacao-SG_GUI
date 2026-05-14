import { AppError } from '../../../core/utils/AppError.js';
import * as EtapaMPModel from './etapa_mp.model.js';

export const cadastrar = async (etapa_mp={}) => {
    return await EtapaMPModel.cadastrar(etapa_mp);
};

export const alterar = async (etapa_mp={}) => {
    return await EtapaMPModel.alterar(etapa_mp);
};

export const alterarOrdem = async (ordemEtapa_mp = {}) => {
    const {etapas_mp} = ordemEtapa_mp;
    if (!etapas_mp || !Array.isArray(etapas_mp) || etapas_mp.length === 0) {
        throw new AppError({
            message: 'Lista de matérias-primas inválida',
            reason: 'O campo etapas_mp deve ser um array com ao menos um item contendo id e ordem',
            code: 400
        });
    };
    return await EtapaMPModel.alterarOrdem(etapas_mp);
};

export const consultar = async (filtro = '') => {
    return await EtapaMPModel.consultar(filtro);
};

export const consultarPorId = async (id) => {
    return await EtapaMPModel.consultarPorId(id);
};

export const consultarPorEtapa = async (etapa_id) => {
    return await EtapaMPModel.consultarPorEtapa(etapa_id);
};

export const deletar = async (id) => {
    return await EtapaMPModel.deletar(id);
};
