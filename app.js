// importare express
const express = require('express');

// salvare in una variabile l'invocazione della funzione express
const app = express();

// identificare la porta 
const port = 3000;

// configurare asset statici
app.use(express.static('public'));

// avviare il server mettendolo in ascolto sulla porta definita
app.listen(port, ()=> {
    console.log(`Sono un server attivo sulla porta ${port}`);
})

// definire prima rotta
app.get('/', (req,res) => {
    res.send('Server del mio blog');
})

// definire seconda rotta
app.get('/bacheca', (req,res) => {
    res.json(noticeBoard);
})

// importare array dal file foods.js
const noticeBoard = require('./foods.js');