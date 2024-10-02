<template>
  <div class="bg-dark min-vh-100 d-flex align-items-center justify-content-center">
    <div class="bg-light p-4 rounded shadow w-40">
      <h1 class="text-center">Registrarse</h1>
      <form @submit.prevent="register">
        <div class="mb-3">
          <label for="name" class="form-label">Nombre</label>
          <input
            type="text"
            id="name"
            v-model="name"
            class="form-control"
            required
          />
        </div>
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
        <div class="mb-3">
          <label for="confirmPassword" class="form-label">Confirmar Contraseña</label>
          <input
            type="password"
            id="confirmPassword"
            v-model="confirmPassword"
            class="form-control"
            required
          />
        </div>
        <div class="text-center">
          <button
            type="submit"
            class="btn btn-primary w-200"
          >
            Registrarse
          </button>
        </div>
      </form>
      <p class="mt-3 text-center">
        ¿Ya tienes una cuenta? <a href="#" class="text-primary" @click="goToLogin">Inicia sesión aquí</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  },
  methods: {
    register() {
      // Aquí iría la lógica para registrar al usuario (por ejemplo, hacer una solicitud a tu backend)
      console.log('Registrando usuario:', this.name, this.email);
    },
    goToLogin() {
      // Redirigir a la página de inicio de sesión
      this.$router.push({ name: 'login' });
    }
  }
};
</script>

<style scoped>
/* Estilos adicionales personalizados (si es necesario) */
</style>
