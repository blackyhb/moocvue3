<template>
    <div id='personal'>
        <!-- 公共头 -->
        <public-header />
        <p style='height:500px;'>个人中心页</p>

        
        <!-- 公共尾 -->
        <public-footer />
    </div>
</template>

<script>
import footer from "../../components/footer";
import header from "../../components/header";
export default {
  name: "personal",
  props: [],
  data() {
    return {

    };
  },
  updated() {},
  components: {
    "public-footer":footer,
    "public-header":header,
  },

  computed: {},
  filters:{
 
  },
  beforeMount() {},

  mounted() {

  },

  methods: {
 
  },

  watch: {}
};
</script>
<style lang='less' scoped>

</style>