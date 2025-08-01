<template>

    <main class="main">
        <div class="about-hero-sec-100vh" ref="heroSec"></div>
     
        <section class="about-hero-sec" ref="aboutSec">
            <div class="about-hero-sec__container">
                <p class="about-hero-sec__subtiltle">О нас</p>
                <h2 class="about-hero-sec__title"><b>Помогаем бизнесу</b> проложить путь к<span><br></span> простоте за счет своих знаний.</h2>
                <div class="about-hero-sec__img-row">
                    <img src="@/assets/images/about/x1.jpg" alt="" class="about-hero-sec__img">
                    <img src="@/assets/images/about/x2.jpg" alt="" class="about-hero-sec__img" ref="scrollImg1">
                    <img src="@/assets/images/about/x3.jpg" alt="" class="about-hero-sec__img">
                    <img src="@/assets/images/about/x4.jpg" alt="" class="about-hero-sec__img" ref="scrollImg2">
                    <img src="@/assets/images/about/x5.jpg" alt="" class="about-hero-sec__img">
                </div>
                <p class="about-hero-sec__down-text">дизайном дополняем маркетинг</p>
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
                            v-for="(item, index) in aboutFixedImageList" :key="index"
                            class="circle-sector" 
                            @mouseenter="show(index)"
                            @mousemove="move($event, index)"
                            @mouseleave="hide(index)"
                            :class="[`circle-sector--${index}`]">


                                <img 
                                :class="{ active: activeIndex === index }"
                                :style="activeIndex === index ? style : null"
                                src="@/assets/images/about/fix1.jpg" alt="" class="circle-sector__img">


                            </div>
               
                 
                    </div>
                </div>
                <div class="about-why-we-are__right">
                   <div class="about-why-we-are__text-wrapper">
                    <p><strong>Мы — команда inwy</strong>           , и наша миссия — делать жизнь предпринимателей проще. <img src="@/assets/images/about/text-1.png" alt=""></p>

                    <p><strong>Наш путь начался с продаж</strong>, поэтому мы как никто другой понимаем боли бизнеса и знаем, как их решать. 
                        Первым нашим проектом стала компания mediamaps          ,<strong>которая занималась продвижением на онлайн-картах</strong>. 
                        Но очень скоро мы осознали, что у предпринимателей гораздо больше задач, в решении которых мы можем помочь. 
                        <strong>Так появилась inwy — компания с широким спектром услуг и особым отношением к партнёрам</strong>: мы работаем с вами так же ответственно, как и для себя.
                          Мы родом из Петербурга, а значит, в <strong>нашей ДНК — сильный дизайн, маркетинг и продажи</strong>. Мы используем этот опыт и экспертизу во благо наших клиентов.
inwy — молодая, но амбициозная команда. <strong>Нам не занимать опыта, усердия и желания расти</strong>. Уже сейчас наши клиенты доверяют нам и рекомендуют своим партнёрам — за это мы им искренне благодарны.
<strong>Мы не просто оказываем услуги, а становимся надёжными помощниками в вашем бизнесе</strong>. Доверьтесь inwy — и убедитесь сами! <img src="@/assets/images/about/text-2.png" alt=""></p>
                   </div>
                </div>
            </div>
        </section>

        <section class="about-services-sec">
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

                    <NuxtLink to="/vkads" class="about-services-sec__element about-services-sec__element--vk">
                        <p class="about-services-sec__element-text">VK реклама</p>
                        <div class="about-services-sec__element-img-wrapper">
                            <div class="about-services-sec__element-img-wrapper-circle" style="background: #1A00FF;"></div>
                            <img src="@/assets/images/about/a4.jpg" alt="" class="about-services-sec__element-img">
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

// import { useCounterStore } from '@/stores/counter'

import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';


//DATA
const scrollImg1 = ref(null)

const scrollImg2 = ref(null)

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
    
    scrollImg1.value.style.transform = `translateY(-${finishScaleValue}px)`
    scrollImg2.value.style.transform = `translateY(-${finishScaleValue}px)`

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



 // props
 const props = defineProps({

  })
  
</script>

