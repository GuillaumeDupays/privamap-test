import axios from 'axios'

const apiShape = 'http://localhost:8000';


const shapes = {
    
    namespaced: true,

    state: {
        shapes: []

    },

    mutations: {
        SET_SHAPES(state, shapes) {
            state.shapes = shapes
        }
    },

    actions: {
        chargerShapes({ commit }) {
            axios
                .get(`${apiShape}/shapes`)
                .then(res => {
                    commit('SET_SHAPES', res.data)
                })
                .catch(error => console.log(error))
        }
    },
    getters: {
        shapes(state) {
          const shapes = Object.keys(state.shapes).map(key => state.shapes[key]);
          return shapes;
        }
      },
}

export default shapes;