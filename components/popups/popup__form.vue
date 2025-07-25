<template>
    <div class="form-popup popup">
        <div class="popup__close" @click="closePopup()">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="#0D0D0D"/>
            </svg>
        </div>

        <div class="form-popup__wrapper">
            <p class="info-form-sec__form-title">Оставьте заявку</p>
            <p class="info-form-sec__form-subtitle">Заполните форму, и наши специалисты свяжутся с Вами в ближайшее время.</p>
            <form action="">
                <div class="info-form-sec__form-inp" :class="{'form-error-field': formNameValidStatus == false}">
                    <input v-model="formName" type="text" placeholder="Ваше имя">
                    <p v-if="formNameValidStatus == false" class="form-valid-error">Проверьте правильность введенных данных</p>
                </div>

                <div class="info-form-sec__form-inp" :class="{'form-error-field': formEmailValidStatus == false}">
                    <input v-model="formEmail" type="text" placeholder="Email">
                    <p v-if="formEmailValidStatus == false" class="form-valid-error">Проверьте правильность введенных данных</p>
                </div>

                <div class="info-form-sec__form-inp" :class="{'form-error-field': formPhoneValidStatus == false}">
                    <input v-model="formPhone" type="text" placeholder="Номер телефона">
                    <p v-if="formPhoneValidStatus == false" class="form-valid-error">Проверьте правильность введенных данных</p>
                </div>

                <div class="info-form-sec__form-inp-btn-v2" @click="validationForm()">
                    Оставить заявку
                 
                </div>

                <p class="info-form-sec__form-down-text">Нажимая на кнопку, вы автоматически соглашаетесь с политикой конфиденциальности и обработкой персональных данных</p>

                <p v-if="sendStatus == false" class="form-valid-error-main">Ошибка, проверьте правильность введенных данных</p>

                <!-- <div class="info-form-sec__form-captcha-wrapper">
                    <img src="@/assets/images/img/captcha.png" alt="" class="info-form-sec__form-captcha">
                </div> -->
            </form>
        </div>
        
        
    </div>
</template>


<script setup>
import { useCounterStore } from '@/stores/counter'
import { ref, onMounted, onBeforeUnmount, computed, watch  } from 'vue';
// import popupForm from '@/components/popups/popup__form.vue'



//DATA
const store = useCounterStore()

const formName = ref(null)

const formEmail = ref(null)

const formPhone = ref(null)

const route = useRoute()

const formNameValidStatus = ref(null)

const formEmailValidStatus = ref(null)

const formPhoneValidStatus = ref(null)

const sendStatus = ref(null)


//METHODS 
function closePopup(){
    store.changePopupCurrent(null)
}

function validationForm(){
    console.log(formName.value, formEmail.value, formPhone.value)

    validName(formName.value)

    validEmail(formEmail.value)

    validPhone(formPhone.value)

    if(formNameValidStatus.value == true && formEmailValidStatus.value == true && formPhoneValidStatus.value == true){
        sendStatus.value = true

        sendForm()
    }
    else{
         sendStatus.value = false
    }
    
}

function validName(element) {
  if (element && element.length >= 3) {
    formNameValidStatus.value = true
  } else {
    formNameValidStatus.value = false
  }
}


function validEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (email && re.test(email)) {
    formEmailValidStatus.value = true
  } else {
    formEmailValidStatus.value = false
  }
}


function validPhone(phone) {
  // пример простой регулярки: только цифры, может начинаться с +, длина 10-15 символов
  const re = /^\+?\d{10,15}$/
  if (phone && re.test(phone)) {
    formPhoneValidStatus.value = true
  } else {
    formPhoneValidStatus.value = false
  }
}



//send request to telegram
const sendForm = async () => {
  try {
    const response = await $fetch('/api/send-form', {
      method: 'POST',
      body: {
        name: formName.value,
        email: formEmail.value,
        phone: formPhone.value,
        currentUrl: store.domainUrlCurrent + route.fullPath,
        currentPlase: store.trigerButtonForm || 'Не получилось оприделить точное положение'
      },
    })

    // Теперь response содержит ответ с сервера
    console.log('Ответ от сервера:', response)
    openFormDonePopup()


  } catch (error) {
    console.error('Ошибка при отправке формы:', error)
    alert('Произошла ошибка при отправке заявки')
  }
}



//open form popup 
function openFormDonePopup(){
    store.changePopupCurrent('popup-form-done')
}



//HOOKS
onMounted(() => {
  // Добавляем обработчик события scroll

  
});

onBeforeUnmount(() => {

});

</script>