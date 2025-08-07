<template>
  <div class="app-container">
      <NuxtLayout>
        <NuxtPage />

        <HeadScripts :html="scriptsBlock" />

        <BodyScripts :html="bodyScripts" />

      </NuxtLayout>


      <div id="custom-cursor"></div>
      
  </div>
</template>


<script setup>
// import { useCounterStore } from '@/stores/counter'
import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';

import { useCounterStore } from '@/stores/counter'

import HeadScripts from '@/components/HeadRaw.vue'

import BodyScripts from '@/components/BodyScripts.vue'

const store = useCounterStore()

const { data: optionsData } = await useFetch(`${store.serverUrlDomainRequest}/wp-json/acf/v3/options`)

console.log('optionsData',optionsData)

const scriptsBlock = optionsData.value?.blok_metrik_pered_zakryvayushhim_tegom_head || ''

const bodyScripts = optionsData.value?.blok_metrik_pered_zakryvayushhim_tegom_body || ''


onMounted(() => {
  const cursor = document.getElementById('custom-cursor')

  const move = (e) => {
    cursor.style.top = `${e.clientY}px`
    cursor.style.left = `${e.clientX}px`
  }

  window.addEventListener('mousemove', move)

  onBeforeUnmount(() => {
    window.removeEventListener('mousemove', move)
  })
})











</script>