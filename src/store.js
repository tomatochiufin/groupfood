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
            date:'2016/10/15 (五)',
            participant: [{name: 'stacy chen', contact: true}, {name: 'yingray lu', contact: false}, {name: 'pompom huang', contact: false}],
            remain: 0,
            note: '報名即將截止，要搶要快！'
        },
        {
            restaurant: '點點心',
            date:'2016/10/20 (二)',
            participant: [{name: 'liz cheng', contact: false}, {name: 'Gary Chung', contact: true}, {name: 'Amber ou', contact: false}],
            remain: 1,
            note: 'JAVAN 是我的！'
        },
        {
            restaurant: '花酒藏',
            date:'2016/10/15 (五)',
            participant: [{name: 'Jerry Chen', contact: true}, {name: 'Nicky Chen', contact: false}, {name: 'Mike chen', contact: false}],
            remain: 2,
            note: '美食在此，你還不來嗎'
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