<template>

    <main class="main" v-if="pageData[0]">


        <section class="tgads-hero-sec vk-hero-sec" v-if="pageData[0].acf?.sekcziya_1_hero">
            <div class="tgads-hero-sec__img-wrapper vk-hero-sec__img-wrapper">
                <img :src="pageData[0].acf.sekcziya_1_hero.izobrazhenie_pk.url" 
                :alt="pageData[0].acf.sekcziya_1_hero.izobrazhenie_pk.alt" class="tgads-hero-sec__img vk-hero-sec__img">
            </div>

            <div class="tgads-hero-sec__container">
                <h1 class="tgads-hero-sec__title" v-html="pageData[0].acf.sekcziya_1_hero.zagolovok"></h1>
                <h2 class="tgads-hero-sec--vk_subtitle" v-html="pageData[0].acf.sekcziya_1_hero.podzagolovok"></h2>
            </div>
        </section>


        <div class="tgads-watch-sec-wrapper" >
            <section class="tgads-watch-sec tgads-watch-sec--vk target-block" ref="watchSec">
                <div class="tgads-watch-sec__wrapper">
                    <div class="tgads-watch-sec__header">
                        <h2 class="tgads-watch-sec__title" v-html="pageData[0].acf.sekcziya_2_doverie.zagolovok"></h2>
                        <p class="tgads-watch-sec__subtitle" v-html="pageData[0].acf.sekcziya_2_doverie.podzagolovok"></p>
                    </div>

                    <div class="tgads-watch-sec__img-wrapper">
                        <img :src="pageData[0].acf.sekcziya_2_doverie.izobrazhenie_pk.url" :alt="pageData[0].acf.sekcziya_2_doverie.izobrazhenie_pk.alt" class="tgads-watch-sec__img tgads-watch-sec--vk-img">
                        <img :src="pageData[0].acf.sekcziya_2_doverie.izobrazhenie_mobilka.url" :alt="pageData[0].acf.sekcziya_2_doverie.izobrazhenie_mobilka.alt" class="tgads-watch-sec__img-mob tgads-watch-sec--vk-img-mob">
                    </div>

                    <div class="tgads-watch-sec__down-row">
                        <div class="direct-direction-sec__down-el" v-for="item in pageData[0].acf.sekcziya_2_doverie.infografik" :key="item">
                            <p class="direct-direction-sec__down-el-title" v-html="item.znachenie"></p>
                            <p class="direct-direction-sec__down-el-subtitle" v-html="item.tekst"></p>
                        </div>
                    </div>
                </div>
            </section>
        </div>


        <section class="vkads-benefits-sec" v-if="pageData[0].acf?.sekcziya_3_pautina">
            <div class="vkads-benefits-sec__container">
                <div class="vkads-benefits-sec__claster">
                    <div  class="vkads-benefits-sec__img-element vkads-benefits-sec__img-element--v1" data-aos="fade-right">
                        <div class="vkads-benefits-sec__img-element-header">
                            <div class="vkads-benefits-sec__img-element-header-circle"></div>
                            <p class="vkads-benefits-sec__img-element-header-title">Реклама</p>
                        </div>
                        <div class="vkads-benefits-sec__img-element-body">
                            <img src="@/assets/images/vkads/v1.jpg" alt="" class="vkads-benefits-sec__img-element-img">
                            <img src="@/assets/images/vkads/like.svg" alt="" class="vkads-benefits-sec__img-like">
                            
                        </div>
                    </div>

                    <div class="vkads-benefits-sec__img-element vkads-benefits-sec__img-element--v2" data-aos="fade-up">
                        <div class="vkads-benefits-sec__img-element-header">
                            <div class="vkads-benefits-sec__img-element-header-circle"></div>
                            <p class="vkads-benefits-sec__img-element-header-title">Реклама</p>
                        </div>
                        <div class="vkads-benefits-sec__img-element-body">
                            <img src="@/assets/images/vkads/v2.jpg" alt="" class="vkads-benefits-sec__img-element-img">
                            <img src="@/assets/images/vkads/like.svg" alt="" class="vkads-benefits-sec__img-like">
                            
                        </div>
                    </div>

                    <div class="vkads-benefits-sec__img-element vkads-benefits-sec__img-element--v3" data-aos="zoom-in">
                        <div class="vkads-benefits-sec__img-element-header">
                            <div class="vkads-benefits-sec__img-element-header-circle"></div>
                            <p class="vkads-benefits-sec__img-element-header-title">Реклама</p>
                        </div>
                        <div class="vkads-benefits-sec__img-element-body">
                            <img src="@/assets/images/vkads/v3.jpg" alt="" class="vkads-benefits-sec__img-element-img">
                            <img src="@/assets/images/vkads/like.svg" alt="" class="vkads-benefits-sec__img-like">
                            
                        </div>
                    </div>

                    <div class="vkads-benefits-sec__img-element vkads-benefits-sec__img-element--v4" data-aos="fade-left">
                        <div class="vkads-benefits-sec__img-element-header">
                            <div class="vkads-benefits-sec__img-element-header-circle"></div>
                            <p class="vkads-benefits-sec__img-element-header-title">Реклама</p>
                        </div>
                        <div class="vkads-benefits-sec__img-element-body">
                            <img src="@/assets/images/vkads/v4.jpg" alt="" class="vkads-benefits-sec__img-element-img">
                            <img src="@/assets/images/vkads/like.svg" alt="" class="vkads-benefits-sec__img-like">
                            
                        </div>
                    </div>


                    
                    <div class="vkads-benefits-sec__wrapper">

                        <div class="vkads-benefits-sec__bg-line">
                            <svg width="534" height="332" viewBox="0 0 534 332" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M219.001 157C243.643 2.37312 330.5 11.5002 526.001 62.9997" stroke="#ACFA03" stroke-width="3"/>
                            <path d="M217.013 158.715C32.4581 299.716 106.458 154.717 1.01336 166.715" stroke="#ACFA03" stroke-width="3"/>
                            <path d="M220.072 155.953C312 292 489 5.99859 390.072 329.953" stroke="#ACFA03" stroke-width="3"/>
                            </svg>

                        </div>

                        <div class="vkads-benefits-sec__logo">
                            <img src="@/assets/images/vkads/sec-3-logo.png" alt="" class="vkads-benefits-sec__logo-img">
                        </div>


                        <template v-for="(item, index) in pageData[0].acf.sekcziya_3_pautina.testovyj_blok" :key="index">
                            <div :class="`vkads-benefits-sec__info vkads-benefits-sec__info--v${index + 1}`" v-html="item.tekst"></div>
                        </template>


                    </div>


                </div>

                
            </div>
        </section>



        <section class="vkads-make-all-sec" v-if="pageData[0].acf['sekcziya_4_-_delaem_vse_sami']">
            <div class="vkads-make-all-sec__container">
                <div class="vkads-make-all-sec__top-row"></div>
                <h2 class="vkads-make-all-sec__title">Сделаем 
                    <div class="vkads-make-all-sec__title-img">
                        <img src="@/assets/images/vkads/make-all-myself-text.jpg" alt="">
                    </div> 
                    все сами
                </h2>

                <p class="vkads-make-all-sec__subtitle">От настройки до баннеров.</p>

                <div class="vkads-make-all-sec__wrapper">

                    <div class="vkads-make-all-sec__col-1">
                        <div class="vkads-make-all-sec__humans-wrapper">
                            <div class="vkads-make-all-sec__humans-wrapper-col">

                                <img v-for="item in pageData[0].acf['sekcziya_4_-_delaem_vse_sami'].lyudi" :key="item"
                                :src="item.foto.url" :alt="item.foto.alt" class="vkads-make-all-sec__human">

                            </div>
                            
                        </div>
                    </div>

                    <div class="vkads-make-all-sec__col-2">
                        <div class="vkads-make-all-sec__diagram-box vkads-make-all-sec__diagram-box--v1">
                            <div class="vkads-make-all-sec__diagram-box-header">
                                <p class="vkads-make-all-sec__diagram-box-title" v-html="pageData[0].acf['sekcziya_4_-_delaem_vse_sami'].zagolovok_1"></p>
                                <p class="vkads-make-all-sec__diagram-box-subtitle" v-html="pageData[0].acf['sekcziya_4_-_delaem_vse_sami'].tekst_1"></p>
                            </div>

                            <img src="@/assets/images/vkads/diagram-1.png" alt="" class="vkads-make-all-sec__diagram-box-img vkads-make-all-sec__diagram-box-img--v1">
                            
                        </div>


                        <div class="vkads-make-all-sec__diagram-box vkads-make-all-sec__diagram-box--v2">
                            <div class="vkads-make-all-sec__diagram-box-header">
                                <p class="vkads-make-all-sec__diagram-box-title" v-html="pageData[0].acf['sekcziya_4_-_delaem_vse_sami'].zagolovok_3"></p>
                                <p class="vkads-make-all-sec__diagram-box-subtitle" v-html="pageData[0].acf['sekcziya_4_-_delaem_vse_sami'].tekst_3"></p>
                            </div>

                            <img src="@/assets/images/vkads/russia.png" alt="" class="vkads-make-all-sec__diagram-box-img vkads-make-all-sec__diagram-box-img--v1">
                            
                        </div>
                    </div>

                    <div class="vkads-make-all-sec__col-3">
                        <div class="vkads-make-all-sec__diagram-box vkads-make-all-sec__diagram-box--v3">
                            <div class="vkads-make-all-sec__diagram-box-header">
                                <p class="vkads-make-all-sec__diagram-box-title" v-html="pageData[0].acf['sekcziya_4_-_delaem_vse_sami'].zagolovok_2"></p>
                                <p class="vkads-make-all-sec__diagram-box-subtitle" v-html="pageData[0].acf['sekcziya_4_-_delaem_vse_sami'].tekst_2"></p>
                            </div>

                            <img src="@/assets/images/vkads/diagram-2.png" alt="" class="vkads-make-all-sec__diagram-box-img vkads-make-all-sec__diagram-box-img--v1">
                            <img src="@/assets/images/vkads/diagram-3.png" alt="" class="vkads-make-all-sec__diagram-box-img vkads-make-all-sec__diagram-box-img--v2">

                        </div>

                        <div class="vkads-make-all-sec__diagram-box vkads-make-all-sec__diagram-box--v4">
                            <div class="vkads-make-all-sec__diagram-box-header">
                                <p class="vkads-make-all-sec__diagram-box-title" v-html="pageData[0].acf['sekcziya_4_-_delaem_vse_sami'].zagolovok_4"></p>
                                <p class="vkads-make-all-sec__diagram-box-subtitle" v-html="pageData[0].acf['sekcziya_4_-_delaem_vse_sami'].tekst_4"></p>
                            </div>

                            <img src="@/assets/images/vkads/matherial.png" alt="" class="vkads-make-all-sec__diagram-box-img vkads-make-all-sec__diagram-box-img--v1">
                            
                        </div>
                    </div>

                </div>
            </div>
        </section>



        <section class="tgads-watch-sec tgads-make-ads-sec target-block" ref="makeAdsSec">
            <div class="tgads-watch-sec__wrapper">
                <div class="tgads-watch-sec__header">
                    <h2 class="tgads-watch-sec__title" v-html="pageData[0].acf['sekcziya_5_-_delaem_obyavleniya'].zagolovok"></h2>
                    <p class="tgads-watch-sec__subtitle" v-html="pageData[0].acf['sekcziya_5_-_delaem_obyavleniya'].podzagolovok"></p>
                </div>

                <div class="tgads-watch-sec__img-wrapper">
                    <img :src="pageData[0].acf['sekcziya_5_-_delaem_obyavleniya'].izobrazhenie_pk.url" 
                    :alt="pageData[0].acf['sekcziya_5_-_delaem_obyavleniya'].izobrazhenie_pk.alt" class="tgads-watch-sec__img">
                </div>


                <div class="tgads-watch-sec__down-row-v2">
                    
                    <div class="direct-direction-sec__down-el-v2" v-for="(item, index) in pageData[0].acf['sekcziya_5_-_delaem_obyavleniya'].infografika" :key="index">
                        <p class="direct-direction-sec__down-el-title-v2">{{ index + 1 }}</p>
                        <p class="direct-direction-sec__down-el-subtitle-v2" v-html="item.tekst"></p>
                    </div>
                    
                </div>
            </div>
        </section>


        <section class="price-sec vkads-price-sec" v-if="pageData[0].acf?.sekcziya_6_czena?.length">
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
                    <div class="price-sec__col" v-for="(item, index) in pageData[0].acf.sekcziya_6_czena" :key="index">
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
                                <div class="cost-box__btn" @click="openFormPopup()">
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

                    <NuxtLink to="/direct" class="about-services-sec__element about-services-sec__element--yandex">
                        <p class="about-services-sec__element-text">Яндекс.Директ</p>
                        <div class="about-services-sec__element-img-wrapper">
                            <div class="about-services-sec__element-img-wrapper-circle" style="background: #1AFF00;"></div>
                            <img src="@/assets/images/about/a2.jpg" alt="" class="about-services-sec__element-img">
                        </div>
                    </NuxtLink>

                    <NuxtLink to="/geomarketing" class="about-services-sec__element about-services-sec__element--geo" >
                        <p class="about-services-sec__element-text">Геомаркетинг</p>
                        <div class="about-services-sec__element-img-wrapper">
                            <div class="about-services-sec__element-img-wrapper-circle" style="background: #1A00FF;"></div>
                            <img src="@/assets/images/about/a3.jpg" alt="" class="about-services-sec__element-img">
                        </div>
                    </NuxtLink>

                    <NuxtLink to="/tgads" class="about-services-sec__element about-services-sec__element--telegtam">
                        <p class="about-services-sec__element-text">Telegram Ads</p>
                        <div class="about-services-sec__element-img-wrapper">
                            <div class="about-services-sec__element-img-wrapper-circle" style="background: #FF00BB;"></div>
                            <img src="@/assets/images/about/a4.jpg" alt="" class="about-services-sec__element-img">
                        </div>
                    </NuxtLink>

                    <NuxtLink to="/website" class="about-services-sec__element about-services-sec__element--dev">
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

const makeAdsSec = ref(null)

const scrollPosition = ref(null)

const dataPriceSecActioDopIndex = ref(null)

const { data: pageData } = await useFetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/pages?slug=vkads`)

console.log('pageData', pageData)



//METHODS

//open form popup 
function openFormPopup(){
    store.changeTrigerButtonForm('Кнопка в блоке с ценой ')
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
    watchSecAnimV2()

    window.addEventListener('scroll', handleScroll);
    
}


function handleScroll(){
    scrollPosition.value = window.scrollY
    watchSecAnimV1()
    watchSecAnimV2()

    console.log('scroll value', scrollPosition.value)
}


//partner anim sec 2
function watchSecAnimV1(){
    let currentProcent = null
    let culcScaleValue = 0
    // let culcOpacityValue = 0
    let finishScaleValue = null
    // let finishOpacityValue = null

    if(scrollPosition.value < 100){
        currentProcent = 0
        watchSec.value.classList.remove('tgads-watch-sec--activ')
    }

    if(scrollPosition.value >= 100 && scrollPosition.value < (windowsHeight.value / 100) * 65 ){
        let currentValue = scrollPosition.value - 100
        let fullSecScrollTrack = ((windowsHeight.value / 100) * 65) - 100 

        currentProcent = (currentValue / fullSecScrollTrack) * 100
        // console.log('fullSecScrollTrack', fullSecScrollTrack)

        watchSec.value.classList.remove('tgads-watch-sec--activ')
        
    }

    if(scrollPosition.value > (windowsHeight.value / 100) * 65 ){
        currentProcent = 100
        watchSec.value.classList.add('tgads-watch-sec--activ')
      
    }

    culcScaleValue = (0.15 * currentProcent) / 100
    finishScaleValue = 0.85 + culcScaleValue
    
    watchSec.value.style.transform = `scale(${finishScaleValue})`

}


function watchSecAnimV2(){
    let currentProcent = null
    let culcScaleValue = 0
    // let culcOpacityValue = 0
    let finishScaleValue = null
    // let finishOpacityValue = null
    let heightAnimSec = makeAdsSec.value.offsetHeight
    let startBlockDistanse = makeAdsSec.value.offsetTop
    let startBlockDistanseTrigerAnim = startBlockDistanse - heightAnimSec
    let endBlockDistanseTrigerAnim = startBlockDistanseTrigerAnim + heightAnimSec
    

    if(scrollPosition.value < startBlockDistanseTrigerAnim){
        currentProcent = 0
        makeAdsSec.value.classList.remove('tgads-watch-sec--activ')
    }

    if(scrollPosition.value >= startBlockDistanseTrigerAnim && scrollPosition.value < (endBlockDistanseTrigerAnim - ((heightAnimSec / 100) * 40)) ){
        let currentValue = scrollPosition.value - startBlockDistanseTrigerAnim
        let fullSecScrollTrack = (endBlockDistanseTrigerAnim - ((heightAnimSec / 100) * 40)) - startBlockDistanseTrigerAnim 

        currentProcent = (currentValue / fullSecScrollTrack) * 100
        console.log('fullSecScrollTrack_____________________________________________', fullSecScrollTrack)

        makeAdsSec.value.classList.remove('tgads-watch-sec--activ')
        
    }

    if(scrollPosition.value > (endBlockDistanseTrigerAnim - ((heightAnimSec / 100) * 40))){
        currentProcent = 100
        makeAdsSec.value.classList.add('tgads-watch-sec--activ')
      
    }

    culcScaleValue = (0.2 * currentProcent) / 100
    finishScaleValue = 0.8 + culcScaleValue
    
    makeAdsSec.value.style.transform = `scale(${finishScaleValue})`

    console.log('heightAnimSec',heightAnimSec)
    console.log('startBlockDistanse',startBlockDistanse)
    console.log('startBlockDistanseTrigerAnim',startBlockDistanseTrigerAnim)
    console.log('endBlockDistanseTrigerAnim',endBlockDistanseTrigerAnim)
    console.log('heightAnimSec currentProcent',currentProcent)

}


//HOOKS
onMounted(() => {
windowsHeight.value = watchSec.value.clientHeight
    window.addEventListener('resize', firstLoadScollScripts)
    firstLoadScollScripts()
});

onBeforeUnmount(() => {
   
});


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

