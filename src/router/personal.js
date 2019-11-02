export default[
    {
        path: '/personal',
        name: 'personal',
        component: resolve=>require(['@/views/personal/personal'],resolve),
        beforeEnter:(to,from,next)=>{
            // console.log(to);
            next();
        },
        meta:{
            // isLogin:true
        }
    }
]