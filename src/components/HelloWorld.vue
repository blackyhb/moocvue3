<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    修改
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  created(){
    //  this.matches();
    //  this.boutiqueOne()
    this.category()
  },
  methods:{
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
