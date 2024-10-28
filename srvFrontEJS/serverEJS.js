const express = require('express');
const app = express();
const port = 25000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const salas = [
  { salasdeaulaid: 1, descricao: 'Sala A', localizacao: '1º Andar', capacidade: 30, removido: false },
  { salasdeaulaid: 2, descricao: 'Sala B', localizacao: '2º Andar', capacidade: 25, removido: false }
];

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/manutSalaDeAula', (req, res) => {
  res.render('manutSalaDeAula', { salas });
});

app.listen(port, () => {
  console.log(`Servidor EJS rodando em http://localhost:${port}`);
});