import axios from 'axios'

const api = 'http://localhost:3000';

const elements = {
    
    namespaced: true,

    state: {
        elements: [],
        selected: null
    },

    mutations: {
        SET_ELEMENTS(state, data) {
            state.elements = data
        }
    },

    actions: {
        chargerElements({ commit }) {
            axios
                .get(`${api}/elements`)
                .then(res => {
                    commit('SET_ELEMENTS', res.data)
                })
                .catch(error => console.log(error))
        }
    },

    getters: {
        getElementByID: ({ elements }) => (name) => {
            return elements.filter( obj => obj.name == name );
        },
        getElement({ elements }) {
            return elements.filter( obj => obj.name == null );
        }
    },
}

export default elements;