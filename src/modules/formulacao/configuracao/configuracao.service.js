import { AppError } from '../../../core/utils/AppError.js';
import * as ConfiguracaoModel from './configuracao.model.js';

export const cadastrar = async (configuracao={key:'', value:{}}) => {
    return await ConfiguracaoModel.cadastrar(configuracao);
};

export const alterar = async (configuracao={}, responsavel) => {
    return await ConfiguracaoModel.alterar(configuracao, responsavel);
};

export const consultar = async () => {
    return await ConfiguracaoModel.consultar();
};

export const consultarPorKey = async (key) => {
    return await ConfiguracaoModel.consultarPorKey(key);
};

export const deletar = async (key) => {
    const result = await ConfiguracaoModel.deletar(key);
    if (!result) {
        throw new AppError({
            message: 'Configuração não encontrada',
            reason: `Nenhuma configuração encontrada para a chave '${key}'`,
            code: 404
        });
    }
    return result;
};
