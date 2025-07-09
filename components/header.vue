<template>
    <header class="header">
        <div class="header-container">
            <nav class="header__nav">
                <ul class="header__list">
                    <li class="header__list-element">
                        <a href="" class="header__list-element-link">
                            <div class="header__list-element-link-col">
                                <span class="header__list-element-link-text">услуги</span>
                                <span class="header__list-element-link-text">услуги</span>
                            </div>
                        </a>
                    </li>

                    <li class="header__list-element">
                        <a href="" class="header__list-element-link">
                            <div class="header__list-element-link-col">
                                <span class="header__list-element-link-text">о нас</span>
                                <span class="header__list-element-link-text">о нас</span>
                            </div>
                        </a>
                    </li>

                    <li class="header__list-element">
                        <a href="" class="header__list-element-link">
                            <div class="header__list-element-link-col">
                                <span class="header__list-element-link-text">блог</span>
                                <span class="header__list-element-link-text">блог</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </nav>

            <a href="" class="header__logo">
                <img src="@/assets/images/logo.png" alt="" class="header__logo-img">
            </a>

            <div class="header__right">
                <button class="header__btn btn-v1">обсудить проект</button>
            </div>
        </div>
    </header>
    
</template>

<script setup>
    // import { useCounterStore } from '@/stores/counter'
    import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';
    // import component__user_panel from '@/components/user-panel.vue'

</script>