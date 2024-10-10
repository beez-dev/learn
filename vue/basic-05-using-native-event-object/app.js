const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      
      firstname: '',
      lastname: '',
      fullname: '',
      newfullname: ''
    };
  },
  watch: {
    name (value) {
      console.log('my new watch value: ', value);

      return this.newfullname = value + ' ' + 'Schwarzmuller'
    }
  },
  computed: {
    fullname() {
      return (this.firstname ?? '')+' '+(this.lastname ?? '');
    }
  },
  methods: {
    outputFullname() {
      if (this.name === '') {
        return '';
      }

      return this.name + ' ' + ' schwarzmuller'
    },
    setName(event, lastName) {
      this.name = event.target.value ;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    }
  }
});

app.mount('#events');
 