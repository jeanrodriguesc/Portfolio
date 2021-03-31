const express = require("express")
const app = express()

app.get("/", (request, response) => {
    response.send("Oi heroku")
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("rodando na porta" + PORT);
})
