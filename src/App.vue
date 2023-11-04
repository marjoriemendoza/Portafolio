<script setup lang="ts">
import {FontAwesomeIcon} from "./plugins/fontawesome"</script>

<template>
<div class="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
        <div class="p-14 bg-white bg-opacity-80 rounded-lg">
            <img src="https://img.freepik.com/vector-gratis/lindo-perro-sacando-lengua-ilustracion-icono-dibujos-animados_138676-2709.jpg" alt="Tu Imagen" class="w-32 h-32 mx-auto rounded-full">
            <h1 class="text-2xl text-center text-gray-800 mt-4">Marjorie</h1>
            <p class="text-center text-gray-600">Bienvenidos a mi portafolio.</p>
            <p class="text-center text-gray-800" ><font-awesome-icon :icon="['fas', 'graduation-cap']" /> Formacion academica.</p>
            <p class="text-center text-gray-800" ><font-awesome-icon :icon="['fas', 'phone']" /> Telefono</p>

            
        </div>
    </div>
  
</template>

