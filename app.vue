<script setup lang="ts">
import { getAuth } from 'firebase/auth'
import { getAnalytics, logEvent } from 'firebase/analytics'

const { $firebaseApp } = useNuxtApp()

const count = ref(0)
const auth = getAuth($firebaseApp)
const analytics = getAnalytics($firebaseApp) // working if commented

</script>

<template>
  <div>
    {{ count }}
    <NuxtWelcome />
  </div>
</template>
