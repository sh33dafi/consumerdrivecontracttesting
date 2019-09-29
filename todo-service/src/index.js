const port = 9000 || process.env.API_PORT;
const index = require('./todo-service').server;
index.listen(port, () => {
    console.log(`Provider Service listening on http://localhost:${port}`)
});
