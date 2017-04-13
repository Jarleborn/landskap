Vue.component('guess', {
  template: `
    <li class='collection-item'>
      {{ title }}
    </li>
  `,
  props: ['title']
})
new Vue({
  el: '#guess-list',
  data: {
    newGuess: '',
    guesses: [

    ]
  },
  methods: {
    addNewGuess: function () {
      console.log(this.newGuess)
      this.guesses.push(this.newGuess)
      console.log(this.guesses)
      this.newGuess = ''
    }
  }
})
