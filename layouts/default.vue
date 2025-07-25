<template>
    <div class="app-wrapper">
        <component__header />
        
        <slot />
    
        <component__footer />

        <popupsPlagin v-if="store.popupCurrent != null" />
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



//METHODS 





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