import * as elemento from './elemento.controller.js';

export default [
	{
		codigo:'elemento:consultar',
		metodo: 'GET',
		modulo: 'formulacao',
		rota: 'elemento',
		middlewares: [],
		functionExec: elemento.consultar,
		recurso: 'Elementos',
		descricao: 'Exibir dados dos elementos cadastrados',
		ehPublica: true
	},
	{
		codigo:'elemento:consultarPorId',
		metodo: 'GET',
		modulo: 'formulacao',
		rota: 'elemento/:id',
		middlewares: [],
		functionExec: elemento.consultarPorId,
		recurso: 'Elementos',
		descricao: 'Exibir dados dos elementos pelo ID',
		ehPublica: true
	},
	{
		codigo:'elemento:consultarPorSimbolo',
		metodo: 'GET',
		modulo: 'formulacao',
		rota: 'elemento/simbolo/:simbolo',
		middlewares: [],
		functionExec: elemento.consultarPorSimbolo,
		recurso: 'Elementos',
		descricao: 'Exibir dados dos elementos pelo símbolo',
		ehPublica: true
	}
];