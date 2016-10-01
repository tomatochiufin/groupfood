import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// root state object.
// each Vuex instance is just a single state tree.
const state = {
    count: 0,
    thisMonth: 9,
    hello: {
        world: "how are you"
    },
    groups: [
        {
            restaurant: '添好運',
            participant: [{name: 'stacy chen'}, {name: 'yingray lu'}, {name: 'pompom huang'}],
            remain: 0
        },
        {
            restaurant: '點點心',
            participant: [{name: 'liz cheng'}, {name: 'Gary Chung'}, {name: 'Amber ou'}],
            remain: 1
        },
        {
            restaurant: '花酒藏',
            participant: [{name: 'Jerry Chen'}, {name: 'Nicky Chen'}, {name: 'Mike chen'}],
            remain: 2
        }
    ],
    ungroup: [
        {
            name: 'Kiki Huang',
            status: 'no_group'
        },
        {
            name: 'Javan',
            status: 'leave'
        }
    ]
};

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
    increment (state) {
        state.count++
    },
    decrement (state) {
        state.count--
    }
}

// actions are functions that causes side effects and can involve
// asynchronous operations.
const actions = {
    increment: ({ commit }) => commit('increment'),
    decrement: ({ commit }) => commit('decrement'),
    incrementIfOdd ({ commit, state }) {
        if ((state.count + 1) % 2 === 0) {
            commit('increment')
        }
    },
    incrementAsync ({ commit }) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                commit('increment')
                resolve()
            }, 1000)
        })
    }
}

// getters are functions
// 根據state，不用另外去設定的變數
// computed 算出來的
const getters = {
    evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})