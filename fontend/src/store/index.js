import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
/*const state={
    show: 'ssss',
    name: 'sss',
    pass: '1',
    email: '1'
};
const getters={
    isShow(){
        return state.show;
    },
    getName(){
        return state.name;
    },
    getPass(){
        return state.pass;
    }
};
const mutations={
    madeShow(isShow){
        state.show=isShow;
    },
    changeName(newName){
        state.name=newName;
    },
    changePass(newName){
        state.pass=newName;
    },
    changeEmail(newName){
        state.email=newName;
    }
};
const actions={
    madeShow(context){
        context.commit('madeShow');
    },
    changeName(context){
        context.commit('changeName');
    },
    changePass(context){
        context.commit('changePass');
    },
    changeEmail(context){
        context.commit('changeEmail');
    },
}*/
const store = new Vuex.Store({
    state:{
        show: false,
        name: '',
        id:'',
        realname:'',
        avatar:'',
        user_description:'',
        pass: '',
        email: '',
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
            state.realname=newName;
        },
        changeAvatar(state,newName){
            state.avatar=newName;
        },
        changeuser_description(state,newName){
            state.user_description=newName;
        },
        changePass(state,newName){
            state.pass=newName;
        },
        getEmail(state,newName){
            state.email=newName;
        },
        getToken(state,newName){
            state.token=newName;
        }
    }
});
export default store;
