const http = require ('http')
const PORT = process.env.port || 3000
const handleRequest = (request, response) => {
  response.end('Hello World')
}
const server = http.createServer(handleRequest)

server.listen(PORT, () => {
  console.log("Server listenining on: http://localhost:%s", PORT)
})
