<template>
  <div class="app-container">
      <NuxtLayout>
        <NuxtPage />

        <HeadScripts :html="scriptsBlock" />

        <BodyScripts :html="bodyScripts" />

      </NuxtLayout>

      <cursor />
      
  </div>
</template>


<script setup>

// IMPORT

import { useCounterStore } from '@/stores/counter'

import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';

import HeadScripts from '@/components/HeadRaw.vue'

import BodyScripts from '@/components/BodyScripts.vue'

import cursor from '@/components/cursor.vue'


// DATA

const store = useCounterStore()

const { data: optionsData } = await useFetch(`${store.serverUrlDomainRequest}/wp-json/acf/v3/options`)

console.log('optionsData',optionsData)

const scriptsBlock = optionsData.value?.blok_metrik_pered_zakryvayushhim_tegom_head || ''

const bodyScripts = optionsData.value?.blok_metrik_pered_zakryvayushhim_tegom_body || ''


useHead({
  script: [
    {
      children: `(function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)}
        m[i].l=1*new Date()
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
      })(window, document,'script','https://mc.yandex.ru/metrika/tag.js', 'ym');

      ym(103111113, 'init', {webvisor:true, clickmap:true, accurateTrackBounce:true, trackLinks:true});`
    }
  ],
  noscript: [
    {
      children: '<div><img src="https://mc.yandex.ru/watch/103111113" style="position:absolute; left:-9999px;" alt="" /></div>'
    }
  ]
})


</script>