<template>
  <header :class="['header', { 'is-active': isActive }]"  ref="headerRef">
    <div class="header-container" :class="{'headerMobMenyActiv': headerMobMenyActiv == true}">
      <div class="header-container__row" @click.self="closeMeny">
        <nav class="header__nav" @click.self="closeMeny">
          <ul class="header__list">
            <li class="header__list-element header__list-element--has-children" @click="statusSubmeny = !statusSubmeny">
              <a  class="header__list-element-link   ">
                <div class="header__list-element-link-col">
                  <span class="header__list-element-link-text">услуги</span>
                  <span class="header__list-element-link-text">услуги</span>
                </div>
              </a>
            </li>
            <li class="header__list-element" @click="closeMeny()">
                <NuxtLink to="/about" class="header__list-element-link">
                    <div class="header__list-element-link-col">
                      <span class="header__list-element-link-text">о нас</span>
                      <span class="header__list-element-link-text">о нас</span>
                    </div>
                </NuxtLink>
            </li>
            <li class="header__list-element" @click="closeMeny()">
              <NuxtLink to="/blog" class="header__list-element-link">
                    <div class="header__list-element-link-col">
                      <span class="header__list-element-link-text">блог</span>
                      <span class="header__list-element-link-text">блог</span>
                    </div>
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <NuxtLink to="/" class="header__logo" @click="closeMeny()">
          <p class="header__logo-title">inwy</p>
        </NuxtLink>

        <div class="header__right" @click.self="closeMeny">
          <button class="header__btn btn-v1" @click="openFormPopup()">обсудить проект</button>

          <div class="burger" @click="headerMobMenyActiv = !headerMobMenyActiv">
            <div class="burger__line burger__line--v1"></div>
            <div class="burger__line burger__line--v2"></div>
          </div>
        </div>  
      </div>

      <div class="header-container__row-sub-meny moob-sub-meny">
        <nav class="moob-sub-meny__nav">
          <ul class="moob-sub-meny__ul">
            <li class="moob-sub-meny__li moob-sub-meny__li-link--parent"  :class="{'moob-sub-meny__parent--activ': servicesSubMenuActiv == true}">
              <a  class="moob-sub-meny__li-link " @click="servicesSubMenuActiv = !servicesSubMenuActiv">
                    услуги
              </a>
              <ul class="moob-sub-meny__sub-meny" :class="{'moob-sub-meny__sub-meny--activ': servicesSubMenuActiv == true}">
                <li class="header__sub-meny-li" @click="closeMeny()">
              <NuxtLink to="/direct" class="header__sub-meny-link">
                <span class="header__sub-meny-link-icon-wrapper">
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_3279_24)">
                  <path d="M4.21029 16.667C3.06445 16.667 2.12695 17.6045 2.12695 18.7503V20.8337C2.12695 21.9795 3.06445 22.917 4.21029 22.917H6.29362C7.43945 22.917 8.37695 21.9795 8.37695 20.8337V18.7503C8.37695 17.6045 7.43945 16.667 6.29362 16.667H4.21029ZM6.29362 20.8337H4.21029V18.7503H6.29362V20.8337Z" fill="black"/>
                  <path d="M11.5023 11.4585C10.3564 11.4585 9.41895 12.396 9.41895 13.5418V20.8335C9.41895 21.9793 10.3564 22.9168 11.5023 22.9168H13.5856C14.7314 22.9168 15.6689 21.9793 15.6689 20.8335V13.5418C15.6689 12.396 14.7314 11.4585 13.5856 11.4585H11.5023ZM13.5856 20.8335H11.5023V13.5418H13.5856V20.8335Z" fill="black"/>
                  <path d="M22.96 4.16683C22.96 3.021 22.0225 2.0835 20.8766 2.0835H18.7933C17.6475 2.0835 16.71 3.021 16.71 4.16683V20.8335C16.71 21.9793 17.6475 22.9168 18.7933 22.9168H20.8766C22.0225 22.9168 22.96 21.9793 22.96 20.8335V4.16683ZM20.8766 20.8335H18.7933V4.16683H20.8766V20.8335Z" fill="black"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_3279_24">
                  <rect width="25" height="25" fill="white"/>
                  </clipPath>
                  </defs>
                  </svg>
                </span>
                <span class="header__sub-meny-link-text">
                  <span class="header__sub-meny-link-text-title">Яндекс.Директ</span>
                  <span class="header__sub-meny-link-text-subtitle">Запускаем и сопровождаем</span>
                </span>
              </NuxtLink>
            </li>

            <li class="header__sub-meny-li" @click="closeMeny()">
              <NuxtLink to="/vkads" class="header__sub-meny-link">
                <span class="header__sub-meny-link-icon-wrapper">
                  <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_3279_31)">
                  <path d="M12.9998 23.2654C12.9998 23.2654 20.4227 18.1241 23.6555 13.1823C26.8563 8.29069 23.7736 2.85435 20.1436 1.94108C15.3234 0.727169 12.9998 5.42585 12.9998 5.42585C12.9998 5.42585 10.6765 0.727169 5.85632 1.94108C2.22606 2.85501 -0.85606 8.29136 2.34409 13.1823C5.57691 18.1241 12.9998 23.2654 12.9998 23.2654Z" stroke="black" stroke-width="2" stroke-linejoin="round"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_3279_31">
                  <rect width="26" height="25" fill="white"/>
                  </clipPath>
                  </defs>
                  </svg>

                </span>
                <span class="header__sub-meny-link-text">
                  <span class="header__sub-meny-link-text-title">VK Реклама</span>
                  <span class="header__sub-meny-link-text-subtitle">Найдем ваших клиентов </span>
                </span>
              </NuxtLink>
            </li>

            <li class="header__sub-meny-li" @click="closeMeny()">
              <NuxtLink to="/tgads" class="header__sub-meny-link">
                <span class="header__sub-meny-link-icon-wrapper">
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M24.0745 4.68162C24.4057 3.06728 22.8201 1.72573 21.2829 2.31965L2.43996 9.59987C0.723312 10.2631 0.646822 12.6636 2.31775 13.4348L6.42121 15.3287L8.37328 22.1609C8.47468 22.5158 8.75629 22.7906 9.11358 22.8832C9.47086 22.9757 9.85046 22.8724 10.1114 22.6113L13.1184 19.6043L17.3306 22.7635C18.5533 23.6805 20.3143 23.0126 20.6214 21.5154L24.0745 4.68162ZM3.19079 11.5432L22.0337 4.26299L18.5806 21.0968L13.6457 17.3956C13.231 17.0845 12.6507 17.1258 12.2841 17.4924L10.9962 18.7803L11.3832 16.652L18.9656 9.06968C19.3346 8.70067 19.3736 8.11555 19.0568 7.70083C18.7401 7.2861 18.1654 7.16978 17.7123 7.42869L7.24073 13.4124L3.19079 11.5432ZM8.51751 15.0823L9.14916 17.2931L9.39167 15.9592C9.42957 15.7508 9.53015 15.5588 9.67997 15.409L11.9924 13.0967L8.51751 15.0823Z" fill="black"/>
                  </svg>

                </span>
                <span class="header__sub-meny-link-text">
                  <span class="header__sub-meny-link-text-title">Telegram Ads</span>
                  <span class="header__sub-meny-link-text-subtitle">Запускаем от любого бюджета</span>
                </span>
              </NuxtLink>
            </li>

            <li class="header__sub-meny-li" @click="closeMeny()">
              <NuxtLink to="/website" class="header__sub-meny-link">
                <span class="header__sub-meny-link-icon-wrapper">
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.6667 12.5C16.6667 14.8011 14.8011 16.6667 12.5 16.6667C10.1988 16.6667 8.33333 14.8011 8.33333 12.5C8.33333 10.1988 10.1988 8.33333 12.5 8.33333C14.8011 8.33333 16.6667 10.1988 16.6667 12.5ZM16.6667 12.5V14.0625C16.6667 15.5007 17.8326 16.6667 19.2708 16.6667C20.7091 16.6667 21.875 15.5007 21.875 14.0625V12.5C21.875 7.32233 17.6777 3.125 12.5 3.125C7.32233 3.125 3.125 7.32233 3.125 12.5C3.125 17.6777 7.32233 21.875 12.5 21.875H16.6667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>

                </span>
                <span class="header__sub-meny-link-text">
                  <span class="header__sub-meny-link-text-title">Разработка сайтов</span>
                  <span class="header__sub-meny-link-text-subtitle">Создаем то, что продает</span>
                </span>
              </NuxtLink>
            </li>

            <li class="header__sub-meny-li" @click="closeMeny()">
              <NuxtLink to="/geomarketing" class="header__sub-meny-link">
                <span class="header__sub-meny-link-icon-wrapper">
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.0094 13.9687C18.1906 15.6281 17.0813 17.2813 15.9469 18.7656C14.8708 20.165 13.7202 21.5055 12.5 22.7812C11.2798 21.5055 10.1292 20.165 9.05313 18.7656C7.91875 17.2813 6.80938 15.6281 5.99063 13.9687C5.1625 12.2922 4.6875 10.7219 4.6875 9.375C4.6875 7.303 5.5106 5.31586 6.97573 3.85073C8.44086 2.3856 10.428 1.5625 12.5 1.5625C14.572 1.5625 16.5591 2.3856 18.0243 3.85073C19.4894 5.31586 20.3125 7.303 20.3125 9.375C20.3125 10.7219 19.8359 12.2922 19.0094 13.9687ZM12.5 25C12.5 25 21.875 16.1156 21.875 9.375C21.875 6.8886 20.8873 4.50403 19.1291 2.74587C17.371 0.98772 14.9864 0 12.5 0C10.0136 0 7.62903 0.98772 5.87087 2.74587C4.11272 4.50403 3.125 6.8886 3.125 9.375C3.125 16.1156 12.5 25 12.5 25Z" fill="black"/>
                  <path d="M12.5 12.5C11.6712 12.5 10.8763 12.1708 10.2903 11.5847C9.70424 10.9987 9.375 10.2038 9.375 9.375C9.375 8.5462 9.70424 7.75134 10.2903 7.16529C10.8763 6.57924 11.6712 6.25 12.5 6.25C13.3288 6.25 14.1237 6.57924 14.7097 7.16529C15.2958 7.75134 15.625 8.5462 15.625 9.375C15.625 10.2038 15.2958 10.9987 14.7097 11.5847C14.1237 12.1708 13.3288 12.5 12.5 12.5ZM12.5 14.0625C13.7432 14.0625 14.9355 13.5686 15.8146 12.6896C16.6936 11.8105 17.1875 10.6182 17.1875 9.375C17.1875 8.1318 16.6936 6.93951 15.8146 6.06044C14.9355 5.18136 13.7432 4.6875 12.5 4.6875C11.2568 4.6875 10.0645 5.18136 9.18544 6.06044C8.30636 6.93951 7.8125 8.1318 7.8125 9.375C7.8125 10.6182 8.30636 11.8105 9.18544 12.6896C10.0645 13.5686 11.2568 14.0625 12.5 14.0625Z" fill="black"/>
                  </svg>

                </span>
                <span class="header__sub-meny-link-text">
                  <span class="header__sub-meny-link-text-title">Геомаркетинг</span>
                  <span class="header__sub-meny-link-text-subtitle">Приведем клиентов с карт</span>
                </span>
              </NuxtLink>
            </li>
                </ul>
              </li>
              <li class="moob-sub-meny__li" @click="closeMeny()">
                <NuxtLink to="/about" class="moob-sub-meny__li-link">
                      о нас
                </NuxtLink>
              </li>

              <li class="moob-sub-meny__li" @click="closeMeny()">
                <NuxtLink to="/blog" class="moob-sub-meny__li-link">
                      блог
                </NuxtLink>
              </li>
            </ul>

          </nav>

          <ul class="moob-sub-meny__social">
            <li class="moob-sub-meny__social-li" v-for="item in optionData.socz_seti" :key="item">
              <a :href="item.ssylka" class="moob-sub-meny__social-link" v-html="item.zagolovok_dlya_mob_versii_socz_setej_v_shapke"></a>
            </li>
          </ul>

          <button class="header__btn-mob btn-v1">обсудить проект</button>
        
      </div>
      
    </div>

    <div class="header__sub-meny" :class="{'header__sub-meny--activ':statusSubmeny == true}" >
        <ul class="header__sub-meny-ul">
          <li class="header__sub-meny-li" @click="closeMeny()">
            <NuxtLink to="/direct" class="header__sub-meny-link">
              <span class="header__sub-meny-link-icon-wrapper">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_3279_24)">
                <path d="M4.21029 16.667C3.06445 16.667 2.12695 17.6045 2.12695 18.7503V20.8337C2.12695 21.9795 3.06445 22.917 4.21029 22.917H6.29362C7.43945 22.917 8.37695 21.9795 8.37695 20.8337V18.7503C8.37695 17.6045 7.43945 16.667 6.29362 16.667H4.21029ZM6.29362 20.8337H4.21029V18.7503H6.29362V20.8337Z" fill="black"/>
                <path d="M11.5023 11.4585C10.3564 11.4585 9.41895 12.396 9.41895 13.5418V20.8335C9.41895 21.9793 10.3564 22.9168 11.5023 22.9168H13.5856C14.7314 22.9168 15.6689 21.9793 15.6689 20.8335V13.5418C15.6689 12.396 14.7314 11.4585 13.5856 11.4585H11.5023ZM13.5856 20.8335H11.5023V13.5418H13.5856V20.8335Z" fill="black"/>
                <path d="M22.96 4.16683C22.96 3.021 22.0225 2.0835 20.8766 2.0835H18.7933C17.6475 2.0835 16.71 3.021 16.71 4.16683V20.8335C16.71 21.9793 17.6475 22.9168 18.7933 22.9168H20.8766C22.0225 22.9168 22.96 21.9793 22.96 20.8335V4.16683ZM20.8766 20.8335H18.7933V4.16683H20.8766V20.8335Z" fill="black"/>
                </g>
                <defs>
                <clipPath id="clip0_3279_24">
                <rect width="25" height="25" fill="white"/>
                </clipPath>
                </defs>
                </svg>
              </span>
              <span class="header__sub-meny-link-text">
                <span class="header__sub-meny-link-text-title">Яндекс.Директ</span>
                <span class="header__sub-meny-link-text-subtitle">Запускаем и сопровождаем</span>
              </span>
            </NuxtLink>
          </li>


          <li class="header__sub-meny-li" @click="closeMeny()">
            <NuxtLink to="/vkads" class="header__sub-meny-link">
              <span class="header__sub-meny-link-icon-wrapper">
                <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_3279_31)">
                <path d="M12.9998 23.2654C12.9998 23.2654 20.4227 18.1241 23.6555 13.1823C26.8563 8.29069 23.7736 2.85435 20.1436 1.94108C15.3234 0.727169 12.9998 5.42585 12.9998 5.42585C12.9998 5.42585 10.6765 0.727169 5.85632 1.94108C2.22606 2.85501 -0.85606 8.29136 2.34409 13.1823C5.57691 18.1241 12.9998 23.2654 12.9998 23.2654Z" stroke="black" stroke-width="2" stroke-linejoin="round"/>
                </g>
                <defs>
                <clipPath id="clip0_3279_31">
                <rect width="26" height="25" fill="white"/>
                </clipPath>
                </defs>
                </svg>

              </span>
              <span class="header__sub-meny-link-text">
                <span class="header__sub-meny-link-text-title">VK Реклама</span>
                <span class="header__sub-meny-link-text-subtitle">Найдем ваших клиентов </span>
              </span>
            </NuxtLink>
          </li>


          <li class="header__sub-meny-li" @click="closeMeny()">
            <NuxtLink to="/tgads" class="header__sub-meny-link">
              <span class="header__sub-meny-link-icon-wrapper">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M24.0745 4.68162C24.4057 3.06728 22.8201 1.72573 21.2829 2.31965L2.43996 9.59987C0.723312 10.2631 0.646822 12.6636 2.31775 13.4348L6.42121 15.3287L8.37328 22.1609C8.47468 22.5158 8.75629 22.7906 9.11358 22.8832C9.47086 22.9757 9.85046 22.8724 10.1114 22.6113L13.1184 19.6043L17.3306 22.7635C18.5533 23.6805 20.3143 23.0126 20.6214 21.5154L24.0745 4.68162ZM3.19079 11.5432L22.0337 4.26299L18.5806 21.0968L13.6457 17.3956C13.231 17.0845 12.6507 17.1258 12.2841 17.4924L10.9962 18.7803L11.3832 16.652L18.9656 9.06968C19.3346 8.70067 19.3736 8.11555 19.0568 7.70083C18.7401 7.2861 18.1654 7.16978 17.7123 7.42869L7.24073 13.4124L3.19079 11.5432ZM8.51751 15.0823L9.14916 17.2931L9.39167 15.9592C9.42957 15.7508 9.53015 15.5588 9.67997 15.409L11.9924 13.0967L8.51751 15.0823Z" fill="black"/>
                </svg>

              </span>
              <span class="header__sub-meny-link-text">
                <span class="header__sub-meny-link-text-title">Telegram Ads</span>
                <span class="header__sub-meny-link-text-subtitle">Запускаем от любого бюджета</span>
              </span>
            </NuxtLink>
          </li>

          <li class="header__sub-meny-li" @click="closeMeny()">
            <NuxtLink to="/website" class="header__sub-meny-link">
              <span class="header__sub-meny-link-icon-wrapper">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6667 12.5C16.6667 14.8011 14.8011 16.6667 12.5 16.6667C10.1988 16.6667 8.33333 14.8011 8.33333 12.5C8.33333 10.1988 10.1988 8.33333 12.5 8.33333C14.8011 8.33333 16.6667 10.1988 16.6667 12.5ZM16.6667 12.5V14.0625C16.6667 15.5007 17.8326 16.6667 19.2708 16.6667C20.7091 16.6667 21.875 15.5007 21.875 14.0625V12.5C21.875 7.32233 17.6777 3.125 12.5 3.125C7.32233 3.125 3.125 7.32233 3.125 12.5C3.125 17.6777 7.32233 21.875 12.5 21.875H16.6667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

              </span>
              <span class="header__sub-meny-link-text">
                <span class="header__sub-meny-link-text-title">Разработка сайтов</span>
                <span class="header__sub-meny-link-text-subtitle">Создаем то, что продает</span>
              </span>
            </NuxtLink>
          </li>

          <li class="header__sub-meny-li" @click="closeMeny()">
            <NuxtLink to="/geomarketing" class="header__sub-meny-link">
              <span class="header__sub-meny-link-icon-wrapper">
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.0094 13.9687C18.1906 15.6281 17.0813 17.2813 15.9469 18.7656C14.8708 20.165 13.7202 21.5055 12.5 22.7812C11.2798 21.5055 10.1292 20.165 9.05313 18.7656C7.91875 17.2813 6.80938 15.6281 5.99063 13.9687C5.1625 12.2922 4.6875 10.7219 4.6875 9.375C4.6875 7.303 5.5106 5.31586 6.97573 3.85073C8.44086 2.3856 10.428 1.5625 12.5 1.5625C14.572 1.5625 16.5591 2.3856 18.0243 3.85073C19.4894 5.31586 20.3125 7.303 20.3125 9.375C20.3125 10.7219 19.8359 12.2922 19.0094 13.9687ZM12.5 25C12.5 25 21.875 16.1156 21.875 9.375C21.875 6.8886 20.8873 4.50403 19.1291 2.74587C17.371 0.98772 14.9864 0 12.5 0C10.0136 0 7.62903 0.98772 5.87087 2.74587C4.11272 4.50403 3.125 6.8886 3.125 9.375C3.125 16.1156 12.5 25 12.5 25Z" fill="black"/>
                <path d="M12.5 12.5C11.6712 12.5 10.8763 12.1708 10.2903 11.5847C9.70424 10.9987 9.375 10.2038 9.375 9.375C9.375 8.5462 9.70424 7.75134 10.2903 7.16529C10.8763 6.57924 11.6712 6.25 12.5 6.25C13.3288 6.25 14.1237 6.57924 14.7097 7.16529C15.2958 7.75134 15.625 8.5462 15.625 9.375C15.625 10.2038 15.2958 10.9987 14.7097 11.5847C14.1237 12.1708 13.3288 12.5 12.5 12.5ZM12.5 14.0625C13.7432 14.0625 14.9355 13.5686 15.8146 12.6896C16.6936 11.8105 17.1875 10.6182 17.1875 9.375C17.1875 8.1318 16.6936 6.93951 15.8146 6.06044C14.9355 5.18136 13.7432 4.6875 12.5 4.6875C11.2568 4.6875 10.0645 5.18136 9.18544 6.06044C8.30636 6.93951 7.8125 8.1318 7.8125 9.375C7.8125 10.6182 8.30636 11.8105 9.18544 12.6896C10.0645 13.5686 11.2568 14.0625 12.5 14.0625Z" fill="black"/>
                </svg>

              </span>
              <span class="header__sub-meny-link-text">
                <span class="header__sub-meny-link-text-title">Геомаркетинг</span>
                <span class="header__sub-meny-link-text-subtitle">Приведем клиентов с карт</span>
              </span>
            </NuxtLink>
          </li>
        </ul>
    </div>

  </header>
</template>

<script setup>
//IMPORT
import { useCounterStore } from '@/stores/counter'

import { ref, onMounted, onBeforeUnmount } from 'vue'


//DATA
const store = useCounterStore()

const route = useRoute()

const headerMobMenyActiv = ref(false)

const servicesSubMenuActiv = ref(false)

const isActive = ref(false)

const statusSubmeny = ref(false)



//METHODS
const headerRef = ref(null)

function checkHeaderOverTargetBlocks() {
  if (!headerRef.value) return

  const headerRect = headerRef.value.getBoundingClientRect()

  // Получаем все элементы с классом target-block
  const targetBlocks = document.querySelectorAll('.target-block')

  // Проверяем пересечение header с каждым target-block
  const isOverAny = Array.from(targetBlocks).some(block => {
    const blockRect = block.getBoundingClientRect()

    // Проверяем, находится ли header над блоком — 
    // допустим, достаточно проверить, что header пересекается с блоком по горизонтали и вертикали

    const verticalOverlap = headerRect.bottom > blockRect.top && headerRect.top < blockRect.bottom
    const horizontalOverlap = headerRect.right > blockRect.left && headerRect.left < blockRect.right

    return verticalOverlap && horizontalOverlap
  })

  isActive.value = isOverAny
}


function closeMeny(){
  headerMobMenyActiv.value = false
  servicesSubMenuActiv.value = false
  statusSubmeny.value = false
}

//open form popup 
function openFormPopup(){
    store.changeTrigerButtonForm('Кнопка в шапке ')
    store.changePopupCurrent('popup-form')
}


  

watch(() => route.fullPath, (newPath) => {
  console.log('Маршрут изменился:', newPath)
  checkHeaderOverTargetBlocks() // твой метод
})

 const props = defineProps({
  trigerCloseSubMeny: Boolean,
  optionData: Object,
      // postAllCategory: Object,
  })

watch(() => props.trigerCloseSubMeny, () => {
  console.log('Родитель вызвал событие!.')
  closeMeny()
})


onMounted(() => {
  window.addEventListener('scroll', checkHeaderOverTargetBlocks)
  window.addEventListener('resize', checkHeaderOverTargetBlocks)

  // Проверяем сразу при монтировании
  checkHeaderOverTargetBlocks()
})

onBeforeUnmount(() => {
window.removeEventListener('scroll', checkHeaderOverTargetBlocks)
  window.removeEventListener('resize', checkHeaderOverTargetBlocks)
})


</script>


