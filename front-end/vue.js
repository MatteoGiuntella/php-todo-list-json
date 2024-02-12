
  const { createApp } = Vue
  
  createApp({
    data() {
      return {
        flag: null,
        myList: [],
        newList : '',
        fix:'',
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
          
        },
        {
          headers : { 'Content-Type' : 'multipart/form-data'}
        })
        .then((res) => {
          console.log(res)
            if (res.data.code == 200) {
              this.myList.push({
                lista: this.newList,
                fatto: false
    
              })
              this.newList =  '';
            }
            
        });

      },
      checked(index){
        console.log('index',index);
        console.log('myList',this.myList[index].fatto);

        if (this.myList[index].fatto == false) {
          this.myList[index].fatto = true
        }
        else if(this.myList[index].fatto == true){
          this.myList[index].fatto = false
        }
      },
      removeList(index){
        axios
          .post('http://localhost/php-todo-list-json/back-end/removetodo.php',
          {
            indiceLista : index,
          },
          {
            headers : { 'Content-Type' : 'multipart/form-data'}
          })
          .then((res) => {
            if (res.data.code == 200) {
              this.myList.splice(index, 1)
            }
          });

      },
      fixList(index){
        if (this.flag == index) {
          this.flag = null
          
        }
        else{
          this.flag = index
        }

      },
      pushFix(i){
        axios
        .post('http://localhost/php-todo-list-json/back-end/fix.php',
        {
          lista: this.fix,
          indiceLista : i, 
        },
        {
          headers : { 'Content-Type' : 'multipart/form-data'}
        })
        .then((res) => {
          console.log(res)
            // if (res.data.code == 200) {
              let finalfix = {
                lista: this.fix,
                fatto: false
              }
              this.myList.splice(i,1,finalfix)
              
            // }
            this.newList =  '';
        });
      }
    }
    
  }).mount('#app')
