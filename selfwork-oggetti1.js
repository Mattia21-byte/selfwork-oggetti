
//creare un oggetto-persona con: noma, cognome, età e un metodo che permetta di presentarsi.

let obj = {

nome : 'Lucio',

cognome : 'Sestio',

età : '52 anni',

presentazione : function(){

    console.log(`ciao a tutti, mi presento, sono ${this.nome} ${this.cognome} e ho ${this.età}.`);
    

},

};

obj.presentazione();
