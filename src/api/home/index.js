import api from '../index'
import urls from './urls'

const header = {}

export default {
  category(params){
    return api.post(urls.category, params,header)
  },
  carousel(params){
    return api.post(urls.carousel, params,header)
  },
  courseRecommend(params){
    return api.post(urls.courseRecommend,params,header)
  },
  newCourse(params){
    return api.get(urls.newCourse,params,header)
  },
}