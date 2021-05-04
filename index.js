//Importando
const express = require("express")
const app = express()
const PORT = (process.env.PORT || 8080);

//arquivos

app.use(express.static()) 
app.use('/css', express.static(__dirname + 'css'))
app.use('/js', express.static(__dirname + 'js'))
app.use('/html', express.static(__dirname + 'html'))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
});

app.listen(PORT, () => {
    console.log("rodando na porta " + PORT);
})




//----------------------------------------

// const express = require("express")
// const app = express()

// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/index.html")
// });

// const PORT = (process.env.PORT || 8080);

// app.listen(PORT, () => {
//     console.log("rodando na porta" + PORT);
// })


//-----------------------------

// const express = require('express');
// const app = express();
// const port = process.env.PORT || 3000;

// app.use(express.static('final'));


// app.listen(port, function () {
//   console.log('Started on port ' + port)
// });