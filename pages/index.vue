<template>
  <main class='bg-themeColor text-white w-screen flex flex-col gap-6 justify-center items-center height-setter'>
    <Countdown />
  </main>
</template>

<script>
import Countdown from '@/components/Countdown.vue'

export default {
  components: {
    Countdown
  },
  mounted() {
    const setFillHeight = () => {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }

    window.addEventListener('resize', setFillHeight)

    setFillHeight()
  }
}
</script>
<style>
html {
  @apply bg-themeColor
}

.height-setter {
  min-height: 100vh;
  min-height: calc(var(--vh, 1vh) * 100);
}
</style>
