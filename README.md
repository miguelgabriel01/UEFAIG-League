# Documentação dos Endpoints da API CopaCad

## Estrutura do projeto: 
![image](https://github.com/miguelgabriel01/UEFAIG-League/assets/49694646/fcf53b45-90af-46e6-91bc-49e33a282b0d)

##### 1. Cadastro de Treinador

**Objetivo:** Permitir que treinadores se cadastrem na plataforma com informações básicas.

**Método:** `POST`

**URL:** `/api/auth/register`

**Exemplo de Requisição:**
```json
{
  "name": "Nome Completo do Treinador",
  "email": "email@example.com",
  "contact": "123456789",
  "cpf": "12345678901",
  "password": "senha123"
}
```

**Cenários de Sucesso:**
- O treinador é cadastrado com sucesso e recebe um ID único.
- Caso já exista um treinador com o mesmo CPF ou email, retorna uma mensagem indicando que o treinador já está cadastrado.

**Cenários de Falha:**
- Campos obrigatórios não são fornecidos.
- Formato inválido dos campos (por exemplo, email inválido).
- Erro interno do servidor.

##### 2. Autenticação de Treinador

**Objetivo:** Permitir que treinadores façam login na plataforma para acessar recursos protegidos.

**Método:** `POST`

**URL:** `/api/auth/login`

**Exemplo de Requisição:**
```json
{
  "email": "email@example.com",
  "password": "senha123"
}
```

**Cenários de Sucesso:**
- Credenciais corretas, retorna um token JWT válido.
  
**Cenários de Falha:**
- Credenciais incorretas, retorna uma mensagem indicando credenciais inválidas.

##### 3. CRUD de Times

**Objetivo:** Permitir que treinadores gerenciem os times que estão associados.

**Métodos:**
- `POST`: Cadastrar novo time
- `GET`: Listar todos os times do treinador
- `PUT`: Atualizar informações do time
- `DELETE`: Deletar time

**URLs:**
- `POST` - `/api/teams`
- `GET` - `/api/teams`
- `PUT` - `/api/teams/:teamId`
- `DELETE` - `/api/teams/:teamId`

**Exemplo de Requisição (POST):**
```json
{
  "name": "Nome do Time",
  "category": "sub 17"
}
```

**Cenários de Sucesso:**
- Operações de CRUD realizadas com sucesso.
- Listagem, atualização e exclusão de times.

**Cenários de Falha:**
- Campos obrigatórios não são fornecidos.
- Erro ao acessar ou manipular dados do arquivo CSV.

##### 4. CRUD de Jogadores

**Objetivo:** Permitir que treinadores gerenciem os jogadores associados aos times.

**Métodos:**
- `POST`: Cadastrar novo jogador
- `GET`: Listar todos os jogadores do time
- `GET`: Listar jogador por ID específico
- `PUT`: Atualizar jogador por ID
- `DELETE`: Deletar jogador por ID

**URLs:**
- `POST` - `/api/teams/:teamId/players`
- `GET` - `/api/teams/:teamId/players`
- `GET` - `/api/teams/:teamId/players/:playerId`
- `PUT` - `/api/teams/:teamId/players/:playerId`
- `DELETE` - `/api/teams/:teamId/players/:playerId`

**Exemplo de Requisição (POST):**
```json
{
  "name": "Nome do Jogador",
  "age": 18,
  "position": "atacante",
  "document": "12332334344"
}
```

**Cenários de Sucesso:**
- Jogador é cadastrado/atualizado/deletado com sucesso.
- Listagem de jogadores por time ou ID específico.

**Cenários de Falha:**
- Campos obrigatórios não são fornecidos.
- Limite máximo de jogadores (10) ou requisitos específicos não são atendidos (por exemplo, falta de um goleiro).
