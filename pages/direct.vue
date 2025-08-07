<template>

    <main class="main" v-if="pageData[0]">
        
        <section class="direct-hero-sec" v-if="pageData[0].acf?.sekcziya_1_hero">
            <div class="direct-hero-sec__container">
                <div class="direct-hero-sec__text">
                    <h1 class="direct-hero-sec__title">
                    <span v-html="pageData[0].acf.sekcziya_1_hero.zagolovok"></span>
                        <img src="@/assets/images/yandex/direct-ic.png" alt="">
                    </h1>
                    <p class="direct-hero-sec__subtitle" v-html="pageData[0].acf.sekcziya_1_hero.podzagolovok"></p>

                </div>
                
                <img :src="pageData[0].acf.sekcziya_1_hero.izobrazhenie_pk.url" :alt="pageData[0].acf.sekcziya_1_hero.izobrazhenie_pk.alt" class="direct-hero-sec__hero-img">

                <img src="@/assets/images/yandex/hero-mob-1.png" alt="" class="direct-hero-sec__hero-img-mob direct-hero-sec__hero-img-mob--v1">

                <img :src="pageData[0].acf.sekcziya_1_hero.izobrazhenie_mobilka.url" :alt="pageData[0].acf.sekcziya_1_hero.izobrazhenie_mobilka.alt" class="direct-hero-sec__hero-img-mob direct-hero-sec__hero-img-mob--v2">
                
            </div>
        </section>

        <div class="direct-sticky-wrapper target-block">

            <section class="direct-direction-sec" v-if="pageData[0].acf?.sekcziya_2_raznye_nishhi">
                <div class="direct-direction-sec__container">
                    <div class="direct-direction-sec__text-top">
                        <h2 class="direct-direction-sec__title" v-html="pageData[0].acf.sekcziya_2_raznye_nishhi.zagolovok"></h2>
                        <p class="direct-direction-sec__subtitle" v-html="pageData[0].acf.sekcziya_2_raznye_nishhi.podzagolovok"></p>
                    </div>

                    <img :src="pageData[0].acf.sekcziya_2_raznye_nishhi.izobrazhenie.url" :alt="pageData[0].acf.sekcziya_2_raznye_nishhi.izobrazhenie.alt" class="direct-direction-sec__img">

                    <div class="direct-direction-sec__down-row">

                        <div class="direct-direction-sec__down-el" v-for="item in pageData[0].acf.sekcziya_2_raznye_nishhi.infografika" :key="item">
                            <p class="direct-direction-sec__down-el-title" v-html="item.znachenie"></p>
                            <p class="direct-direction-sec__down-el-subtitle" v-html="item.tekst"></p>
                        </div>

                    </div>

                </div>
            </section>


            <section class="direct-work-list-sec "  v-if="pageData[0].acf?.sekcziya_3_informacziya">
                <div class="direct-work-list-sec__container">
                    <div class="direct-work-list-sec__img-wrapper">
                        <img :src="pageData[0].acf.sekcziya_3_informacziya.izobrazhenie.url" :alt="pageData[0].acf.sekcziya_3_informacziya.izobrazhenie.alt">
                    </div>
                    <div class="direct-work-list-sec__text-wrapper">

                        <div class="direct-work-list-sec__text-element" v-for="item in pageData[0].acf.sekcziya_3_informacziya.inform_bloki" :key="item">
                            <h3 class="direct-work-list-sec__text-title" v-html="item.zagolovok"></h3>
                            <p class="direct-work-list-sec__text-subtitle" v-html="item.tekst"></p>
                        </div>

                    </div>
                </div>
            </section>

        </div>


        <section class="direct-about-sec">
            <div class="direct-about-sec__container">
                <div class="direct-about-sec__col">

                    <div class="direct-about-sec__el direct-about-sec__el--1">
                        <div class="direct-about-sec__el-nam-counter">
                            <p class="direct-about-sec__num">5</p>
                            <p class="direct-about-sec__num-text">дней займет настройка рекламы.</p>
                        </div>
                        
                    </div>

                    <div class="direct-about-sec__el direct-about-sec__el--2">
                        <div class="direct-about-sec__el-procent-wrapper">
                            <div class="direct-about-sec__el-procent-wrapper-title">рекомендуют нас</div>
                            <div class="direct-about-sec__el-procent">
                                <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M39.2093 2.09896C48.4409 1.45341 57.6108 4.0288 65.1565 9.3863C72.7022 14.7438 78.1569 22.5519 80.591 31.4803C83.0252 40.4086 82.2882 49.9048 78.5058 58.3507C74.7233 66.7966 68.1293 73.6697 59.8474 77.7989C51.5655 81.9281 42.1081 83.0579 33.0865 80.9959C24.065 78.9338 16.0375 73.8074 10.3719 66.4902C4.70634 59.173 1.75317 50.1177 2.0156 40.8672C2.27802 31.6167 5.73982 22.7434 11.8111 15.7592" stroke="#ACFA03" stroke-width="4" stroke-miterlimit="4.13936" stroke-linecap="round"/>
                                </svg>

                                <span>87%</span>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div class="direct-about-sec__col">
                    <div class="direct-about-sec__el direct-about-sec__el--3">
                        <div class="direct-about-sec__el-nam-counter">
                            <p class="direct-about-sec__num">9/10</p>
                            <p class="direct-about-sec__num-text">человек вокруг вас — в Яндексе и на партнёрских сайтах</p>
                        </div>

                        <div class="direct-about-sec__el-search-x direct-about-sec__el-search--1">
                            <p class="direct-about-sec__el-search-request">салон красоты </p>
                            <div class="direct-about-sec__el-search-search-icon-wrapper">
                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <rect x="0.5" width="20" height="20" fill="url(#pattern0_1248_11)"/>
                                <defs>
                                <pattern id="pattern0_1248_11" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlink:href="#image0_1248_11" transform="scale(0.00390625)"/>
                                </pattern>
                                <image id="image0_1248_11" width="256" height="256" preserveAspectRatio="none" xlink:href="data:image/png;base64,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"/>
                                </defs>
                                </svg>

                            </div>
                        </div>


                        <div class="direct-about-sec__el-search-x direct-about-sec__el-search--2">
                            <p class="direct-about-sec__el-search-request">шиномонтаж</p>
                            <div class="direct-about-sec__el-search-search-icon-wrapper">
                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <rect x="0.5" width="20" height="20" fill="url(#pattern0_1248_11)"/>
                                <defs>
                                <pattern id="pattern0_1248_11" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlink:href="#image0_1248_11" transform="scale(0.00390625)"/>
                                </pattern>
                                <image id="image0_1248_11" width="256" height="256" preserveAspectRatio="none" xlink:href="data:image/png;base64,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"/>
                                </defs>
                                </svg>

                            </div>
                        </div>


                        <div class="direct-about-sec__el-search-x direct-about-sec__el-search--3">
                            <p class="direct-about-sec__el-search-request">юрист</p>
                            <div class="direct-about-sec__el-search-search-icon-wrapper">
                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <rect x="0.5" width="20" height="20" fill="url(#pattern0_1248_11)"/>
                                <defs>
                                <pattern id="pattern0_1248_11" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlink:href="#image0_1248_11" transform="scale(0.00390625)"/>
                                </pattern>
                                <image id="image0_1248_11" width="256" height="256" preserveAspectRatio="none" xlink:href="data:image/png;base64,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"/>
                                </defs>
                                </svg>

                            </div>
                        </div>

                        <img src="@/assets/images/yandex/about-girl.png" alt="" class="direct-about-sec__el-girl-img">
                    </div>
                </div>

                <div class="direct-about-sec__col">
                    <div class="direct-about-sec__el direct-about-sec__el-search--4">

                        <div class="direct-about-sec__el-search-on-btn">
                            <svg width="90" height="33" viewBox="0 0 90 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1.5" y="1.5" width="87" height="30" rx="15" fill="#ACFA03" stroke="#ACFA03" stroke-width="3"/>
                            <rect x="1.5" y="1.5" width="87" height="30" rx="15" fill="#ACFA03" stroke="#ACFA03" stroke-width="3"/>
                            <ellipse cx="16" cy="16.5" rx="13" ry="13.5" fill="white"/>
                            <path d="M42.79 20.15C42.07 20.15 41.4483 19.9933 40.925 19.68C40.405 19.3667 40.0033 18.9283 39.72 18.365C39.44 17.8017 39.3 17.1467 39.3 16.4C39.3 15.6533 39.44 14.9983 39.72 14.435C40.0033 13.8717 40.405 13.4333 40.925 13.12C41.4483 12.8067 42.07 12.65 42.79 12.65C43.51 12.65 44.13 12.8067 44.65 13.12C45.1733 13.4333 45.575 13.8717 45.855 14.435C46.1383 14.9983 46.28 15.6533 46.28 16.4C46.28 17.1467 46.1383 17.8017 45.855 18.365C45.575 18.9283 45.1733 19.3667 44.65 19.68C44.13 19.9933 43.51 20.15 42.79 20.15ZM42.79 18.87C43.2467 18.8767 43.6267 18.7783 43.93 18.575C44.2333 18.3717 44.46 18.0833 44.61 17.71C44.7633 17.3367 44.84 16.9 44.84 16.4C44.84 15.9 44.7633 15.4667 44.61 15.1C44.46 14.7333 44.2333 14.4483 43.93 14.245C43.6267 14.0417 43.2467 13.9367 42.79 13.93C42.3333 13.9233 41.9533 14.0217 41.65 14.225C41.3467 14.4283 41.1183 14.7167 40.965 15.09C40.815 15.4633 40.74 15.9 40.74 16.4C40.74 16.9 40.815 17.3333 40.965 17.7C41.1183 18.0667 41.3467 18.3517 41.65 18.555C41.9533 18.7583 42.3333 18.8633 42.79 18.87ZM46.8781 20V12.8H48.2581L51.3881 17.6V12.8H52.7681V20H51.3881L48.2581 15.2V20H46.8781Z" fill="white" fill-opacity="0.8"/>
                            </svg>
                        </div>
                        <div class="direct-about-sec__el-nam-counter">
                            <p class="direct-about-sec__num">24</p>
                            <p class="direct-about-sec__num-text">месяца средний срок сотрудничества.</p>
                        </div>
                    </div>


                    <div class="direct-about-sec__el direct-about-sec__el-search--5">
                        <img src="@/assets/images/yandex/diamant.png" alt="" class="direct-about-sec__el-diamant-img">
                     
                    </div>

                </div>

            </div>
        </section>



        <section class="direct-types-sec" v-if="pageData[0].acf?.sekcziya_5_zadachi">
            <div class="direct-types-sec__container">
                <h2 class="direct-types-sec__title" v-html="pageData[0].acf.sekcziya_5_zadachi.zagolovok"></h2>

                <div class="direct-types-sec__header">
                    <div class="direct-types-sec__header-element"
                    :class="{'direct-types-sec__header-element--activ': typesIndex == 1}"
                    @click="typesIndex = 1">Приводить новых клиентов</div>
                    <div class="direct-types-sec__header-element"
                    :class="{'direct-types-sec__header-element--activ': typesIndex == 2}"
                    @click="typesIndex = 2">Продавать товары или услуги</div>
                    <div class="direct-types-sec__header-element"
                    :class="{'direct-types-sec__header-element--activ': typesIndex == 3}"
                    @click="typesIndex = 3">Возвращать клиентов</div>
                </div>

                <div class="direct-types-sec__body">

                    <div v-if="typesIndex == 1" 
                    class="direct-types-sec__body-element direct-types-sec__body-element--1">
                        <div class="direct-types-sec__body-element-text-wrapper">
                            <p class="direct-types-sec__body-element-text-title">Приводить новых клиентов</p>
                            <p class="direct-types-sec__body-element-textelement" v-html="pageData[0].acf.sekcziya_5_zadachi.zadacha_1_tekst"></p>
                        </div>

                      
                            <img src="@/assets/images/yandex/types-1-x1.png" alt="" class="direct-types-sec__body-element-img beimg-1">
                            <img src="@/assets/images/yandex/types-1-x2.png" alt="" class="direct-types-sec__body-element-img beimg-2">
                            <img src="@/assets/images/yandex/types-1-x3.png" alt="" class="direct-types-sec__body-element-img beimg-3">
                      
                    </div>


                    <div v-if="typesIndex == 2" 
                    class="direct-types-sec__body-element direct-types-sec__body-element--2">
                        <div class="direct-types-sec__body-element-text-wrapper">
                            <p class="direct-types-sec__body-element-text-title">Продавать товары и услуги</p>
                            <p class="direct-types-sec__body-element-textelement" v-html="pageData[0].acf.sekcziya_5_zadachi.zadacha_2_tekst"></p>
                        </div>

                        <img src="@/assets/images/yandex/types-2-x1.png" alt="" class="direct-types-sec__body-element-img beimg-1">
                        <img src="@/assets/images/yandex/types-2-x2.png" alt="" class="direct-types-sec__body-element-img beimg-2">
                    </div>


                    <div v-if="typesIndex == 3" 
                    class="direct-types-sec__body-element direct-types-sec__body-element--3">
                        <div class="direct-types-sec__body-element-text-wrapper">
                            <p class="direct-types-sec__body-element-text-title">Возвращать клиентов</p>
                            <p class="direct-types-sec__body-element-textelement" v-html="pageData[0].acf.sekcziya_5_zadachi.zadacha_3_tekst"></p>
                        </div>

                        <img src="@/assets/images/yandex/types-3-x1.png" alt="" class="direct-types-sec__body-element-img beimg-1">
                        <img src="@/assets/images/yandex/types-3-x2.png" alt="" class="direct-types-sec__body-element-img beimg-2">
                    </div>
                </div>

            </div>
        </section>


        <section class="direct-format-work-sec" v-if="pageData[0].acf?.sekcziya_6_format_raboty">
            <div class="direct-format-work-sec__container">
                <h2 class="direct-format-work-sec__title">
                    <span v-html="pageData[0].acf.sekcziya_6_format_raboty.zagolovok"></span>
                    <span class="direct-format-work-sec__title-img-wrapper">
                        <img src="@/assets/images/yandex/format-title.jpg" alt="">
                    </span>
                </h2>

                <div class="direct-format-work-sec__wrapper">
                    <div class="direct-format-work-sec__element-text">
                        <div class="direct-format-work-sec__element-text-container">
                            <p class="direct-format-work-sec__element-text-title">#1</p>
                            <p class="direct-format-work-sec__element-text-subtitle" v-html="pageData[0].acf.sekcziya_6_format_raboty.tekst_1"></p>
                        </div>
                    </div>

                    <div class="direct-format-work-sec__element-text">
                        <div class="direct-format-work-sec__element-text-container">
                            <p class="direct-format-work-sec__element-text-title">#2</p>
                            <p class="direct-format-work-sec__element-text-subtitle" v-html="pageData[0].acf.sekcziya_6_format_raboty.tekst_2"></p>
                        </div>
                    </div>

                    <div class="direct-format-work-sec__element-img direct-format-work-sec__element-img--1">
                        <img :src="pageData[0].acf.sekcziya_6_format_raboty.izobrazhenie_1.url" 
                        :alt="pageData[0].acf.sekcziya_6_format_raboty.izobrazhenie_1.alt">

                        <div class="direct-about-sec__el-search-x direct-format-work-sec__el-search--1">
                            <p class="direct-about-sec__el-search-request">Где запустить директ?</p>
                            <div class="direct-about-sec__el-search-search-icon-wrapper">
                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <rect x="0.5" width="20" height="20" fill="url(#pattern0_1248_11)"/>
                                <defs>
                                <pattern id="pattern0_1248_11" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlink:href="#image0_1248_11" transform="scale(0.00390625)"/>
                                </pattern>
                                <image id="image0_1248_11" width="256" height="256" preserveAspectRatio="none" xlink:href="data:image/png;base64,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"/>
                                </defs>
                                </svg>

                            </div>
                        </div>
                    </div>

                    <div class="direct-format-work-sec__element-text">
                        <div class="direct-format-work-sec__element-text-container">
                            <p class="direct-format-work-sec__element-text-title">#3</p>
                            <p class="direct-format-work-sec__element-text-subtitle" v-html="pageData[0].acf.sekcziya_6_format_raboty.tekst_3"></p>
                        </div>
                    </div>

                    <div class="direct-format-work-sec__element-img direct-format-work-sec__element-img--2">
                        <img :src="pageData[0].acf.sekcziya_6_format_raboty.izobrazhenie_2.url" 
                        :alt="pageData[0].acf.sekcziya_6_format_raboty.izobrazhenie_2.alt">

                        <div class="direct-about-sec__el-search-x direct-format-work-sec__el-search--2">
                            <p class="direct-about-sec__el-search-request">Возможно вы искали inwy</p>
                            <div class="direct-about-sec__el-search-search-icon-wrapper">
                                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <rect x="0.5" width="20" height="20" fill="url(#pattern0_1248_11)"/>
                                <defs>
                                <pattern id="pattern0_1248_11" patternContentUnits="objectBoundingBox" width="1" height="1">
                                <use xlink:href="#image0_1248_11" transform="scale(0.00390625)"/>
                                </pattern>
                                <image id="image0_1248_11" width="256" height="256" preserveAspectRatio="none" xlink:href="data:image/png;base64,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"/>
                                </defs>
                                </svg>

                            </div>
                        </div>
                    </div>

                    <div class="direct-format-work-sec__element-text">
                        <div class="direct-format-work-sec__element-text-container">
                            <p class="direct-format-work-sec__element-text-title">#4</p>
                            <p class="direct-format-work-sec__element-text-subtitle" v-html="pageData[0].acf.sekcziya_6_format_raboty.tekst_4"></p>
                        </div>
                    </div>

                    
                    
                </div>
            </div>
        </section>

        <section class="price-sec direct-price-sec" v-if="pageData[0].acf?.sekcziya_7_czena?.length">
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
                    <div class="price-sec__col" v-for="(item, index) in pageData[0].acf.sekcziya_7_czena" :key="index">
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
                                <div class="cost-box__btn" @click="openFormPopup(`блок с ценами. Пакет: ${item.nazvanie_paketa}`)">
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

import { useCounterStore } from '@/stores/counter'

import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';






//DATA
const store = useCounterStore()

const route = useRoute()

const typesIndex = ref(1)

const dataPriceSecActioDopIndex = ref(null)

const { data: pageData } = await useFetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/pages?slug=direct`)

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

