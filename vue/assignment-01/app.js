const app = Vue.createApp({
    data() {
        return {
            name: 'beez dev',
            age: 27,
            imageUrl: 'https://dummyimage.com/300x200/000/fff'
        }
    },
    methods: {
        calculateAge() {
            return 3
        }
    }
}).mount("#assignment")