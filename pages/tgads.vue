<template>

    <main class="main" v-if="pageData[0]">

        <section class="tgads-hero-sec tg-her-sec" v-if="pageData[0].acf?.sekcziya_1_hero">
            <div class="tgads-hero-sec__img-wrapper">
                <img :src="pageData[0].acf.sekcziya_1_hero.izobrazhenie_pk.url"
                :alt="pageData[0].acf.sekcziya_1_hero.izobrazhenie_pk.alt" 
                class="tgads-hero-sec__img tg-her-sec__img--pc">
                <img 
                :src="pageData[0].acf.sekcziya_1_hero.izobrazhenie_mobilka.url"
                :alt="pageData[0].acf.sekcziya_1_hero.izobrazhenie_mobilka.alt"
                 class="tgads-hero-sec__img tg-her-sec__img--mob">
            </div>

            <div class="tgads-hero-sec__container">
                <h1 class="tgads-hero-sec__title" v-html="pageData[0].acf.sekcziya_1_hero.zagolovok"></h1>
                <h2 class="tgads-hero-sec__subtitle" v-html="pageData[0].acf.sekcziya_1_hero.podzagolovok"></h2>
            </div>
        </section>

        <div class="tgads-watch-sec-wrapper" >
            <section class="tgads-watch-sec tgads-watch-sec--mob target-block" ref="watchSec">
                <div class="tgads-watch-sec__wrapper">
                    <div class="tgads-watch-sec__header">
                        <h2 class="tgads-watch-sec__title" v-html="pageData[0].acf.sekcziya_2_pokazhi_sebya.zagolovok"></h2>
                        <p class="tgads-watch-sec__subtitle" v-html="pageData[0].acf.sekcziya_2_pokazhi_sebya.podzagolovok"></p>
                    </div>

                    <div class="tgads-watch-sec__img-wrapper">
                        <img :src="pageData[0].acf.sekcziya_2_pokazhi_sebya.izobrazhenie.url" 
                        :alt="pageData[0].acf.sekcziya_2_pokazhi_sebya.izobrazhenie.alt" class="tgads-watch-sec__img">
                    </div>


                    <div class="tgads-watch-sec__down-row">
                        <div class="direct-direction-sec__down-el" 
                        v-for="item in pageData[0].acf.sekcziya_2_pokazhi_sebya.infografika"
                        :key="item">
                            <p class="direct-direction-sec__down-el-title" v-html="item.znachenie"></p>
                            <p class="direct-direction-sec__down-el-subtitle" v-html="item.tekst"></p>
                        </div>
                    </div>
                </div>
            </section>
        </div>



        <section class="direct-possibilities-sec " v-if="pageData[0].acf?.sekcziya_3_novye_vozmozhnosti">
            <div class="direct-possibilities-sec__container">
                <h2 class="direct-possibilities-sec__title" v-html="pageData[0].acf.sekcziya_3_novye_vozmozhnosti.zagolovok"></h2>
                <p class="direct-possibilities-sec__subtitle" v-html="pageData[0].acf.sekcziya_3_novye_vozmozhnosti.podzagolovok"></p>

                <div class="direct-possibilities-sec__wrapper possibilities">
                    <div class="possibilities__left">
                        <div class="possibilities__left-element">
                            <div class="possibilities__left-element-top">
                                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <rect width="30" height="30" fill="url(#pattern0_1296_128)"/>
                                <defs>
                                <pattern id="pattern0_1296_128" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlink:href="#image0_1296_128" transform="scale(0.00390625)"/>
                                </pattern>
                                <image id="image0_1296_128" width="256" height="256" preserveAspectRatio="none" xlink:href="data:image/png;base64,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"/>
                                </defs>
                                </svg>

                                <p class="possibilities__left-element-top-title">Реклама под любые задачи</p>
                                <p class="possibilities__left-element-top-text" v-html="pageData[0].acf.sekcziya_3_novye_vozmozhnosti.tekst_1"></p>
                            </div>
                            <div class="possibilities__left-element-down">
                                <p class="possibilities__left-element-down-text">Настроем вашу рекламу под ключ</p>
                                <svg width="90" height="33" viewBox="0 0 90 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1.5" y="1.5" width="87" height="30" rx="15" fill="#ACFA03" stroke="#ACFA03" stroke-width="3"/>
                                <ellipse cx="16" cy="16.5" rx="13" ry="13.5" fill="white"/>
                                <path d="M42.79 20.15C42.07 20.15 41.4483 19.9933 40.925 19.68C40.405 19.3667 40.0033 18.9283 39.72 18.365C39.44 17.8017 39.3 17.1467 39.3 16.4C39.3 15.6533 39.44 14.9983 39.72 14.435C40.0033 13.8717 40.405 13.4333 40.925 13.12C41.4483 12.8067 42.07 12.65 42.79 12.65C43.51 12.65 44.13 12.8067 44.65 13.12C45.1733 13.4333 45.575 13.8717 45.855 14.435C46.1383 14.9983 46.28 15.6533 46.28 16.4C46.28 17.1467 46.1383 17.8017 45.855 18.365C45.575 18.9283 45.1733 19.3667 44.65 19.68C44.13 19.9933 43.51 20.15 42.79 20.15ZM42.79 18.87C43.2467 18.8767 43.6267 18.7783 43.93 18.575C44.2333 18.3717 44.46 18.0833 44.61 17.71C44.7633 17.3367 44.84 16.9 44.84 16.4C44.84 15.9 44.7633 15.4667 44.61 15.1C44.46 14.7333 44.2333 14.4483 43.93 14.245C43.6267 14.0417 43.2467 13.9367 42.79 13.93C42.3333 13.9233 41.9533 14.0217 41.65 14.225C41.3467 14.4283 41.1183 14.7167 40.965 15.09C40.815 15.4633 40.74 15.9 40.74 16.4C40.74 16.9 40.815 17.3333 40.965 17.7C41.1183 18.0667 41.3467 18.3517 41.65 18.555C41.9533 18.7583 42.3333 18.8633 42.79 18.87ZM46.8781 20V12.8H48.2581L51.3881 17.6V12.8H52.7681V20H51.3881L48.2581 15.2V20H46.8781Z" fill="white" fill-opacity="0.8"/>
                                </svg>

                            </div>
                        </div>
                    </div>
                    <div class="possibilities__right">

                        <div class="possibilities__right-top">
                            <div class="possibilities__right-top-col">
                                <div class="possibilities__right-top-long-img-wrapper">
                                    <img src="@/assets/images/tgads/sec-3-img-1.jpg" alt="" class="possibilities__right-top-long-img">
                                </div>

                                <div class="possibilities__right-top-info-box">
                                    <div class="possibilities__right-top-info-box-wrapper">
                                        <p class="possibilities__right-top-info-box-title">90 млн</p>
                                        <p class="possibilities__right-top-info-box-subtitle">активных пользователей Telegram</p>
                                        <img src="@/assets/images/tgads/sec-3-img-2.png" alt="" class="possibilities__right-top-info-box-img">
                                        <p class="possibilities__right-top-info-box-small-text">это люди с разными интересами и подребностями</p>
                                    </div>
                                </div>
                            </div>

                            <div class="possibilities__right-top-col">
                                <div class="possibilities__right-top-spec-box">
                                    <img src="@/assets/images/tgads/sec-3-img-3.png" alt="" class="possibilities__right-top-spec-box-img">
                                    <p class="possibilities__right-top-spec-box-text" v-html="pageData[0].acf.sekcziya_3_novye_vozmozhnosti.tekst_2"></p>
                                </div>
                            </div>
                        </div>

                        <div class="possibilities__right-down">
                            <p class="possibilities__right-down-text">Мы всегда держим руку на пульсе и доносим информацию до вас </p>
                            <div class="possibilities__right-down-social-row">
                                
                                <a v-for="item in pageData[0].acf.sekcziya_3_novye_vozmozhnosti.socz_seti"
                                :key="item"
                                :href="item.ssylka" class="possibilities__right-down-social">
                                    <img :src="item.ikonka.url" :alt="item.ikonka.alt">
                                </a>

 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section class="direct-format-work-sec" v-if="pageData[0].acf?.sekcziya_4_format_raboty">
            <div class="direct-format-work-sec__container">
                <h2 class="direct-format-work-sec__title">
                    {{pageData[0].acf.sekcziya_4_format_raboty.zagolovok}}
                    <span class="direct-format-work-sec__title-img-wrapper">
                        <img src="@/assets/images/tgads/format-header.png" alt="">
                    </span>
                </h2>

                <div class="direct-format-work-sec__wrapper">
                    <div class="direct-format-work-sec__element-text">
                        <div class="direct-format-work-sec__element-text-container">
                            <p class="direct-format-work-sec__element-text-title">#1</p>
                            <p class="direct-format-work-sec__element-text-subtitle" v-html="pageData[0].acf.sekcziya_4_format_raboty.tekst_1"></p>
                        </div>
                    </div>

                    <div class="direct-format-work-sec__element-text">
                        <div class="direct-format-work-sec__element-text-container">
                            <p class="direct-format-work-sec__element-text-title">#2</p>
                            <p class="direct-format-work-sec__element-text-subtitle" v-html="pageData[0].acf.sekcziya_4_format_raboty.tekst_2"></p>
                        </div>
                    </div>

                    <div class="direct-format-work-sec__element-img direct-format-work-sec__element-img--1">
                        <img :src="pageData[0].acf.sekcziya_4_format_raboty.kartinka_1.url" :alt="pageData[0].acf.sekcziya_4_format_raboty.kartinka_1.alt">
                    </div>

                    <div class="direct-format-work-sec__element-text">
                        <div class="direct-format-work-sec__element-text-container">
                            <p class="direct-format-work-sec__element-text-title">#3</p>
                            <p class="direct-format-work-sec__element-text-subtitle" v-html="pageData[0].acf.sekcziya_4_format_raboty.tekst_3"></p>
                        </div>
                    </div>

                    <div class="direct-format-work-sec__element-img direct-format-work-sec__element-img--2">
                        <img :src="pageData[0].acf.sekcziya_4_format_raboty.kartinka_2.url" :alt="pageData[0].acf.sekcziya_4_format_raboty.kartinka_2.alt">
                    </div>

                    <div class="direct-format-work-sec__element-text">
                        <div class="direct-format-work-sec__element-text-container">
                            <p class="direct-format-work-sec__element-text-title">#4</p>
                            <p class="direct-format-work-sec__element-text-subtitle" v-html="pageData[0].acf.sekcziya_4_format_raboty.tekst_4"></p>
                        </div>
                    </div>

                    
                    
                </div>
            </div>
        </section>


        <section class="price-sec tgads-price-sec" v-if="pageData[0].acf?.sekcziya_5_czena?.length">
            <div class="price-sec__container">
                <div class="price-sec__header">

                    <svg width="293" height="8" viewBox="0 0 293 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M292.352 3.6457C292.548 3.84029 292.549 4.15687 292.355 4.35281L289.184 7.5457C288.989 7.74163 288.673 7.74272 288.477 7.54813C288.281 7.35354 288.28 7.03696 288.474 6.84103L291.293 4.0029L288.455 1.18421C288.259 0.989619 288.258 0.673038 288.452 0.477106C288.647 0.281174 288.963 0.280086 289.159 0.474676L292.352 3.6457ZM0 5.00391L-0.0017182 4.50391L291.998 3.50047L292 4.00047L292.002 4.50047L0.0017182 5.5039L0 5.00391Z" fill="url(#paint0_linear_3103_112)"/>
                    <defs>
                    <linearGradient id="paint0_linear_3103_112" x1="291.998" y1="3.50047" x2="-0.0017182" y2="4.50391" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#ACFA03"/>
                    <stop offset="1" stop-color="#ACFA03" stop-opacity="0"/>
                    </linearGradient>
                    </defs>
                    </svg>


                    <div class="price-sec__header-text">Стоимость</div>

                    <svg width="293" height="8" viewBox="0 0 293 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.647678 3.6418C0.451746 3.83639 0.450658 4.15297 0.645248 4.3489L3.81627 7.5418C4.01086 7.73773 4.32745 7.73882 4.52338 7.54423C4.71931 7.34964 4.7204 7.03306 4.52581 6.83712L1.70712 3.99899L4.54525 1.1803C4.74118 0.985713 4.74227 0.669132 4.54768 0.4732C4.35309 0.277268 4.03651 0.27618 3.84057 0.47077L0.647678 3.6418ZM293 5L293.002 4.5L1.00173 3.49657L1.00001 3.99656L0.998296 4.49656L292.998 5.5L293 5Z" fill="url(#paint0_linear_3103_111)"/>
                    <defs>
                    <linearGradient id="paint0_linear_3103_111" x1="1.00173" y1="3.49657" x2="293.002" y2="4.5" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#ACFA03"/>
                    <stop offset="1" stop-color="#ACFA03" stop-opacity="0"/>
                    </linearGradient>
                    </defs>
                    </svg>

                </div>

                <div class="price-sec__body">
                    <div class="price-sec__col" v-for="(item, index) in pageData[0].acf.sekcziya_5_czena" :key="index">
                        <div class="price-sec__list-work-wrapper">
                            <p class="price-sec__list-work-wrapper-title" v-html="item.nazvanie_paketa"></p>
                            <ul class="price-sec__list-work-wrapper-list">
                                <li v-for="servElement in item.opisanie_paketa" :key="servElement">{{ servElement.tekst }}</li>

                            </ul>

                            <div class="price-sec__list-work-wrapper-down-btn" @click="dataPriceSecActioDopIndex = index, targetClickOutside()" >
                                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="5" width="3" height="13" fill="#ACFA03"/>
                                <rect y="5" width="13" height="3" fill="#ACFA03"/>
                                </svg>
                                объем выполняемых работ
                            </div>
                        </div>

                        <div class="price-sec__cost-box cost-box">

                            <div class="cost-box__bg-wrapper">
                                
                            </div>
                            <div class="cost-box__wrapper">
                                <p class="cost-box__value">{{ item.czena_v_rublyah }} ₽</p>
                                <div class="cost-box__btn cursor-mod cursor-mod-price" @click="openFormPopup(`Блок с ценой. Пакет: ${item.nazvanie_paketa}`)">
                                    <p class="cost-box__btn-title">Заказать</p>
                                    <div class="cost-box__btn-icon">
                                        <svg width="19" height="24" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.591701 1.23274L1.16743 0.564631L17.8807 10.8802L17.9021 12.2716L1.51353 23.0717L0.917524 22.4216L10.397 11.6789L0.591701 1.23274Z" fill="#ACFA03"/>
                                        </svg>


                                    </div>
                                </div>
                            </div>

                            <div class="cost-box__dop" v-if="dataPriceSecActioDopIndex == index">
                                <p class="cost-box__dop-title" v-html="item.nazvanie_paketa" ></p>
                                <ul class="cost-box__dop-list">
                                    <li class="cost-box__dop-list-element" v-for="dopServItem in item.dop_parametry" :key="dopServItem">{{ dopServItem.tekst }}</li>                                 
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>


         <section class="direct-other-services-sec">
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

import { useCounterStore } from '@/stores/counter'

import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';

//DATA
const store = useCounterStore()

const route = useRoute()

const windowsHeight = ref(null)

const watchSec = ref(null)

const scrollPosition = ref(null)

const dataPriceSecActioDopIndex = ref(null)

const { data: pageData } = await useFetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/pages?slug=tgads`)

console.log('pageData', pageData)




//METHODS 

//open form popup 
function openFormPopup(text){
    store.changeTrigerButtonForm(text)
    store.changePopupCurrent('popup-form')
}


let handler // глобально или вне функции — чтобы был доступен при remove

function targetClickOutside() {

  stopTargetClickOutside()

  setTimeout(() => {
    handler = (e) => {
      if (!e.target.closest('.cost-box__dop')) {
        console.log('Клик вне .cost-box__dop', e.target)
        dataPriceSecActioDopIndex.value = null
        stopTargetClickOutside()
      }
    }

    document.addEventListener('click', handler)
  }, 100)
}

function stopTargetClickOutside() {
  if (handler) {
    document.removeEventListener('click', handler)
    handler = null
  }
}


//scroll start script
function firstLoadScollScripts(){
    scrollPosition.value = window.scrollY
    watchSecAnimV1()

    window.addEventListener('scroll', handleScroll);
    
}


function handleScroll(){
    scrollPosition.value = window.scrollY
    watchSecAnimV1()

    // console.log('scroll value', scrollPosition.value)
}


//partner anim sec 2
function watchSecAnimV1(){
    let currentProcent = null
    let culcScaleValue = 0
    let culcOpacityValue = 0
    let finishScaleValue = null
    let finishOpacityValue = null

    if(scrollPosition.value < 100){
        currentProcent = 0
        watchSec.value.classList.remove('tgads-watch-sec--activ')
    }

    if(scrollPosition.value >= 100 && scrollPosition.value < (windowsHeight.value / 100) * 65 ){
        let currentValue = scrollPosition.value - 100
        let fullSecScrollTrack = ((windowsHeight.value / 100) * 65) - 100 

        currentProcent = (currentValue / fullSecScrollTrack) * 100
        console.log('fullSecScrollTrack', fullSecScrollTrack)

        watchSec.value.classList.remove('tgads-watch-sec--activ')
        
    }

    if(scrollPosition.value > (windowsHeight.value / 100) * 65 ){
        currentProcent = 100
        watchSec.value.classList.add('tgads-watch-sec--activ')
      
    }

    culcScaleValue = (0.15 * currentProcent) / 100
    finishScaleValue = 0.85 + culcScaleValue


    culcOpacityValue = (0.7 * currentProcent) / 100
    finishOpacityValue = 0.3 + culcOpacityValue
    
    watchSec.value.style.transform = `scale(${finishScaleValue})`

    watchSec.value.style.opacity = finishOpacityValue

    // console.log('currentProcent', currentProcent)
    // console.log(windowsHeight.value, (windowsHeight.value / 100) * 65 )
}



//HOOKS
onMounted(() => {

    if (window.matchMedia('(max-width: 750px)').matches) {
       
    } else {
       windowsHeight.value = watchSec.value.clientHeight
    firstLoadScollScripts()
    }


   
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

