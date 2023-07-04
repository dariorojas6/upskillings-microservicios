// requerimos nuestro server
const server = require('./src/server')

const PORT = 8003;

server.listen(PORT,()=>{
    console.log(`characters service listening on port ${PORT}`)
})