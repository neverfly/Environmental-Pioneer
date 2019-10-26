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
        name: 'sss',
        pass: '1',
        email: '1'
    },
    mutations:{
        madeShow(state,isShow){
            state.show=isShow;
        },
        changeName(state,newName){
            state.name=newName;
        },
        changePass(state,newName){
            state.pass=newName;
        },
        changeEmail(state,newName){
            state.email=newName;
        }
    }
});
export default store;
