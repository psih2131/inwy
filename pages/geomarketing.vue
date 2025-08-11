<template>

  <main class="main" v-if="pageData[0]">
    <div class="geomarketing-100vh-sec" ref="g100vhSec"></div>

    <section class="geomarketing-hero-sec" v-if="pageData[0].acf?.sekcziya_1_hero">
      <div class="geomarketing-hero-sec__container">
        <div class="geomarketing-hero-sec__images-claster">
          <img src="@/assets/images/geo/hero-phone.png" alt="" class="geomarketing-hero-sec__image geomarketing-herogeomarketing-hero-sec__image--phone">

          <img v-for="(item, index) in pageData[0].acf.sekcziya_1_hero['4_malyh_izobrazheniya']" :key="index"
          :src="item.izobrazhenie.url" 
          :alt="item.izobrazhenie.alt" 
          :class="`geomarketing-hero-sec__image geomarketing-hero-sec__image--x${index + 1}`">
          <!-- <img src="@/assets/images/geo/hero-2.jpg" alt="" class="geomarketing-hero-sec__image geomarketing-hero-sec__image--x2">
          <img src="@/assets/images/geo/hero-3.jpg" alt="" class="geomarketing-hero-sec__image geomarketing-hero-sec__image--x3">
          <img src="@/assets/images/geo/hero-4.jpg" alt="" class="geomarketing-hero-sec__image geomarketing-hero-sec__image--x4"> -->
        </div>
        <div class="geomarketing-hero-sec__text">
          <h1 class="geomarketing-hero-sec__title" v-html="pageData[0].acf.sekcziya_1_hero.zagolovok"></h1>
          <p class="geomarketing-hero-sec__subtitle" v-html="pageData[0].acf.sekcziya_1_hero.podzagolovok"></p>
        </div>
      </div>
    </section>

    
    <section class="geomarketing-road-sec target-block" ref="roadSec">

      <div class="geomarketing-road-sec__container">
        <div class="geomarketing-road-sec__text">
          <h2 class="geomarketing-road-sec__title" v-html="pageData[0].acf.sekcziya_2_doroga_k_serdczu_klienta.zagolovok"></h2>
          <p class="geomarketing-road-sec__text"  v-html="pageData[0].acf.sekcziya_2_doroga_k_serdczu_klienta.podzagolovok"></p>
        </div>
        <div class="geomarketing-road-sec__info-wrapper">
          <div class="geomarketing-road-sec__info-wrapper-col">
            <div class="geomarketing-road-sec__info-box geomarketing-road-sec__info-box--el1">
              <p class="geomarketing-road-sec__info-box-text" v-html="pageData[0].acf.sekcziya_2_doroga_k_serdczu_klienta.tekst_levyj_verhnij_blok">
         
              </p>

              <div class="geomarketing-road-sec__info-box-graf-1">
                <div class="geomarketing-road-sec__info-box-graf-1-header">
                  <p class="geomarketing-road-sec__info-box-graf-1-header-text">Салон красоты рядом с метро..</p>
                  <div class="geomarketing-road-sec__info-box-graf-1-header-right">
                    <div class="geomarketing-road-sec__info-box-graf-1-header-icon">
                      <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                      <rect width="29" height="29" fill="url(#pattern0_806_81)"/>
                      <defs>
                      <pattern id="pattern0_806_81" patternContentUnits="objectBoundingBox" width="1" height="1">
                      <use xlink:href="#image0_806_81" transform="scale(0.00195312)"/>
                      </pattern>
                      <image id="image0_806_81" width="512" height="512" preserveAspectRatio="none" xlink:href="data:image/png;base64,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AKAHCBAgQIBAQQEBoGDRLZkAAQIECAgAeoAAAQIECBQUEAAKFt2SCRAgQICAAKAHCBAgQIBAQQEBoGDRLZkAAQIECAgAeoAAAQIECBQUEAAKFt2SCRAgQICAAKAHCBAgQIBAQQEBoGDRLZkAAQIECAgAeoAAAQIECBQUEAAKFt2SCRAgQICAAKAHCBAgQIBAQQEBoGDRLZkAAQIECAgAeoAAAQIECBQUEAAKFt2SCRAgQICAAKAHCBAgQIBAQQEBoGDRLZkAAQIECAgAeoAAAQIECBQUEAAKFt2SCRAgQICAAKAHCBAgQIBAQQEBoGDRLZkAAQIECAgAeoAAAQIECBQUEAAKFt2SCRAgQICAAKAHCBAgQIBAQQEBoGDRLZkAAQIECAgAeoAAAQIECBQUEAAKFt2SCRAgQICAAKAHCBAgQIBAQQEBoGDRLZkAAQIECAgAeoAAAQIECBQUEAAKFt2SCRAgQICAAKAHCBAgQIBAQQEBoGDRLZkAAQIECAgAeoAAAQIECBQUEAAKFt2SCRAgQICAAKAHCBAgQIBAQQEBoGDRLZkAAQIECAgAeoAAAQIECBQUEAAKFt2SCRAgQICAAKAHCBAgQIBAQQEBoGDRLZkAAQIECAgAeoAAAQIECBQUEAAKFt2SCRAgQICAAKAHCBAgQIBAQQEBoGDRLZkAAQIECAgAeoAAAQIECBQUEAAKFt2SCRAgQICAAKAHCBAgQIBAQQEBoGDRLZkAAQIECAgAeoAAAQIECBQUEAAKFt2SCRAgQICAAKAHCBAgQIBAQQEBoGDRLZkAAQIECAgAeoAAAQIECBQUEAAKFt2SCRAgQICAAKAHCBAgQIBAQQEBoGDRLZkAAQIECAgAeoAAAQIECBQUEAAKFt2SCRAgQICAAKAHCBAgQIBAQQEBoGDRLZkAAQIECAgAeoAAAQIECBQUEAAKFt2SCRAgQICAAKAHCBAgQIBAQQEBoGDRLZkAAQIECAgAeoAAAQIECBQU+B+t9x+X9gMBqAAAAABJRU5ErkJggg=="/>
                      </defs>
                      </svg>

                    </div>
                    <div class="geomarketing-road-sec__info-box-graf-1-header-hr">
                     

                    </div>

                    <div class="geomarketing-road-sec__info-box-graf-1-header-icon">
                       <svg width="16" height="23" viewBox="0 0 16 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.55244 21.3216C2.55972 22.396 4.24729 22.4504 5.32172 21.4432C6.39615 20.4359 6.45059 18.7483 5.44331 17.6739C4.43603 16.5995 2.74846 16.545 1.67403 17.5523C0.599599 18.5596 0.545162 20.2471 1.55244 21.3216ZM14.9975 3.49756L9.99691 0.61189L9.99816 6.38539L14.9975 3.49756ZM10 19.4977L10 18.9977L10 19.4977ZM11.4987 12.5L11.4987 13L11.4987 12.5ZM7.99935 12.5L7.99935 13L7.99935 12.5ZM11.4987 19.4977L11.4987 18.9977L11.4987 19.4977ZM3.49787 19.4977L3.49788 19.9977L10 19.9977L10 19.4977L10 18.9977L3.49787 18.9977L3.49787 19.4977ZM10 19.4977L10 19.9977L11.4987 19.9977L11.4987 19.4977L11.4987 18.9977L10 18.9977L10 19.4977ZM7.99838 3.49907L7.99848 3.99907L10.4976 3.99853L10.4975 3.49853L10.4974 2.99853L7.99827 2.99907L7.99838 3.49907ZM11.4987 12.5L11.4987 12L7.99935 12L7.99935 12.5L7.99935 13L11.4987 13L11.4987 12.5ZM14.9976 15.9989L15.4976 15.999C15.4977 13.7904 13.7073 12 11.4987 12L11.4987 12.5L11.4987 13C13.155 13 14.4977 14.3427 14.4976 15.9989L14.9976 15.9989ZM3.49888 7.99853L3.99888 7.99864C3.99938 5.78993 5.78978 3.99955 7.99848 3.99907L7.99838 3.49907L7.99827 2.99907C5.23745 2.99967 2.9995 5.23759 2.99888 7.99842L3.49888 7.99853ZM3.49888 7.99853L2.99888 7.99842C2.99826 10.7605 5.23723 13 7.99935 13L7.99935 12.5L7.99935 12C5.7896 12 3.99839 10.2084 3.99888 7.99864L3.49888 7.99853ZM11.4987 19.4977L11.4987 19.9977C13.7072 19.9977 15.4976 18.2074 15.4976 15.999L14.9976 15.9989L14.4976 15.9989C14.4976 17.6551 13.1549 18.9977 11.4987 18.9977L11.4987 19.4977Z" fill="white"/>
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div class="geomarketing-road-sec__info-box-graf-1-body">
                  <div class="geomarketing-road-sec__info-box-graf-1-boy-row geomarketing-road-sec__info-box-graf-1-boy-row-green"></div>
                  <div class="geomarketing-road-sec__info-box-graf-1-boy-row"></div>
                  <div class="geomarketing-road-sec__info-box-graf-1-boy-row"></div>
                </div>
              </div>
            </div>

             <div class="geomarketing-road-sec__info-box geomarketing-road-sec__info-box--el2">
              <p class="geomarketing-road-sec__info-box-text" v-html="pageData[0].acf.sekcziya_2_doroga_k_serdczu_klienta.tekst_levyj_nizhnij_blok">
               
              </p>
              <div class="geomarketing-road-sec__info-box-map-list">
                <div class="geomarketing-road-sec__info-box-map-list-element geomarketing-road-sec__info-box-map-list-element--v1">
                  Яндекс.Карты
                </div>

                <div class="geomarketing-road-sec__info-box-map-list-element geomarketing-road-sec__info-box-map-list-element--v2">
                  2ГИС
                </div>

                <div class="geomarketing-road-sec__info-box-map-list-element geomarketing-road-sec__info-box-map-list-element--v3">
                  ZOON
                </div>

                <div class="geomarketing-road-sec__info-box-map-list-element geomarketing-road-sec__info-box-map-list-element--v4">
                 +5
                </div>
              </div>
            </div>

          </div>
          <div class="geomarketing-road-sec__info-wrapper-col">
            <div class="geomarketing-road-sec__info-box geomarketing-road-sec__info-box--el3">
              <p class="geomarketing-road-sec__info-box-text" v-html="pageData[0].acf.sekcziya_2_doroga_k_serdczu_klienta.tekst_pravyj_verhnij_blok">

              </p>

              <div class="geomarketing-road-sec__info-box-graf-2">
                <div class="geomarketing-road-sec__info-box-graf-2-container">
                  <img src="@/assets/images/geo/sec-2-x1.png" alt="" class="geomarketing-road-sec__info-box-graf-2-bg">

                  <div class="geomarketing-road-sec__info-box-graf-2-ar-1">
                     <img src="@/assets/images/geo/ar-1.png" alt="" class="geomarketing-road-sec__info-box-graf-2-ar-img">
                  </div>

                  <div class="geomarketing-road-sec__info-box-graf-2-ar-2">
                     <img src="@/assets/images/geo/ar-2.png" alt="" class="geomarketing-road-sec__info-box-graf-2-ar-img">
                  </div>
                </div>
              </div>
            </div>

             <div class="geomarketing-road-sec__info-box geomarketing-road-sec__info-box--el4">
              <img src="@/assets/images/geo/map.jpg" alt="" class="geomarketing-road-sec__info-box-map">
             </div>
          </div>
        </div>
        <div class="geomarketing-road-sec__partners-wrapper">
          <div class="geomarketing-road-sec__partners-wrapper-header">
            <div class="geomarketing-road-sec__partners-wrapper-header-line geomarketing-road-sec__partners-wrapper-header-line--v1"></div>
            <p class="geomarketing-road-sec__partners-wrapper-header-text">более <b>70+</b> компаний доверились нам</p>
            <div class="geomarketing-road-sec__partners-wrapper-header-line geomarketing-road-sec__partners-wrapper-header-line--v2"></div>
          </div>

          <div class="geomarketing-road-sec__partners-wrapper-row">
            <div class="geomarketing-road-sec__partners-wrapper-element" v-for="item in pageData[0].acf.sekcziya_2_doroga_k_serdczu_klienta.logotipy" :key="item">
              <img :src="item.izobrazhenie.url" :alt="item.izobrazhenie.alt">
            </div>
          </div>
        </div>
      </div>
    </section>



    <section class="geomarketing-phones-sec" v-if="pageData[0].acf?.sekcziya_3_vizualizacziya_kart_v_telefone">
      <div class="geomarketing-phones-sec__container">
          <div class="geomarketing-phones-sec__claster">
            <div class="geomarketing-phones-sec__phone geomarketing-phones-sec__phone-v1">
              <img src="@/assets/images/geo/phone-sec-1.png" alt="">
            </div>

            <div class="geomarketing-phones-sec__phone geomarketing-phones-sec__phone-v2">
              <img src="@/assets/images/geo/phone-sec-2.png" alt="">

              <div v-for="(item, index) in pageData[0].acf.sekcziya_3_vizualizacziya_kart_v_telefone.tekstovyj_blok" :key="index"
              :class="`geomarketing-phones-sec__phone-v2-data-element geomarketing-phones-sec__phone-v2-data-element--${index + 1}`">
                <div class="geomarketing-phones-sec__phone-v2-data-element-btn">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.3491 31.55V19.44H0.239063V12.09H12.3491V0.0499973H19.6991V12.09H31.7391V19.44H19.6991V31.55H12.3491Z" fill="#ACFA03"/>
                </svg>

                </div>

                <div class="geomarketing-phones-sec__phone-v2-data-element-info">
                  <p class="geomarketing-phones-sec__phone-v2-data-element-info-title" v-html="item.zagolovok"></p>
                  <p class="geomarketing-phones-sec__phone-v2-data-element-info-text" v-html="item.tekst"></p>
                </div>
              </div>

            </div>

            <div class="geomarketing-phones-sec__phone geomarketing-phones-sec__phone-v3">
              <img src="@/assets/images/geo/phone-sec-3.png" alt="">
            </div>
          </div>
      </div>
    </section>


    <section class="geomarketing-revard-sec target-block">
      <div class="geomarketing-revard-sec__claster">
        <div class="geomarketing-revard-sec__container">
          <h2 class="geomarketing-revard-sec__title">Награды в ваших руках.</h2>
          <p class="geomarketing-revard-sec__subtitle">Благодаря нашей работе.</p>

          <div class="geomarketing-revard-sec__wrapper" v-if="pageData[0].acf?.sekcziya_4_nagrady">
            <div class="geomarketing-revard-sec__info">
              <div class="geomarketing-revard-sec__title-info" v-html="pageData[0].acf.sekcziya_4_nagrady.zagolovok_1"></div>
              <div class="geomarketing-revard-sec__title-info" v-html="pageData[0].acf.sekcziya_4_nagrady.zagolovok_2"></div>
              <div class="geomarketing-revard-sec__text" v-html="pageData[0].acf.sekcziya_4_nagrady.tekst"></div>

              <div class="geomarketing-revard-sec__info-down-row">
                <img src="@/assets/images/geo/reward-img.png" alt="" class="geomarketing-revard-sec__img">

                <div class="website-bonus-sec__content-box__btn geomarketing-revard-sec__btn cursor-mod cursor-mod-dark-form-text" @click="openFormPopup('Кнопка задать вопрос в наградах')">
                    <p class="website-bonus-sec__content-box__btn-title">Задать вопрос </p>
                    <div class="website-bonus-sec__content-box__btn-icon">
                        <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.29329 15.2256C0.583925 15.6535 0.358069 16.574 0.788825 17.2816C1.21958 17.9892 2.14383 18.216 2.8532 17.7881L1.29329 15.2256ZM22.609 5.35816C22.806 4.55522 22.3121 3.74396 21.5059 3.54616L8.36837 0.322785C7.56218 0.124982 6.74894 0.615541 6.55193 1.41848C6.35493 2.22142 6.84876 3.03268 7.65495 3.23048L19.3328 6.0957L16.4791 17.7265C16.2821 18.5294 16.776 19.3407 17.5821 19.5385C18.3883 19.7363 19.2016 19.2457 19.3986 18.4428L22.609 5.35816ZM2.07324 16.5068L2.8532 17.7881L21.9292 6.28128L21.1492 5.00001L20.3693 3.71873L1.29329 15.2256L2.07324 16.5068Z" fill="white"/>
                        </svg>

                    </div>
                </div>
              </div>
            </div>
            <div class="geomarketing-revard-sec__phones">
              <img src="@/assets/images/geo/reward-phones.png" alt="" class="geomarketing-revard-sec__phones-img">
            </div>
            
          </div>

          <div class="geomarketing-revard-sec__wrapper-row"></div>

          <div class="geomarketing-revard-sec__reviews" v-if="pageData[0].acf?.otzyvy">
            <div class="geomarketing-revard-sec__reviews-text">
              <h2 class="geomarketing-revard-sec__reviews-ttitle" v-html="pageData[0].acf.otzyvy.zagolovok"></h2>
              <p class="geomarketing-revard-sec__reviews-subtitle" v-html="pageData[0].acf.otzyvy.podzagolovok"></p>
            </div>

            <div class="geomarketing-revard-sec__reviews-list">

              <componentReview  v-for="item in pageData[0].acf.otzyvy.spisok_otzyvov" :key="item" :commentData="item"/>

            </div>
          </div>
          
        </div>
      </div>
      
    </section>



    <section class="geomarketing-price-sec" v-if="pageData[0].acf?.czeny?.length">
      <div class="geomarketing-price-sec__container">

        <div class="geomarketing-price-sec__header">
          <div class="geomarketing-price-sec__header-row-1"></div>
          <ul class="geomarketing-price-sec__header-nav">

            <li v-for="(item, index) in pageData[0].acf.czeny"
            :key="index" 
            class="geomarketing-price-sec__header-li"
            :class="{'geomarketing-price-sec__header-li--activ': currentTabPrice == index + 1}"
            @click="currentTabPrice = index + 1" v-html="item.period"></li>

          </ul>

          <div class="geomarketing-price-sec__header-row-2"></div>
        </div>

        <div class="geomarketing-price-sec__body">

          <template v-for="(item, index) in pageData[0].acf.czeny" :key="index">


            <div class="geomarketing-price-sec__body-tab" v-if="currentTabPrice == index + 1">

            <div v-for="(itemTarif, tarifIndex) in item.tarify" :key="tarifIndex" 
            class="geomarketing-price-sec__element geomarketing-price-item" 
            :class="{'geomarketing-price-item--z-index': dataPriceSecActioDopIndex == tarifIndex}">
              <div class="geomarketing-price-item__top">
                <p class="geomarketing-price-item__title" v-html="itemTarif.nazvanie_tarifa"></p>
                <p class="geomarketing-price-item__price">{{ itemTarif.czena }} ₽</p>
                <p class="geomarketing-price-item__subprice">{{ itemTarif.czena_za_mesyacz }}/мес</p>

                <div class="cost-box__btn cursor-mod cursor-mod-price" @click="openFormPopup(`Блок с ценой. Период: ${item.period} | Тариф: ${itemTarif.nazvanie_tarifa}`)">
                  <p class="cost-box__btn-title">Заказать</p>
                  <div class="cost-box__btn-icon">
                      <svg width="19" height="24" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.591701 1.23274L1.16743 0.564631L17.8807 10.8802L17.9021 12.2716L1.51353 23.0717L0.917524 22.4216L10.397 11.6789L0.591701 1.23274Z" fill="#ACFA03"/>
                      </svg>
                  </div>
              </div>
              <ul class="geomarketing-price-item__services-list">
                <li class="geomarketing-price-item__services-list-li" v-for="serviceItem in itemTarif.spisok_uslug" :key="serviceItem">{{ serviceItem.tekst }}</li>
              </ul>
              </div>
              <div class="geomarketing-price-item__down">
                <div class="geomarketing-price-item__more" @click="dataPriceSecActioDopIndex = tarifIndex, targetClickOutside()">
                  <img src="@/assets/images/geo/more.png" alt="">
                  другие преимущества
                </div>
              </div>


              <div class="cost-box__dop" v-if="dataPriceSecActioDopIndex == tarifIndex">
                  <p class="cost-box__dop-title" v-html="itemTarif.nazvanie_tarifa" ></p>
                  <ul class="cost-box__dop-list">
                      <li class="cost-box__dop-list-element" v-for="dopServItem in itemTarif.polnyj_spisok_uslug" :key="dopServItem">{{ dopServItem.test }}</li>                                 
                  </ul>
              </div>

            </div>


            <div class="geomarketing-price-sec__element geomarketing-price-item geomarketing-price-item-dop" v-if="item.dop_tarif">
              <div class="eomarketing-price-item-dop__top-box">
                <p class="eomarketing-price-item-dop__title" v-html="item.dop_tarif.zagolovok"></p>
              </div>

              <div class="geomarketing-price-item-dop__list-secvicess">

                <div class="geomarketing-price-item-dop__sercise" v-for="itemDop in item.dop_tarif.spisok_dop_poshhadok" :key="itemDop" v-html="itemDop.nazvanie"></div>

              </div>
              <div class="geomarketing-price-item-dop__price-box">
                <p class="geomarketing-price-item__price">{{ item.dop_tarif.czena_za_1_ploshhadku }} ₽</p>
                <p class="geomarketing-price-item__subprice">за 1 площадку</p>
              </div>

            </div>

          </div>

          </template>

        </div>
      </div>
    </section>



     <section class="direct-other-services-sec geomarketing-other-services-sec">
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

import { useCounterStore } from '@/stores/counter'

import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';

import componentReview from '@/components/review.vue'


//DATA
const route = useRoute()

const store = useCounterStore()

const currentTabPrice = ref(1)

const dataPriceSecActioDopIndex = ref(null)

const { data: pageData } = await useFetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/pages?slug=geomarketing`)

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




const windowsHeight = ref(null)
const g100vhSec = ref()
const roadSec = ref(null)
const scrollPosition = ref(null)

function firstLoadScollScripts(){
    scrollPosition.value = window.scrollY
    watchSecAnimV2()
    window.addEventListener('scroll', handleScroll);
    
}

function handleScroll(){
    scrollPosition.value = window.scrollY
    watchSecAnimV2()
    console.log('scroll value', scrollPosition.value)
}


function watchSecAnimV2(){
    let currentProcent = null
    let culcScaleValue = 0
    // let culcOpacityValue = 0
    let finishScaleValue = null
    // let finishOpacityValue = null
    let heightAnimSec = roadSec.value.offsetHeight
    let startBlockDistanse = roadSec.value.offsetTop
    let startBlockDistanseTrigerAnim = startBlockDistanse - heightAnimSec
    let endBlockDistanseTrigerAnim = startBlockDistanseTrigerAnim + heightAnimSec
    

    if(scrollPosition.value < startBlockDistanseTrigerAnim){
        currentProcent = 0
        roadSec.value.classList.remove('tgads-watch-sec--activ')
    }

    if(scrollPosition.value >= startBlockDistanseTrigerAnim && scrollPosition.value < (endBlockDistanseTrigerAnim - ((heightAnimSec / 100) * 40)) ){
        let currentValue = scrollPosition.value - startBlockDistanseTrigerAnim
        let fullSecScrollTrack = (endBlockDistanseTrigerAnim - ((heightAnimSec / 100) * 40)) - startBlockDistanseTrigerAnim 

        currentProcent = (currentValue / fullSecScrollTrack) * 100
        console.log('fullSecScrollTrack_____________________________________________', fullSecScrollTrack)

        roadSec.value.classList.remove('tgads-watch-sec--activ')
        
    }

    if(scrollPosition.value > (endBlockDistanseTrigerAnim - ((heightAnimSec / 100) * 40))){
        currentProcent = 100
        roadSec.value.classList.add('tgads-watch-sec--activ')
      
    }

    culcScaleValue = (0.2 * currentProcent) / 100
    finishScaleValue = 0.8 + culcScaleValue
    
    roadSec.value.style.transform = `scale(${finishScaleValue})`

    console.log('heightAnimSec',heightAnimSec)
    console.log('startBlockDistanse',startBlockDistanse)
    console.log('startBlockDistanseTrigerAnim',startBlockDistanseTrigerAnim)
    console.log('endBlockDistanseTrigerAnim',endBlockDistanseTrigerAnim)
    console.log('heightAnimSec currentProcent',currentProcent)

}


//HOOKS
onMounted(() => {
windowsHeight.value = g100vhSec.value.clientHeight
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

