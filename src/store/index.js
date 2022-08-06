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
        setAlumno(payload){
            // console.log(commit)
            console.log(payload)
            // try {
            //     // const nuevoUsuario = {
            //     //   nombre: payload.nombre,
            //     //   email: payload.email,
            //     //   pais: payload.pais,
            //     //   cursos: payload.cursos    
            //     // };
            //     // commit('traerAlumnosRegistrados', respuestaAlumnos.data);
            //     // await axios.post(`https://62df4289976ae7460be99a23.mockapi.io/alumnos`, payload);
            //     // this.$router.push("login")
            //   }
            //   catch (error) {
            //     console.log(error);
            //   }
        }
    }
})