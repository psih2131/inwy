<template>

    <main class="main" v-if="pageData[0]">
        <div class="about-hero-sec-100vh" ref="heroSec"></div>
     
        <section class="about-hero-sec" ref="aboutSec">
            <div class="about-hero-sec__container">
                <p class="about-hero-sec__subtiltle">О нас</p>
                <h2 class="about-hero-sec__title" v-html="pageData[0].acf.zagolovok"></h2>
                <div class="about-hero-sec__img-row">

                    <template v-for="(item, index) in pageData[0].acf.kartinki_posle_zagolovka" :key="index">
                         
                        <img :src="item.kartinka.url" :alt="item.kartinka.alt" class="about-hero-sec__img " >

                    </template>

                </div>
                <p class="about-hero-sec__down-text" v-html="pageData[0].acf.tekst_pod_kartinkami"></p>
            </div>
        </section>


        <section class="about-why-we-are">
            <div class="about-why-we-are__container">
                <div class="about-why-we-are__left">
                    <h2 class="about-why-we-are__title">Кто мы?</h2>

                    <div class="about-why-we-are__circle">
                        <div class="about-why-we-are__circle-logo">
                            <img src="@/assets/images/about/about-logo.png" alt="">
                        </div>
                  
                            <div 
                            v-for="(item, index) in pageData[0].acf.kartinki_v_animaczii" :key="index"
                            class="circle-sector" 
                            @mouseenter="show(index)"
                            @mousemove="move($event, index)"
                            @mouseleave="hide(index)"
                            :class="[`circle-sector--${index}`]">

                                <img 
                                :class="{ active: activeIndex === index }"
                                :style="activeIndex === index ? style : null"
                                :src="item.kartinka.url" :alt="item.kartinka.alt" class="circle-sector__img">

                            </div>
               
                    </div>
                </div>
                <div class="about-why-we-are__right">
                   <div class="about-why-we-are__text-wrapper" v-html="pageData[0].acf.tekst_opisanie"></div>
                </div>
            </div>
        </section>

        <section class="about-services-sec">
            <div class="about-services-sec__wrapper">
                <h2 class="about-services-sec_title">Другие наши услуги.</h2>
                <div class="about-services-sec__row">

                    <NuxtLink to="/direct" class="about-services-sec__element about-services-sec__element--yandex cursor-mod cursor-mod-services" >
                        <p class="about-services-sec__element-text">Яндекс.Директ</p>
                        <div class="about-services-sec__element-img-wrapper">
                            <div class="about-services-sec__element-img-wrapper-circle" style="background: #1AFF00;"></div>
                            <img src="@/assets/images/about/a2.jpg" alt="" class="about-services-sec__element-img">
                        </div>
                    </NuxtLink>

                    <NuxtLink to="/geomarketing" class="about-services-sec__element about-services-sec__element--geo cursor-mod cursor-mod-services" >
                        <p class="about-services-sec__element-text">Геомаркетинг</p>
                        <div class="about-services-sec__element-img-wrapper">
                            <div class="about-services-sec__element-img-wrapper-circle" style="background: #1A00FF;"></div>
                            <img src="@/assets/images/about/a3.jpg" alt="" class="about-services-sec__element-img">
                        </div>
                    </NuxtLink>

                    <NuxtLink to="/vkads" class="about-services-sec__element about-services-sec__element--vk cursor-mod cursor-mod-services">
                        <p class="about-services-sec__element-text">VK реклама</p>
                        <div class="about-services-sec__element-img-wrapper">
                            <div class="about-services-sec__element-img-wrapper-circle" style="background: #1A00FF;"></div>
                            <img src="@/assets/images/about/a4.jpg" alt="" class="about-services-sec__element-img">
                        </div>
                    </NuxtLink>

                    <NuxtLink to="/tgads" class="about-services-sec__element about-services-sec__element--telegtam cursor-mod cursor-mod-services">
                        <p class="about-services-sec__element-text">Telegram Ads</p>
                        <div class="about-services-sec__element-img-wrapper">
                            <div class="about-services-sec__element-img-wrapper-circle" style="background: #FF00BB;"></div>
                            <img src="@/assets/images/about/a4.jpg" alt="" class="about-services-sec__element-img">
                        </div>
                    </NuxtLink>

                    <NuxtLink to="/website" class="about-services-sec__element about-services-sec__element--dev cursor-mod cursor-mod-services">
                        <p class="about-services-sec__element-text">Разработка сайтов</p>
                        <div class="about-services-sec__element-img-wrapper">
                            <div class="about-services-sec__element-img-wrapper-circle" style="background: #FF7700;"></div>
                            <img src="@/assets/images/about/a1.jpg" alt="" class="about-services-sec__element-img">
                        </div>
                    </NuxtLink>
                </div>
            </div>
        </section>

    </main>
    
</template>

<script setup>

//IMPORT

import { useCounterStore } from '@/stores/counter';

import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';


//DATA
const store = useCounterStore()

const route = useRoute()



const aboutSec = ref(null)

const scrollPosition = ref(null)

const windowsHeight = ref(null)

const aboutFixedImageList = ref([
    '1',
    '2',
    '3',
    '4',
])

const activeIndex = ref(null)

const style = ref({ top: '0px', left: '0px' })

const { data: pageData } = await useFetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/pages?slug=about`)

console.log('pageData', pageData)

// const scrollImg1 = ref(null)

// const scrollImg2 = ref(null)


//METHODS 

function show(index) {
  activeIndex.value = index
}

function move(event, index) {
  if (activeIndex.value === index) {
    const offsetX = -85 // половина ширины превью
    const offsetY = -120 // половина высоты превью
    style.value = {
      top: event.clientY + offsetY + 'px',
      left: event.clientX + offsetX + 'px',
    }
  }
}

function hide(index) {
  if (activeIndex.value === index) {
    activeIndex.value = null
  }
}

//scroll start script
function firstLoadScollScripts(){
    scrollPosition.value = window.scrollY
    aboutScrollImgAnim()
    window.addEventListener('scroll', handleScroll);
}


function handleScroll(){
    scrollPosition.value = window.scrollY
    aboutScrollImgAnim()

    console.log('about scroll', scrollPosition.value)
}

function aboutScrollImgAnim(){
    let currentProcent = null
    let culcScaleValue = 0
    let finishScaleValue = null

    if(scrollPosition.value < 100){
        currentProcent = 0
    }

    if(scrollPosition.value >= 10 && scrollPosition.value < (windowsHeight.value / 100) * 65 ){
        let currentValue = scrollPosition.value - 100
        let fullSecScrollTrack = ((windowsHeight.value / 100) * 65) - 100 

        currentProcent = (currentValue / fullSecScrollTrack) * 100
    }

    if(scrollPosition.value > (windowsHeight.value / 100) * 65 ){
        currentProcent = 100
    }

    culcScaleValue = (70 * currentProcent) / 100
    finishScaleValue = culcScaleValue
    
    let imagesArray = document.querySelectorAll('.about-hero-sec__img')
    imagesArray[1].style.transform = `translateY(-${finishScaleValue}px)`
    imagesArray[3].style.transform = `translateY(-${finishScaleValue}px)`

    // console.log('currentProcent', currentProcent)
    // console.log(windowsHeight.value, (windowsHeight.value / 100) * 65 )
}


//HOOKS
onMounted(() => {
    windowsHeight.value = aboutSec.value.clientHeight
    firstLoadScollScripts()

   
});

onBeforeUnmount(() => {

});



//SEO
useHead({
    title: pageData.value[0].acf.seo_title || pageData.value[0].title.rendered,
    meta: [
        // Description
        { name: 'description', content: pageData.value[0].acf.seo_description || 'Описание по умолчанию' },

        // Keywords (опционально, не влияет сильно на SEO)
        { name: 'keywords',  content: pageData.value[0].acf.klyuchevaya_fraza || 'test' },

        // OpenGraph
        { property: 'og:title', content: pageData.value[0].acf.seo_title },
        { property: 'og:description', content: pageData.value[0].acf.seo_description },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: `${store.domainUrlCurrent}${route.fullPath}` },
        { property: 'og:image', content: pageData.value?.[0]?.acf?.og_image?.url || 'http://syberia.gearsdpz.beget.tech/wp-content/uploads/2025/07/87baa9efe5d849e4f8da67fe01f9e029.jpg' },

        // Twitter Card (если используешь)
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: pageData.value[0].acf.seo_title },
        { name: 'twitter:description', content: pageData.value[0].acf.seo_description },
        { name: 'twitter:image', content: pageData.value?.[0]?.acf?.og_image?.url || 'http://syberia.gearsdpz.beget.tech/wp-content/uploads/2025/07/87baa9efe5d849e4f8da67fe01f9e029.jpg' },

        // Индексация / Деиндексация
        // Например, noindex для черновика:
        {
        name: 'robots',
        content:
            pageData.value[0].acf.indeksacziya_v_poiskovyh_sistemah === 'index'
            ? 'index, follow'
            : 'noindex, nofollow'
        }
    ],
    link: [
        // Canonical (вручную или динамически)
        { rel: 'canonical', href: `${store.domainUrlCurrent}/${pageData.value[0].acf.canonical || route.name}` }
    ]
})

  
</script>

