<template>
    <div class="popups-wrapper" @click.self="closeAllForms">

        <popupForm v-if="store.popupCurrent == 'popup-form'" :formData="optionData" />

        <popupFormDone v-if="store.popupCurrent == 'popup-form-done'" :formData="optionData"/> 
<!-- 
        <popupSerteficat v-if="store.popupCurrent == 'popup-serteficat'" />  -->
   
        
    </div>
</template>


<script setup>
import { useCounterStore } from '@/stores/counter'

import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';

import popupForm from '@/components/popups/popup__form.vue'

import popupFormDone from '@/components/popups/popup-form-done.vue'

// import popupSerteficat from '@/components/popups/popup__serteficat.vue'



//DATA
const store = useCounterStore()


//METHODS 
function closeAllForms(){
  store.changePopupCurrent(null)
}


//HOOKS
onMounted(() => {
  // Добавляем обработчик события scroll

  
});

onBeforeUnmount(() => {

});

 const props = defineProps({
   optionData: Object,
      // postAllCategory: Object,
  })

  

</script>