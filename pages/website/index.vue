<template>

    <main class="main">

        <section class="website-hero-sec">
            <div class="website-hero-sec__container">
                <img src="@/assets/images/website/hero.jpg" alt="" class="website-hero-sec__bg">
                <h1 class="website-hero-sec__title">Делаем сайты, которые продают</h1>
                <p class="website-hero-sec__subtitle">И  любят поисковики</p>
            </div>
        </section>

        <div class="website-sticky-container">
            <section class="website-fase-sec">
                <div class="website-fase-sec__container">
                    <h2 class="website-fase-sec__title">Создаем запоминающиеся сайты, <span><br></span> которые продают</h2>
                    <p class="website-fase-sec__subtitle">Ваш сайт — это первое впечатление о компании. Мы делаем его настолько ярким и удобным,<span><br></span> что клиенты сразу хотят с вами работать.</p>

                    <div class="website-fase-sec__phone">

                        <div class="website-fase-sec__phone-info-box phone-info-box phone-info-box--el-1">
                            <div class="phone-info-box__btn">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.3491 31.55V19.44H0.239063V12.09H12.3491V0.0499973H19.6991V12.09H31.7391V19.44H19.6991V31.55H12.3491Z" fill="#ACFA03"/>
                                </svg>
                            </div>
                            <div class="phone-info-box__info">удобный дизайн</div>
                        </div>

                        <div class="website-fase-sec__phone-info-box phone-info-box phone-info-box--el-2">
                            <div class="phone-info-box__btn">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.3491 31.55V19.44H0.239063V12.09H12.3491V0.0499973H19.6991V12.09H31.7391V19.44H19.6991V31.55H12.3491Z" fill="#ACFA03"/>
                                </svg>
                            </div>
                            <div class="phone-info-box__info">простота восприятия информации</div>
                        </div>

                        <div class="website-fase-sec__phone-info-box phone-info-box phone-info-box--el-3">
                            <div class="phone-info-box__btn">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.3491 31.55V19.44H0.239063V12.09H12.3491V0.0499973H19.6991V12.09H31.7391V19.44H19.6991V31.55H12.3491Z" fill="#ACFA03"/>
                                </svg>
                            </div>
                            <div class="phone-info-box__info">адаптивный дизайн под все устройства</div>
                        </div>

                        <div class="website-fase-sec__phone-info-box phone-info-box phone-info-box--el-4">
                            <div class="phone-info-box__btn">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.3491 31.55V19.44H0.239063V12.09H12.3491V0.0499973H19.6991V12.09H31.7391V19.44H19.6991V31.55H12.3491Z" fill="#ACFA03"/>
                                </svg>
                            </div>
                            <div class="phone-info-box__info">быстрая загрузка</div>
                        </div>

                        <img src="@/assets/images/website/phone.png" alt="" class="website-fase-sec__phone-img">
                    </div>
                </div>
            </section>

            <section class="website-portfolio-sec">
                <div class="website-portfolio-sec__container">
                    <h2 class="website-portfolio-sec__title">Разработанные сайты</h2>
                    <p class="website-portfolio-sec__subtitle">которые отвечают задачам</p>
                    <div class="website-portfolio-sec__works-wrapper">
                        <div
                            v-for="(work, index) in works"
                            :key="index"
                            class="website-portfolio-sec__work"
                            @mouseenter="show(index)"
                            @mousemove="move($event, index)"
                            @mouseleave="hide(index)"
                        >
                            <span class="website-portfolio-sec__work-name">{{ work.title }}</span>
                            <span class="website-portfolio-sec__work-ar">
                                <svg width="50" height="40" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_3143_1547)">
                                <path d="M50.002 20.0012C50.002 21.1062 49.069 22.0012 47.918 22.0012H7.114L22.309 36.5862C23.123 37.3682 23.123 38.6352 22.309 39.4162C21.495 40.1982 20.175 40.1982 19.361 39.4162L0.611 21.4162C0.22 21.0412 0 20.5322 0 20.0012C0 19.4702 0.22 18.9612 0.611 18.5862L19.361 0.586238C20.175 -0.194762 21.495 -0.194762 22.309 0.586238C23.123 1.36824 23.123 2.63524 22.309 3.41624L7.114 18.0012H47.918C49.069 18.0012 50.002 18.8972 50.002 20.0012Z" fill="#ACFA00"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_3143_1547">
                                <rect width="50.002" height="40.002" fill="white"/>
                                </clipPath>
                                </defs>
                                </svg>
                            </span>

                            <div
                            class="website-portfolio-sec__work-previev-container"
                            :class="{ active: activeIndex === index }"
                            :style="activeIndex === index ? style : null"
                            >
                            <!-- <img :src="work.preview" alt="preview" /> -->
                            </div>
                        </div>
                          
                    </div>
                </div>
            </section>
        </div>




        <section class="price-sec website-price-sec">
            <div class="price-sec__container">

                <div class="price-sec__body">
                    <div class="price-sec__col">
                        <div class="price-sec__list-work-wrapper">
                            <p class="price-sec__list-work-wrapper-title">Лендинг</p>

                            <p class="price-sec__text">
                                Сайт, направленный на целевые действия: заявка, подписка, скачивание, покупка, расчет стоимости или презентация продукта/услуги.
                            </p>

                            <div class="price-sec__list-work-wrapper-down-btn">
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
                                <p class="cost-box__value">15 000 ₽</p>
                                <div class="cost-box__btn">
                                    <p class="cost-box__btn-title">Заказать</p>
                                    <div class="cost-box__btn-icon">
                                        <svg width="19" height="24" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.591701 1.23274L1.16743 0.564631L17.8807 10.8802L17.9021 12.2716L1.51353 23.0717L0.917524 22.4216L10.397 11.6789L0.591701 1.23274Z" fill="#ACFA03"/>
                                        </svg>


                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    


                    <div class="price-sec__col">
                        <div class="price-sec__list-work-wrapper">
                            <p class="price-sec__list-work-wrapper-title">Многостраничный</p>
                            <p class="price-sec__text">Сайт с многоуровневой структурой, объединенной единой навигацией (меню) или связующими блоками. Каждая страница представляет отдельный раздел или направление, решающее конкретные задачи в рамках общей цели проекта.</p>

                            <div class="price-sec__list-work-wrapper-down-btn">
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
                                <p class="cost-box__value">10 000 ₽</p>
                                <div class="cost-box__btn">
                                    <p class="cost-box__btn-title">Заказать</p>
                                    <div class="cost-box__btn-icon">
                                        <svg width="19" height="24" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.591701 1.23274L1.16743 0.564631L17.8807 10.8802L17.9021 12.2716L1.51353 23.0717L0.917524 22.4216L10.397 11.6789L0.591701 1.23274Z" fill="#ACFA03"/>
                                        </svg>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div class="price-sec__col">
                        <div class="price-sec__list-work-wrapper">
                            <p class="price-sec__list-work-wrapper-title">Интернет магазин</p>
                            <p class="price-sec__text">Сайт с детализированным каталогом товаров, ориентированный на сбор заявок или онлайн-продажи через корзину. Функционал включает промокоды, скидки, выбор способов доставки, настройку вариантов и свойств товаров.</p>

                            <div class="price-sec__list-work-wrapper-down-btn">
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
                                <p class="cost-box__value">10 000 ₽</p>
                                <div class="cost-box__btn">
                                    <p class="cost-box__btn-title">Заказать</p>
                                    <div class="cost-box__btn-icon">
                                        <svg width="19" height="24" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.591701 1.23274L1.16743 0.564631L17.8807 10.8802L17.9021 12.2716L1.51353 23.0717L0.917524 22.4216L10.397 11.6789L0.591701 1.23274Z" fill="#ACFA03"/>
                                        </svg>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>


        <section class="website-bonus-sec">
            <div class="website-bonus-sec__container">
                <h2 class="website-bonus-sec__title">Это ещё не все. </h2>
                <p class="website-bonus-sec__subtitle">У нас для вас бонусы.</p>

                <div class="website-bonus-sec__wrapper">
                    <div class="website-bonus-sec__col-1">
                        <div class="website-bonus-sec__content-box website-bonus-sec__content-box--v1">
                            <div class="website-bonus-sec__content-box-top">
                                <div class="website-bonus-sec__content-box-header">
                                    <div class="website-bonus-sec__content-box-header-icon">
                                        <img src="@/assets/images/website/x1.png" alt="">
                                    </div>
                                    <p class="website-bonus-sec__content-box-header-text">Сделаем CEO</p>
                                </div>

                                <div class="website-bonus-sec__content-box-body">
                                    Поможем настроить SEO вашего сайта для улучшения позиций в поиске. Это увеличит органический трафик и поможет привлекать клиентов без дополнительных рекламных затрат. Работаем с технической оптимизацией, контентом и внутренней структурой сайта.
                                </div>
                            </div>
                            <div class="website-bonus-sec__content-box-down">
                                <img src="@/assets/images/website/request-img.png" alt="">
                            </div>
                            
                        </div>
                    </div>
                    <div class="website-bonus-sec__col-2">

                        <div class="website-bonus-sec__content-box website-bonus-sec__content-box--v2">
                            <div class="website-bonus-sec__content-box-top">
                                <div class="website-bonus-sec__content-box-header">
                                    <div class="website-bonus-sec__content-box-header-icon">
                                        <img src="@/assets/images/website/x2.png" alt="">
                                    </div>
                                    <p class="website-bonus-sec__content-box-header-text">Подключим домен</p>
                                </div>
                            </div>

                        </div>


                        <div class="website-bonus-sec__content-box website-bonus-sec__content-box--v3">
                            <div class="website-bonus-sec__content-box-top">
                                <div class="website-bonus-sec__content-box-header">
                                    <div class="website-bonus-sec__content-box-header-icon">
                                        <img src="@/assets/images/website/x3.png" alt="">
                                    </div>
                                    <p class="website-bonus-sec__content-box-header-text">В online режиме</p>
                                </div>

                                <div class="website-bonus-sec__content-box-body">
                                    Будем сообщать и согласовывать каждый этап работы, чтобы вы остались довольны конечным результатом 
                                </div>
                            </div>

                            <div class="website-bonus-sec__content-box-down">
                                <img src="@/assets/images/website/social.png" alt="">
                            </div>

                        </div>


                    </div>
                    <div class="website-bonus-sec__col-3">

                        <div class="website-bonus-sec__content-box website-bonus-sec__content-box--v4">
                            <div class="website-bonus-sec__content-box-top">
                                <div class="website-bonus-sec__content-box-header">
                                    <p class="website-bonus-sec__content-box-header-text">Подключим CRM и метрики</p>
                                </div>

                                <div class="website-bonus-sec__content-box-body">
                                    За посещениями сайта важно и нужно следить. Настроим все метрики, прием заявок, чтобы сделать процесс работы с сайтом максимально комфортным
                                </div>
                            </div>
                            <div class="website-bonus-sec__content-box-down">
                                <img src="@/assets/images/website/crm.png" alt="">
                            </div>
                            
                        </div>

                        <div class="website-bonus-sec__content-box website-bonus-sec__content-box--v5">
                            <div class="website-bonus-sec__content-box__btn">
                                <p class="website-bonus-sec__content-box__btn-title">Задать вопрос </p>
                                <div class="website-bonus-sec__content-box__btn-icon">
                                    <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.29329 15.2256C0.583925 15.6535 0.358069 16.574 0.788825 17.2816C1.21958 17.9892 2.14383 18.216 2.8532 17.7881L1.29329 15.2256ZM22.609 5.35816C22.806 4.55522 22.3121 3.74396 21.5059 3.54616L8.36837 0.322785C7.56218 0.124982 6.74894 0.615541 6.55193 1.41848C6.35493 2.22142 6.84876 3.03268 7.65495 3.23048L19.3328 6.0957L16.4791 17.7265C16.2821 18.5294 16.776 19.3407 17.5821 19.5385C18.3883 19.7363 19.2016 19.2457 19.3986 18.4428L22.609 5.35816ZM2.07324 16.5068L2.8532 17.7881L21.9292 6.28128L21.1492 5.00001L20.3693 3.71873L1.29329 15.2256L2.07324 16.5068Z" fill="white"/>
                                    </svg>

                                </div>
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
const works = [
  { title: 'Korex', preview: '/images/korex-preview.jpg' },
  { title: 'Anime Point', preview: '/images/anime-preview.jpg' },
  { title: 'Garms climat', preview: '/images/anime-preview.jpg' },
  { title: 'Школа Биодинамики', preview: '/images/anime-preview.jpg' },
  { title: 'Edemcar', preview: '/images/anime-preview.jpg' },
  { title: 'ВалаАМ', preview: '/images/anime-preview.jpg' },
  // добавь другие кейсы
]

const activeIndex = ref(null)

const style = ref({ top: '0px', left: '0px' })



//METHODS 
function show(index) {
  activeIndex.value = index
}

function move(event, index) {
  if (activeIndex.value === index) {
    const offsetX = -150 // половина ширины превью
    const offsetY = -100 // половина высоты превью
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






//HOOKS
onMounted(() => {

   
});

onBeforeUnmount(() => {
   
});



  
</script>

