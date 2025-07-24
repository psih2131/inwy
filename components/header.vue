<template>
  <header :class="['header', { 'is-active': isActive }]">
    <div class="header-container" :class="{'headerMobMenyActiv': headerMobMenyActiv == true}">
      <div class="header-container__row">
        <nav class="header__nav">
          <ul class="header__list">
            <li class="header__list-element header__list-element--has-children" @click="statusSubmeny = !statusSubmeny">
              <a  class="header__list-element-link   ">
                <div class="header__list-element-link-col">
                  <span class="header__list-element-link-text">услуги</span>
                  <span class="header__list-element-link-text">услуги</span>
                </div>
              </a>
            </li>
            <li class="header__list-element">
                <NuxtLink to="/about" class="header__list-element-link">
                    <div class="header__list-element-link-col">
                      <span class="header__list-element-link-text">о нас</span>
                      <span class="header__list-element-link-text">о нас</span>
                    </div>
                </NuxtLink>
            </li>
            <li class="header__list-element">
              <NuxtLink to="/blog" class="header__list-element-link">
                    <div class="header__list-element-link-col">
                      <span class="header__list-element-link-text">блог</span>
                      <span class="header__list-element-link-text">блог</span>
                    </div>
                </NuxtLink>
            </li>
          </ul>
        </nav>

        <NuxtLink to="/" class="header__logo">
          <p class="header__logo-title">inwy</p>
        </NuxtLink>

        <div class="header__right">
          <button class="header__btn btn-v1">обсудить проект</button>

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
                <li class="header__sub-meny-li">
                <NuxtLink to="/direct" class="header__sub-meny-link" @click="closeMeny()">
                  <span class="header__sub-meny-link-icon-wrapper">
                    <svg class="framer-JK0qE framer-mfdylr" role="presentation" viewBox="0 0 24 24" style="--1m6trwb: 0; --21h8s6: rgb(0, 0, 0); --pgex8v: 1.5; opacity: 1;"><use href="#1074007029"></use></svg>
                  </span>
                  <span class="header__sub-meny-link-text">
                    <span class="header__sub-meny-link-text-title">Яндекс.Директ</span>
                    <span class="header__sub-meny-link-text-subtitle">Запускаем и сопровождаем</span>
                  </span>
                </NuxtLink>
              </li>


              <li class="header__sub-meny-li">
                <NuxtLink to="/vkads" class="header__sub-meny-link" @click="closeMeny()">
                  <span class="header__sub-meny-link-icon-wrapper">
                    <svg class="framer-lqwHZ framer-16nbkyz" role="presentation" viewBox="0 0 24 24" style="--1m6trwb: 0; --21h8s6: rgb(0, 0, 0); --pgex8v: 1.5; opacity: 1;"><use href="#4282185190"></use></svg>
                  </span>
                  <span class="header__sub-meny-link-text">
                    <span class="header__sub-meny-link-text-title">VK Реклама</span>
                    <span class="header__sub-meny-link-text-subtitle">Найдем ваших клиентов </span>
                  </span>
                </NuxtLink>
              </li>


              <li class="header__sub-meny-li">
                <NuxtLink to="/tgads" class="header__sub-meny-link" @click="closeMeny()">
                  <span class="header__sub-meny-link-icon-wrapper">
                    <svg class="framer-DjU2n framer-kdoboj" role="presentation" viewBox="0 0 24 24" style="--1m6trwb: 0; --21h8s6: rgb(0, 0, 0); --pgex8v: 1.5; opacity: 1;"><use href="#2921807503"></use></svg>
                  </span>
                  <span class="header__sub-meny-link-text">
                    <span class="header__sub-meny-link-text-title">Telegram Ads</span>
                    <span class="header__sub-meny-link-text-subtitle">Запускаем от любого бюджета</span>
                  </span>
                </NuxtLink>
              </li>

              <li class="header__sub-meny-li">
                <NuxtLink to="/website" class="header__sub-meny-link" @click="closeMeny()">
                  <span class="header__sub-meny-link-icon-wrapper">
                    <svg class="framer-Cd0a8 framer-33brdq" role="presentation" viewBox="0 0 24 24" style="--1m6trwb: 0; --21h8s6: rgb(0, 0, 0); --pgex8v: 1.5; opacity: 1;"><use href="#464884188"></use></svg>
                  </span>
                  <span class="header__sub-meny-link-text">
                    <span class="header__sub-meny-link-text-title">Разработка сайтов</span>
                    <span class="header__sub-meny-link-text-subtitle">Создаем то, что продает</span>
                  </span>
                </NuxtLink>
              </li>

              <li class="header__sub-meny-li">
                <NuxtLink to="/geomarketing" class="header__sub-meny-link" @click="closeMeny()">
                  <span class="header__sub-meny-link-icon-wrapper">
                    <svg class="framer-LSzHH framer-1qtcjx6" role="presentation" viewBox="0 0 24 24" style="--1m6trwb: 0; --21h8s6: rgb(0, 0, 0); --pgex8v: 1.5; opacity: 1;"><use href="#2057380237"></use></svg>
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
            <li class="moob-sub-meny__social-li">
              <a href="" class="moob-sub-meny__social-link">vk</a>
            </li>

            <li class="moob-sub-meny__social-li">
              <a href="" class="moob-sub-meny__social-link">telegram</a>
            </li>

            <li class="moob-sub-meny__social-li">
              <a href="" class="moob-sub-meny__social-link">whatsapp</a>
            </li>
          </ul>

          <button class="header__btn-mob btn-v1">обсудить проект</button>
        
      </div>
      
    </div>

    <div class="header__sub-meny" :class="{'header__sub-meny--activ':statusSubmeny == true}">
        <ul class="header__sub-meny-ul">
          <li class="header__sub-meny-li">
            <NuxtLink to="/direct" class="header__sub-meny-link">
              <span class="header__sub-meny-link-icon-wrapper">
                <svg class="framer-JK0qE framer-mfdylr" role="presentation" viewBox="0 0 24 24" style="--1m6trwb: 0; --21h8s6: rgb(0, 0, 0); --pgex8v: 1.5; opacity: 1;"><use href="#1074007029"></use></svg>
              </span>
              <span class="header__sub-meny-link-text">
                <span class="header__sub-meny-link-text-title">Яндекс.Директ</span>
                <span class="header__sub-meny-link-text-subtitle">Запускаем и сопровождаем</span>
              </span>
            </NuxtLink>
          </li>


          <li class="header__sub-meny-li">
            <NuxtLink to="/vkads" class="header__sub-meny-link">
              <span class="header__sub-meny-link-icon-wrapper">
                <svg class="framer-lqwHZ framer-16nbkyz" role="presentation" viewBox="0 0 24 24" style="--1m6trwb: 0; --21h8s6: rgb(0, 0, 0); --pgex8v: 1.5; opacity: 1;"><use href="#4282185190"></use></svg>
              </span>
              <span class="header__sub-meny-link-text">
                <span class="header__sub-meny-link-text-title">VK Реклама</span>
                <span class="header__sub-meny-link-text-subtitle">Найдем ваших клиентов </span>
              </span>
            </NuxtLink>
          </li>


          <li class="header__sub-meny-li">
            <NuxtLink to="/tgads" class="header__sub-meny-link">
              <span class="header__sub-meny-link-icon-wrapper">
                <svg class="framer-DjU2n framer-kdoboj" role="presentation" viewBox="0 0 24 24" style="--1m6trwb: 0; --21h8s6: rgb(0, 0, 0); --pgex8v: 1.5; opacity: 1;"><use href="#2921807503"></use></svg>
              </span>
              <span class="header__sub-meny-link-text">
                <span class="header__sub-meny-link-text-title">Telegram Ads</span>
                <span class="header__sub-meny-link-text-subtitle">Запускаем от любого бюджета</span>
              </span>
            </NuxtLink>
          </li>

          <li class="header__sub-meny-li">
            <NuxtLink to="/website" class="header__sub-meny-link">
              <span class="header__sub-meny-link-icon-wrapper">
                <svg class="framer-Cd0a8 framer-33brdq" role="presentation" viewBox="0 0 24 24" style="--1m6trwb: 0; --21h8s6: rgb(0, 0, 0); --pgex8v: 1.5; opacity: 1;"><use href="#464884188"></use></svg>
              </span>
              <span class="header__sub-meny-link-text">
                <span class="header__sub-meny-link-text-title">Разработка сайтов</span>
                <span class="header__sub-meny-link-text-subtitle">Создаем то, что продает</span>
              </span>
            </NuxtLink>
          </li>

          <li class="header__sub-meny-li">
            <NuxtLink to="/geomarketing" class="header__sub-meny-link">
              <span class="header__sub-meny-link-icon-wrapper">
                <svg class="framer-LSzHH framer-1qtcjx6" role="presentation" viewBox="0 0 24 24" style="--1m6trwb: 0; --21h8s6: rgb(0, 0, 0); --pgex8v: 1.5; opacity: 1;"><use href="#2057380237"></use></svg>
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
import { ref, onMounted, onBeforeUnmount } from 'vue'

const route = useRoute()

const headerMobMenyActiv = ref(false)

const servicesSubMenuActiv = ref(false)

const isActive = ref(false)

// Классы, появление которых под шапкой активирует её
const targetClassNames = ['target-block', 'special-section']

const statusSubmeny = ref(false)

let observer = null

function changeHeaderColor(){
 const header = document.querySelector('.header')
  if (!header || targetClassNames.length === 0) return

  const targets = targetClassNames
    .map(className => document.querySelector(`.${className}`))
    .filter(Boolean)

  if (targets.length === 0) return

  observer = new IntersectionObserver(
    entries => {
      const isAnyVisible = entries.some(entry => entry.isIntersecting)
      isActive.value = isAnyVisible
    },
    {
      rootMargin: `-${header.offsetHeight}px 0px 0px 0px`, // верхняя граница "под шапкой"
      threshold: 0.01,
    }
  )

  targets.forEach(target => observer.observe(target))
}


function closeMeny(){
  headerMobMenyActiv.value = false
  servicesSubMenuActiv.value = false
}


watch(() => route.fullPath, (newPath) => {
  console.log('Маршрут изменился:', newPath)
  changeHeaderColor() // твой метод
})

onMounted(() => {
 changeHeaderColor()
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
})
</script>


