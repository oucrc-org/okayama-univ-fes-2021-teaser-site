<template>
  <main class='bg-themeColor text-white w-screen flex flex-col gap-6 justify-center items-center height-setter'>
    <div id='splash'>
      <div id='splash_text'></div>
      <div class='loader_cover loader_cover-up'></div>
      <div class='loader_cover loader_cover-down'></div>
    </div>
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

    const bar = new ProgressBar.Line(splash_text, {
      easing: 'easeInOut',
      duration: 1000,
      strokeWidth: 0.2,
      color: '#fff',
      trailWidth: 0.1,
      trailColor: '#128dea',
      text: {
        style: {
          position: 'absolute',
          left: '50%',
          top: '50%',
          padding: '0',
          margin: '-30px 0 0 0',
          transform: 'translate(-50%,-50%)',
          'font-size': '1.3rem',
          color: '#FFF'
        },
        autoStyleContainer: false
      },
      step(_, bar) {
        bar.setText(Math.round(bar.value() * 100) + ' %')
      }
    })

    bar.animate(1.0, function() {
      setTimeout(() => {

        document.getElementById('splash_text').classList.add('fadeout')
        setTimeout(() => {
          document.getElementById('splash_text').style.display = 'none'
        }, 1000)
        document.getElementsByClassName('loader_cover-up')[0].classList.add('coveranime')
        document.getElementsByClassName('loader_cover-down')[0].classList.add('coveranime')
        document.getElementById('splash').classList.add('fadeout')
        setTimeout(() => {
          document.getElementById('splash').style.display = 'none'
        }, 1000)
      }, 1000)
    })
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

#splash {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 999;
  text-align: center;
  color: #fff;
}

#splash_text {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 999;
  transform: translate(-50%, -50%);
  color: #0071C5;
  width: 100%;
}

#splash_text svg {
  height: 2px;
}

.loader_cover {
  width: 100%;
  height: 50%;
  background-color: #0071C5;
  transition: all .2s cubic-bezier(.04, .435, .315, .9);
  transform: scaleY(1);
}

.loader_cover-up {
  transform-origin: center top;
}

.loader_cover-down {
  position: absolute;
  bottom: 0;
  transform-origin: center bottom;
}

.coveranime {
  transform: scaleY(0);
  transition: 5s;
}

.fadeout {
  animation: fadeOut 1s;
  animation-fill-mode: both;
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
