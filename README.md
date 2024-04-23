# js-array-carousel


1 Creo il container del carosello con le immagini dentro , di cui una avrà un display block e le altre none.


2 Adesso inizio con JS : inizio creandomi un array con tutte le immagini(faccio un console.log per vedere se effettivamente mi ha creato l'array).

3 mi creo delle variabili , rispettivamente l'immagine in visione e quella successiva , senza dargli un valore.

4 ora mi creo un ciclo per far scorrere le immagini ad ogni refresh. Creando la variabile immagine che sarà uguale alnome dell'array più il contatore i. 

5 Dopo aver testato che il ciclo funzioni in maniera corretta(togliendo la classe active e aggiungerla all'immagine successiva)
faccio in modo che l'iterazione del ciclo avvenga ad ogni click su una freccia attraverso .addEventListener

6 per ottenere al click l'effetto contrario rifaccio un altro addeventlistener con lo stesso codice cambiando la variabile in previous e successivamente dichiaro che imagePrev è uguale all'immagine attuale -1 e con la condizione che se imagePrev sia minore di 0 le riassegno il valore dicendo che è uguale alla lunghezza dell'array -1

