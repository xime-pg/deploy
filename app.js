const express = require("express")
const path = require("path")
const app = express()
const port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, "public")))

app.use(express.static(path.join(__dirname, "nodemodules", "public")))

app.get("/api/saludo", (request, response) => {
  response.json({ mensaje: "¡Hola desde mi app XPG" })
})

app.listen(port, () => {
  console.log(`Servidor corriendo en ${port}`)
})