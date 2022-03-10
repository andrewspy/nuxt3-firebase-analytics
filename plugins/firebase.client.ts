import { defineNuxtPlugin } from '#app'
import { initializeApp } from 'firebase/app'

export default defineNuxtPlugin(() => {
  const firebaseApp = initializeApp({
    apiKey: 'API_KEY',
    authDomain: 'app.firebaseapp.com',
    projectId: 'app',
    storageBucket: 'app.appspot.com',
    messagingSenderId: '000',
    appId: '0:000:web:000',
    measurementId: 'G-XXX',
  })

  return {
    provide: {
      firebaseApp,
    },
  }
})
