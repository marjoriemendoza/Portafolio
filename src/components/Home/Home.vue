<template>
  <div>
    <Navbar></Navbar>
    <div class=" flex items-center justify-center">
      <div class="p-14 lg:grid grid-cols-2 gap-6 ml-16 mx-12 ">
        
        <!-- Imagen redonda a la izquierda -->
        <div class="col-span-1 flex items-center relative">
          <img src="../../imagenes/manchas.png" alt="Tu Imagen" class="rounded-xl w-full sm:w-auto"/>
        </div>

        <!-- Contenido a la derecha de la imagen -->
        <div class="col-span-1 gap-4 mt-32 ">
          <p class="text text-justify-center font-bold text-3xl text-black ">
            Hola, soy Marjorie Mendoza
          </p>
          <p class="text-justify text-lg text-black mt-4 lg:mr-20 sm:mr-0">
            Soy una desarrolladora de software con una sólida formación académica y habilidades prácticas en programación, aprendizaje rápido y trabajo en equipo. Me destaco por cumplir con las tareas asignadas de manera eficiente, aportando ideas y sugerencias cuando identifico oportunidades de mejora, siempre dispuesta a aprender de las soluciones propuestas. Mi objetivo es contribuir al desarrollo de productos y servicios que impulsen el crecimiento de la empresa y mejoren la experiencia del usuario.
          </p>
        </div>

        <!-- Contenido debajo de la imagen -->
        <div class="col-span-2 flex flex-col items-center gap-4 mt-12">
          <div>
            <p class="text-left text-2xl text-black font-semibold mb-16 mt-12">
              <font-awesome-icon :icon="['fas', 'graduation-cap']" /> habilidades tecnológicas
            </p>
            <img src="../../imagenes/logos.png" alt="Tu Imagen" class="mx-auto">
          </div>
          <p class="text-left text-2xl text-black font-semibold mb-9 mt-12">Contactos</p>
          <div class="text-gray-800 flex">   
            <a href="https://wa.me/70060543" target="_blank">
              <font-awesome-icon :icon="['fab', 'whatsapp']" class="text-6xl text-indigo-400 mt-4 ml-10 hover:text-indigo-700"/>
            </a>
            <a href="mailto:alexandramoran9704@gmail.com" target="_blank" class="ml-4 mt-4">
              <font-awesome-icon :icon="['far', 'envelope']" class="text-6xl text-indigo-400 ml-10 hover:text-indigo-700"/>
            </a>
            <a href="https://www.linkedin.com/in/marjorie-alexandra-mendoza-mor%C3%A1n-800a09295" target="_blank" class="ml-4 mt-4">
              <font-awesome-icon :icon="['fab', 'linkedin']" class="text-6xl text-indigo-400 ml-10 hover:text-indigo-700"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { FontAwesomeIcon } from "../../plugins/fontawesome.ts";
import Navbar from "../Navbar.vue";
</script>
