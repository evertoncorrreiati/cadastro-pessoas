 const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

let pessoas = [];

// Listar todas as pessoas
app.get('/pessoas', (req, res) => {
  res.json(pessoas);
});

// Cadastrar nova pessoa
app.post('/pessoas', (req, res) => {
  const pessoa = { id: Date.now(), ...req.body };
  pessoas.push(pessoa);
  res.status(201).json(pessoa);
});

// Deletar pessoa
app.delete('/pessoas/:id', (req, res) => {
  pessoas = pessoas.filter(p => p.id !== Number(req.params.id));
  res.json({ mensagem: 'Deletado com sucesso' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`));
