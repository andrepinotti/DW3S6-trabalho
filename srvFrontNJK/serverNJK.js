const express = require('express');
const nunjucks = require('nunjucks');
const app = express();
const port = 26000;

// Configurando o Nunjucks
nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true // Adiciona auto-reload das views, útil para desenvolvimento
});

app.use(express.static('public'));

// Dados de exemplo para a tabela
const salas = [
  { salasdeaulaid: 1, descricao: 'Sala A', localizacao: '1º Andar', capacidade: 30, removido: false },
  { salasdeaulaid: 2, descricao: 'Sala B', localizacao: '2º Andar', capacidade: 25, removido: false }
];

// Rota para a página principal (index)
app.get('/', (req, res) => {
  res.render('index.njk');
});

// Rota para a página de manutenção de salas
app.get('/manutSalaDeAula', (req, res) => {
  res.render('manutSalaDeAula.njk', { salas });
});

// Iniciando o servidor na porta especificada
app.listen(port, () => {
  console.log(`Servidor Nunjucks rodando em http://localhost:${port}`);
});