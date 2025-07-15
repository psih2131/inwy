<template>
  <div class="app-container">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>


      <div id="custom-cursor"></div>
      
  </div>
</template>


<script setup>
// import { useCounterStore } from '@/stores/counter'
import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';

// onMounted(() => {
//   const cursor = document.getElementById('custom-cursor')

//   const move = (e) => {
//     cursor.style.top = `${e.clientY}px`
//     cursor.style.left = `${e.clientX}px`
//   }

//   window.addEventListener('mousemove', move)

//   onBeforeUnmount(() => {
//     window.removeEventListener('mousemove', move)
//   })
// })

</script>