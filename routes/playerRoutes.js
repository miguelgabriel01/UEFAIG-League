const express = require('express');
const router = express.Router();
const playerController = require('../controllers/playerController');
const authMiddleware = require('../middleware/authMiddleware');

/**
 * @swagger
 * tags:
 *   name: Jogadores
 *   description: Operações relacionadas a jogadores de futebol
 * 
 * securityDefinitions:
 *   bearerAuth:
 *     type: apiKey
 *     name: Authorization
 *     in: header
 */

/**
 * @swagger
 * /api/players:
 *   post:
 *     summary: Cria um novo jogador
 *     tags: [Jogadores]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               age:
 *                 type: integer
 *               position:
 *                 type: string
 *               document:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Jogador criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 age:
 *                   type: integer
 *                 position:
 *                   type: string
 *                 document:
 *                   type: string
 *       '400':
 *         description: Erro ao criar o jogador
 */

router.post('/', authMiddleware, playerController.createPlayer);

/**
 * @swagger
 * /api/players/{teamId}:
 *   get:
 *     summary: Retorna todos os jogadores de um time
 *     tags: [Jogadores]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: teamId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Lista de jogadores retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   age:
 *                     type: integer
 *                   position:
 *                     type: string
 *                   document:
 *                     type: string
 *       '400':
 *         description: Erro ao listar os jogadores
 */

router.get('/:teamId', authMiddleware, playerController.listPlayers);

/**
 * @swagger
 * /api/players/player/{id}:
 *   get:
 *     summary: Retorna um jogador específico
 *     tags: [Jogadores]
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
 *         description: Jogador retornado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 age:
 *                   type: integer
 *                 position:
 *                   type: string
 *                 document:
 *                   type: string
 *       '400':
 *         description: Erro ao retornar o jogador
 *       '404':
 *         description: Jogador não encontrado
 */

router.get('/player/:id', authMiddleware, playerController.getPlayer);

/**
 * @swagger
 * /api/players/{id}:
 *   put:
 *     summary: Atualiza um jogador existente
 *     tags: [Jogadores]
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
 *               age:
 *                 type: integer
 *               position:
 *                 type: string
 *               document:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Jogador atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 age:
 *                   type: integer
 *                 position:
 *                   type: string
 *                 document:
 *                   type: string
 *       '400':
 *         description: Erro ao atualizar o jogador
 *       '404':
 *         description: Jogador não encontrado
 */

router.put('/:id', authMiddleware, playerController.updatePlayer);

/**
 * @swagger
 * /api/players/{id}:
 *   delete:
 *     summary: Deleta um jogador existente
 *     tags: [Jogadores]
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
 *         description: Jogador deletado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       '400':
 *         description: Erro ao deletar o jogador
 *       '404':
 *         description: Jogador não encontrado
 */

router.delete('/:id', authMiddleware, playerController.deletePlayer);

module.exports = router;
