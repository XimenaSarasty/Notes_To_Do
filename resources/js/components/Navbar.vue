<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">NotasToDo</a>
        <div class="collapse navbar-collapse justify-content-end">
          <span class="navbar-text me-3">{{ usuario }}</span>
          <button class="btn btn-outline-danger" @click="logout">
            <i class="fas fa-sign-out-alt"></i> Cerrar Sesión
          </button>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    props: {
      usuario: {
        type: String,
        required: true
      }
    },
    methods: {
      logout() {
        // Aquí iría la lógica para cerrar sesión
        console.log('Cerrando sesión...');
        // Redirigir a la página de inicio de sesión o realizar otra acción
        this.$router.push({ name: 'login' }); // Asegúrate de tener esta ruta configurada
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos adicionales para el componente Navbar */
  </style>
  