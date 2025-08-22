const books = Vue.createApp({
  data() {
    return {
      showBooks: true,
      btitle: 'Clean Code',
      bauthor: 'Robert Cecil Martin',
      year: 2008
    }
  }, 
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    }
  }
});

books.mount('#books');