// DESCRIZIONE
// Attraverso l’apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all’interno di una lista.

const {createApp} = Vue;

createApp({
    data() {
        return {
            emailList : []
        }
    },
    created() {
        for (let i = 0 ; i <= 9 ; i++) {
            
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(response =>
                    this.emailList.push(response.data.response))    
        }
    }
}).mount('#app');