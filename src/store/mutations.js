//开头定义方法名,方便维护
const FUN='FUN';
export default {
	[FUN](state,{
		code
	}){
		state.code=code
	},
}
