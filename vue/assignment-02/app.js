Vue.createApp({
    data(){
        return {
            userInput: '',
            name: ''
        }
    },
    methods: {
        showAlert() {
            alert('My alert')
        },
        keyerDown(event, lastname) {
            this.userInput += event.target.value + (lastname ?? '')
        },
        setName(event, lastName) {
            this.name = event.target.value
        }
    }
}).mount('#assignment02')