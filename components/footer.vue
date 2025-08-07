<template>
    <footer class="footer" ref="footerRef">
        <div class="footer__container">

            <div class="footer-100vh" ref="footer100vh"></div>

            <div class="footer__logo-wrapper" ref="footerLogoRef">
                <NuxtLink to="/" class="footer__logo-wrapper-ar">
                    <svg width="53" height="42" viewBox="0 0 53 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.38589 36.4712C-0.0107059 37.3627 -0.420213 39.2175 0.471233 40.6141C1.36268 42.0107 3.21751 42.4202 4.61411 41.5288L1.38589 36.4712ZM52.9295 9.64676C53.2867 8.02887 52.2647 6.42774 50.6468 6.07055L24.2817 0.249682C22.6638 -0.107515 21.0627 0.91448 20.7055 2.53237C20.3483 4.15027 21.3703 5.75139 22.9882 6.10859L46.4238 11.2827L41.2497 34.7183C40.8925 36.3362 41.9145 37.9373 43.5324 38.2945C45.1503 38.6517 46.7514 37.6297 47.1086 36.0118L52.9295 9.64676ZM3 39L4.61411 41.5288L51.6141 11.5288L50 9L48.3859 6.47123L1.38589 36.4712L3 39Z" fill="white"/>
                    </svg>

                </NuxtLink>
                <a :href="`mailto:${optionData.email}`" class="footer__logo-wrapper-email" v-html="optionData.email"></a>
                <p class="footer__logo-wrapper-logo">inwy</p>
            </div>

            <div class="footer__middle-row">
                <div class="footer__middle-row-col">
                    <nav class="footer__middle-row-nav">
                        <ul class="footer__middle-row-nav-ul">
                            <li class="footer__middle-row-nav-li">
                                <a  class="footer__middle-row-nav-link">услуги</a>
                            </li>

                            <li class="footer__middle-row-nav-li">
                                <NuxtLink to="/blog" class="footer__middle-row-nav-link">блог</NuxtLink>
                            </li>

                            <li class="footer__middle-row-nav-li">
                                <NuxtLink to="/about" class="footer__middle-row-nav-link">о нас</NuxtLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="footer__middle-row-col">
                    <ul class="footer__social">

                        <li class="footer__social-element" v-for="item in optionData.socz_seti" :key="item">
                            <a :href="item.ssylka" class="footer__social-link">
                                <img :src="item.ikonka.url" :alt="item.ikonka.alt" class="footer__social-element-img">
                            </a>
                        </li>

                    </ul>
                </div>
            </div>

            <div class="footer__down-row">
                <p class="footer__copy" v-html="optionData.copy_text_footer"></p>
                <nav class="footer__nav">
                    <ul class="footer__nav-ul">

                        <li class="footer__nav-li" v-for="item in doc_pages" :key="item">
                            <NuxtLink :to="`/docs/${item.slug}`" class="footer__nav-link">{{ item.title.rendered }}</NuxtLink>
                        </li>



                    </ul>
                </nav>
            </div>
        </div>
    </footer>
    
</template>

<script setup>
    import { useCounterStore } from '@/stores/counter'

    import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';

    // import component__user_panel from '@/components/user-panel.vue'


    //DATA
    const store = useCounterStore()
    
    const scrollPosition = ref(null)

    const footer100vh = ref(null)

    const footerRef = ref(null)

    const footerLogoRef = ref(null)

    const windowsHeight = ref(null)

    const { data: doc_pages } = await useFetch(`${store.serverUrlDomainRequest}/wp-json/wp/v2/simple-pages?per_page=100`)

    console.log('doc_pages',doc_pages)

    //scroll start script
    function firstLoadScollScripts(){
        scrollPosition.value = window.scrollY
        footerLogoAnim()

        window.addEventListener('scroll', handleScroll);
        
    }


    function handleScroll(){
        scrollPosition.value = window.scrollY
        footerLogoAnim()

        console.log('scroll value footer', scrollPosition.value)


    }


    function footerLogoAnim(){
        let offsetTopFooter = footerRef.value.offsetTop
        let trigerStart = offsetTopFooter - windowsHeight.value
        let trigerEnd = trigerStart + footerRef.value.offsetHeight


        let currentProcent = null
        let culcScaleValue = 0
        let  finishScaleValue = null
        

        if(scrollPosition.value < trigerStart){
            currentProcent = 0
        }

        if(scrollPosition.value >= trigerStart && scrollPosition.value <= trigerEnd){

            let currentValue = scrollPosition.value - trigerStart 
            let fullSecScrollTrack = trigerEnd - trigerStart

            currentProcent = (currentValue / fullSecScrollTrack) * 100
        }

        if(scrollPosition.value > trigerEnd){
            currentProcent = 100
        }


        culcScaleValue = (0.1 * currentProcent) / 100
        finishScaleValue = 0.9 + culcScaleValue

        footerLogoRef.value.style.transform = `scale(${finishScaleValue})`



        console.log('currentProcent',currentProcent)
        console.log('trigerStart',trigerStart)
        console.log('trigerEnd',trigerEnd)
        console.log('offsetTopFooter',offsetTopFooter)
    }

    //HOOKS
    onMounted(() => {
        
        windowsHeight.value = footer100vh.value.clientHeight

        firstLoadScollScripts()  

    });

    onBeforeUnmount(() => {
        window.removeEventListener('scroll', handleScroll);
    });

     const props = defineProps({

        optionData: Object,
      // postAllCategory: Object,
  })

</script>