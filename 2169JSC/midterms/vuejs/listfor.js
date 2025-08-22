const ListRendering = {
  data() {
    return {
      todos: [
        { text: 'Install it' },
        { text: 'Learn basic codes' },
        { text: 'Apply it' }
      ]
    }
  }
}

Vue.createApp(ListRendering).mount('#list-rendering');