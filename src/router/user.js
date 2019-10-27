export default[
    {
        path: '/about',
        name: 'about',
        component: resolve=>require(['@/views/About'],resolve),
        meta:{
            TopName:'user'
        }
    }
]