const express = require("express")
const app = express()

app.get("/", (request, response) => {
    response.send("Oi heroku")
});

const PORT = (process.env.PORT || 5000);

app.listen(PORT, () => {
    console.log("rodando na porta" + PORT);
})


// const express = require('express');
// const app = express();
// const port = process.env.PORT || 3000;

// app.use(express.static('final'));


// app.listen(port, function () {
//   console.log('Started on port ' + port)
// });