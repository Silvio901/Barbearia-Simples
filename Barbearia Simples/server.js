const express = require('express');
const app = express();
const port = 3000;

// Middleware para lidar com requisições JSON
app.use(express.json());

// Dados de agendamentos (aqui armazenamos em memória apenas como exemplo)
let agendamentos = [];

// Rota para receber o agendamento (POST)
app.post('/api/agendamento', (req, res) => {
    const { nome, telefone, servico, data, hora } = req.body;

    // Validar se todos os campos necessários estão presentes
    if (!nome || !telefone || !servico || !data || !hora) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
    }

    // Criar o agendamento e adicionar ao array
    const novoAgendamento = { nome, telefone, servico, data, hora };
    agendamentos.push(novoAgendamento);

    // Resposta de sucesso
    res.status(201).json({ message: 'Agendamento realizado com sucesso!', agendamento: novoAgendamento });
});

// Rota para listar todos os agendamentos (GET)
app.get('/api/agendamentos', (req, res) => {
    res.status(200).json(agendamentos);
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
