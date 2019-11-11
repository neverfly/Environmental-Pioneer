import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
const store = new Vuex.Store({
    state:{
        show: false,
        name: '',
        id:'',
        real_name:'',
        avatar:'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
        user_description:'',
        e_mail: '',
        token:''
    },
    mutations:{
        madeShow(state,isShow){
            state.show=isShow;
        },
        changeName(state,newName){
            state.name=newName;
        },
        changeId(state,newName){
            state.id=newName;
        },
        changerealname(state,newName){
            state.real_name=newName;
        },
        changeAvatar(state,newName){
            state.avatar=newName;
        },
        changeuser_description(state,newName){
            state.user_description=newName;
        },
        getEmail(state,newName){
            state.e_mail=newName;
        },
        getToken(state,newName){
            state.token=newName;
        }
    }
});
export default store;
