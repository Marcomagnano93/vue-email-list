const { createApp } = Vue

createApp({
	data() {
		return {
            //usa un array vuoto in cui salvare le mails
			mails: [],
		}
	},
	methods: {
        //crea una funzione che cicli(for) per (n) volte generando le mail con axios
		fetchMails(n) {
			for (let i = 0; i < n; i++) {
				axios
					.get('https://flynn.boolean.careers/exercises/api/random/mail') //usa .then per pushare la mail generata in mails
					.then((res) => {
						this.mails.push(res.data.response)
					})
			}
		},
	},
	created() {
		this.fetchMails(10)
	},
}).mount('#app')