<template> 
    <div class="container">
    <vue-form ref="form" :state="forma">
        <div class="row justify-content-md-center">
          <div class="col-sm-12 col-md-12">
            <h1>Alta de alumnos</h1>
          </div>
          <div class="col-sm-12 col-md-6 text-start">
            <validate tag="label">
              <div class="mb-3">
                <label for="nombre" class="form-label">Nombre</label>
                <input type="text" class="form-control" id="nombre" name="nombre" v-model.trim="model.nombre" required>
                <field-messages name="nombre">
                  <div slot="required" class="text-danger">Nombre es un campo requerido</div>
                </field-messages>
              </div>
            </validate>
            <validate tag="label">
              <div class="mb-3">
                <label for="email" class="form-label">email</label>
                <input type="email" class="form-control" id="email" name="email" v-model.trim="model.email" required>
                <field-messages name="email">
                  <div slot="required" class="
                  text-danger">Email es un campo requerido</div>
                  <div slot="email" class="
                  text-danger">Email no es valido</div>
                </field-messages>
              </div>
            </validate>
            <validate tag="label">
              <div class="mb-3">
                <label for="pais" class="form-label">País</label>
                <select class="form-select" aria-label="Default select example" id="pais" name="pais" v-model.trim="model.pais" required>
                <option selected disabled>Selecciona tu país de origen</option>
                <option 
                  v-for="(paises, index) in listaPaises" 
                  :key="index" 
                  :value="paises.pais">
                    {{paises.pais}}
                </option>
              </select>
                <field-messages name="pais">
                  <div slot="required" class="text-danger">País es un campo requerido</div>
                </field-messages>
              </div>
            </validate>

            <validate :custom="{'validarCurso': isCursoAvailable}">
            <div class="mb-3">
            <h4>Selecciona tu curso</h4>
            </div>
              <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="JavaScript" id="checkJS" v-model="cursos" name="curso">
                  <label class="form-check-label" for="checkJS">
                    JavaScript
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="React" id="checkReact" v-model="cursos" name="curso">
                  <label class="form-check-label" for="checkReact">
                    React
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="Angular" id="checkNg" v-model="cursos" name="curso">
                  <label class="form-check-label text-start" for="checkNg">
                    Angular
                  </label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="Vue" id="checkVue" v-model="cursos" name="curso">
                  <label class="form-check-label" for="checkVue">
                    Vue
                  </label>
                </div>
                <div class="text-danger" v-if="!validarCurso">Curso es requerido</div>
              </validate>
                <br>
            <button type="submit" class="btn btn-primary" @click.prevent="enviarFormulario">Enviar</button>
          </div>

        </div>
        </vue-form>
    </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'FormularioWeb',
  props: {
  },
  data(){
    return{
      forma:{
      },
      model:{
        nombre:'',
        email: '',
        pais:''
      },  
      validarCurso: false,
      cursos: [],
      listaPaises:[
        {
          id: 1,
          pais: "Argentina"
        },
        {
          id: 2,
          pais: "Belice"
        },
        {
          id: 3,
          pais: "Bolivia"
        },
        {
          id: 4,
          pais: "Brasil"
        },
        {
          id: 5,
          pais: "Chile"
        },
        {
          id: 6,
          pais: "Colombia"
        },
        {
          id: 7,
          pais: "Costa Rica"
        },
        {
          id: 8,
          pais: "Ecuador"
        },
        {
          id: 9,
          pais: "El Salvador"
        },
        {
          id: 10,
          pais: "Guatemala"
        },
        {
          id: 11,
          pais: "Honduras"
        },
        {
          id: 12,
          pais: "México"
        },
        {
          id: 13,
          pais: "Nicaragua"
        },
        {
          id: 14,
          pais: "Panamá"
        },
        {
          id: 15,
          pais: "Paraguay"
        },
        {
          id: 16,
          pais: "Perú"
        },
        {
          id: 17,
          pais: "Uruguay"
        },
        {
          id: 18,
          pais: "Venezuela"
        }
      ]         
    }
  },
  methods:{
    enviarFormulario: async function(){    
      if(this.forma.$invalid){
        return
      }else{
        var registro = {nombre: nombre.value, email: email.value, pais: pais.value, cursos: this.cursos.join(', ')}
        this.$store.dispatch("setAlumno", registro)
        // try {
        //     await axios.post(`https://62df4289976ae7460be99a23.mockapi.io/alumnos`, registro);
        //   }
        //   catch (error) {
        //     console.log(error);
        //   }
        this.resetState()
      }
      
    },
    resetState: function () {
      this.cursos = []
      this.model.nombre = ''
      this.model.email = ''  
      this.model.pais = '' 
    }
  },
  computed: {
  isCursoAvailable: function () {
    if(this.cursos == ''){
      this.validarCurso = false 
    }else{
      this.validarCurso = true
      return true
    }
  }
  }
}
</script>

<style scoped>
label{
  width: 100%;
}
</style>
