
// Crea un oggetto agenda con una proprietà che comprenda una lista di contatti con un nome e un numero di telefono, ed abbia diverse funzionalità tra cui:
// mostrare tutti i contatti dell’agenda
// mostrare un singolo contatto
// eliminare un contatto dall’agenda
// aggiungere un nuovo contatto
// modificare un contatto esistente  


//creo agenda con contatti:
let agenda = {
    
    contatti: [
        {'nome': 'Pio', 'telefono': '3234333210'},
        {'nome' : 'Caio', 'telefono' : '3444335340'},
        {'nome' : 'Angela', 'telefono' : '3414114140'},
        {'nome' : 'Sempronio', 'telefono' : '3888338880'},
        {'nome' : 'Antonino', 'telefono' : '3666335540'}
    ],
    
     //mostro tutti i contatti:
    mostraContatti : function(){

        this.contatti.forEach((contatto)=> console.log(contatto));
    },

    //mostro un singolo contatto:
    mostraContatto : function(nomeDaCercare){
        this.contatti.forEach((contatto)=>{
            
            if(contatto.nome === nomeDaCercare){

                console.log(contatto);
                

            }
        });
    },

    //elimino un contatto dall'agenda:

    eliminaContatto : function(nomeRimosso){

    let index = this.contatti.findIndex((contatto)=> contatto.nome === nomeRimosso);

    console.log(index);

    if(index !== -1){
        this.contatti.splice(index, 1)
    };
    

        
    },

    //aggiungo un nuovo contatto:

    aggiungiContatto : function(nomeAggiunto){

        this.contatti.push({
            'nome' : `il nome aggiunto è ${nomeAggiunto}`, 
            'telefono' : '336633663',
        });

        console.log(agenda.contatti);
        
    
        
    },

    //modifico un contatto nell'agenda:

    modificaContatto : function(modificaNome, modificaTelefono){
        
        this.contatti.forEach((contatto)=>{
            if(contatto.nome === modificaNome){
                contatto.telefono = modificaTelefono
            }
        });
    
    },


};

agenda.mostraContatti();
agenda.mostraContatto('Antonino');
agenda.eliminaContatto('Sempronio');
agenda.aggiungiContatto('Maurizio');
agenda.modificaContatto('Caio', '3333333330');