const app = Vue.createApp({
    data() {
        return {
            name: "Luka",
            age: 20,
            imageURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Vombatus_ursinus_-Maria_Island_National_Park.jpg/800px-Vombatus_ursinus_-Maria_Island_National_Park.jpg"
        }
    },
    methods: {
        getRandom() {
            return Math.random();
        }
    }
});
app.mount('#assignment');