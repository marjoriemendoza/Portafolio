<template>
  <Navbar></Navbar>
  <div id="proyectos" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <!-- Mostrar los primeros 3 proyectos -->
    <div v-for="(project, index) in visibleProjects" :key="index" class="flex flex-col h-full">
      <RoadTrip
        :title="project.title"
        :image="project.image"
        :description="project.description"
      />
    </div>

    <!-- Botón "Ver más" -->
    <div v-if="projects.length > 3" class="col-span-full justify-center px-6 pb-6">
      <button
        @click="toggleShowAll"
        class="flex items-center justify-center bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
      >
        <!-- Icono y texto dinámicos -->
        <font-awesome-icon :icon="showAll ? ['fas', 'chevron-up'] : ['fas', 'chevron-down']" class="mr-2" />
        {{ showAll ? 'Ver menos' : 'Ver más' }}
      </button>
    </div>

  </div>
</template>

<script lang="ts" setup>
import RoadTrip from "../Cartas.vue";
import Navbar from "../Navbar.vue";
import { ref , computed} from "vue";
import { FontAwesomeIcon } from "../../plugins/fontawesome.ts";


// Datos de los proyectos
const projects = ref([
  {
    title: "El Sótano",
    image: "sotano.jpg",
    description: "Página web dirigida al público en general, diseñada para proporcionar información sobre la empresa, datos de contacto y un catálogo de productos disponibles tanto para mayoristas como para minoristas."
  },
  {
    title: "Clinica de Diagnostico Veterinario",
    image: "veterinaria.png",
    description: "Sistema para la gestión integral de la veterinaria, con control de pacientes, propietarios, citas, ventas, etc. Cuenta con inicio de sesión para garantizar la seguridad de la información."
  },
  {
    title: "Libreria Gamaliel",
    image: "libreria.jpg",
    description: "Sistema integral para ventas e inventario con login seguro, gestión de cajas y herramientas para optimizar la administración."
  },
  {
    title: "Si-ham Occidente",
    image: "si-ham.png",
    description: "Sistema integral para la gestión de productos, control de ventas, inventarios y reportes. Permite llevar un registro detallado de clientes y proveedores, optimizando la administración del negocio."
  },
  // Puedes agregar más proyectos aquí
]);

// Variable para manejar la visibilidad de los proyectos
const showAll = ref(false);

// Computada para obtener solo los primeros 3 proyectos
const visibleProjects = computed(() => {
  return showAll.value ? projects.value : projects.value.slice(0, 3);
});

// Función para alternar la visibilidad de los proyectos adicionales
function toggleShowAll() {
  showAll.value = !showAll.value;
}
</script>

<style scoped>
/* Puedes agregar estilos adicionales aquí si lo necesitas */
</style>
