const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const server = express();

server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use((req, res, next) => {
    res.header('Content-Type', 'application/json; charset=utf-8');
    next();
});

const todos = [
    {
        id: '1',
        description: 'Give talk @vues.js antwerp'
    }
];
let id = 1;

server.post('/todos', (req, res) => {
    id++;
    const [description] = req.body;
    const newTodo = { ...{description}, id: '' + id };
    todos.push(newTodo);
    res.status(201);
    res.set('Content-Type', 'application/json');
    res.json(newTodo);
});

server.get('/todos', (req, res) => {
    res.set('Content-Type', 'application/json');
    res.json(todos);


});

module.exports = {
    server
};
