<template>

    <main class="main">
     
        <section class="blog-sec">
            <div class="blog-sec__wrapper">
                <h1 class="blog-sec__title">Блог об интернет-рекламе и веб-аналитике.</h1>
                <nav class="blog-sec__nav">
                    <ul class="blog-sec__nav-list">
                        <li class="blog-sec__nav-list-element">
                            <a href="" class="blog-sec__nav-link blog-sec__nav-link--activ">Все</a>
                        </li>
                        <li class="blog-sec__nav-list-element">
                            <a href="" class="blog-sec__nav-link">Кейсы</a>
                        </li>
                        <li class="blog-sec__nav-list-element">
                            <a href="" class="blog-sec__nav-link">Маркетинг</a>
                        </li>
                        <li class="blog-sec__nav-list-element">
                            <a href="" class="blog-sec__nav-link">Новости компании</a>
                        </li>
                        <li class="blog-sec__nav-list-element">
                            <a href="" class="blog-sec__nav-link">Разработка</a>
                        </li>
                    </ul>
                </nav>

                <div class="blog-sec__post-container">
                    <div class="blog-sec__post post-element">
                        <NuxtLink to="/blog/test" class="post-element__img-wrapper">
                            <img src="@/assets/images/blog/post1.jpg" alt="" class="post-element__img">
                        </NuxtLink>
                        <p class="post-element__title">
                            <NuxtLink to="/blog/test" >Рассказываем как за месяц увеличили клики в карточку на 47%</NuxtLink>
                        </p>
                        <p class="post-element__date">9 апр. 2025 г.</p>
                    </div>

                    <div class="blog-sec__post post-element">
                        <a href="" class="post-element__img-wrapper">
                            <img src="@/assets/images/blog/post2.jpg" alt="" class="post-element__img">
                        </a>
                        <p class="post-element__title">
                            <a href="">Влияние репутации на предпочтения клиентов</a>
                        </p>
                        <p class="post-element__date">9 апр. 2025 г.</p>
                    </div>

                    <div class="blog-sec__post post-element">
                        <a href="" class="post-element__img-wrapper">
                            <img src="@/assets/images/blog/post3.jpg" alt="" class="post-element__img">
                        </a>
                        <p class="post-element__title">
                             <NuxtLink to="/blog/test" >Теперь Яндекс Карты предоставляют возможность отслеживать почасовую посещаемость локаций в течение всего дня.</NuxtLink>
                        </p>
                        <p class="post-element__date">9 апр. 2025 г.</p>
                    </div>

                    <div class="blog-sec__post post-element">
                        <a href="" class="post-element__img-wrapper">
                            <img src="@/assets/images/blog/post3.jpg" alt="" class="post-element__img">
                        </a>
                        <p class="post-element__title">
                            <NuxtLink to="/blog/test" >Рассказываем как за месяц увеличили клики в карточку на 47%</NuxtLink>
                        </p>
                        <p class="post-element__date">9 апр. 2025 г.</p>
                    </div>

                    <div class="blog-sec__post post-element">
                        <a href="" class="post-element__img-wrapper">
                            <img src="@/assets/images/blog/post1.jpg" alt="" class="post-element__img">
                        </a>
                        <p class="post-element__title">
                             <NuxtLink to="/blog/test" >Влияние репутации на предпочтения клиентов </NuxtLink>
                        </p>
                        <p class="post-element__date">9 апр. 2025 г.</p>
                    </div>

                    <div class="blog-sec__post post-element">
                        <a href="" class="post-element__img-wrapper">
                            <img src="@/assets/images/blog/post2.jpg" alt="" class="post-element__img">
                        </a>
                        <p class="post-element__title">
                             <NuxtLink to="/blog/test" >Теперь Яндекс Карты предоставляют возможность отслеживать почасовую посещаемость локаций в течение всего дня.</NuxtLink>
                        </p>
                        <p class="post-element__date">9 апр. 2025 г.</p>
                    </div>
                </div>

                <div class="blog-sec__load-more-row">
                    <button class="blog-sec__load-more-btn">Показать еще</button>
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

