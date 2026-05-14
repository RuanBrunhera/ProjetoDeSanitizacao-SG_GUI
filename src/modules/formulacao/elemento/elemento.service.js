import { AppError } from '../../../core/utils/AppError.js';
import * as ElementoModel from './elemento.model.js';

export const consultar = async (query={}) => {
    if (!query || typeof query !== 'object') {
        throw new AppError ({
            message: 'Consulta de elementos inválida',
            reason: 'A consulta deve ser um objeto contendo os parâmetros de busca',
            code: 400
        });
    }

    const data = await ElementoModel.consultar(query);
    if (!data || data.length === 0) {
        throw new AppError({
            message: 'Nenhum elemento encontrado',
            reason: 'Nenhum elemento encontrado com os parâmetros de busca fornecidos',
            code: 404
        });
    }
    return data;
};

export const consultarPorId = async (id) => {
    if (!id || isNaN(id)) {
        throw new AppError({
            message: 'ID do elemento inválido',
            reason: 'O ID fornecido deve ser um número inteiro positivo',
            code: 400
        });
    }

    const data = await ElementoModel.consultarPorId(id);
    if (!data || data.length === 0) {
        throw new AppError({
            message: 'Elemento não encontrado',
            reason: `Nenhum elemento encontrado com o ID'${id}'`,
            code: 404
        });
    }
    return data;
};

export const consultarPorSimbolo = async (simbolo) => {
    if (!simbolo || typeof simbolo !== 'string') {
        throw new AppError({
            message: 'Símbolo do elemento inválido',
            reason: 'O símbolo fornecido deve ser uma string não vazia',
            code: 400
        });
    }

    const data = await ElementoModel.consultarPorSimbolo(simbolo);
    if (!data || data.length === 0) {
        throw new AppError({
            message: 'Elemento não encontrado',
            reason: `Nenhum elemento encontrado com o símbolo '${simbolo}'`,
            code: 404
        });
    }
    return data;
};
