<template>
  <section id='scroll-box' class='section pp-scrollable bg-themeColor hide-scroll-bar overflow-x-hidden'>
    <div class='max-w-3xl mx-auto'>
      <p class='fadein-slide text-secondaryColor text-right font-bold tracking-widest pr-4 md:pr-0 mt-12'>2021年
        岡山大学祭テーマ</p>
      <h1 class='fadein-slide text-white text-4xl text-right tracking-extraWidest mt-2 pr-4 md:pr-0'>笑顔満祭岡大祭</h1>
      <p class='fadein-slide text-white text-right text-base tracking-widest mt-3 pr-4 md:pr-0'>〜心機一転しちゃいな祭〜</p>
      <ul class='timeline'>
        <li v-for='m in 3' :key='m' class='fadein'>
          <dl>
            <dt class='text-themeColor font-medium'>11/7（土）</dt>
            <h2 class='text-themeColor text-2xl tracking-widest font-bold mt-1'>プロコンサート</h2>
            <dd class='text-sm text-gray-500 mt-3'>
              テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります
            </dd>
          </dl>
          <span class='border-line'></span>
        </li>
      </ul>
      <div class='px-4'>
        <a href='https://twitter.com/gakusai_2021_' target='_blank' rel='noopener noreferrer'
           class='block px-5 md:px-10 py-10 text-white text-2xl relative'>
          Twitter
          <img class='absolute right-4 md:right-8 top-9 inline-block w-10' src='/circle_arrow.png' alt='開く'>
        </a>

        <hr class='bg-white'>

        <a href='https://www.instagram.com/gakusai_2021_' target='_blank' rel='noopener noreferrer'
           class='block px-5 md:px-10 py-10 text-white text-2xl relative'>
          Instagram
          <img class='absolute right-4 md:right-8 top-9 inline-block w-10' src='/circle_arrow.png' alt='開く'>
        </a>

        <hr class='bg-white'>

        <a href='https://kmtk-256893.wixsite.com/my-site' target='_blank' rel='noopener noreferrer'
           class='block px-5 md:px-10 py-10 text-white text-2xl relative'>
          <span class='font-japanese'>学祭実行委員会</span> HP
          <img class='absolute right-4 md:right-8 top-9 inline-block w-10' src='/circle_arrow.png' alt='開く'>
        </a>

        <hr class='bg-white'>
      </div>
      <p class='md:text-lg text-white text-center font-japanese mb-10 mt-12'>皆様のご来場お待ちしております</p>
      <p class='text-xs text-white text-center font-japanese font-thin mb-3 md:mb-5 mt-16'>岡山大学校友会 x 学祭実行委員会</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TimeLine',
  mounted() {
    $(window).on('load', () => {
      require('pagepiling.js')
      require('pagepiling.js/dist/jquery.pagepiling.css')
      $('#pagepiling').pagepiling({
        navigation: null,
        scrollingSpeed: 900,
        onLeave() {
          fadeInByScroll(true)
        }
      })
    })

    function ScrollTimelineAnime() {
      $('.timeline li').each(function() {
        const elemPos = $(this).offset().top
        const scroll = $(window).scrollTop()
        const windowHeight = $(window).height()
        const startPoint = 250
        if (scroll >= elemPos - windowHeight - startPoint) {
          const H = $(this).outerHeight(true)
          let percent = (scroll + startPoint - elemPos) / (H / 2) * 100

          if (percent > 100) {
            percent = 100
          }

          $(this).children('.border-line').css({
            height: percent + '%'
          })
        }
      })
    }

    function fadeInByScroll(onLeave) {
      $(onLeave ? '.fadein-slide' : '.fadein').each(function() {
        const targetElement = $(this).offset().top
        const scroll = $(window).scrollTop()
        const windowHeight = $(window).height()
        if (scroll > targetElement - windowHeight + 200) {
          $(this).css('opacity', '1')
          $(this).css('transform', 'translateY(0)')
        }
      })
    }

    $('#scroll-box').on('scroll', () => {
      ScrollTimelineAnime()// 線が伸びる関数を呼ぶ
      fadeInByScroll(false)
    })
  }
}
</script>

<style scoped>
.fadein {
  opacity: 0;
  transform: translateY(20px);
  transition: all 1s;
}

.fadein-slide {
  opacity: 0;
  transform: translateX(20px);
  transition: all 2s;
}

.hide-scroll-bar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.hide-scroll-bar::-webkit-scrollbar {
  display: none;
}

/*タイムライン全体の設定*/
.timeline {
  background: #FFFFFF;
  width: 92%;
  margin: 36px 0 5px;
  padding: 70px 30px 0;
}

.timeline li {
  /*線の起点とするためrelativeを設定*/
  position: relative;
  list-style: none;
  padding: 0 0 20px 0;
}

.timeline dl {
  margin: 0 0 20px 3em;
  position: relative;
  top: -22px;
}

.timeline dd strong {
  display: block;
  padding: 10px 0;
}

/*絶対配置で線を設定*/
.border-line {
  /*線の位置*/
  position: absolute;
  left: 0.4em;
  top: 0;
  width: 2px; /*線の太さ*/
  height: 0; /*はじめは高さを0に*/
  background: #66BEFF;
}

/*タイムラインの見出し横の丸の位置と形状*/
.timeline li::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 14px;
  height: 14px;
  background: #0071C5;
  border-radius: 50%;
}
</style>
