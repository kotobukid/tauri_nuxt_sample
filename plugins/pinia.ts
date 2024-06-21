// import { defineNuxtPlugin } from 'nuxt3'
import {createPinia, setActivePinia} from 'pinia'

export default defineNuxtPlugin(nuxt => {
  const pinia = createPinia()
  setActivePinia(pinia)
  nuxt.provide('pinia', pinia)
})