const app = Vue.createApp({
    data() {
        return {
            name: 'sad',
            age: 1,
            imageUrl: "./avatar.png"
        }

    },
    methods: {
        randomNumber(){
            return 1*(Math.random() <= 0.5);
        },
        add5ToAge(){
            return this.age+5;
        }
    }
});


app.mount('#assignment');