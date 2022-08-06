<template>

<div class="container mt-60">
  <div class="row justify-content-md-center">
    <div class="col-sm-12 col-md-6">
      <h3>Alumnos Registrados</h3>
      <table class="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>País</th>
            <th>Cursos</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="$store.state.listaAlumnos == ''">
            <td colspan="4">Sin Datos</td>
          </tr>
          <tr v-for="usuario in $store.state.listaAlumnos" :key="usuario.id">
            <td>{{usuario.nombre}}</td>
            <td>{{usuario.email}}</td>
            <td>{{usuario.pais}}</td>
            <td>{{usuario.cursos}}</td>
          </tr>
        </tbody>        
      </table>
    </div>
  </div>
  
</div>

</template>

<script>
  export default  {
    name: 'TablaPage',
    props: {
    },
    mounted () {
        this.$store.dispatch("getAlumnos")
    },
    data () {
      return {
      }
    },
    methods: {
    },
    computed: {
    }
}


</script>

<style scoped>
.mt-60{
  margin-top: 60px;
}
</style>
