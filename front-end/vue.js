
  const { createApp } = Vue

  createApp({
    data() {
      return {
        myList: []
      }
      
    },
    mounted() {
      console.log('Mounted')
      axios
          .get('http://localhost/php-todo-list-json/back-end/index.php')
          .then((res) => {
              this.myList = res.data
              console.log(this.myList)
          });
    }
    
  }).mount('#app')
