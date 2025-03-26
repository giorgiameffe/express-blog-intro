# Express-blog-intro 

## Consegna 

Creiamo il nostro blog personale e giorno dopo giorno lo potremo arricchire con nuove funzionalità sulla base di quello che impareremo.
- Creiamo il progetto base con una rotta / che ritorna un testo semplice con scritto ”Server del mio blog”
- Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe)
- Creiamo poi una rotta /bacheca che restituisca un oggetto json con la lista dei post.
- Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.
- Testare su postman;

---

## Svolgimento 

L'obiettivo dell'esercizio odierno è di creare il nostro primo server utilizzando **express.js**, un framework backend minimalista e veloce che offre funzionalità e strumenti solidi per lo sviluppo di applicazioni backend che possiamo installare nel nostro progetto tramite il comando **"npm install express"**.

Dopo aver installato e importato nel nostro file "express.js" e identificato la porta, si procede con l'inserimento di due rotte: 

- **prima rotta**: "/", restituirà un testo semplice, in questo caso "Server del mio blog";
- **seconda rotta**: "/bacheca", restituirà un oggetto JSON con una lista di post, ognuno dei quali avrà rispettivamente un proprio titolo, contenuto, immagine e tags. 

Tutto ciò verrà testato con *Postman*, uno strumento utile per testare le chiamate API e conservare le richieste. 

Visto che *Express* di default non consente di vedere file statici, dobbiamo attivare noi questo servizio. E' perciò molto importante configurare gli asset statici tramite la funzione app.use(), in modo tale che le immagini siano visibili. 