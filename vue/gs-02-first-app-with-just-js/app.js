// Configure the vue app
Vue.createApp({
  // define data the object should be aware of
  data() {
    return {
      goals: [],
      enteredValue: ''
    }
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
    }
  }
}).mount('#app') // which part of the page should be controlled by the view app


// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// function addGoal() {
//   const enteredValue = inputEl.value;
//   const listItemEl = document.createElement('li');
//   listItemEl.textContent = enteredValue;
//   listEl.appendChild(listItemEl);
//   inputEl.value = '';
// }



// buttonEl.addEventListener('click', addGoal);