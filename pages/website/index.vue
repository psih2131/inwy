<template>

    <main class="main" v-if="pageData[0]">

        <section class="website-hero-sec target-block" v-if="pageData[0].acf['sekcziya_1_-_hero']">
            <div class="website-hero-sec__container">
                <img src="@/assets/images/website/hero.jpg" alt="" class="website-hero-sec__bg">
                <h1 class="website-hero-sec__title" v-html="pageData[0].acf['sekcziya_1_-_hero'].zagolovok"></h1>
                <p class="website-hero-sec__subtitle" v-html="pageData[0].acf['sekcziya_1_-_hero'].podzagolovok"></p>
            </div>
        </section>

        <div class="website-sticky-container"  v-if="pageData[0].acf['sekcziya_2_telefon']">
            <section class="website-fase-sec">
                <div class="website-fase-sec__container">
                    <h2 class="website-fase-sec__title" v-html="pageData[0].acf['sekcziya_2_telefon'].zagolovok"></h2>
                    <p class="website-fase-sec__subtitle" v-html="pageData[0].acf['sekcziya_2_telefon'].podzagolovok"></p>

                    <div class="website-fase-sec__phone">

                        <template v-for="(item, index) in pageData[0].acf['sekcziya_2_telefon'].nadpisi_na_telefone" :key="index">
                            <div :class="`website-fase-sec__phone-info-box phone-info-box phone-info-box--el-${index + 1}`">
                                <div class="phone-info-box__btn">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.3491 31.55V19.44H0.239063V12.09H12.3491V0.0499973H19.6991V12.09H31.7391V19.44H19.6991V31.55H12.3491Z" fill="#ACFA03"/>
                                    </svg>
                                </div>
                                <div class="phone-info-box__info" v-html="item.tekst"></div>
                            </div>
                        </template>

                        <img src="@/assets/images/website/phone.png" alt="" class="website-fase-sec__phone-img">
                    </div>
                </div>
            </section>

            <section class="website-portfolio-sec target-block" v-if="pageData[0].acf['sekcziya_3_-_razrabotannye_sajty']">
                <div class="website-portfolio-sec__container">
                    <h2 class="website-portfolio-sec__title" v-html="pageData[0].acf['sekcziya_3_-_razrabotannye_sajty'].zagolovok"></h2>
                    <p class="website-portfolio-sec__subtitle" v-html="pageData[0].acf['sekcziya_3_-_razrabotannye_sajty'].podzagolovok"></p>
                    <div class="website-portfolio-sec__works-wrapper">
                        <NuxtLink
                            v-for="(work, index) in works"
                            :key="index"
                            class="website-portfolio-sec__work"
                            @mouseenter="show(index)"
                            @mousemove="move($event, index)"
                            @mouseleave="hide(index)"
                            :to="`/website/${work.slug}`"
                        >
                            <span class="website-portfolio-sec__work-name" v-html="work.title.rendered"></span>
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
                            <video autoplay muted loop playsinline>
                            <source :src="work.acf.fonovoe_video_pri_navedenii.url" type="video/mp4">
                            Ваш браузер не поддерживает видео.
                            </video>
                            </div>
                        </NuxtLink>
                          
                    </div>
                </div>
            </section>
        </div>




        <section class="price-sec website-price-sec" v-if="pageData[0].acf['sekcziya_4_-_czena']?.length">
            <div class="price-sec__container">

                <div class="price-sec__body">

                    <div class="price-sec__col" v-for="(item, index) in pageData[0].acf['sekcziya_4_-_czena']" :key="index">
                        <div class="price-sec__list-work-wrapper">
                            <p class="price-sec__list-work-wrapper-title" v-html="item.nazvanie_paketa"></p>
         

                            <p class="price-sec__text" v-html="item.opisanie_paketa"></p>

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
                                <div class="cost-box__btn" @click="openFormPopup(`блок с ценой, тариф: ${item.nazvanie_paketa}`)">
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
                                    <li class="cost-box__dop-list-element" v-for="dopServItem in item.dop_parametry" :key="dopServItem" v-html="dopServItem.tekst"></li>                                 
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>


        <section class="website-bonus-sec target-block" v-if="pageData[0].acf['sekcziya_5_-_bonusy']">
            <div class="website-bonus-sec__container">
                <h2 class="website-bonus-sec__title" v-html="pageData[0].acf['sekcziya_5_-_bonusy'].zagolovok"></h2>
                <p class="website-bonus-sec__subtitle" v-html="pageData[0].acf['sekcziya_5_-_bonusy'].podzagolovok"></p>

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

                                <div class="website-bonus-sec__content-box-body" v-html="pageData[0].acf['sekcziya_5_-_bonusy']['tekst_-_sdelaem_seo']">
                                   
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

                                <div class="website-bonus-sec__content-box-body" v-html="pageData[0].acf['sekcziya_5_-_bonusy']['tekst_-_v_onlajn_rezhime']">
                                    
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

                                <div class="website-bonus-sec__content-box-body"  v-html="pageData[0].acf['sekcziya_5_-_bonusy']['tekst_-_czrm_metriki']">
                                   
                                </div>
                            </div>
                            <div class="website-bonus-sec__content-box-down">
                                <img src="@/assets/images/website/crm.png" alt="">
                            </div>
                            
                        </div>

                        <div class="website-bonus-sec__content-box website-bonus-sec__content-box--v5">
                            <div class="website-bonus-sec__content-box__btn" @click="openFormPopup(`секция после цены там где доп услуги или бонусы. Задать вопрос`)">
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
const route = useRoute()

const store = useCounterStore()

const works =  ref(null)

const activeIndex = ref(null)

const style = ref({ top: '0px', left: '0px' })

const dataPriceSecActioDopIndex = ref(null)

const { data: pageData } = await useFetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/pages?slug=website`)

// получаем рекомендованные товары
try {
  const mainPost = pageData.value?.[0]
  const chitatTakzhe = mainPost?.acf['sekcziya_3_-_razrabotannye_sajty'].raboty

  if (Array.isArray(chitatTakzhe) && chitatTakzhe.length) {
    const slugs = chitatTakzhe.map(obj => obj.post_name)

    const promises = slugs.map(slug =>
      fetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/my-works?slug=${slug}`)
        .then(res => res.json())
        .then(data => data?.[0] || null)
    )

    works.value = await Promise.all(promises)
  }
} catch (error) {
  console.error('Ошибка при загрузке рекомендованных постов:', error)
}

console.log('pageData', pageData)



//METHODS 

//open form popup 
function openFormPopup(valueTarget){
    let message = ''
    if(valueTarget){
        message = valueTarget
    }
    store.changeTrigerButtonForm(valueTarget)
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

