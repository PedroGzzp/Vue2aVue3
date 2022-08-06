<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg bg-light fixed-top">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/altaAlumnos">Alta de alumnos</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/listadoAlumnos">Lista de Alumnos</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view></router-view>

  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data(){
    return{
      listaRegistro:[]
    }
  },
  methods:{
    altaRegistro(payload){
      this.listaRegistro.push(payload)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
