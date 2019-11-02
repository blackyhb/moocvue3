<template>
    <div id='header' class='header'>
        <!-- <public-alert ref='alertBox'></public-alert> -->
        <ul>
            <li>
                <router-link to="/">
                    <img src="../assets/atlogo.jpg" alt="全景云课堂">
                </router-link>    
            </li>
            <li>
                <router-link to="/index.html">首页</router-link>
                <router-link to="/courselist.html">课程</router-link>
                <router-link to="/schoollist.html">学校</router-link>
            </li>
            <li>
                <label for="search">
                        <input style='z-index:1' type="text" name='search' v-model="searchValue" placeholder="请输入课程、老师、学校" @keyup.enter="jumpGo()">
                        <!-- <router-link  :to="{path:'search.html',query: {sk:searchValue}}"> -->
                            <b @click="jumpGo()" style='z-index:2;'></b>
                        <!-- </router-link> -->
                </label>
            </li>
            <li>
                <div class='header_Box1' v-if='!this.$store.state.isLogin'>
                    <span  @click='register()'>注册</span>
                    <span style='margin-left:10px;' @click='login()'>登录</span>
                </div>
                <!-- <div class='header_Box2' v-if='!userImgShow'> -->
                <div class='header_Box2' v-if='this.$store.state.isLogin'>
                    <span>
                    <b v-if='haveMess'></b>
                    <img :src="this.$store.state.userInfo.userImg" :title="this.$store.state.userInfo.userName"  :onerror="defaultUserImg">
                    </span>
                    <span class='userName' :title="this.$store.state.userInfo.userName" >{{ this.$store.state.userInfo.userName }}</span>
                    <ul style='top:35px;z-index:999;position:absolute;left:0;'>
                    <li style='height:20px;background:transparent;border:none;'></li>
                    <li> <i></i> <router-link :to="{path:'/personal.html', query:{goWhere:'myCourse'}}">我的课程</router-link></li>
                    <li> <i></i> <router-link :to="{path:'/personal.html', query:{goWhere:'myMess'}}">消息提醒</router-link></li>
                    <li> <i></i> <router-link :to="{path:'/personal.html', query:{goWhere:'userInfo'}}">设置</router-link></li>
                    <li @click='loginOut()'> <i></i> 退出</li>
                    </ul>
                </div>
            </li>
        </ul>
        <!-- 登录注册组件-->
        <!-- <register-login ref='registerLogin' @reqUserName="reqUserName" :reqUserName="reqUserName" @showRedDian='changeRedDian'></register-login> -->
       
    
    </div>
</template>
<script>
// import registerlogin from "./registerlogin"; //登录注册组件
export default {
    name: "publicHeader",
    data() {
        return {
            searchValue: "",
            //头像显示隐藏
            userImgShow: true,
            defaultUserImg:'this.src="' + require("../assets/teacherList.jpg") + '"',
            //头像红点显示
            haveMess: false,
        };
    },
    components: {
        // "register-login":registerlogin
    },
    props: ["userImgDiv"],
    watch: {
        userImgDiv(value) {
            this.userImgShow = value;
        }
    },
    mounted() {

        // 通过session判断用户是否登录，改变vuex中的值
        // if(sessionStorage.isLogin==undefined  || sessionStorage=="" || sessionStorage==null){  //未登录
        //     this.$store.commit('changeLogonState',{isLogin:false,userImg:"",userName:''});
        // }else{  //已登录
        //     this.$store.commit('changeLogonState',{isLogin:true,userImg:sessionStorage.userImg,userName:sessionStorage.userName});
        // }
    },
    methods: { 
        register:function(){
            
        },
        login:function(){
            this.$router.push({path:'/personal'});
        },
        jumpGo: function(e) {
            if(this.searchValue==''){
                this.$message({
                    message: '请输入搜索内容',
                    type: 'warning'
                });
            }else{
                this.$router.push({ path: "/search.html", query: { sk: this.searchValue } });
            }
        },
        loginOut: function() {
            sessionStorage.removeItem("isLogin");
            sessionStorage.removeItem("userImg");
            this.$store.commit('changeLogonState',{isLogin:false,userImg:"",userName:""});
            sessionStorage.removeItem("token");
            sessionStorage.removeItem("userName");
            sessionStorage.removeItem("userImgId");
            sessionStorage.removeItem("userId");
            sessionStorage.removeItem("otherLoginFlag");
            sessionStorage.removeItem('reqCode');
            sessionStorage.removeItem('whichBind');
            this.userImgShow = false;
            // console.log(123)
            // console.log(this.$route.path)
            if (this.$route.path == "/videoplay.html" || this.$route.path == "/personal.html") {
                this.$router.push({ path: "/" });
            }
        },
    },
}
</script>


<style lang="less">

    @baseColor:#f3960f;
    @height:59px;
.wh(@w,@h){
    width:@w;
    height:@h;
}
.posi(@posi,@top,@left){
    position:@posi;
    top:@top;
    left:@left;
}
// 列表激活样式
.activeBaseColor{
    color:@baseColor!important;
}

    .header {
    box-shadow: 2px 2px 8px 2px #ccc;
    background: #fff;
    .wh(100%, @height);
    > ul {
        .wh(1076px, @height);
        margin: 0 auto;
        > li:nth-child(1) {
        .wh(20%, @height);
        text-align: left;
        }
        > li:nth-child(2) {
        .wh(40%, @height);
        a {
            float: left;
            .wh(130px, @height);
            text-align: center;
            line-height: 62px;
            font-size: 18px;
            &:hover {
            border-bottom: 2px solid @baseColor;
            }
        }
        }
        > li:nth-child(3) {
        .wh(27%, @height);
        label {
            margin-top: 9px;
            display: inline-block;
            .wh(237px, 42px);
            position: relative;
            border: 1px solid #ddd;
        }
        input {
            vertical-align: middle;
            padding-left: 6px;
            width: 235px;
            height: 40px;
            border: none;
            outline: none;
            font-size: 14px;
            line-height: 40px;
        }
        input::-webkit-input-placeholder {
            font-size: 14px;
            color: #757575;
        }
        b {
            vertical-align: middle;
            display: inline-block;
            .wh(34px, 37px);
            position: absolute;
            top: 0;
            right: 0;
            background: url(../assets/coursemain_sprites.png) no-repeat -50px -130px;
            cursor: pointer;
        }
        }
        > li:nth-child(4) {
        .wh(13%, @height);
        span {
            position: relative;
            float: left;
            height: 59px;
            text-align: center;
            line-height: @height;
            color: #333333;
            font-size: 16px;
            // margin-left: 10px;
            &:hover {
            color: #f3960f;
            cursor: pointer;
            }
            cursor: pointer;
            b {
            display: inline-block;
            .wh(5px, 5px);
            background: #e4393c;
            border-radius: 50%;
            position: absolute;
            top: 16px;
            right: 3px;
            }
        }
        }
    }
    }
    #header{
            .header_Box2 {
            .wh(200px, auto);
            position: relative;
            &:hover > ul {
                display: inline-block;
            }
            > span {
                display: inline-block;
                .wh(29px, 29px);
            }
            img {
                .wh(29px, 29px);
                border-radius: 50%;
                vertical-align: middle;
            }
            .userName {
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
                text-align: left !important;
                padding-left: 5px;
                font-size: 16px;
                color: #333;
                display: inline-block;
                .wh(120px, 59px);
                line-height:63px;
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
            }
            > ul {
                display: none;
                position: absolute;
                top: 45px;
                left: 10px;
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
                    background: url(../assets/headOption.png) no-repeat 0 2px;
                }
                }
                > li:nth-child(3) {
                border-bottom: none;
                i {
                    background: url(../assets/headOption.png) no-repeat 0 -17px;
                }
                }
                > li:nth-child(4) {
                border-bottom: none;
                i {
                    background: url(../assets/headOption.png) no-repeat 0 -39px;
                }
                }
                > li:last-child {
                i {
                    background: url(../assets/headOption.png) no-repeat 0 -74px;
                }
                }
            }
            }
            .register {
                height: 100%;
            }
    }

</style>