import axios from 'axios'

const apiElement = 'http://localhost:3000';
const apiType = 'http://localhost:4000';

const elements = {
    
    namespaced: true,

    state: {
        elements: [],
        types: [],
        selected: null
    },

    mutations: {
        SET_ELEMENTS(state, data) {
            state.elements = data
        },
        SET_TYPES(state, types) {
            state.types = types
        }
    },

    actions: {
        chargerElements({ commit }) {
            axios
                .get(`${apiElement}/elements`)
                .then(res => {
                    commit('SET_ELEMENTS', res.data)
                })
                .catch(error => console.log(error))
        },
        chargerTypes({ commit }) {
            axios
                .get(`${apiType}/types`)
                .then(res => {
                    commit('SET_TYPES', res.data)
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