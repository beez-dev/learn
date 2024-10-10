const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: 'pullwitzer'
    };
  },
  methods: {
    submitForm(event){
      event.preventDefault();
      // alert('Submitted!');
    },
    add(num) {
      this.counter = this.counter + num;
    },
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    }
  }
});

app.mount('#events');
