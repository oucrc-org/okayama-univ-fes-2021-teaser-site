<template>
  <main class="bg-primary text-white w-screen h-screen flex flex-col gap-6 justify-center items-center">
    <Countdown />
  </main>
</template>

<script>
import Countdown from '@/components/Countdown.vue'
export default {
  components: {
    Countdown,
  },
}
</script>
<style></style>
