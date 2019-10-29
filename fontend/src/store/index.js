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
        id:'',
        nickName:'',
        gender:'1',
        address:'',
        qianming:'',
        pass: '1',
        email: '1',
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
        changeGender(state,newName){
            state.gender=newName;
        },
        changeNickName(state,newName){
            state.nickName=newName;
        },
        changeAddress(state,newName){
            state.address=newName;
        },
        changeqianming(state,newName){
            state.qianming=newName;
        },
        changePass(state,newName){
            state.pass=newName;
        },
        changeEmail(state,newName){
            state.email=newName;
        },
        getToken(state,newName){
            state.token=newName;
        }
    }
});
export default store;
