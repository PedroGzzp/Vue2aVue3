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
