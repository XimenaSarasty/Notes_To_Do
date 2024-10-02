<template>
    <Navbar :usuario="nombreUsuario" />
    <div class="container mt-4 text-white">
      <h1 class="text-center">Editar Nota</h1>
      <form @submit.prevent="editarNota">
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
        <button type="submit" class="btn btn-primary">Actualizar Nota</button>
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
      editarNota() {
        // Aquí iría la lógica para editar una nota (llamada a tu backend)
        console.log('Editando nota:', this.titulo, this.descripcion, this.fecha_vencimiento);
        // Redirigir de vuelta a la página de notas
        this.$router.push({ name: 'notas' });
      }
    },
    mounted() {
      // Aquí podrías hacer una llamada al backend para obtener la nota por ID
      const notaId = this.$route.params.id;
      console.log('Obteniendo datos para la nota con ID:', notaId);
      // Simulación de datos obtenidos
      this.titulo = 'Título de la nota';
      this.descripcion = 'Descripción de la nota';
      this.fecha_vencimiento = '2024-10-10';
    }
  };
  </script>
  