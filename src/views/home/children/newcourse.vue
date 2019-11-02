<template>
    <div id='newCoursebox'>
        <h2 class='body_h2'>最新课程</h2>
        <p class='lookMore'>
        <span>学习本无底 , 前进莫彷徨</span>
        <router-link to="/courselist.html">[查看更多]</router-link>
        </p>
        <!-- <p class='nothing' v-if='nothingTitle.tui'>该分类下暂无课程</p> -->
        <ul class='tuiCourseUl clearF'>
          <li v-for="(list,index) in tuiCourse" :key="list.courseId" @click="jump($event,'/coursemain.html',index,'tuiCourse')" >
              <img :src= "list.courseImgPath==null?'../../assets/courseImg.jpg':list.courseImgPath" :title= 'list.courseName'  :onerror="defaultImg">
              <p class='clearF'>
              <span class='fl' :title="list.courseName">{{ list.courseName }}</span>
              <span class='fr'>{{ list.courseType |courseType }}</span>
              </p>
              <p class='clearF'>
              <span class='fl' :title="list.schoolName">{{ list.schoolName ==null?'暂无学校':list.schoolName}}</span>
              <span class='fr'>
                  <b></b>
                  <i>{{ list.join }}</i>
              </span>
              </p>
          </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "newCoursebox",
  props: [],
  data() {
    return {
      tuiCourse: null,
      defaultImg: 'this.src="' + require("../../../assets/courseImg.jpg") + '"',
    };
  },
  updated() {},
  components: {},

  computed: {},
  filters:{
    courseType(v){
      if(v==1) return "随堂模式"
      return "自主模式"
    }  
  },
  beforeMount() {},

  mounted() {
    this.newCourse()
  },

  methods: {
    async newCourse() {
      try {
        let res = await this.$api.home.newCourse();
        this.tuiCourse = res.data;
      } catch (e) {
        console.log(e);
      }
    }
  },

  watch: {}
};
</script>
<style lang='less' scoped>

#body {
  li {
    cursor: pointer;
  }
  #tuiCourse,
  #newCourse,
  #j1Course,
  #j2Course {
    padding: 30px 0 20px;
    width: 100%;
  }
  #newCourse,
  #j2Course {
    background: #f4f4f4;
  }
  width: 100%;
  .body_h2 {
    width: 100%;
    height: 40px;
    line-height: 40px;
    display: block;
    text-align: center;
    font-size: 28px;
    color: #333333;
    font-weight: 200;
    clear: both;
    font-weight: 200;
  }
  .lookMore {
    width: 100%;
    display: block;
    text-align: center;
    font-size: 14px;
    color: #999999;
    padding-bottom: 50px;
    font-size: 15px;
    padding-bottom: 30px;
  }
  .tuiCourseUl > li:nth-child(4) {
    margin-right: 0;
  }
  .tuiCourseUl > li:nth-child(8) {
    margin-right: 0;
  }
  .tuiCourseUl {
    width: 1076px;
    margin: 10px auto 0;
    > li {
      width: 255px;
      height: 201px;
      margin-right: 18px;
      border-bottom: 2px solid #eeeeee;
      margin-bottom: 10px;
      > img {
        display: block;
        width: 100%;
        height: 136px;
      }
      > p:last-child {
        margin-bottom: 10px;
        span {
          color: #999999;
        }
      }
      > p {
        width: 95%;
        margin: 9px auto 0;
        > span {
          font-size: 14px;
          color: #333333;
          position: relative;

          b {
            display: inline-block;
            .wh(14px, 14px);
            background: url(../../../assets/yonghuindex.png);
            background-size: 14px 14px;
            position: absolute;
            top: 2px;
            left: -20px;
          }
          i {
            font-style: normal;
            font-size: 14px;
          }
        }
        > span:first-child {
          width: 126px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
  > div {
    height: auto;
  }
}
</style>