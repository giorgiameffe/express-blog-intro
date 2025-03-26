// importare express
const express = require('express');

// salvare in una variabile l'invocazione della funzione express
const app = express();

// identificare la porta 
const port = 3000;

app.get('/', (req,res) => {
    console.log('Ho chiamato la rotta principale');
    res.send('Server del mio blog');
})

app.listen(port, ()=> {
    console.log(`Sono un server attivo sulla porta ${port}`);
})