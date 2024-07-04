<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const email = ref('')
const password = ref('')
const date = ref(new Date().toLocaleString())

let timer

const handleSubmit = () => {
  if (email.value === 'abc123' && password.value === 'abc123') {
    alert(t('login.alert.success.message'))
  } else {
    alert(t('login.alert.error.message'))
    email.value = ''
    password.value = ''
  }
}

const changeLanguage = (lang) => {
  locale.value = lang
}

onMounted(() => {
  timer = () => (date.value = new Date().toLocaleString())
  setInterval(timer, 1000)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>

<template>
  <div class="flex h-screen md:p-4 md:justify-center md:items-center dark:bg-slate-700">
    <div
      class="w-full md:max-w-5xl flex flex-col items-stretch md:justify-between md:flex-row-reverse md:border-gray-400 md:shadow-lg md:shadow-slate-600 md:rounded-md dark:bg-slate-800"
    >
      <img
        src="/login.jpg"
        alt="login"
        class="h-screen/3 md:h-auto md:basis-1/2 w-full object-cover object-top md:object-center md:rounded-tl-none md:rounded-bl-none md:rounded-tr-md md:rounded-br-md"
      />
      <div class="flex-grow md:basis-1/2 p-10 md:p-24 flex flex-col justify-center">
        <h2 class="text-4xl text-black font-medium dark:text-white">{{ t('login.title') }}</h2>
        <p class="text-base text-gray-500 font-normal mt-4 dark:text-gray-300">
          {{ t('login.subTitle') }}
        </p>
        <form @submit.prevent="handleSubmit" novalidate>
          <label
            for="email"
            class="block mt-4 text-sm font-medium text-gray-700 dark:text-gray-300"
            >{{ t('login.email') }}</label
          >
          <input
            type="email"
            :placeholder="t('login.email')"
            class="w-full mt-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
            v-model="email"
          />
          <label
            for="password"
            class="block mt-4 text-sm font-medium text-gray-700 dark:text-gray-300"
            >{{ t('login.password') }}</label
          >
          <input
            type="password"
            :placeholder="t('login.password')"
            class="w-full mt-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
            v-model="password"
          />
          <button
            type="submit"
            class="w-full mt-8 px-4 py-2 bg-red-500 text-white rounded-md focus:outline-none shadow-md shadow-slate-400 hover:bg-red-600 transition duration-300 ease-in-out"
          >
            {{ t('login.button') }}
          </button>
          <h4 class="w-full mt-8 text-base text-gray-500 dark:text-gray-300">Time : {{ date }}</h4>
        </form>
        <div class="flex justify-between mt-8">
          <button
            class="text-sm text-gray-500 dark:text-gray-300 focus:outline-none"
            @click="changeLanguage('en')"
          >
            English
          </button>
          <button
            class="text-sm text-gray-500 dark:text-gray-300 focus:outline-none"
            @click="changeLanguage('zh')"
          >
            中文
          </button>
          <button
            class="text-sm text-gray-500 dark:text-gray-300 focus:outline-none"
            @click="changeLanguage('ja')"
          >
            日本語
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
