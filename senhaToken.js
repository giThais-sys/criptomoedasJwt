// src/routes/routes.js

const jwt = require('jsonwebtoken');
const router = express.Router();
const Exemplo = require('../models/Exemplo');

// Chave secreta para assinar o JWT (mantenha isso seguro e fora do código-fonte em um ambiente de produção)
const SECRET_KEY = 'minhachavesecreta';

// Função para gerar um token JWT
function gerarToken(user) {
  return jwt.sign({ username: user.username }, SECRET_KEY, { expiresIn: '1h' });
}

// Middleware para verificar o token JWT
function autenticarToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.sendStatus(401); // Não autorizado se não houver token

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403); // Token inválido
    req.user = user;
    next();
  });
}

// Rota de login (simulação de autenticação)
router.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Simula uma verificação de usuário. No seu projeto real, você deve verificar no banco de dados.
  if (username === 'user' && password === 'password') {
    const token = gerarToken({ username });
    return res.json({ token });
  }

  return res.status(401).json({ error: 'Credenciais inválidas' });
});

// Rota para criar um novo documento no MongoDB (protegida)
router.post('/exemplo', autenticarToken, async (req, res) => {
  try {
    const novoExemplo = new Exemplo(req.body);
    const exemploSalvo = await novoExemplo.save();
    res.status(201).json(exemploSalvo);
  } catch (erro) {
    res.status(400).json({ error: 'Erro ao salvar exemplo' });
  }
});

// Rota para obter todos os documentos (protegida)
router.get('/exemplo', autenticarToken, async (req, res) => {
  try {
    const exemplos = await Exemplo.find();
    res.json(exemplos);
  } catch (erro) {
    res.status(500).json({ error: 'Erro ao buscar exemplos' });
  }
});

module.exports = router;