<template>

    <main class="main">
     
        <section class="blog-sec">
            <div class="blog-sec__wrapper">
                <h1 class="blog-sec__title" v-if="current_category[0]?.name ">{{ current_category[0].name }}</h1>
                <nav class="blog-sec__nav">
                    <ul class="blog-sec__nav-list">
                        <li class="blog-sec__nav-list-element">
                            <NuxtLink to="/blog" class="blog-sec__nav-link">Все</NuxtLink>
                        </li>
                        <li v-for="item in all_categories" :key="item" class="blog-sec__nav-list-element">
                            <NuxtLink :to="`/blog/category/${item.slug}`" :activeClass="'blog-sec__nav-link--activ'" class="blog-sec__nav-link">{{item.name}}</NuxtLink>
                        </li>
                    </ul>
                </nav>

                <div class="blog-sec__post-container">

                    <template v-if="all_object?.length && all_categories">

                        <blogPost v-for="(item, index) in all_object" :key="index" :postData="item" />

                    </template>
                    
                </div>


                <div class="blog-sec__body-pagination-row" v-if="all_object && all_categories && all_object.length > 0">

                    <div class="pagination">

                        <a  class="pagination__btn pagination__btn-prev" @click="prevPage()" v-if="currentPage > 1">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.8332 10H4.1665M4.1665 10L9.99984 15.8333M4.1665 10L9.99984 4.16667" stroke="#1B3762" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </a>

                        <ul class="pagination__num-list">
                            <li class="pagination__nam-li " v-for="(item, index) in totalPages" :key="index" :class="{'pagination__nam-li--activ' : item == currentPage }">
                            
                                <NuxtLink :to="`/blog/?page=${item}`" >
                                    {{ item }}
                                </NuxtLink>

                            </li>
                        </ul>

                        <a  class="pagination__btn pagination__btn-next" @click="nextPage()" v-if="currentPage < totalPages">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.1665 10H15.8332M15.8332 10L9.99984 4.16666M15.8332 10L9.99984 15.8333" stroke="#1B3762" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                        </a>
                    </div>

                </div>
                
            </div>
        </section>

    </main>
    
</template>

<script setup>

//IMPORT

import { useCounterStore } from '@/stores/counter'

import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';

import blogPost from '@/components/blog-post.vue';


//DATA

const store = useCounterStore()

const route = useRoute()

const router = useRouter()

const currentPage = ref(route.query.page || 1)

const perPage = ref(6)

const totalPages = ref(null)

const { data: current_category } = await useFetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/blog-category?slug=${route.params.id}`)


const { data: all_object, error, pending } = await useFetch(
    `${store.serverUrlDomainRequest}/wp-json/wp/v2/my-blog?blog-category=${current_category.value[0].id}&page=${currentPage.value || 1}&per_page=${perPage.value}`, {
    onResponse({ response }) {
      const total = response.headers.get('X-WP-Total')
      const pages = response.headers.get('X-WP-TotalPages')
      
      if (pages) totalPages.value = Number(pages)
      
      console.log('X-WP-Total', total)
      console.log('X-WP-TotalPages', pages)
    },
})

const { data: all_categories } = await useFetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/blog-category`)

console.log('current_category', current_category)

console.log('all_object',all_object)

console.log('all_categories', all_categories)






//METHODS 

//get posts on client side
async function fetchClientData() {
  const res = await fetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/my-blog?blog-category=${current_category.value[0].id}&page=${currentPage.value || 1}&per_page=${perPage.value}`)
  const data = await res.json()
  all_object.value = data

  const pages = res.headers.get('X-WP-TotalPages')
  if (pages) totalPages.value = Number(pages)
}


//next pagin page
function nextPage(){
    if(currentPage.value >= totalPages.value){

    }
    else{
        router.push({
            path: `/blog/categories/${route.params.id}/`,
            query: { page: +currentPage.value + 1 }
        })
    }
}

function prevPage(){
    if(currentPage.value <= 1){

    }
    else{
        router.push({
            path: `/blog/categories/${route.params.id}/`,
            query: { page: +currentPage.value - 1 }
        })
    }
}





//HOOKS
onMounted(async () => {
    const res = await fetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/my-blog?blog-category=${current_category.value[0].id}&page=${currentPage.value || 1}&per_page=${perPage.value}`)
    const pages = res.headers.get('X-WP-TotalPages')
    if (pages) totalPages.value = Number(pages)


    console.log('route',route.query.page)
})



watch(() => route.query.page, async (newPage) => {
    console.log('gg', route.query.page)
    currentPage.value = route.query.page
    fetchClientData()
})

onBeforeUnmount(() => {

});




</script>

