<template>
    <div class="blog-sec__post post-element">
        <NuxtLink :to="`/blog/${postData.slug}`"  class="post-element__img-wrapper">
            <img :src="postData.acf.maloe_fonovoe_izobrazhenie_dlya_kartochki_tovara.url" :alt="postData.acf.maloe_fonovoe_izobrazhenie_dlya_kartochki_tovara.alt" class="post-element__img">
        </NuxtLink>
        <p class="post-element__title">
            <NuxtLink :to="`/blog/${postData.slug}`" >{{ postData.title.rendered }}</NuxtLink>
        </p>
        <p class="post-element__date">{{ formatDate(postData.date) }}</p>
    </div>
</template>


<script setup>

import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';


//DATA


//METHODS 
function formatDate(dateString) {
const date = new Date(dateString);

return date.toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
});
}


//HOOKS
onMounted(() => {

});

onBeforeUnmount(() => {

});


// props
const props = defineProps({
postData: Object,

})

</script>