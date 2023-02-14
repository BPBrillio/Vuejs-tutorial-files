const app = Vue.createApp({
    data(){ //is a function returns an object with key value pairs
        return {
            courseGoal: 'Finish Course and Learn Vue',
            courseGoalA: '<h2 style="color: \"white\"">Learn Vue</h2>',
            courseGoalB: '<h2 style="color: \"white\"">Master Vue</h2>',
            vueLink: 'https://vuejs.org'
        };
    },
    methods: { //object consisting of functions
        outputGoal() {
            const randomNumber = Math.random();
            if(randomNumber < 0.5){
                return this.courseGoalA;
            }
            else{
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal');