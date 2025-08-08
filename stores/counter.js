import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


export const useCounterStore = defineStore('counter', () => {
    const router = useRouter();

    const serverUrlDomainRequest = ref('https://backendinwyss.ru')
    // const serverUrlDomainRequest = ref('https://panel.gift-siberia.com')


    const domainUrlCurrent = ref('inwy.ru')

    const popupCurrent = ref(null)

    const trigerButtonForm = ref(null)

    const serteficatCurrent = ref(null)


    function changePopupCurrent(newValue) {
        popupCurrent.value = newValue
        console.log('popupCurrent', popupCurrent.value)
    }

    function changeTrigerButtonForm(newValue) {
        trigerButtonForm.value = newValue
        console.log('trigerButtonForm', trigerButtonForm.value)
    }


    function changeSerteficatCurrent(newValue) {
        serteficatCurrent.value = newValue
        console.log('changeSerteficatCurrent', serteficatCurrent.value)
    }



    // doubleCount, increment 
    return {
        serverUrlDomainRequest,
        domainUrlCurrent,
        popupCurrent,
        serteficatCurrent,
        trigerButtonForm,
        changePopupCurrent,
        changeSerteficatCurrent,
        changeTrigerButtonForm,
    }
})
