
  const { createApp } = Vue

  createApp({
    data() {
      return {
        myList: [],
        newList : '',
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
    },
    methods:{
      addlist(){
        
        axios
        .post('http://localhost/php-todo-list-json/back-end/addtodo.php',
        {
          lista: this.newList,
          fatto: false
        },
        {
          headers : { 'Content-Type' : 'multipart/form-data'}
        })
        .then((res) => {
            if (res.data.code == 200) {
              this.myList.push({
                lista: this.newList,
                fatto: false
      
              })
              this.newList =  '';
            }
        });

      },
      checked(){
        if (this.myList.fatto == false) {
          this.myList.fatto = true
        }
        else{

        }
      }
    }
    
  }).mount('#app')
