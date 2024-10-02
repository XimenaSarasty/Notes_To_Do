<template>
    <Navbar :usuario="nombreUsuario" />
    <div class="container mt-4 text-white">
      <h1 class="text-center">Crear Nota</h1>
      <form @submit.prevent="crearNota">
        <div class="mb-3">
          <label for="titulo" class="form-label">Título</label>
          <input type="text" id="titulo" v-model="titulo" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="descripcion" class="form-label">Descripción</label>
          <textarea id="descripcion" v-model="descripcion" class="form-control" required></textarea>
        </div>
        <div class="mb-3">
          <label for="fecha_vencimiento" class="form-label">Fecha de Vencimiento</label>
          <input type="date" id="fecha_vencimiento" v-model="fecha_vencimiento" class="form-control" required />
        </div>
        <button type="submit" class="btn btn-primary">Guardar Nota</button>
      </form>
    </div>
  </template>
  
  <script>
  import Navbar from './Navbar.vue';

  export default {
    components: {
    Navbar
    },
    data() {
      return {
        titulo: '',
        descripcion: '',
        fecha_vencimiento: '',
        nombreUsuario: 'Usuario Ejemplo' 
      };
    },
    methods: {
      crearNota() {
        // Aquí iría la lógica para crear una nota (llamada a tu backend)
        console.log('Creando nota:', this.titulo, this.descripcion, this.fecha_vencimiento);
        // Redirigir de vuelta a la página de notas
        this.$router.push({ name: 'notas' });
      }
    }
  };
  </script>
  