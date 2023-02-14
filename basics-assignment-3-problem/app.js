const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            timeOut: {}
        };
    },
    watch: {
        counter() {
            clearTimeout(this.timeOut);
            this.timeOut = setTimeout(() => {
                this.counter = 0;
            }, 5000);
            
        }
    },
    computed: {
        verdictCalculate(){
            if (this.counter < 47) {
                return 'Not there yet';
            }
            else if (this.counter > 47){
                return 'Too much!';
            }
            return '';
        }
    },
    methods: {
        Add(n) {
            this.counter += n;
        }
    }
});

app.mount('#assignment');