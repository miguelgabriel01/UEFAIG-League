const express = require('express');
const router = express.Router();
const teamController = require('../controllers/teamController');
const authMiddleware = require('../middleware/authMiddleware');

/**
 * @swagger
 * tags:
 *   name: Times
 *   description: Operações relacionadas a times de futebol
 * 
 * securityDefinitions:
 *   bearerAuth:
 *     type: apiKey
 *     name: Authorization
 *     in: header
 */

/**
 * @swagger
 * /api/teams:
 *   post:
 *     summary: Cria um novo time
 *     tags: [Times]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               coachId:
 *                 type: integer
 *               name:
 *                 type: string
 *               category:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Time criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 coachId:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 category:
 *                   type: string
 *       '400':
 *         description: Erro ao criar o time
 */

router.post('/', authMiddleware, teamController.createTeam);

/**
 * @swagger
 * /api/teams:
 *   get:
 *     summary: Retorna todos os times do coach logado
 *     tags: [Times]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Lista de times retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   coachId:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   category:
 *                     type: string
 *       '400':
 *         description: Erro ao listar os times
 */

router.get('/', authMiddleware, teamController.listTeam);

/**
 * @swagger
 * /api/teams/{id}:
 *   put:
 *     summary: Atualiza um time existente
 *     tags: [Times]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               category:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Time atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 coachId:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 category:
 *                   type: string
 *       '400':
 *         description: Erro ao atualizar o time
 *       '404':
 *         description: Time não encontrado
 */

router.put('/:id', authMiddleware, teamController.updateTeam);

/**
 * @swagger
 * /api/teams/{id}:
 *   delete:
 *     summary: Deleta um time existente
 *     tags: [Times]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Time deletado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       '400':
 *         description: Erro ao deletar o time
 *       '404':
 *         description: Time não encontrado
 */

router.delete('/:id', authMiddleware, teamController.deleteTeam);

module.exports = router;
