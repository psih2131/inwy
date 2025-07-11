<template>

    <main class="main">
     
        <section class="about-hero-sec">
            <div class="about-hero-sec__container">
                <p class="about-hero-sec__subtiltle">О нас</p>
                <h2 class="about-hero-sec__title"><b>Помогаем бизнесу</b> проложить путь к<span><br></span> простоте за счет своих знаний.</h2>
                <div class="about-hero-sec__img-row">
                    <img src="@/assets/images/about/x1.jpg" alt="" class="about-hero-sec__img">
                    <img src="@/assets/images/about/x2.jpg" alt="" class="about-hero-sec__img">
                    <img src="@/assets/images/about/x3.jpg" alt="" class="about-hero-sec__img">
                    <img src="@/assets/images/about/x4.jpg" alt="" class="about-hero-sec__img">
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

                    <a href="" class="about-services-sec__element">
                        <p class="about-services-sec__element-text">Яндекс.Директ</p>
                        <div class="about-services-sec__element-img-wrapper">
                            <div class="about-services-sec__element-img-wrapper-circle" style="background: #1AFF00;"></div>
                            <img src="@/assets/images/about/a2.jpg" alt="" class="about-services-sec__element-img">
                        </div>
                    </a>

                    <a href="" class="about-services-sec__element">
                        <p class="about-services-sec__element-text">Геомаркетинг</p>
                        <div class="about-services-sec__element-img-wrapper">
                            <div class="about-services-sec__element-img-wrapper-circle" style="background: #1A00FF;"></div>
                            <img src="@/assets/images/about/a3.jpg" alt="" class="about-services-sec__element-img">
                        </div>
                    </a>

                    <a href="" class="about-services-sec__element">
                        <p class="about-services-sec__element-text">VK реклама</p>
                        <div class="about-services-sec__element-img-wrapper">
                            <div class="about-services-sec__element-img-wrapper-circle" style="background: #1A00FF;"></div>
                            <img src="@/assets/images/about/a4.jpg" alt="" class="about-services-sec__element-img">
                        </div>
                    </a>

                    <a href="" class="about-services-sec__element">
                        <p class="about-services-sec__element-text">Telegram Ads</p>
                        <div class="about-services-sec__element-img-wrapper">
                            <div class="about-services-sec__element-img-wrapper-circle" style="background: #FF00BB;"></div>
                            <img src="@/assets/images/about/a4.jpg" alt="" class="about-services-sec__element-img">
                        </div>
                    </a>

                    <a href="" class="about-services-sec__element">
                        <p class="about-services-sec__element-text">Разработка сайтов</p>
                        <div class="about-services-sec__element-img-wrapper">
                            <div class="about-services-sec__element-img-wrapper-circle" style="background: #FF7700;"></div>
                            <img src="@/assets/images/about/a1.jpg" alt="" class="about-services-sec__element-img">
                        </div>
                    </a>
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





//METHODS 








//HOOKS
onMounted(() => {

   
});

onBeforeUnmount(() => {

});



 // props
 const props = defineProps({

  })
  
</script>

