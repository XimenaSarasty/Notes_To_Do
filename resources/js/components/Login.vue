<template>
    <div class="bg-dark min-vh-100 d-flex align-items-center justify-content-center">
      <div class="bg-light p-4 rounded shadow w-40">
        <h1 class="text-center">Iniciar Sesión</h1>
        <form @submit.prevent="login">
          <div class="mb-3">
            <label for="email" class="form-label">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              v-model="email"
              class="form-control"
              required
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label">Contraseña</label>
            <input
              type="password"
              id="password"
              v-model="password"
              class="form-control"
              required
            />
          </div>
          <div class="text-center">
            <button
              type="submit"
              class="btn btn-primary w-200"
            >
              Iniciar Sesión
            </button>
          </div>
        </form>
        <p class="mt-3 text-center">
          ¿No tienes una cuenta? <a href="#" class="text-primary" @click.prevent="goToRegister">Regístrate aquí</a>
        </p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      login() {
        // Aquí iría la lógica para iniciar sesión (por ejemplo, hacer una solicitud a tu backend)
        console.log('Iniciando sesión con:', this.email, this.password);
        
        // Simulación de un inicio de sesión exitoso
        // Después de verificar el inicio de sesión, redirige a la página de notas
        this.$router.push({ name: 'notas' });
      },
      goToRegister() {
        this.$router.push({ name: 'registro' });
      }
    }
  };
  </script>
  
  <style scoped>
  /* Estilos adicionales para el componente Login */
  </style>
  