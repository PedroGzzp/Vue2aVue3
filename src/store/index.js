import Vuex from 'vuex';
import Vue from 'vue';

Vue.use(Vuex)
import axios from 'axios'
export default new Vuex.Store({
    state:{
        listaAlumnos: []
    },
    mutations:{
        traerAlumnosRegistrados: (state, payload) => {
            state.listaAlumnos = payload
        }
    },
    actions: {
        async getAlumnos({ commit }) {
            try{
                const respuestaAlumnos = await axios.get(`https://62df4289976ae7460be99a23.mockapi.io/alumnos`);
                commit('traerAlumnosRegistrados', respuestaAlumnos.data);
            }
            catch (error) {
                console.log(error);
            }
        },
        async setAlumno(context, payload){
            try {
                await axios.post(`https://62df4289976ae7460be99a23.mockapi.io/alumnos`, payload);
                context.dispatch('getAlumnos');
              }
              catch (error) {
                console.log(error);
              }
        }
    }
})