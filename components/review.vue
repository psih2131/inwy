<template>
    <div class="geomarketing-revard-sec__reviews-element">
        <div class="geomarketing-revard-sec__reviews-element-text-wrapper" ref="textWrapper" :class="{'full-text-review': openFulltext == true}">
            <div class="geomarketing-revard-sec__reviews-element-text-hiddent" ref="textWrapperHidden">
                <p class="geomarketing-revard-sec__reviews-element-text"  ref="textElement" v-html="commentData.text">
            </p>

            <div class="geomarketing-revard-sec__reviews-element-btn-row" v-if="buttonStatus == true" >
                <button class="geomarketing-revard-sec__reviews-element-btn" @click="openFulltext = !openFulltext, chengeTextHeight()">
                    Читать подробнее
                </button>
            </div>
            </div>
        </div>

        <div class="geomarketing-revard-sec__reviews-element-client">
            <img src="@/assets/images/geo/girl.jpg" alt="" class="geomarketing-revard-sec__reviews-element-client-img">
            <div class="geomarketing-revard-sec__reviews-element-client-data">
            <p class="geomarketing-revard-sec__reviews-element-client-name">Анна</p>
            <p class="geomarketing-revard-sec__reviews-element-client-description">Основательница  сети барбершопов Newman</p>
            </div>
        </div>
        
        </div>
</template>


<script setup>

import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';


//DATA
const textWrapper = ref(null)

const textWrapperHidden = ref(null)

const textElement = ref(null)

const buttonStatus = ref(false)

const openFulltext = ref(false)

const heightFullText = ref(null)


//METHODS 

function currentHeight(){
    heightFullText.value = textElement.value.offsetHeight

    if(heightFullText.value > 90){
        buttonStatus.value = true
    }
    else{
        buttonStatus.value = false
    }

    console.log('heightFullText',heightFullText.value)
}


function chengeTextHeight(){
    if(openFulltext.value == true){
        textWrapper.value.style.maxHeight = `${+heightFullText.value + 50}px`
        textWrapperHidden.value.style.maxHeight = `${+heightFullText.value}px`
    }
    else{
        textWrapper.value.style.maxHeight = '140px'
        textWrapperHidden.value.style.maxHeight = '90px'
    }

    console.log('heightFullText.value',heightFullText.value)
    
}
 

//HOOKS
onMounted(() => {
  // Добавляем обработчик события scroll
  currentHeight()
});


onBeforeUnmount(() => {

});


 // props
 const props = defineProps({
  commentData: Object,
      // postAllCategory: Object,
  })
</script>