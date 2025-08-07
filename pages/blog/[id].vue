<template>

    <main class="main">
     
        <section class="post-sec">
            <div class="post-sec__container">
                <h1 class="post-sec__title" v-html="object_data_single[0].title.rendered"></h1>
                <p class="post-sec__subtitle" v-html="object_data_single[0].acf.podzagolovok"></p>

                <div class="post-sec__teg-wrapper">
                    <template v-if="object_data_single[0]['blog-category'] && all_categories && all_categories.length > 0">
                        <NuxtLink v-for="item in object_data_single[0]['blog-category']" :key="item"  class="blog-post__teg" :to="`/blog/categories/${currentCatSlug(item)}`">{{ curentCatTitle(item) }}</NuxtLink>
                    </template>
                </div>

                <div class="post-sec__time-row">
                    <div class="post-sec__time-element">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 2C9.55228 2 10 2.44772 10 3V4H14V3C14 2.44772 14.4477 2 15 2C15.5523 2 16 2.44772 16 3V4H19C20.1046 4 21 4.89543 21 6V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V6C3 4.89543 3.89543 4 5 4H8V3C8 2.44772 8.44772 2 9 2ZM8 6H5V9H19V6H16V7C16 7.55228 15.5523 8 15 8C14.4477 8 14 7.55228 14 7V6H10V7C10 7.55228 9.55228 8 9 8C8.44772 8 8 7.55228 8 7V6ZM19 11H5V19H19V11Z" fill="#878787"/>
                        </svg>
                        {{ formatDate(object_data_single[0].date) }}
                    </div>

                    <div class="post-sec__time-element">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12ZM12 6C12.5523 6 13 6.44772 13 7V11.5858L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L11.2929 12.7071C11.1054 12.5196 11 12.2652 11 12V7C11 6.44772 11.4477 6 12 6Z" fill="#878787"/>
                        </svg>

                        Читать {{ object_data_single[0].acf.vremya_chteniya }} мин
                    </div>
                </div>

      
                <img :src="object_data_single[0].acf.osnovnoe_izobrazhenie.url" :alt="object_data_single[0].acf.osnovnoe_izobrazhenie.alt" class="post-sec__img">
                
                <div class="post-sec__sticky-wrapper">

                    <div class="post-sec__wp-editor-post ">

                        <div class="wp-editor-post" v-html="object_data_single[0].acf.soderzhanie"></div>

                        <div class="post-sec__teg-down">

                            <div class="post-sec__teg-wrapper">
                                <template v-if="object_data_single[0]['blog-category'] && all_categories && all_categories.length > 0">
                                    <NuxtLink v-for="item in object_data_single[0]['blog-category']" :key="item"  class="blog-post__teg" :to="`/blog/categories/${currentCatSlug(item)}`">{{ curentCatTitle(item) }}</NuxtLink>
                                </template>
                            </div>
                        </div>
                        
                    </div>

                    <aside class="post-sec__aside">
                        <div class="post-sec__recomend-posts">
                            <p class="post-sec__recomend-posts-title">Вам может быть интересно</p>

                            <NuxtLink v-for="(item, index) in recomendPostsList" :key="index" :to="`/blog/${item.slug}`" class="post-sec__recomend-posts-element recomend-posts-element">
                                <img :src="item.acf.maloe_fonovoe_izobrazhenie_dlya_kartochki_tovara.url" 
                                :alt="item.acf.maloe_fonovoe_izobrazhenie_dlya_kartochki_tovara.alt" 
                                class="recomend-posts-element__img">
                                <div class="recomend-posts-element__data">
                                    <!-- <div class="recomend-posts-element__tegs-wrapper">
                                        <p class="recomend-posts-element__teg">Кейсы</p>
                                    </div> -->
                                    <p class="recomend-posts-element__title" v-html="item.title.rendered"></p>
                                </div>
                            </NuxtLink>


                        </div>
                    </aside>

                </div>


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

const recomendPostsList = ref([])

// основной пост
const { data: object_data_single } = await useFetch(
  `${store.serverUrlDomainRequest}/wp-json/wp/v2/my-blog?slug=${route.params.id}`,
  { key: `post-${route.params.id}` }
)

// категории
const { data: all_categories } = await useFetch(
  `${store.serverUrlDomainRequest}/wp-json/wp/v2/blog-category`
)

// получаем рекомендованные посты
try {
  const mainPost = object_data_single.value?.[0]
  const chitatTakzhe = mainPost?.acf?.rekomenduemye_posty

  if (Array.isArray(chitatTakzhe) && chitatTakzhe.length) {
    const slugs = chitatTakzhe.map(obj => obj.post_name)

    const promises = slugs.map(slug =>
      fetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/my-blog?slug=${slug}`)
        .then(res => res.json())
        .then(data => data?.[0] || null)
    )

    recomendPostsList.value = await Promise.all(promises)
  }
} catch (error) {
  console.error('Ошибка при загрузке рекомендованных постов:', error)
}

console.log('recomendPostsList.value', recomendPostsList)
console.log('object_data_single', object_data_single)
console.log('all_categories', all_categories)

//METHODS 

//date convertor
function formatDateToRussian(dateString) {
    const date = new Date(dateString);
    
    return date.toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
}


//get current cat title
function curentCatTitle(itemID){
    let element = all_categories.value.find(u => u.id === +itemID)

    return element.name
}

//get current cat slug
function currentCatSlug(itemID){
    let element = all_categories.value.find(u => u.id === +itemID)

    return element.slug
}


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
  // Добавляем обработчик события scroll

  
});

onBeforeUnmount(() => {

});



 // props
 const props = defineProps({
//   mainData: Object,
      // postAllCategory: Object,
  })




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
        { rel: 'canonical', href: `${store.domainUrlCurrent}/blog/${object_data_single.value[0].acf.canonical || route.params.id}` }
    ]
})
</script>

