<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <p ref="p">123123213</p>
    <input type="text" ref='username'>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click='un()'>username</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data(){
    return{
      
    }
  },
  components: {
    HelloWorld
  },
  mounted(){
    // console.log(this.$refs.username)
  },
  methods: {
    un(){
      console.log(this.$refs.username.activated)
    }
  }
}
</script>
