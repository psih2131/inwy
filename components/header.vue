<template>
  <header :class="['header', { 'is-active': isActive }]">
    <div class="header-container">
      <nav class="header__nav">
        <ul class="header__list">
          <li class="header__list-element">
            <a href="#" class="header__list-element-link">
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
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isActive = ref(false)

// Классы, появление которых под шапкой активирует её
const targetClassNames = ['target-block', 'special-section']

let observer = null

onMounted(() => {
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
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
})
</script>


