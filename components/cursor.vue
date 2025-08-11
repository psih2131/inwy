<template>

    <div  class="custom-cursor">

        <div class="custom-cursor__wrapper"></div>

        <div class="custom-cursor__text custom-cursor__text--v1">Перейти</div>

        <div class="custom-cursor__text custom-cursor__text--v2">Обсудить</div>

        <div class="custom-cursor__text custom-cursor__text--v3">Отправить</div>

        <div class="custom-cursor__text custom-cursor__text--v4">Заказать</div>

    </div>

</template>



<script setup>
import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';

onMounted(() => {
  const cursor = document.querySelector('.custom-cursor')

  const move = (e) => {
    cursor.style.top = `${e.clientY}px`
    cursor.style.left = `${e.clientX}px`
  }

  const checkHover = (e) => {
    const target = e.target
    console.log('target', target)
    if (target.closest('.cursor-mod')) {
      cursor.classList.add('cursor-active')
    } else {
      cursor.classList.remove('cursor-active')
    }


    if (target.closest('.cursor-mod-dark')) {
      cursor.classList.add('cursor-active--dark')
    } else {
      cursor.classList.remove('cursor-active--dark')
    }


    if (target.closest('.cursor-mod-dark-form-text')) {
      cursor.classList.add('cursor-active--dark-form-text')
    } else {
      cursor.classList.remove('cursor-active--dark-form-text')
    }


    if (target.closest('.cursor-mod-dark-form-send-text')) {
      cursor.classList.add('cursor-active--dark-form-send-text')
    } else {
      cursor.classList.remove('cursor-active--dark-form-send-text')
    }


    if (target.closest('.cursor-mod-price')) {
      cursor.classList.add('cursor-active--dark-price')
    } else {
      cursor.classList.remove('cursor-active--dark-price')
    }


    

    if (target.closest('.cursor-mod-services')) {
      let currentColorValue = target.closest('.cursor-mod-services').querySelector('.about-services-sec__element-img-wrapper-circle').style.background
      console.log(currentColorValue)
      cursor.querySelector('.custom-cursor__wrapper').style.background = currentColorValue

      cursor.classList.add('cursor-active--services')
    } else {
      cursor.classList.remove('cursor-active--services')
      cursor.querySelector('.custom-cursor__wrapper').style.background = ""
    }


    
  }

  window.addEventListener('mousemove', move)
  window.addEventListener('mouseover', checkHover)

  onBeforeUnmount(() => {
    window.removeEventListener('mousemove', move)
    window.removeEventListener('mouseover', checkHover)
  })
})


</script>