<template>
  <Navbar></Navbar>
  <div id="proyectos" class="grid grid-cols-1">
    <div >
    <RoadTrip
      title="Sistema de Control de Vivero "
      image="vivero.png"
      description="Es una solución integral diseñada para gestionar eficientemente todas las operaciones. Destacando en el control preciso de productos, se integra de manera fluida entre el inventario y la facturación automatizada. Su enfoque específico simplifica la administración, ofreciendo una herramienta completa para mejorar la eficiencia y el éxito."
    />
    </div>
    <div >
    <RoadTrip
      title="Pagina web El Sotano"
      image="sotano.jpg"
      description="Es una página web para el público general que brinda detalles esenciales de la empresa, como sus sucursales,ubicación y contactos. Los visitantes encuentran datos sobre las colecciones y productos disponibles, así como una visión general de la historia y valores de El Sotano. La plataforma busca convertirse en un recurso esencial para clientes y seguidores."
    />
    </div>
    <div>
     <RoadTrip
      title="Sistema para una Libreria"
      image="libreria.png"
      description="Es una herramienta integral que facilita la realización de ventas, gestiona un inventario eficiente y garantiza la seguridad a través de un sistema de login. Este sistema también ofrece la funcionalidad de apertura y cierre de cajas, asegurándose de que exista una caja disponible antes de cada venta. Diseñado para mejorar la eficiencia operativa, el sistema proporciona una experiencia segura y completa para la administración."
    />
  </div>
   
  </div>
</template>

<script lang="ts" setup>
import RoadTrip from "../Cartas.vue";
import Navbar from "../Navbar.vue";

</script>

<style>
/* Agrega estilos globales aquí */
</style>

<!-- <template>
  <div class="flex flex-row justify-between gap-4 mt-4">
    <div class="flex w-auto">
      <label class="mt-3 text-lg font-bold border-collapse border-cyan-400">Total </label>
      <input
        type="number"
        class="p-3 mt-1 mx-2 border outline-none rounded-2xl"
        v-model="totalToPay"
      />
    </div>
  </div>
  <div class="flex flex-row justify-between gap-4 mt-4">
    <div class="flex w-auto">
      <label class="mt-3 text-lg font-bold border-collapse border-cyan-400">Total en letras: </label>
      <input
        type="text"
        readonly
        class="p-3 mt-1 mx-2 outline-none rounded-2xl w-screen"
        :value="ToPayLetters"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { convertCurrencyFormat, truncateNumberToFourDecimals } from "../../plugins/money";

const totalToPay = ref();
const ToPayLetters = ref("");

const updateToPayLetters = () => {
  ToPayLetters.value = convertCurrencyFormat(
    truncateNumberToFourDecimals(Number(totalToPay.value))
  );
};

watch(totalToPay, updateToPayLetters);
</script> -->
