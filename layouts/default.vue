<template>
    <div class="app-wrapper">
        <component__header  :trigerCloseSubMeny="triggerCloseSubMeny" :optionData="optionsData"/>
        
        <div class="page-main-wrapper" @click="closeHeaderSub">
          <slot></slot>
        </div>
        
    
        <component__footer @click="closeHeaderSub" :optionData="optionsData"/>

        <popupsPlagin v-if="store.popupCurrent != null" :optionData="optionsData"/>
    </div>
</template>


  


<script setup>

import { useCounterStore } from '@/stores/counter'

import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';

import component__header from '@/components/header.vue'

import component__footer from '@/components/footer.vue'

import popupsPlagin from '@/components/popups/popups-parent.vue'

//DATA
const currentSearchType = ref('personPhone')

const store = useCounterStore()

const triggerCloseSubMeny = ref(false)

const { data: optionsData } = await useFetch(`${store.serverUrlDomainRequest}/wp-json/acf/v3/options`)

console.log('optionsData',optionsData)



//METHODS 
function closeHeaderSub(){
  console.log('close header')
  triggerCloseSubMeny.value = !triggerCloseSubMeny.value
}





//HOOKS
watch(() => store.popupCurrent,  // отслеживаемое значение
  (newVal, oldVal) => {
    console.log('Значение изменилось:', oldVal, '→', newVal)
  }
)


onMounted(() => {
  // Добавляем обработчик события scroll

  
});

onBeforeUnmount(() => {

});






 // props
 const props = defineProps({
//   mainData: Object,
      // postAllCategory: Object,
  })
</script>