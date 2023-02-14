const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      confirmedName: '',
      fullName: ''
    };
  },
  watch: {
    // This is more annoying when output has mor dependencies. Not used for data binding.
    name(value){//Basically slots of Qt framework. Executed when 
      console.log("WatcherF");
      this.fullName = value + ' ' + this.lastName;
    },
    lastName(value){//Basically slots of Qt framework. Executed when 
      console.log("WatcherL");
      this.fullName = this.name + ' ' + value;
    },
    // It is more used for conditional statements based on value check like check if counter > 50, then reset to 0.
    counter(value){
      if(value > 50){
        setTimeout(() => {
          this.counter = 0;
        }, 2000)
      }
    }
  },
  computed: {
    // Best option usually for data binding. Calculates dependencies automatically.
    outputFullName(){
      console.log("Computed");
      if(this.name.trim() === "") return '';
      return this.name + ' ' + this.lastName;
    }
  },
  methods:{
    //Execute upon every component change. Used for event bindings usually.
    Add(n){
      this.counter+=n;
    },
    Reduce(n){
      this.counter-=n;
    },
    setName(event){
      this.name = event.target.value;
    },
    submitForm(){
      alert('Submitted');
    },
    confirmName(){
      this.confirmedName = this.name;
    },
    outputFullNameMethod(){
      console.log("Method");
      if(this.name.trim() === "") return '';
      return this.name + ' ' + this.lastName;
    }
  }
});

app.mount('#events');
