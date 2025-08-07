<template>

    <main class="main">
     
        <section class="system-page-sec">
            <div class="system-page-sec__container">
                <h1 class="system-page-sec__title" v-html="object_data_single[0].title.rendered"></h1>
                <div class="system-page-sec__editor wp-editor" v-html="object_data_single[0].acf.redaktor_teksta"></div>
            </div>
        </section>

    </main>
    
</template>

<script setup>

//IMPORT

import { useCounterStore } from '@/stores/counter'

import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';

// import newsCard from '@/components/component__news-card.vue'





//DATA
const route = useRoute()

const store = useCounterStore()


// основной пост
const { data: object_data_single } = await useFetch(
  `${store.serverUrlDomainRequest}/wp-json/wp/v2/simple-pages?slug=${route.params.id}`,
  { key: `post-${route.params.id}` }
)
console.log('object_data_single',object_data_single)




//METHODS 








//HOOKS
onMounted(() => {

   
});

onBeforeUnmount(() => {

});




//SEO
useHead({
    title: object_data_single.value[0].acf.seo_title || object_data_single.value[0].title.rendered,
    meta: [
        // Description
        { name: 'description', content: object_data_single.value[0].acf.seo_description || 'Описание по умолчанию' },

        // Keywords (опционально, не влияет сильно на SEO)
        { name: 'keywords',  content: object_data_single.value[0].acf.klyuchevaya_fraza || 'test' },

        // OpenGraph
        { property: 'og:title', content: object_data_single.value[0].acf.seo_title },
        { property: 'og:description', content: object_data_single.value[0].acf.seo_description },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: `${store.domainUrlCurrent}${route.fullPath}` },
        { property: 'og:image', content: object_data_single.value?.[0]?.acf?.og_image?.url || 'http://syberia.gearsdpz.beget.tech/wp-content/uploads/2025/07/87baa9efe5d849e4f8da67fe01f9e029.jpg' },

        // Twitter Card (если используешь)
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: object_data_single.value[0].acf.seo_title },
        { name: 'twitter:description', content: object_data_single.value[0].acf.seo_description },
        { name: 'twitter:image', content: object_data_single.value?.[0]?.acf?.og_image?.url || 'http://syberia.gearsdpz.beget.tech/wp-content/uploads/2025/07/87baa9efe5d849e4f8da67fe01f9e029.jpg' },

        // Индексация / Деиндексация
        // Например, noindex для черновика:
        {
        name: 'robots',
        content:
            object_data_single.value[0].acf.indeksacziya_v_poiskovyh_sistemah === 'index'
            ? 'index, follow'
            : 'noindex, nofollow'
        }
    ],
    link: [
        // Canonical (вручную или динамически)
        { rel: 'canonical', href: `${store.domainUrlCurrent}/docs/${object_data_single.value[0].acf.canonical || route.params.id}` }
    ]
})
  
</script>

