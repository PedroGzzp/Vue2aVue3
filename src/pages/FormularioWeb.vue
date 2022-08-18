<template> 
    <div class="container">
        <div class="row justify-content-md-center">
          <div class="col-sm-12 col-md-12">
            <h1>Alta de alumnos</h1>
          </div>
          <div class="col-sm-12 col-md-6 text-start">
              <div class="mb-3">
                <label for="nombre" class="form-label">Nombre</label>
                <input type="text" class="form-control" id="nombre" name="nombre" v-model.trim="nombre" required>
                <div v-if="errNombre">
                  <div class="text-danger">Nombre es un campo requerido</div>
                </div>
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">email</label>
                <input type="email" class="form-control" id="email" name="email" v-model.trim="email" required>
                  <div v-if="errEmail" class="text-danger">Email es un campo requerido</div>
                  <div v-if="errEmailInvalid" class="text-danger">Email no es valido</div>
              </div>
              <div class="mb-3">
                <label for="pais" class="form-label">País</label>
                <select class="form-select" aria-label="Default select example" id="pais" name="pais" v-model.trim="pais" required>
                <option selected disabled>Selecciona tu país de origen</option>
                <option 
                  v-for="(paises, index) in listaPaises" 
                  :key="index" 
                  :value="paises.pais">
                    {{paises.pais}}
                </option>
              </select>
                <div>
                  <div v-if="errPais" class="text-danger">País es un campo requerido</div>
                </div>
              </div>

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
                <div class="text-danger" v-if="errCurso">Curso es requerido</div>

                <br>
            <button class="btn btn-primary" @click="enviarFormulario">Enviar</button>
          </div>        
        </div>

        <div class="toast-container position-fixed top-0 end-0 p-3">
          <div id="toast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-body">
              Alumno registrado exitosamente.
            </div>
          </div>
        </div>

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
      nombre:'',
      email: '',
      pais:'',
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
      ],
      errNombre: false,
      errEmail: false,
      errEmailInvalid: false, 
      errPais: false,  
      errCurso: false,  
    }
  },
  methods:{
    enviarFormulario: async function(){   
      this.validarNombre()
      this.validarEmail()
      this.validarPais()
      this.validarCurso()
      if(!this.validarNombre() && !this.validarEmail() && !this.validarPais() && !this.validarCurso()){
        return
      }else{
        var registro = {nombre: nombre.value, email: email.value, pais: pais.value, cursos: this.cursos.join(', ')}
        this.$store.dispatch("setAlumno", registro)
        this.resetState()
         var myAlert =document.getElementById('toast');//select id of toast
          var bsAlert = new bootstrap.Toast(myAlert);//inizialize it
          bsAlert.show();//show it
      }
      
    },
    resetState: function () {
      this.cursos = []
      this.nombre = ''
      this.email = ''  
      this.pais = '' 
    },
    validarNombre: function(){
      if(nombre.value == ""){
        this.errNombre = true
        return false
      }else{
        this.errNombre = false
        return true
      }
    },
    validarEmail: function(){
      var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if(email.value == ""){
        this.errEmail = true
        return false
      }else if(!email.value.match(validRegex)){
        this.errEmailInvalid = true
        return false
      }else{
        this.errEmailInvalid = false
        this.errEmail = false
        return true
      }
    },
    validarPais: function(){
      if(pais.value == ""){
        this.errPais = true
        return false
      }else{
        this.errPais = false
        return true
      }
    },
    validarCurso: function(){
      if(this.cursos.length == 0){
            this.errCurso = true 
          }else{
            this.errCurso = false
            return true
          }
    }
  },
  computed: {
  }
}
</script>

<style scoped>
label{
  width: 100%;
}
</style>
