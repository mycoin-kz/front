<template>
  <div></div>
</template>

<script setup>
import { googleLogin } from "@/store/auth/google/login";
import { onMounted } from "vue-demi";
import { useRoute, useRouter } from "vue-router";

const route = useRoute()
const router = useRouter()
onMounted(() => {
  const google_code = route.query.code
  if (google_code){
    googleLogin(google_code)
  }
  else{
    router.push('')
  }
})
</script>

<style>

</style>