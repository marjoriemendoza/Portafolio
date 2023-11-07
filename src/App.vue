<script setup lang="ts">
import {FontAwesomeIcon} from "./plugins/fontawesome"
</script>

<template>
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
    <div class="p-14  bg-white bg-opacity-80 rounded-lg grid grid-cols-2 ml-16 mx-12 max-w-gd">
        <div class="col-span-1 gap-4">
            <img src="./imagenes/yo.jpg" alt="Tu Imagen" class="w-32 h-32 mx-auto rounded-full ml-20">
            <p  class=" text-center text-gray-800 mt-4 mr-20">Marjorie Alexandra Mendoza Morán</p>
            <p class="p-2 text-justify text-sm">
                    Soy un estudiante de desarrollo de software apasionado por adquirir nuevas experiencias y conocimientos. Puedo aportar a la empresa habilidades para resolver problemas, trabajar en equipo, aprender de manera rápida y utilizar tecnologías de programación para desarrollar soluciones innovadoras y eficientes. Mi objetivo es ayudar a mejorar los productos y servicios de la empresa.
            </p>
        </div>
       <div class="col-span-1 gap-6">
            <p class="text-left text-gray-800" ><font-awesome-icon :icon="['fas', 'graduation-cap']" /> habilidades tecnológicas.</p>
            <img src="./imagenes/logos.png" alt="Tu Imagen" class=" mx-auto ml-1">
            <p class="text-left text-gray-800" >Contactos</p>
            <p class="text-left text-gray-100" >.   </p>
          <div class="text-gray-800 flex">   
            <a href="https://wa.me/70060543" target="_blank">
                <font-awesome-icon :icon="['fab', 'whatsapp']" class="text-2xl text-blue-400"/>
             </a>
             <a href="mailto:alexandramoran9704@gmail.com" target="_blank" class="ml-4">
                 <font-awesome-icon :icon="['far', 'envelope']" class="text-2xl text-blue-400"/>
             </a>
             <a href="https://www.linkedin.com/in/marjorie-alexandra-mendoza-mor%C3%A1n-800a09295" target="_blank" class="ml-4">
                <font-awesome-icon :icon="['fab', 'linkedin']" class="text-2xl text-blue-400"/>
             </a>
             
        </div>
        <div >
            <p class="text-left text-gray-100" >.   </p>
            <button class="p-2 text-gray-100 bg-gray-800 rounded" @click="">Proyectos</button>
        </div>
        </div>
    </div>
</div>

  
</template>

