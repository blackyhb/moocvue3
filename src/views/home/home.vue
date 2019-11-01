<template>
  <div id="home">
    <div id="top_two">
      <!-- index头 -->
      <div id="header">
        <div class="header_logo">
          <router-link to="/index.html">
            <img src="../../assets/logo.png" alt="全景云课堂" />
          </router-link>
        </div>
        <div class="header_center">
          <div class="header_fenlei">
            <ul>
              <li>
                <router-link to="/index.html">首页</router-link>
              </li>
              <li>
                <router-link to="/courselist.html">课程</router-link>
              </li>
              <li>
                <router-link to="/schoollist.html">学校</router-link>
              </li>
            </ul>
          </div>
          <div class="header_search">
            <p>
              <!-- <router-link :to="{path:'search.html',query: {sk:searchValue}}"> -->
              <span @click="jumpGo()" class="search"></span>
              <!-- </router-link> -->
              <input type="text" placeholder="请输入课程、老师、学校" @keyup.enter="jumpGo()" />
            </p>
          </div>
        </div>

        <div class="header_login">
          <!-- 登录注册按钮 -->
          <lr-button></lr-button>
          <div class="header_Box2" v-if="this.$store.state.isLogin">
            <span>
              <b v-if="haveMess"></b>
              <img
                :src="this.$store.state.userInfo.userImg"
                :title="this.$store.state.userInfo.userName"
                :onerror="defaultUserImg"
              />
            </span>
            <span
              class="userName"
              :title="this.$store.state.userInfo.userName"
            >{{ this.$store.state.userInfo.userName }}</span>
            <ul style="top:20px;z-index:999;position:absolute;left:30px;">
              <li style="height:20px;background:transparent;border:none;"></li>
              <li>
                <i></i>
                <router-link :to="{path:'/personal.html', query:{goWhere:'myCourse'}}">我的课程</router-link>
              </li>
              <li>
                <i></i>
                <router-link :to="{path:'/personal.html', query:{goWhere:'myMess'}}">消息提醒</router-link>
              </li>
              <li>
                <i></i>
                <router-link :to="{path:'/personal.html', query:{goWhere:'userInfo'}}">设置</router-link>
              </li>
              <li @click="loginOut()">
                <i></i> 退出
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 分类列表 -->
      <div id="lunBo" class="clearF">
        <div class="lunBoUl">
          <ul>
            <li v-for="(list,index) in fenLeiData" :key="list.id" :data-fenLeiId="list.id">
              <a :href="list.goWhere">
                <img
                  :src="list.categoryImg"
                  :alt="list.name"
                  :title="list.name"
                  :onerror="defaultfenLeiImg"
                />
                <span>{{ list.name }}</span>
                <b>></b>
              </a>
            </li>
          </ul>
        </div>
        <!-- 轮播 -->
        <div class="lunBoImg">
          <el-carousel :interval="5000" arrow="always" height='390px'>
            <el-carousel-item v-for="(list,index) in lunBoData" :key="list.courseId">
            <img :title="list.title" :src="list.carouselImg"  :onerror="defaultLunBoImg" :data-lunboId="list.courseId"  @click="jump($event,'/coursemain.html',index,'lunBoData','lunbo')">
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
    <div id="body">
      <!-- 推荐课程 -->
      <div id='tuiCourse'>
        <course-list :tuiCourse="tuiCourse"/>
      </div>
    </div>

  </div>
</template>

<script>
import courseList from '../../views/home/children/course'
import lrbutton from "../../components/lrbutton";
import { mapState, mapMutations } from "vuex";
export default {
  name: "home",
  data() {
    return {
      defaultUserImg:
        'this.src="' + require("../../assets/teacherList.jpg") + '"',
      defaultImg: 'this.src="' + require("../../assets/courseImg.jpg") + '"',
      defaultfenLeiImg: 'this.src="' + require("../../assets/more.png") + '"',
      defaultLunBoImg:
        'this.src="' + require("../../assets/acquiescence.jpg") + '"',
      fenLeiData: null,
      lunBoData: null,
      tuiCourse:null,
    };
  },
  props: {

  },
  mounted() {
    this.category();              //分类列表
    this.carousel();              //轮播图
    this.courseRecommend();       //推荐课程
  },
  created() {

  },
  computed: {
    ...mapState(["code"])
  },
  components: {
    "lr-button": lrbutton, //登录注册按钮
    courseList
  },
  methods: {
    ...mapMutations(["FUN"]),
    changeCode() {
      this.FUN({ code: "2" });
      // this.$store.commit('fun1',{code:'2'})
    },
    async category() {
      //获取分类列表
      // 这里用try catch包裹，请求失败的时候就执行catch里的
      try {
        //定义参数对象
        let params = {
          type: "zc"
        };
        let res = await this.$api.home.category();
        let resData = res.data;
        resData.push({
          name: "更多",
          categoryImg: "../assets/more.png",
          id: ""
        });
        this.fenLeiData = resData;
        // console.log('category -> res', res)
      } catch (e) {
        console.log("​catch -> e", e);
      }
    },
    async carousel() {
      try {
        let res = await this.$api.home.carousel();
        this.lunBoData = res.data;
      } catch (e) {
        console.log(e);
      }
    },
    async courseRecommend() {
      try {
        let res = await this.$api.home.courseRecommend();
        let data={
          title:'推荐课程',
          noCourseFlag:res.data.length!=0?false:true,
          list:res.data
        }
        this.tuiCourse=data;
      } catch (e) {

        console.log(e);
      }
    },
  },
  watch:{
    // 'tuiCourseMsg':function(newVal,oldVal){
    //   console.log(1)
    //   this.tuiCourseMsg=newVal
    // }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "../../style/public.less";
 .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
html,
body,
#app {
  height: 100%;
}
#index {
  min-height: 100%;
  height: auto;
}
#header {
  .wh(100%, 70px);
  position: relative;
  background: rgba(255, 255, 255, 0.86);
  z-index: 999;
  > div {
    float: left;
  }
  .header_logo {
    .wh(16%, 70px);
    text-align: left;
    padding: 18px 0 0 40px;
  }
  .header_center {
    .wh(70%, 70px);
    > div {
      .wh(50%, 70px);
      float: left;
    }
    .header_fenlei {
      ul {
        .wh(228px, 70px);
        li {
          .wh(33%, 70px);
          line-height: 70px;
          text-align: center;
          a {
            font-size: 18px;
            letter-spacing: 3px;
          }
        }
      }
    }
    .header_search {
      text-align: right;
      > p {
        display: inline-block;
        .wh(250px, 40px);
        margin: 20px 20px 0 0;
        position: relative;
        .search {
          display: inline-block;
          .wh(18px, 16px);
          .posi(absolute, 13px, 216px);
          background: url(../../assets/fangdajing.png);
          background-size: 100% 100%;
        }
        input {
          width: 250px;
          height: 40px;
          border: 0px;
          border-bottom: 1px solid #ccc;
          line-height: 40px;
          padding: 0 0 0 10px;
          background-color: #fdfdfd;
          outline: none;
          font-size: 14px;
          display: block;
          border-radius: 5px 0px 0px 5px;
          float: left;
        }
        input::-webkit-input-placeholder {
          font-size: 14px;
          color: #757575;
        }
      }
    }
  }
  .header_login {
    .wh(14%, 70px);

    .header_Box2 {
      .wh(200px, auto);
      position: relative;
      &:hover > ul {
        display: inline-block;
      }
      margin-top: 25px;
      padding-left: 30px;
      > span {
        display: inline-block;
        .wh(29px, 29px);
        position: relative;
        b {
          display: inline-block;
          .wh(5px, 5px);
          background: #e4393c;
          border-radius: 50%;
          position: absolute;
          top: 0px;
          right: 0px;
        }
      }
      img {
        .wh(29px, 29px);
        border-radius: 50%;
        vertical-align: baseline;
      }
      .userName {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 16px;
        color: #333;
        display: inline-block;
        .wh(120px, 29px);
        line-height: 29px;
      }
      > ul {
        display: none;
        .wh(120px, auto);
        > li {
          cursor: pointer;
          background: #fff;
          border: 1px solid #eee;
          text-align: left;
          padding: 6px 5px;
          font-size: 15px;
          i {
            vertical-align: middle;
            display: inline-block;
            margin-right: 5px;
            .wh(20px, 20px);
          }
          float: none;
          &:hover {
            color: @baseColor;
          }
        }
        > li:nth-child(2) {
          border-bottom: none;
          i {
            background: url(../../assets/headOption.png) no-repeat 0 2px;
          }
        }
        > li:nth-child(3) {
          border-bottom: none;
          i {
            background: url(../../assets/headOption.png) no-repeat 0 -17px;
          }
        }
        > li:nth-child(4) {
          border-bottom: none;
          i {
            background: url(../../assets/headOption.png) no-repeat 0 -39px;
          }
        }
        > li:last-child {
          i {
            background: url(../../assets/headOption.png) no-repeat 0 -74px;
          }
        }
      }
    }
  }
}

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
            background: url(../../assets/yonghuindex.png);
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
#top_two {
  height: 483px;
  background: url(../../assets/bk.jpg) no-repeat;
  background-size: cover;
}
// #lunBoBox{
//     height:420px;
//     padding-top:15px;

// }
#lunBo {
  width: 1076px;
  margin: 0 auto;
  position: relative;
  margin-top: 11px;
  z-index: 998;
  > div {
    float: left;
  }
  .lunBoUl {
    height: 390px;
    width: 224px;
    li > a {
      display: block;
    }
  }
  .lunBoImg {
    height: 390px;
    width: 852px;
  }
  li {
    clear: both;
    width: 100%;
    height: 65px;
    line-height: 68px;
    position: relative;
    background: #30343b;
    border-bottom: 1px solid #242933;
    cursor: pointer;
    &:hover {
      background: #242933;
    }
    img {
      display: inline-block;
      width: 16px;
      height: 16px;
      margin-left: 20px;
      position: relative;
      top: -28px;
      left: 0;
    }
    b {
      display: inline-block;
      .posi(absolute, 0, 180px);
      color: #ccc;
      font-size: 15px;
    }
    span {
      display: inline-block;
      margin-left: 12px;
      color: #ccc;
      position: relative;
      top: -2px;
      width: 112px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .lunBoImg {
    img {
      width: 100%;
      height: 100%;
    }
    > .swiper-container {
      height: 100%;
    }
  }
}
.swiper-container-horizontal {
  height: 100%;
  > .swiper-wrapper {
    height: 100%;
    > div {
      height: 100%;
    }
  }
}
#tuiCourse,
#j1Course {
  .tuiCourseUl {
    li {
      background: #f8f8f8;
    }
  }
}
#newCourse,
#j2Course {
  .tuiCourseUl {
    li {
      background: #fff;
    }
  }
}
.lookMore {
  span,
  a {
    font-size: 15px;
  }
}

// 轮播图 css
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
#lunBo img {
  cursor: pointer;
}
.nothing {
  text-align: center;
}
</style>
