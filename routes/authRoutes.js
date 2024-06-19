const express = require('express');
const { register, login } = require('../controllers/authController');

const router = express.Router();

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Registrar um novo treinador
 *     description: Registrar um novo treinador com as informações fornecidas.
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - contact
 *               - cpf
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nome completo do treinador
 *               email:
 *                 type: string
 *                 description: Email do treinador
 *               contact:
 *                 type: string
 *                 description: Número de contato do treinador
 *               cpf:
 *                 type: string
 *                 description: CPF do treinador
 *               password:
 *                 type: string
 *                 description: Senha do treinador
 *     responses:
 *       201:
 *         description: Treinador registrado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 email:
 *                   type: string
 *                 contact:
 *                   type: string
 *                 cpf:
 *                   type: string
 *       400:
 *         description: Dados inválidos ou treinador já registrado
 */

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Autenticar um treinador
 *     description: Autenticar um treinador com email e senha.
 *     tags:
 *       - Auth
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 description: Email do treinador
 *               password:
 *                 type: string
 *                 description: Senha do treinador
 *     responses:
 *       200:
 *         description: Autenticação bem-sucedida
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *       400:
 *         description: Email ou senha inválidos
 */

router.post('/register', register);
router.post('/login', login);

module.exports = router;
