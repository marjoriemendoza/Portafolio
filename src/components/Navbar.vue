<template>
    <div>
      <!-- Navbar para pantallas grandes -->
      <nav class="bg-gradient-to-r from-blue-500 to-purple-500 p-4 text-white hidden md:flex items-center w-screen">
        <!-- Lista de enlaces -->
        <ul class="flex space-x-4 font-bold text-xl">
          <div class="group">
           <li class="text-gradient"><router-link to="/">Inicio</router-link></li> 
          </div>
          <div class="group">
          <li class="text-gradient"><router-link to="/proyectos">Proyectos</router-link></li>
           </div>
        </ul>
  
        <!-- Imagen en el navbar -->
        <img src="../imagenes/palete-dos.png" alt="Tu Imagen" class="w-12 h-12 rounded-full ml-auto">
      </nav>
  
      <!-- Navbar para pantallas pequeñas -->
      <nav class="bg-gradient-to-r from-blue-500 to-purple-500 text-white md:hidden flex items-center justify-between p-4">
        <!-- Ícono de menú para desplegar en pantallas pequeñas -->
        <button @click="toggleMobileMenu" class="focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
  
        <!-- Imagen en el navbar (opcional, puedes ajustar según tus necesidades) -->
        <img src="../imagenes/palete.png" alt="Tu Imagen" class="w-12 h-12 rounded-full">
      </nav>
  
      <!-- Lista de enlaces en menú desplegable -->
      <div v-if="isMobileMenuOpen" class="md:hidden bg-gradient-to-r from-blue-500 to-purple-500 text-white p-2 mb-4 font-bold text-xl">
        <div class="p-4">
          <div class="group">
           <router-link to="/">
        <span class="text-gradient">Inicio</span></router-link> 
          </div>
          </div>
      <div class="p-4">
        <div class="group">
          <router-link to="/proyectos">
        <span class="text-gradient">Proyectos</span></router-link>
        </div>
        
       </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  
  const isMobileMenuOpen = ref(false);
  
  const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
  };
  </script>
  <style scoped>
  .group:hover .text-gradient {
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    background-image: linear-gradient(to right, #4b0082, #B2CEEA);
  }
</style>

  