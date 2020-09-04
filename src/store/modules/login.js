export const SET_FIRST_LINK = 'SET_FIRST_LINK'
const state = {
 firstLink: ''
}

const mutations = {

  ['SET_FIRST_LINK'] (state,res){
    state.firstLink = res 
  }
}

const actions ={
  setFirstLink({commit},res){
    commit('SET_FIRST_LINK',res);
  }
}
export default {
  state,
  mutations,
  actions
}
