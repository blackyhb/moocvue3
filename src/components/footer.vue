<template>
        <footer id='footer'>
            <ul>
                <li>
                    <router-link to="/">
                        关于我们
                    </router-link>
                </li>
                <li>
                    <router-link to="/">
                        联系我们
                    </router-link>
                </li>
                <li>
                    <router-link to="/">
                        加入我们
                    </router-link>
                </li>
            </ul>
        </footer>
</template>

<script>

    export default {
        name:'publicfooter',
        props:[''],
        data () {
            return {
              
            };
        },

        components: {},

        computed: {},

        beforeMount() {},

        mounted() {
            
        },

        methods: {
              
        },

        watch: {}

    }

</script>
<style lang='less'>
    #footer{
        width: 100%;
        background: #494949;
        padding-top: 40px;
        position: relative;
        height: 180px;
        font-size: 16px;
        text-align: center;
        >ul{
            width: 300px;
            margin: 0 auto;
            li{
                width: 33%;
                text-align: center;
                a{
                    color: #fff;
                    font-size: 14px;
                }
            }
        }
    }
</style>