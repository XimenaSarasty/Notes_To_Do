<template>
    <Navbar :usuario="nombreUsuario" />
    <div class="container mt-4 mb-2 text-white">
      <h1 class="text-center">Notas</h1>
  
      <div class="mb-3 text-center">
        <button class="btn btn-success" @click="goToCreateNota">
          Crear Nota
        </button>
      </div>
  
      <div class="mb-3">
        <label for="sortBy" class="form-label">Ordenar por:</label>
        <select id="sortBy" class="form-select" v-model="sortKey" @change="sortNotes">
          <option value="fecha_crea">Fecha de Creación</option>
          <option value="fecha_vencimiento">Fecha de Vencimiento</option>
        </select>
      </div>
  
      <div class="row">
        <div class="col-md-4" v-for="nota in sortedNotas" :key="nota.id_nota">
          <div class="card mb-4">
            <div class="card-body">
              <h5 class="card-title">{{ nota.titulo }}</h5>
              <p class="card-text">{{ nota.descripcion }}</p>
              <p class="card-text"><small class="text-muted">Creada el: {{ nota.fecha_crea }}</small></p>
              <p class="card-text"><small class="text-muted">Usuario: {{ nota.usuario }}</small></p>
              <p class="card-text"><small class="text-muted">Categoría: {{ nota.categoria }}</small></p>
              <div class="text-end">
                <button class="btn btn-warning" @click="editNota(nota.id_nota)">
                  <i class="fas fa-pencil-alt"></i> Editar
                </button>
                <button class="btn btn-danger" @click="deleteNota(nota.id_nota)">
                  <i class="fas fa-trash-alt"></i> Eliminar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
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
        notas: [],
        sortKey: 'fecha_crea',
        nombreUsuario: 'Usuario Ejemplo' 
      };
    },
    computed: {
      sortedNotas() {
        return this.notas.sort((a, b) => {
          if (this.sortKey === 'fecha_crea') {
            return new Date(a.fecha_crea) - new Date(b.fecha_crea);
          }
          return new Date(a.fecha_vencimiento) - new Date(b.fecha_vencimiento);
        });
      }
    },
    methods: {
      fetchNotas() {
        // Simular una llamada a la API para obtener las notas
        // Reemplaza esta parte con la llamada real a tu API
        this.notas = [
          {
            id_nota: 1,
            titulo: 'Nota 1',
            descripcion: 'Descripción de la nota 1',
            fecha_crea: '2024-10-01',
            fecha_vencimiento: '2024-10-10',
            usuario: 'Usuario 1',
            categoria: 'Trabajo'
          },
          {
            id_nota: 2,
            titulo: 'Nota 2',
            descripcion: 'Descripción de la nota 2',
            fecha_crea: '2024-09-30',
            fecha_vencimiento: '2024-10-15',
            usuario: 'Usuario 2',
            categoria: 'Personal'
          },
          // Agrega más notas según sea necesario
        ];
      },
      sortNotes() {
        this.sortedNotas; // Esto actualizará automáticamente la lista ordenada
      },
      goToCreateNota() {
        // Redirigir a la página de crear nota
        this.$router.push({ name: 'crearNota' }); // Asegúrate de tener esta ruta configurada
      },
      editNota(id) {
        // Aquí iría la lógica para editar la nota
        console.log('Editando nota con ID:', id);
        // Redirigir a la página de editar nota
        this.$router.push({ name: 'editarNota', params: { id } }); // Asegúrate de tener esta ruta configurada
      },
      deleteNota(id) {
        // Aquí iría la lógica para eliminar la nota
        console.log('Eliminando nota con ID:', id);
        // Realizar la llamada al backend para eliminar la nota
        // Después de eliminar, puedes volver a obtener las notas
      }
    },
    mounted() {
      this.fetchNotas(); // Llamada para obtener las notas al cargar el componente
    }
  };
  </script>
  
  <style scoped>
  /* Estilos adicionales para el componente Notas */
  </style>
  