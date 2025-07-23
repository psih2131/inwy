<template>
  <header :class="['header', { 'is-active': isActive }]">
    <div class="header-container">
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


