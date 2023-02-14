const app = Vue.createApp({
    data(){
        return {
            userInput: '',
            userInput2: '',
            confirmedInput2: ''
        };
    },
    methods: {
        clickAlert(){
            alert("Clicked");
        },
        setUserInput(event){
            this.userInput = event.target.value;
        },
        setUserInput2(event){
            this.userInput2 = event.target.value;
        },
        confirmInput2(){
            this.confirmedInput2 = this.userInput2;
        }
    }
});

app.mount('#assignment');