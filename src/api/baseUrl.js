let baseUrl = '/api/' // 本地代理

switch (process.env.NODE_ENV) {
  case 'dev':
  console.log(1)
    baseUrl = 'http://mooc.atelink.com/' // 测试环境url
    break
  case 'pre':
  console.log(2)
  
    baseUrl = 'http://mooc.atelink.com/' // 预上线环境url
    break
  case 'production':
  console.log(3)
  
    baseUrl = 'http://mooc.atelink.com/' // 生产环境url
    break
  default:
    // console.log(baseUrl,'=>baseUrl')
}

export default baseUrl