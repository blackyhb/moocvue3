<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    修改
    <span>{{code}}</span>
    <button @click='changeCode()'>修改code</button>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  mounted(){
    // console.log(this.$store.state.code)
  },
  created(){
    // console.log('cre')
    //  this.matches();
    //  this.boutiqueOne()
    // this.category()
  },
  computed:{
    ...mapState(['code']),
  },
  components:{
    
  },
  methods:{
    ...mapMutations([
      'FUN'
    ]),
    changeCode(){
      this.FUN({code:"2"})
      // this.$store.commit('fun1',{code:'2'})
    },
    async matches() {
      // 这里用try catch包裹，请求失败的时候就执行catch里的
      try {
        //定义参数对象
        let params = {
          type: 'zc'
        }
        let res = await this.$api.matches.matches()

        console.log('​getMatches -> res', res)
      } catch (e) {
        console.log('​catch -> e', e)
      }
    },
    async boutiqueOne() {
      // 这里用try catch包裹，请求失败的时候就执行catch里的
      try {
        //定义参数对象
        let params = {
          type: 'zc'
        }
        let res = await this.$api.matches.boutiqueOne()

        console.log('boutiqueOne -> res', res)
      } catch (e) {
        console.log('​catch -> e', e)
      }
    },
    async category() {
      // 这里用try catch包裹，请求失败的时候就执行catch里的
      try {
        //定义参数对象
        let params = {
          type: 'zc'
        }
        let res = await this.$api.matches.category()

        console.log('category -> res', res)
      } catch (e) {
        console.log('​catch -> e', e)
      }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
